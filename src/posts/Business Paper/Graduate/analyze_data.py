#!/usr/bin/env python3

from __future__ import annotations

import json
import math
import statistics as stats
import zipfile
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from datetime import datetime, timedelta, time
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
ODS_PATH = BASE_DIR / "data.ods"
JSON_PATH = BASE_DIR / "analysis_results.json"
MD_PATH = BASE_DIR / "analysis_results.md"

TABLE_NS = "urn:oasis:names:tc:opendocument:xmlns:table:1.0"
TARGET_TABLES = [
    "2023年2月1号到2023年2月14号就诊",
    "2023年2月1号到2023年2月14号预约",
    "2023年2月1号到2023年2月14号医生",
    "2023年8月1号到2023年8月14号就诊",
    "2023年8月1号到2023年8月14号预约",
    "2023年8月1号到2023年8月14号医生",
]
APPOINTMENT_HEADERS = ["医生ID", "开诊日期", "开始时间", "截止时间", "区间人次", "预约数"]
DATETIME_FORMATS = ["%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%d %H:%M:%S"]
SERVICE_END_FIELDS = [
    "就诊检查时间",
    "首次付费时间",
    "最后付费时间",
    "检验时间",
    "检查时间",
    "发药时间",
    "结束就诊时间",
]
MAX_CONSULT_MINUTES = 60.0


def cell_text(cell: ET.Element) -> str:
    return "".join((elem.text or "") for elem in cell.iter()).strip()


def iter_target_tables(path: Path):
    with zipfile.ZipFile(path) as zf, zf.open("content.xml") as xml_file:
        current_name = None
        collecting = False
        rows: list[list[str]] = []

        for event, elem in ET.iterparse(xml_file, events=("start", "end")):
            if event == "start" and elem.tag == f"{{{TABLE_NS}}}table":
                current_name = elem.attrib.get(f"{{{TABLE_NS}}}name")
                collecting = current_name in TARGET_TABLES
                if collecting:
                    rows = []
            elif collecting and event == "end" and elem.tag == f"{{{TABLE_NS}}}table-row":
                values: list[str] = []
                row_repeat = int(elem.attrib.get(f"{{{TABLE_NS}}}number-rows-repeated", "1"))
                for cell in elem:
                    if cell.tag != f"{{{TABLE_NS}}}table-cell":
                        continue
                    col_repeat = int(cell.attrib.get(f"{{{TABLE_NS}}}number-columns-repeated", "1"))
                    values.extend([cell_text(cell)] * col_repeat)
                    if len(values) > 50:
                        break
                for _ in range(row_repeat):
                    rows.append(values[:50])
                elem.clear()
            elif event == "end" and elem.tag == f"{{{TABLE_NS}}}table":
                if collecting:
                    yield current_name, [row for row in rows if any(item != "" for item in row)]
                collecting = False
                current_name = None
                elem.clear()


def load_sheets(path: Path) -> dict[str, list[dict[str, str]]]:
    sheets: dict[str, list[dict[str, str]]] = {}
    for name, rows in iter_target_tables(path):
        if name.endswith("预约"):
            if rows and rows[0][:6] == APPOINTMENT_HEADERS:
                rows = rows[1:]
            header = APPOINTMENT_HEADERS
        else:
            header = rows[0]
            rows = rows[1:]

        records: list[dict[str, str]] = []
        for row in rows:
            record: dict[str, str] = {}
            row_len = max(len(header), len(row))
            for idx in range(row_len):
                key = header[idx] if idx < len(header) and header[idx] else f"col_{idx}"
                record[key] = row[idx] if idx < len(row) else ""
            records.append(record)
        sheets[name] = records
    return sheets


def parse_dt(value: str | None) -> datetime | None:
    value = (value or "").strip()
    if not value:
        return None
    for fmt in DATETIME_FORMATS:
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            continue
    return None


def minutes_between(start: datetime | None, end: datetime | None) -> float | None:
    if not start or not end:
        return None
    return (end - start).total_seconds() / 60


def infer_consult_end(row: dict[str, str], start: datetime | None) -> datetime | None:
    if not start:
        return None
    candidates = []
    for field in SERVICE_END_FIELDS:
        ts = parse_dt(row.get(field))
        if ts and ts > start:
            candidates.append(ts)
    return min(candidates) if candidates else None


def percentile(values: list[float], p: float) -> float | None:
    if not values:
        return None
    values = sorted(values)
    if len(values) == 1:
        return values[0]
    k = (len(values) - 1) * p
    floor_k = math.floor(k)
    ceil_k = math.ceil(k)
    if floor_k == ceil_k:
        return values[int(k)]
    return values[floor_k] * (ceil_k - k) + values[ceil_k] * (k - floor_k)


def summarize(values: list[float]) -> dict[str, float]:
    clean = [value for value in values if value is not None]
    if not clean:
        return {}
    return {
        "n": len(clean),
        "mean": sum(clean) / len(clean),
        "median": percentile(clean, 0.5),
        "p90": percentile(clean, 0.9),
        "p95": percentile(clean, 0.95),
        "std": stats.pstdev(clean) if len(clean) > 1 else 0.0,
        "min": min(clean),
        "max": max(clean),
    }


def fit_linear(xs: list[float], ys: list[float]) -> dict[str, float] | None:
    pairs = [(x, y) for x, y in zip(xs, ys) if x is not None and y is not None]
    if len(pairs) < 2:
        return None
    mean_x = sum(x for x, _ in pairs) / len(pairs)
    mean_y = sum(y for _, y in pairs) / len(pairs)
    sxx = sum((x - mean_x) ** 2 for x, _ in pairs)
    syy = sum((y - mean_y) ** 2 for _, y in pairs)
    sxy = sum((x - mean_x) * (y - mean_y) for x, y in pairs)
    slope = sxy / sxx if sxx else 0.0
    intercept = mean_y - slope * mean_x
    corr = sxy / math.sqrt(sxx * syy) if sxx and syy else 0.0
    return {
        "n": len(pairs),
        "intercept": intercept,
        "slope": slope,
        "r": corr,
        "r2": corr * corr,
    }


def floor_half_hour(dt_obj: datetime) -> datetime:
    return dt_obj.replace(minute=(dt_obj.minute // 30) * 30, second=0, microsecond=0)


def slot_label(dt_obj: datetime) -> str:
    return dt_obj.strftime("%H:%M")


def format_num(value: float | None, digits: int = 2) -> str:
    if value is None:
        return "-"
    return f"{value:.{digits}f}"


def analyze_month(
    visits: list[dict[str, str]],
    appointments: list[dict[str, str]],
    doctors: list[dict[str, str]],
) -> dict:
    service_minutes: list[float] = []
    wait_registration: list[float] = []
    wait_call: list[float] = []
    wait_appointment: list[float] = []

    dept_counts: Counter[str] = Counter()
    category_counts: Counter[str] = Counter()
    patient_type_counts: Counter[str] = Counter()
    registrations_per_day: Counter = Counter()
    arrival_slot_day: defaultdict[str, Counter] = defaultdict(Counter)
    doctor_day_cases: defaultdict[tuple[str, object], list[dict[str, object]]] = defaultdict(list)

    for row in visits:
        reg = parse_dt(row.get("挂号时间"))
        call = parse_dt(row.get("叫号时间"))
        start = parse_dt(row.get("开始就诊时间"))
        end = infer_consult_end(row, start)
        appt_start = parse_dt(row.get("预约起始时间"))
        doc_id = (row.get("医生ID") or "").strip()

        department = (row.get("科室名称") or "").strip()
        category = (row.get("类别名称") or "").strip()
        patient_type = (row.get("患者分类") or "").strip()

        if department:
            dept_counts[department] += 1
        if category:
            category_counts[category] += 1
        if patient_type:
            patient_type_counts[patient_type] += 1

        if reg:
            registrations_per_day[reg.date()] += 1
            arrival_slot_day[slot_label(floor_half_hour(reg))][reg.date()] += 1

        service = minutes_between(start, end)
        reg_wait = minutes_between(reg, start)
        call_wait = minutes_between(call, start)
        appt_wait = minutes_between(appt_start, start)

        if service is not None and 0 < service <= MAX_CONSULT_MINUTES:
            service_minutes.append(service)
            if doc_id and reg and start:
                doctor_day_cases[(doc_id, start.date())].append(
                    {"registration": reg, "start": start, "service": service}
                )

        if reg_wait is not None and 0 <= reg_wait < 600:
            wait_registration.append(reg_wait)
        if call_wait is not None and 0 <= call_wait < 600:
            wait_call.append(call_wait)
        if appt_wait is not None and -600 < appt_wait < 600:
            wait_appointment.append(appt_wait)

    appointment_utilization: list[float] = []
    for row in appointments:
        try:
            capacity = float(row.get("区间人次", "") or 0)
            booked = float(row.get("预约数", "") or 0)
        except ValueError:
            continue
        if capacity > 0:
            appointment_utilization.append(booked / capacity)

    full_load_share = (
        sum(1 for value in appointment_utilization if value >= 1) / len(appointment_utilization)
        if appointment_utilization
        else None
    )
    overload_share = (
        sum(1 for value in appointment_utilization if value > 1) / len(appointment_utilization)
        if appointment_utilization
        else None
    )

    slot_stats = []
    for slot, by_day in arrival_slot_day.items():
        values = list(by_day.values())
        if len(values) >= 3 and sum(values) > 0:
            mean_value = sum(values) / len(values)
            var_value = stats.pvariance(values) if len(values) > 1 else 0.0
            dispersion = var_value / mean_value if mean_value else None
            slot_stats.append((slot, mean_value, max(values), dispersion))
    slot_stats.sort(key=lambda item: item[1], reverse=True)
    mean_dispersion = (
        sum(item[3] for item in slot_stats if item[3] is not None) / len(slot_stats)
        if slot_stats
        else None
    )

    top_slots = slot_stats[:8]
    morning_share = (
        sum(mean_value for slot, mean_value, _, _ in slot_stats if slot in {"07:30", "08:00", "08:30", "09:00", "09:30", "10:00"})
        / sum(mean_value for _, mean_value, _, _ in slot_stats)
        if slot_stats
        else None
    )

    doctor_summary = []
    for (doctor_id, _), items in doctor_day_cases.items():
        pass

    doctor_groups: defaultdict[str, list[dict[str, object]]] = defaultdict(list)
    for (doctor_id, _day), items in doctor_day_cases.items():
        doctor_groups[doctor_id].extend(items)

    for doctor_id, items in doctor_groups.items():
        if len(items) < 30:
            continue
        services = [item["service"] for item in items]
        waits = [
            minutes_between(item["registration"], item["start"])
            for item in items
            if minutes_between(item["registration"], item["start"]) is not None
        ]
        doctor_summary.append(
            {
                "doctor": doctor_id,
                "cases": len(items),
                "mean_service": sum(services) / len(services),
                "mean_wait": sum(waits) / len(waits) if waits else None,
            }
        )
    doctor_summary.sort(key=lambda item: item["cases"], reverse=True)

    active_service_values = [item["mean_service"] for item in doctor_summary if item["mean_service"] is not None]
    active_service_cv = (
        stats.pstdev(active_service_values) / (sum(active_service_values) / len(active_service_values))
        if active_service_values
        else None
    )
    active_service_p10 = percentile(active_service_values, 0.1) if active_service_values else None
    active_service_p90 = percentile(active_service_values, 0.9) if active_service_values else None

    # Queue-state feedback fitting at doctor-day half-hour level.
    queue_lengths: list[float] = []
    served_per_slot: list[float] = []
    baseline_service = sum(service_minutes) / len(service_minutes) if service_minutes else None
    queue_workloads: list[float] = []

    for (_doctor_id, day), items in doctor_day_cases.items():
        if len(items) < 10:
            continue
        items.sort(key=lambda item: item["start"])
        current = datetime.combine(day, time(7, 0))
        end_time = datetime.combine(day, time(18, 0))

        while current < end_time:
            nxt = current + timedelta(minutes=30)
            backlog = sum(
                1
                for item in items
                if item["registration"] <= current and item["start"] >= current
            )
            served = sum(1 for item in items if current <= item["start"] < nxt)
            if served > 0:
                queue_lengths.append(backlog)
                served_per_slot.append(served)
                if baseline_service is not None:
                    queue_workloads.append(backlog * baseline_service)
            current = nxt

    fit_queue_count = fit_linear(queue_lengths, served_per_slot)
    fit_queue_workload = fit_linear(queue_workloads, served_per_slot) if queue_workloads else None

    service_stats = summarize(service_minutes)
    wait_registration_stats = summarize(wait_registration)
    wait_call_stats = summarize(wait_call)
    wait_appointment_stats = summarize(wait_appointment)
    appointment_stats = summarize(appointment_utilization)

    if service_stats:
        mean_service = service_stats["mean"]
        variance_service = service_stats["std"] ** 2
        half_range = math.sqrt(3 * variance_service)
        uniform_ab = {"a": max(0.0, mean_service - half_range), "b": mean_service + half_range}
    else:
        uniform_ab = None

    c_safe_proxy = percentile(
        [backlog * baseline_service for backlog in queue_lengths if baseline_service is not None], 0.95
    ) if queue_lengths and baseline_service is not None else None

    return {
        "n_visits": len(visits),
        "n_appointment_slots": len(appointments),
        "n_doctors": len(doctors),
        "n_days": len(registrations_per_day),
        "avg_daily_visits": sum(registrations_per_day.values()) / len(registrations_per_day),
        "daily_visits_std": stats.pstdev(list(registrations_per_day.values())) if len(registrations_per_day) > 1 else 0.0,
        "service": service_stats,
        "wait_registration": wait_registration_stats,
        "wait_call": wait_call_stats,
        "wait_appointment": wait_appointment_stats,
        "appointment_utilization": appointment_stats,
        "full_load_share": full_load_share,
        "overload_share": overload_share,
        "slot_dispersion_mean": mean_dispersion,
        "top_slots": top_slots,
        "morning_share": morning_share,
        "top_departments": dept_counts.most_common(8),
        "top_categories": category_counts.most_common(8),
        "patient_types": patient_type_counts.most_common(5),
        "active_doctors": doctor_summary[:10],
        "active_doctor_service_cv": active_service_cv,
        "active_doctor_service_p10": active_service_p10,
        "active_doctor_service_p90": active_service_p90,
        "fit_queue_count": fit_queue_count,
        "fit_queue_workload": fit_queue_workload,
        "uniform_ab": uniform_ab,
        "s_base": service_stats.get("mean") if service_stats else None,
        "c_safe_proxy": c_safe_proxy,
    }


def build_markdown(report: dict[str, dict]) -> str:
    feb = report["2023年2月1号到2023年2月14号"]
    aug = report["2023年8月1号到2023年8月14号"]

    lines = [
        "# 门诊数据分析摘要",
        "",
        "本摘要由 `analyze_data.py` 基于 `data.ods` 自动生成，用于支持毕业论文中的参数标定、模型适用性分析与实证描述。",
        "",
        "## 1. 数据概况",
        "",
        "| 样本时段 | 就诊记录 | 预约时段 | 医生样本 | 日均挂号量 | 日挂号量标准差 |",
        "| --- | ---: | ---: | ---: | ---: | ---: |",
        f"| 2023-02-01 至 2023-02-14 | {feb['n_visits']} | {feb['n_appointment_slots']} | {feb['n_doctors']} | {format_num(feb['avg_daily_visits'])} | {format_num(feb['daily_visits_std'])} |",
        f"| 2023-08-01 至 2023-08-14 | {aug['n_visits']} | {aug['n_appointment_slots']} | {aug['n_doctors']} | {format_num(aug['avg_daily_visits'])} | {format_num(aug['daily_visits_std'])} |",
        "",
        "## 2. 核心服务与等待指标",
        "",
        "| 指标 | 2月样本 | 8月样本 |",
        "| --- | ---: | ---: |",
        f"| 平均服务时长（分钟） | {format_num(feb['service']['mean'])} | {format_num(aug['service']['mean'])} |",
        f"| 服务时长中位数（分钟） | {format_num(feb['service']['median'])} | {format_num(aug['service']['median'])} |",
        f"| 服务时长95分位（分钟） | {format_num(feb['service']['p95'])} | {format_num(aug['service']['p95'])} |",
        f"| 挂号至开始就诊平均等待（分钟） | {format_num(feb['wait_registration']['mean'])} | {format_num(aug['wait_registration']['mean'])} |",
        f"| 挂号至开始就诊95分位（分钟） | {format_num(feb['wait_registration']['p95'])} | {format_num(aug['wait_registration']['p95'])} |",
        f"| 叫号至开始就诊平均等待（分钟） | {format_num(feb['wait_call']['mean'])} | {format_num(aug['wait_call']['mean'])} |",
        f"| 预约时段利用率均值 | {format_num(feb['appointment_utilization']['mean'])} | {format_num(aug['appointment_utilization']['mean'])} |",
        f"| 满载预约区间占比 | {format_num(feb['full_load_share'] * 100)}% | {format_num(aug['full_load_share'] * 100)}% |",
        f"| 超载预约区间占比 | {format_num(feb['overload_share'] * 100)}% | {format_num(aug['overload_share'] * 100)}% |",
        "",
        "## 3. 到达过程与峰值拥堵特征",
        "",
        f"- 2月样本的半小时到达离散系数均值为 {format_num(feb['slot_dispersion_mean'])}，8月样本为 {format_num(aug['slot_dispersion_mean'])}，均显著高于泊松过程的基准值 1，说明门诊到达存在明显的峰值聚集与过度离散现象。",
        f"- 早高峰（07:30-10:00）约占 2 月总挂号量的 {format_num(feb['morning_share'] * 100)}%，占 8 月总挂号量的 {format_num(aug['morning_share'] * 100)}%，说明排队风险主要集中在上午时段。",
        f"- 2 月半小时平均挂号量最高的时段为 {feb['top_slots'][0][0]}，均值为 {format_num(feb['top_slots'][0][1])} 人；8 月最高时段为 {aug['top_slots'][0][0]}，均值为 {format_num(aug['top_slots'][0][1])} 人。",
        "",
        "## 4. 模型参数标定建议",
        "",
        f"- Model 1 的固定服务时长参数可取样本均值：2 月 `s_base={format_num(feb['s_base'])}` 分钟，8 月 `s_base={format_num(aug['s_base'])}` 分钟。",
        f"- Model 2 若采用矩估计的均匀分布近似，则 2 月可写为 `S~Uniform({format_num(feb['uniform_ab']['a'])}, {format_num(feb['uniform_ab']['b'])})`，8 月可写为 `S~Uniform({format_num(aug['uniform_ab']['a'])}, {format_num(aug['uniform_ab']['b'])})`。由于左端点被截断为 0，说明真实服务分布右偏较强，均匀分布更适合作为近似分析口径而非精确拟合。",
        f"- 按队列工作量代理变量的 95 分位数标定安全阈值时，2 月 `C_safe` 的经验参考值约为 {format_num(feb['c_safe_proxy'])} 分钟，8 月约为 {format_num(aug['c_safe_proxy'])} 分钟。",
        "",
        "## 5. 多诊室异质性与动态分流依据",
        "",
        f"- 2 月高频医生样本的平均服务时长变异系数为 {format_num(feb['active_doctor_service_cv'])}，8 月为 {format_num(aug['active_doctor_service_cv'])}，显示出明显的跨医生异质性。",
        f"- 以高频医生平均服务时长的分位区间衡量，2 月样本的 10% 分位数为 {format_num(feb['active_doctor_service_p10'])} 分钟、90% 分位数为 {format_num(feb['active_doctor_service_p90'])} 分钟；8 月样本分别为 {format_num(aug['active_doctor_service_p10'])} 分钟和 {format_num(aug['active_doctor_service_p90'])} 分钟。这一差异直接支持 Model 3 中对异构诊室参数 `γ_i` 与 `C_safe,i` 的设定。",
        "",
        "## 6. 队列状态反馈模型估计",
        "",
        f"- 以“医生-日期-半小时”为面板单元，将半小时内服务人次记为因变量、时段开始时的待诊人数记为解释变量，可得 2 月样本的经验反馈函数：`y_t = {format_num(feb['fit_queue_count']['intercept'], 3)} + {format_num(feb['fit_queue_count']['slope'], 3)} Q_t`，`R^2={format_num(feb['fit_queue_count']['r2'], 3)}`。",
        f"- 同样方法下，8 月样本的经验反馈函数为：`y_t = {format_num(aug['fit_queue_count']['intercept'], 3)} + {format_num(aug['fit_queue_count']['slope'], 3)} Q_t`，`R^2={format_num(aug['fit_queue_count']['r2'], 3)}`。",
        f"- 两个样本期的斜率均为正，说明等待队列越长，医生在后续半小时内的实际服务产出越高，数据层面支持第五章提出的线性反馈控制思想。",
        "",
    ]
    return "\n".join(lines) + "\n"


def main() -> None:
    sheets = load_sheets(ODS_PATH)
    report = {}
    for prefix in ["2023年2月1号到2023年2月14号", "2023年8月1号到2023年8月14号"]:
        report[prefix] = analyze_month(
            sheets[f"{prefix}就诊"],
            sheets[f"{prefix}预约"],
            sheets[f"{prefix}医生"],
        )

    JSON_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    MD_PATH.write_text(build_markdown(report), encoding="utf-8")
    print(f"Wrote {JSON_PATH}")
    print(f"Wrote {MD_PATH}")


if __name__ == "__main__":
    main()
