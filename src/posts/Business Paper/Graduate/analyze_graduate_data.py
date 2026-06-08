#!/usr/bin/env python3
"""Generate empirical tables and figures for graduate_paper.tex.

The script intentionally avoids pandas so that the ODS file can be parsed with
the standard library. Matplotlib is still used for figures.
"""

from __future__ import annotations

import json
import math
import os
import statistics
import zipfile
from collections import defaultdict
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from pathlib import Path
from typing import Iterable
import xml.etree.ElementTree as ET

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager


BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "data.ods"
TABLE_DIR = BASE_DIR / "tables"
FIGURE_DIR = BASE_DIR / "figures"
RESULTS_PATH = BASE_DIR / "analysis_results.json"

T_NS = "urn:oasis:names:tc:opendocument:xmlns:table:1.0"
TEXT_NS = "urn:oasis:names:tc:opendocument:xmlns:text:1.0"
OFFICE_NS = "urn:oasis:names:tc:opendocument:xmlns:office:1.0"

DELTA_MINUTES = 30.0
SERVICE_MAX_MINUTES = 120.0
WAIT_MAX_MINUTES = 480.0
CALL_WAIT_MAX_MINUTES = 180.0
NEAR_HORIZON_SLOTS = 4
APPOINTMENT_SHOW_RATE = 0.85


def configure_chinese_fonts() -> str:
    candidates = [
        "Noto Sans CJK SC",
        "Source Han Sans SC",
        "WenQuanYi Micro Hei",
        "Microsoft YaHei",
        "SimHei",
        "Arial Unicode MS",
    ]
    selected = candidates[-1]
    for family in candidates:
        try:
            font_path = font_manager.findfont(family, fallback_to_default=False)
        except ValueError:
            continue
        if font_path:
            font_manager.fontManager.addfont(font_path)
            selected = font_manager.FontProperties(fname=font_path).get_name()
            break
    plt.rcParams["font.family"] = "sans-serif"
    plt.rcParams["font.sans-serif"] = [selected] + candidates
    plt.rcParams["axes.unicode_minus"] = False
    return selected


@dataclass
class WindowData:
    key: str
    label: str
    visits: list[dict[str, str]]
    appointments: list[dict[str, str]]
    doctors: list[dict[str, str]]


def attr(ns: str, name: str) -> str:
    return f"{{{ns}}}{name}"


def cell_value(cell: ET.Element) -> str:
    texts: list[str] = []
    for p in cell.findall(f".//{{{TEXT_NS}}}p"):
        text = "".join(p.itertext()).strip()
        if text:
            texts.append(text)
    if texts:
        return " ".join(texts).strip()
    for key in ("value", "date-value", "time-value", "string-value"):
        value = cell.attrib.get(attr(OFFICE_NS, key))
        if value:
            return str(value).strip()
    return ""


def row_values(row: ET.Element, max_cols: int = 80) -> list[str]:
    values: list[str] = []
    for cell in row:
        if cell.tag not in {f"{{{T_NS}}}table-cell", f"{{{T_NS}}}covered-table-cell"}:
            continue
        repeat = int(cell.attrib.get(attr(T_NS, "number-columns-repeated"), "1"))
        value = cell_value(cell)
        repeat = min(repeat, max_cols - len(values))
        if repeat <= 0:
            break
        values.extend([value] * repeat)
    while values and values[-1] == "":
        values.pop()
    return values


def read_ods_tables(path: Path) -> dict[str, list[list[str]]]:
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("content.xml"))
    tables: dict[str, list[list[str]]] = {}
    for table in root.findall(f".//{{{T_NS}}}table"):
        name = table.attrib.get(attr(T_NS, "name"), "")
        rows: list[list[str]] = []
        for row in table.findall(f"{{{T_NS}}}table-row"):
            repeat = int(row.attrib.get(attr(T_NS, "number-rows-repeated"), "1"))
            values = row_values(row)
            if not values:
                continue
            if repeat > 1:
                rows.append(values)
            else:
                rows.append(values)
        tables[name] = rows
    return tables


def records_from_rows(rows: list[list[str]], fixed_header: list[str] | None = None) -> list[dict[str, str]]:
    if not rows:
        return []
    if fixed_header is None:
        header = rows[0]
        data_rows = rows[1:]
    else:
        header = fixed_header
        data_rows = rows
    records: list[dict[str, str]] = []
    for row in data_rows:
        if not any(row):
            continue
        padded = row + [""] * max(0, len(header) - len(row))
        records.append({header[i]: padded[i] if i < len(padded) else "" for i in range(len(header))})
    return records


def load_windows() -> dict[str, WindowData]:
    tables = read_ods_tables(DATA_PATH)
    feb_visit_name = "2023年2月1号到2023年2月14号就诊"
    feb_appt_name = "2023年2月1号到2023年2月14号预约"
    feb_doc_name = "2023年2月1号到2023年2月14号医生"
    aug_visit_name = "2023年8月1号到2023年8月14号就诊"
    aug_appt_name = "2023年8月1号到2023年8月14号预约"
    aug_doc_name = "2023年8月1号到2023年8月14号医生"
    appt_header = ["医生ID", "开诊日期", "开始时间", "截止时间", "区间人次", "预约数"]
    return {
        "feb": WindowData(
            key="feb",
            label="2月窗口",
            visits=records_from_rows(tables[feb_visit_name]),
            appointments=records_from_rows(tables[feb_appt_name], fixed_header=appt_header),
            doctors=records_from_rows(tables[feb_doc_name]),
        ),
        "aug": WindowData(
            key="aug",
            label="8月窗口",
            visits=records_from_rows(tables[aug_visit_name]),
            appointments=records_from_rows(tables[aug_appt_name]),
            doctors=records_from_rows(tables[aug_doc_name]),
        ),
    }


def parse_dt(value: str) -> datetime | None:
    value = (value or "").strip()
    if not value:
        return None
    for fmt in ("%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%d %H:%M:%S", "%Y-%m-%d"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass
    return None


def parse_date_yyyymmdd(value: str) -> date | None:
    value = (value or "").strip()
    if not value:
        return None
    if value.endswith(".0"):
        value = value[:-2]
    try:
        return datetime.strptime(value, "%Y%m%d").date()
    except ValueError:
        return None


def parse_time_hm(value: str) -> time | None:
    value = (value or "").strip()
    if not value:
        return None
    for fmt in ("%H:%M:%S", "%H:%M"):
        try:
            return datetime.strptime(value, fmt).time()
        except ValueError:
            pass
    return None


def to_float(value: str) -> float:
    value = (value or "").strip()
    if not value:
        return 0.0
    try:
        return float(value)
    except ValueError:
        return 0.0


def doctor_id(value: str) -> str:
    value = (value or "").strip()
    if value.endswith(".0"):
        value = value[:-2]
    return value


def floor_half_hour(dt: datetime) -> datetime:
    minute = 0 if dt.minute < 30 else 30
    return dt.replace(minute=minute, second=0, microsecond=0)


def minutes_between(start: datetime | None, end: datetime | None) -> float | None:
    if start is None or end is None:
        return None
    return (end - start).total_seconds() / 60.0


def mean(values: Iterable[float]) -> float:
    values = list(values)
    return sum(values) / len(values) if values else float("nan")


def variance(values: Iterable[float]) -> float:
    values = list(values)
    if len(values) < 2:
        return 0.0
    return statistics.variance(values)


def percentile(values: Iterable[float], pct: float) -> float:
    xs = sorted(values)
    if not xs:
        return float("nan")
    if len(xs) == 1:
        return xs[0]
    pos = (len(xs) - 1) * pct / 100.0
    lo = math.floor(pos)
    hi = math.ceil(pos)
    if lo == hi:
        return xs[lo]
    return xs[lo] * (hi - pos) + xs[hi] * (pos - lo)


def fmt_num(value: float, digits: int = 2) -> str:
    if value is None or (isinstance(value, float) and math.isnan(value)):
        return "--"
    return f"{value:.{digits}f}"


def fmt_int(value: float | int) -> str:
    return f"{int(round(value)):,}"


def fmt_pct(value: float, digits: int = 1) -> str:
    if value is None or math.isnan(value):
        return "--"
    return f"{100 * value:.{digits}f}%"


def latex_escape(value: object) -> str:
    text = str(value)
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
    }
    return "".join(replacements.get(ch, ch) for ch in text)


def write_latex_table(
    path: Path,
    caption: str,
    label: str,
    headers: list[str],
    rows: list[list[object]],
    align: str | None = None,
    resize_to_width: bool = False,
) -> None:
    align = align or ("l" + "r" * (len(headers) - 1))
    lines = [
        r"\begin{table}[H]",
        r"  \centering",
        rf"  \caption{{{caption}}}",
        rf"  \label{{{label}}}",
    ]
    if resize_to_width:
        lines.append(r"  \resizebox{\textwidth}{!}{%")
    lines.extend(
        [
            rf"  \begin{{tabular}}{{{align}}}",
            r"    \toprule",
            "    " + " & ".join(latex_escape(h) for h in headers) + r" \\",
            r"    \midrule",
        ]
    )
    for row in rows:
        lines.append("    " + " & ".join(latex_escape(v) for v in row) + r" \\")
    lines.extend([r"    \bottomrule", r"  \end{tabular}"])
    if resize_to_width:
        lines.append(r"  }")
    lines.extend([r"\end{table}", ""])
    path.write_text("\n".join(lines), encoding="utf-8")


def enrich_visits(visits: list[dict[str, str]]) -> list[dict[str, object]]:
    enriched: list[dict[str, object]] = []
    for row in visits:
        reg = parse_dt(row.get("挂号时间", ""))
        start = parse_dt(row.get("开始就诊时间", ""))
        end = parse_dt(row.get("结束就诊时间", ""))
        call = parse_dt(row.get("叫号时间", ""))
        sign = parse_dt(row.get("签到时间", ""))
        service = minutes_between(start, end)
        wait_reg = minutes_between(reg, start)
        wait_call = minutes_between(call, start)
        wait_sign = minutes_between(sign, start)
        item = dict(row)
        item.update(
            {
                "doctor": doctor_id(row.get("医生ID", "")),
                "reg_dt": reg,
                "start_dt": start,
                "end_dt": end,
                "call_dt": call,
                "sign_dt": sign,
                "service_min": service,
                "valid_service_min": service if service is not None and 0 < service <= SERVICE_MAX_MINUTES else None,
                "wait_reg_min": wait_reg if wait_reg is not None and 0 <= wait_reg <= WAIT_MAX_MINUTES else None,
                "wait_call_min": wait_call if wait_call is not None and 0 <= wait_call <= CALL_WAIT_MAX_MINUTES else None,
                "wait_sign_min": wait_sign if wait_sign is not None and 0 <= wait_sign <= WAIT_MAX_MINUTES else None,
            }
        )
        enriched.append(item)
    return enriched


def unique_appointment_slots(appointments: list[dict[str, str]]) -> dict[tuple[str, date, time], dict[str, float]]:
    slots: dict[tuple[str, date, time], dict[str, float]] = {}
    for row in appointments:
        doc = doctor_id(row.get("医生ID", ""))
        day = parse_date_yyyymmdd(row.get("开诊日期", ""))
        start = parse_time_hm(row.get("开始时间", ""))
        if not doc or day is None or start is None:
            continue
        key = (doc, day, start)
        capacity = to_float(row.get("区间人次", ""))
        booked = to_float(row.get("预约数", ""))
        if key not in slots:
            slots[key] = {"capacity": capacity, "booked": booked}
        else:
            slots[key]["capacity"] = max(slots[key]["capacity"], capacity)
            slots[key]["booked"] = max(slots[key]["booked"], booked)
    return slots


def daily_counts(visits: list[dict[str, object]]) -> dict[date, int]:
    counts: dict[date, int] = defaultdict(int)
    for row in visits:
        reg = row["reg_dt"]
        if isinstance(reg, datetime):
            counts[reg.date()] += 1
    return dict(counts)


def half_hour_profile(visits: list[dict[str, object]]) -> dict[str, float]:
    counts: dict[tuple[date, str], int] = defaultdict(int)
    dates: set[date] = set()
    for row in visits:
        reg = row["reg_dt"]
        if not isinstance(reg, datetime):
            continue
        slot = floor_half_hour(reg)
        dates.add(slot.date())
        counts[(slot.date(), slot.strftime("%H:%M"))] += 1
    labels = sorted({slot for _, slot in counts})
    denom = max(len(dates), 1)
    return {label: mean(counts.get((day, label), 0) for day in dates) for label in labels}


def appointment_stats(slots: dict[tuple[str, date, time], dict[str, float]]) -> dict[str, float]:
    capacities = [v["capacity"] for v in slots.values()]
    booked = [v["booked"] for v in slots.values()]
    total_capacity = sum(capacities)
    total_booked = sum(booked)
    return {
        "slot_count": len(slots),
        "capacity_total": total_capacity,
        "booked_total": total_booked,
        "booking_rate": total_booked / total_capacity if total_capacity > 0 else float("nan"),
        "slot_capacity_mean": mean(capacities),
        "slot_booked_mean": mean(booked),
    }


def state_grid(visits: list[dict[str, object]], appt_slots: dict[tuple[str, date, time], dict[str, float]]) -> list[dict[str, object]]:
    keys: set[tuple[str, date, time]] = set(appt_slots)
    for row in visits:
        doc = row.get("doctor", "")
        for field in ("reg_dt", "start_dt"):
            dt = row.get(field)
            if doc and isinstance(dt, datetime):
                slot = floor_half_hour(dt)
                keys.add((str(doc), slot.date(), slot.time()))
    visits_by_doc_day: dict[tuple[str, date], list[dict[str, object]]] = defaultdict(list)
    for row in visits:
        doc = row.get("doctor", "")
        reg = row.get("reg_dt")
        if doc and isinstance(reg, datetime):
            visits_by_doc_day[(str(doc), reg.date())].append(row)
    states: list[dict[str, object]] = []
    for doc, day, start_time in sorted(keys, key=lambda x: (x[1], x[2], x[0])):
        slot_dt = datetime.combine(day, start_time)
        slot_end = slot_dt + timedelta(minutes=DELTA_MINUTES)
        rows = visits_by_doc_day.get((doc, day), [])
        arrivals = 0
        waiting = 0
        for row in rows:
            reg = row.get("reg_dt")
            start = row.get("start_dt")
            if isinstance(reg, datetime) and slot_dt <= reg < slot_end:
                arrivals += 1
            if isinstance(reg, datetime) and reg <= slot_dt and (
                not isinstance(start, datetime) or start > slot_dt
            ):
                waiting += 1
        appt = appt_slots.get((doc, day, start_time), {"capacity": 0.0, "booked": 0.0})
        current_capacity = max(float(appt["capacity"]), 0.0)
        current_booked = max(float(appt["booked"]), 0.0)
        if current_capacity > 0:
            current_booked = min(current_booked, current_capacity)
        future_capacity = 0.0
        future_booked = 0.0
        future_remaining = 0.0
        for horizon in range(1, NEAR_HORIZON_SLOTS + 1):
            future_dt = slot_dt + timedelta(minutes=DELTA_MINUTES * horizon)
            future = appt_slots.get(
                (doc, future_dt.date(), future_dt.time()),
                {"capacity": 0.0, "booked": 0.0},
            )
            cap = max(float(future["capacity"]), 0.0)
            booked = max(float(future["booked"]), 0.0)
            if cap > 0:
                booked = min(booked, cap)
            future_capacity += cap
            future_booked += booked
            future_remaining += max(cap - booked, 0.0)
        states.append(
            {
                "doctor": doc,
                "date": day.isoformat(),
                "slot": start_time.strftime("%H:%M"),
                "slot_dt": slot_dt,
                "arrivals": arrivals,
                "waiting": waiting,
                "capacity": current_capacity,
                "booked": current_booked,
                "remaining": max(current_capacity - current_booked, 0.0),
                "booked_near": future_booked,
                "remaining_near": future_remaining,
                "capacity_near": future_capacity,
            }
        )
    profile_values: dict[tuple[str, str], list[float]] = defaultdict(list)
    slot_values: dict[str, list[float]] = defaultdict(list)
    for state in states:
        booked_near = float(state["booked_near"])
        profile_values[(str(state["doctor"]), str(state["slot"]))].append(booked_near)
        slot_values[str(state["slot"])].append(booked_near)
    profile_mean = {key: mean(values) for key, values in profile_values.items()}
    slot_mean = {key: mean(values) for key, values in slot_values.items()}
    for state in states:
        key = (str(state["doctor"]), str(state["slot"]))
        request_proxy = profile_mean.get(key, slot_mean.get(str(state["slot"]), float(state["booked_near"])))
        state["request_proxy"] = max(float(state["booked_near"]), request_proxy)

    system_groups: dict[tuple[str, str], list[dict[str, object]]] = defaultdict(list)
    for state in states:
        system_groups[(str(state["date"]), str(state["slot"]))].append(state)
    for group in system_groups.values():
        doctor_count = max(len(group), 1)
        totals = {
            "system_waiting": sum(float(state["waiting"]) for state in group),
            "system_arrivals": sum(float(state["arrivals"]) for state in group),
            "system_booked_near": sum(float(state["booked_near"]) for state in group),
            "system_remaining_near": sum(float(state["remaining_near"]) for state in group),
            "system_request_proxy": sum(float(state["request_proxy"]) for state in group),
        }
        for state in group:
            state.update(totals)
            state["system_doctor_count"] = doctor_count
            state["avg_waiting"] = totals["system_waiting"] / doctor_count
            state["avg_arrivals"] = totals["system_arrivals"] / doctor_count
            state["avg_booked_near"] = totals["system_booked_near"] / doctor_count
            state["avg_remaining_near"] = totals["system_remaining_near"] / doctor_count
            state["avg_request_proxy"] = totals["system_request_proxy"] / doctor_count
    return states


def solve_linear_system(matrix: list[list[float]], vector: list[float]) -> list[float]:
    n = len(vector)
    aug = [row[:] + [value] for row, value in zip(matrix, vector)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda row: abs(aug[row][col]))
        if abs(aug[pivot][col]) < 1e-10:
            aug[col][col] += 1e-8
            pivot = col
        aug[col], aug[pivot] = aug[pivot], aug[col]
        divisor = aug[col][col]
        if abs(divisor) < 1e-12:
            continue
        for j in range(col, n + 1):
            aug[col][j] /= divisor
        for row in range(n):
            if row == col:
                continue
            factor = aug[row][col]
            if abs(factor) < 1e-12:
                continue
            for j in range(col, n + 1):
                aug[row][j] -= factor * aug[col][j]
    return [aug[i][n] for i in range(n)]


def multiple_linear_fit(rows: list[list[float]], ys: list[float], ridge: float = 1e-6) -> list[float]:
    if not rows or len(rows) != len(ys):
        return []
    width = len(rows[0]) + 1
    xtx = [[0.0 for _ in range(width)] for _ in range(width)]
    xty = [0.0 for _ in range(width)]
    for row, y in zip(rows, ys):
        x = [1.0] + row
        for i in range(width):
            xty[i] += x[i] * y
            for j in range(width):
                xtx[i][j] += x[i] * x[j]
    for i in range(1, width):
        xtx[i][i] += ridge
    return solve_linear_system(xtx, xty)


def constrained_linear_fit(
    rows: list[list[float]],
    ys: list[float],
    features: list[str],
    signs: dict[str, int],
) -> tuple[dict[str, float], list[float]]:
    active = list(range(len(features)))
    coeffs = [mean(ys) if ys else 0.0]
    while True:
        active_rows = [[row[i] for i in active] for row in rows]
        coeffs = multiple_linear_fit(active_rows, ys)
        if not coeffs:
            return {"intercept": 0.0, **{feature: 0.0 for feature in features}}, [0.0 for _ in ys]
        violating: list[int] = []
        for pos, feature_index in enumerate(active, start=1):
            sign = signs.get(features[feature_index], 0)
            if sign < 0 and coeffs[pos] > 0:
                violating.append(feature_index)
            elif sign > 0 and coeffs[pos] < 0:
                violating.append(feature_index)
        if not violating:
            break
        active = [i for i in active if i not in violating]
        if not active:
            coeffs = [mean(ys) if ys else 0.0]
            break
    params = {"intercept": coeffs[0], **{feature: 0.0 for feature in features}}
    for pos, feature_index in enumerate(active, start=1):
        params[features[feature_index]] = coeffs[pos]
    preds = [
        params["intercept"] + sum(params[feature] * row[i] for i, feature in enumerate(features))
        for row in rows
    ]
    return params, preds


def fit_multivariate_by_slot(
    points: list[dict[str, float]],
    target: str,
    features: list[str],
    signs: dict[str, int],
    lower_bound: float = 0.0,
) -> dict[str, object]:
    preds: list[float] = []
    actuals: list[float] = []
    pred_pairs: list[tuple[float, float]] = []
    actual_pairs: list[tuple[float, float]] = []
    params: dict[str, dict[str, float]] = {}
    min_group = max(6, len(features) + 2)
    for slot in sorted({p["slot"] for p in points}):
        group = [
            p
            for p in points
            if p["slot"] == slot
            and all(math.isfinite(float(p.get(feature, float("nan")))) for feature in features + [target])
        ]
        if len(group) < min_group:
            continue
        rows = [[float(p[feature]) for feature in features] for p in group]
        ys = [float(p[target]) for p in group]
        fit_params, yhat = constrained_linear_fit(rows, ys, features, signs)
        clipped = [max(lower_bound, value) for value in yhat]
        params[slot] = fit_params
        preds.extend(clipped)
        actuals.extend(ys)
        pred_pairs.extend((float(p["W"]), value) for p, value in zip(group, clipped) if "W" in p)
        actual_pairs.extend((float(p["W"]), value) for p, value in zip(group, ys) if "W" in p)
    if not actuals:
        return {"rmse": float("nan"), "r2": float("nan"), "n": 0, "params": params}
    ybar = mean(actuals)
    mse = mean((a - p) ** 2 for a, p in zip(actuals, preds))
    sse = sum((a - p) ** 2 for a, p in zip(actuals, preds))
    sst = sum((a - ybar) ** 2 for a in actuals)
    return {
        "rmse": math.sqrt(mse),
        "r2": 1 - sse / sst if sst > 1e-12 else float("nan"),
        "n": len(actuals),
        "params": params,
        "preds": preds,
        "actuals": actuals,
        "pred_pairs": pred_pairs,
        "actual_pairs": actual_pairs,
    }


def model_service_targets(states: list[dict[str, object]], service_values: list[float]) -> tuple[list[dict[str, float]], dict[str, float]]:
    m = mean(service_values)
    v = variance(service_values)
    p10 = percentile(service_values, 10)
    s_min = max(2.0, p10)
    c0 = DELTA_MINUTES
    cmax = DELTA_MINUTES * m / s_min if s_min > 0 else c0
    cmax = max(cmax, c0)
    gamma = 1.0 / (2.0 * (cmax - c0)) if cmax > c0 else 0.0
    arrivals = [float(s["arrivals"]) for s in states]
    lam_mean = mean(arrivals)
    kappa = variance(arrivals) / lam_mean if lam_mean > 0 else 1.0
    eta = max(2.0 * m, 1.0)
    base_pressures: list[float] = []
    for state in states:
        waiting = float(state["waiting"])
        arrivals_now = float(state["arrivals"])
        W = waiting * m
        sigma2 = arrivals_now * (v + kappa * m * m)
        pressure = W + arrivals_now * m - c0 + sigma2 / eta
        if waiting + arrivals_now > 0:
            base_pressures.append(pressure)
    c_safe = percentile(base_pressures, 90) if base_pressures else 0.0

    def sigma2_from_moments(lambda_eff: float, omega_eff: float) -> float:
        return lambda_eff * v + omega_eff * m * m

    def pressure_value(W: float, lambda_eff: float, omega_eff: float, c: float) -> float:
        h = gamma * max(c - c0, 0.0) ** 2
        sigma2 = sigma2_from_moments(lambda_eff, omega_eff)
        return W + lambda_eff * m - c + h + sigma2 / eta

    def service_capacity(W: float, lambda_eff: float, omega_eff: float) -> float:
        if pressure_value(W, lambda_eff, omega_eff, c0) <= c_safe:
            c_star = c0
        elif cmax <= c0:
            c_star = c0
        else:
            lo, hi = c0, cmax
            if pressure_value(W, lambda_eff, omega_eff, hi) > c_safe:
                c_star = hi
            else:
                for _ in range(50):
                    mid = (lo + hi) / 2.0
                    if pressure_value(W, lambda_eff, omega_eff, mid) <= c_safe:
                        hi = mid
                    else:
                        lo = mid
                c_star = hi
        return c_star

    def service_target(W: float, lambda_eff: float, omega_eff: float) -> float:
        c_star = service_capacity(W, lambda_eff, omega_eff)
        return DELTA_MINUTES * m / c_star if c_star > 0 else m

    def booking_target_from_constraint(
        W: float,
        base_lambda: float,
        base_omega: float,
        capacity: float,
        request: float,
    ) -> float:
        limit = min(max(capacity, 0.0), max(request, 0.0))
        if limit <= 0:
            return 0.0

        horizon = max(NEAR_HORIZON_SLOTS, 1)

        def feasible(u_value: float) -> bool:
            lambda_eff = base_lambda + APPOINTMENT_SHOW_RATE * u_value / horizon
            omega_eff = base_omega + APPOINTMENT_SHOW_RATE * (1.0 - APPOINTMENT_SHOW_RATE) * u_value / horizon
            return pressure_value(W, lambda_eff, omega_eff, cmax) <= c_safe

        if feasible(limit):
            return limit
        if not feasible(0.0):
            return 0.0
        lo, hi = 0.0, limit
        for _ in range(50):
            mid = (lo + hi) / 2.0
            if feasible(mid):
                lo = mid
            else:
                hi = mid
        return lo

    routing_weight = 0.70
    points: list[dict[str, float]] = []
    for state in states:
        waiting = float(state["waiting"])
        arrivals_now = float(state["arrivals"])
        booked_near = float(state.get("booked_near", 0.0))
        remaining_near = float(state.get("remaining_near", 0.0))
        request_proxy = float(state.get("request_proxy", 0.0))
        if waiting + arrivals_now + booked_near + request_proxy <= 0:
            continue
        W = waiting * m

        lambda_m1 = arrivals_now
        omega_m1 = kappa * arrivals_now
        s_star_m1 = service_target(W, lambda_m1, omega_m1)

        near_lambda_m2 = APPOINTMENT_SHOW_RATE * booked_near / max(NEAR_HORIZON_SLOTS, 1)
        near_omega_m2 = APPOINTMENT_SHOW_RATE * (1.0 - APPOINTMENT_SHOW_RATE) * booked_near / max(NEAR_HORIZON_SLOTS, 1)
        base_lambda_m2 = arrivals_now + near_lambda_m2
        base_omega_m2 = kappa * arrivals_now + near_omega_m2
        u_star_m2 = booking_target_from_constraint(
            W,
            base_lambda_m2,
            base_omega_m2,
            remaining_near,
            request_proxy,
        )
        lambda_m2 = base_lambda_m2 + APPOINTMENT_SHOW_RATE * u_star_m2 / max(NEAR_HORIZON_SLOTS, 1)
        omega_m2 = base_omega_m2 + APPOINTMENT_SHOW_RATE * (1.0 - APPOINTMENT_SHOW_RATE) * u_star_m2 / max(NEAR_HORIZON_SLOTS, 1)
        s_star_m2 = service_target(W, lambda_m2, omega_m2)

        avg_waiting = float(state.get("avg_waiting", waiting))
        avg_arrivals = float(state.get("avg_arrivals", arrivals_now))
        avg_booked = float(state.get("avg_booked_near", booked_near))
        effective_waiting_m3 = routing_weight * waiting + (1.0 - routing_weight) * avg_waiting
        effective_arrivals_m3 = routing_weight * arrivals_now + (1.0 - routing_weight) * avg_arrivals
        effective_booked_m3 = routing_weight * booked_near + (1.0 - routing_weight) * avg_booked
        W_m3 = effective_waiting_m3 * m
        near_lambda_m3 = APPOINTMENT_SHOW_RATE * effective_booked_m3 / max(NEAR_HORIZON_SLOTS, 1)
        near_omega_m3 = APPOINTMENT_SHOW_RATE * (1.0 - APPOINTMENT_SHOW_RATE) * effective_booked_m3 / max(NEAR_HORIZON_SLOTS, 1)
        base_lambda_m3 = effective_arrivals_m3 + near_lambda_m3
        base_omega_m3 = kappa * effective_arrivals_m3 + near_omega_m3
        u_star_m3 = booking_target_from_constraint(
            W_m3,
            base_lambda_m3,
            base_omega_m3,
            remaining_near,
            request_proxy,
        )
        lambda_m3 = base_lambda_m3 + APPOINTMENT_SHOW_RATE * u_star_m3 / max(NEAR_HORIZON_SLOTS, 1)
        omega_m3 = base_omega_m3 + APPOINTMENT_SHOW_RATE * (1.0 - APPOINTMENT_SHOW_RATE) * u_star_m3 / max(NEAR_HORIZON_SLOTS, 1)
        s_star_m3 = service_target(W_m3, lambda_m3, omega_m3)

        points.append(
            {
                "W": W,
                "B_near": booked_near,
                "G_near": remaining_near,
                "R_proxy": request_proxy,
                "system_W": float(state.get("system_waiting", 0.0)) * m,
                "system_B_near": float(state.get("system_booked_near", 0.0)),
                "system_G_near": float(state.get("system_remaining_near", 0.0)),
                "system_R_proxy": float(state.get("system_request_proxy", 0.0)),
                "s_star_m1": s_star_m1,
                "s_star_m2": s_star_m2,
                "u_star_m2": u_star_m2,
                "s_star_m3": s_star_m3,
                "u_star_m3": u_star_m3,
                "slot": str(state["slot"]),
            }
        )
    calibration = {
        "m": m,
        "v": v,
        "p10": p10,
        "s_min": s_min,
        "c0": c0,
        "cmax": cmax,
        "gamma": gamma,
        "kappa": kappa,
        "eta": eta,
        "c_safe": c_safe,
        "routing_weight": routing_weight,
        "points": len(points),
    }
    return points, calibration


def build_analysis() -> dict[str, object]:
    windows = load_windows()
    analysis: dict[str, object] = {}
    for key, window in windows.items():
        visits = enrich_visits(window.visits)
        appt_slots = unique_appointment_slots(window.appointments)
        states = state_grid(visits, appt_slots)
        services = [v["valid_service_min"] for v in visits if isinstance(v["valid_service_min"], float)]
        waits = [v["wait_reg_min"] for v in visits if isinstance(v["wait_reg_min"], float)]
        call_waits = [v["wait_call_min"] for v in visits if isinstance(v["wait_call_min"], float)]
        starts = [v for v in visits if isinstance(v["start_dt"], datetime)]
        ends = [v for v in visits if isinstance(v["end_dt"], datetime)]
        doctors = {str(v["doctor"]) for v in visits if v.get("doctor")}
        departments = {str(v.get("科室名称", "")) for v in visits if v.get("科室名称")}
        dcounts = daily_counts(visits)
        profile = half_hour_profile(visits)
        appt = appointment_stats(appt_slots)
        arrival_counts = [float(s["arrivals"]) for s in states]
        points, calibration = model_service_targets(states, services)
        model_fits = {
            "model1_service": fit_multivariate_by_slot(
                points,
                target="s_star_m1",
                features=["W"],
                signs={"W": -1},
                lower_bound=0.1,
            ),
            "model2_service": fit_multivariate_by_slot(
                points,
                target="s_star_m2",
                features=["W", "B_near", "G_near"],
                signs={"W": -1, "B_near": -1, "G_near": 1},
                lower_bound=0.1,
            ),
            "model2_booking": fit_multivariate_by_slot(
                points,
                target="u_star_m2",
                features=["W", "B_near", "G_near", "R_proxy"],
                signs={"W": -1, "B_near": -1, "G_near": 1, "R_proxy": 1},
                lower_bound=0.0,
            ),
            "model3_service": fit_multivariate_by_slot(
                points,
                target="s_star_m3",
                features=["W", "B_near", "G_near", "system_W", "system_B_near", "system_G_near"],
                signs={
                    "W": -1,
                    "B_near": -1,
                    "G_near": 1,
                    "system_W": -1,
                    "system_B_near": -1,
                    "system_G_near": 1,
                },
                lower_bound=0.1,
            ),
            "model3_booking": fit_multivariate_by_slot(
                points,
                target="u_star_m3",
                features=[
                    "W",
                    "B_near",
                    "G_near",
                    "R_proxy",
                    "system_W",
                    "system_B_near",
                    "system_G_near",
                    "system_R_proxy",
                ],
                signs={
                    "W": -1,
                    "B_near": -1,
                    "G_near": 1,
                    "R_proxy": 1,
                    "system_W": -1,
                    "system_B_near": -1,
                    "system_G_near": 1,
                    "system_R_proxy": 1,
                },
                lower_bound=0.0,
            ),
        }
        booking_targets = [p["u_star_m2"] for p in points]
        near_booked = [float(s.get("booked_near", 0.0)) for s in states]
        near_remaining = [float(s.get("remaining_near", 0.0)) for s in states]
        analysis[key] = {
            "label": window.label,
            "visit_count": len(visits),
            "doctor_count": len(doctors),
            "department_count": len(departments),
            "start_rate": len(starts) / len(visits) if visits else float("nan"),
            "end_rate": len(ends) / len(visits) if visits else float("nan"),
            "valid_service_rate": len(services) / len(visits) if visits else float("nan"),
            "valid_wait_rate": len(waits) / len(visits) if visits else float("nan"),
            "valid_call_wait_rate": len(call_waits) / len(visits) if visits else float("nan"),
            "daily_mean": mean(dcounts.values()),
            "daily_max": max(dcounts.values()) if dcounts else 0,
            "service_mean": mean(services),
            "service_median": percentile(services, 50),
            "service_p90": percentile(services, 90),
            "wait_mean": mean(waits),
            "wait_median": percentile(waits, 50),
            "wait_p90": percentile(waits, 90),
            "arrival_state_mean": mean(arrival_counts),
            "arrival_state_var": variance(arrival_counts),
            "arrival_state_dispersion": variance(arrival_counts) / mean(arrival_counts) if mean(arrival_counts) > 0 else float("nan"),
            "appt": appt,
            "profile": profile,
            "services": services,
            "waits": waits,
            "points": points,
            "calibration": calibration,
            "model_fits": model_fits,
            "decision_stats": {
                "near_horizon_slots": NEAR_HORIZON_SLOTS,
                "show_rate": APPOINTMENT_SHOW_RATE,
                "booked_near_mean": mean(near_booked),
                "remaining_near_mean": mean(near_remaining),
                "u_star_mean": mean(booking_targets),
                "u_star_positive_rate": sum(1 for value in booking_targets if value > 1e-9) / len(booking_targets) if booking_targets else float("nan"),
            },
        }
    return analysis


def write_outputs(analysis: dict[str, object]) -> None:
    configure_chinese_fonts()
    TABLE_DIR.mkdir(exist_ok=True)
    FIGURE_DIR.mkdir(exist_ok=True)

    feb = analysis["feb"]
    aug = analysis["aug"]

    write_latex_table(
        TABLE_DIR / "data_quality.tex",
        "数据规模与时间戳完整性",
        "tab:data-quality",
        ["指标", "2月窗口", "8月窗口"],
        [
            ["就诊记录数", fmt_int(feb["visit_count"]), fmt_int(aug["visit_count"])],
            ["医生数", fmt_int(feb["doctor_count"]), fmt_int(aug["doctor_count"])],
            ["科室数", fmt_int(feb["department_count"]), fmt_int(aug["department_count"])],
            ["有开始就诊时间", fmt_pct(feb["start_rate"]), fmt_pct(aug["start_rate"])],
            ["有结束就诊时间", fmt_pct(feb["end_rate"]), fmt_pct(aug["end_rate"])],
            ["有效服务时长", fmt_pct(feb["valid_service_rate"]), fmt_pct(aug["valid_service_rate"])],
            ["有效挂号至就诊等待", fmt_pct(feb["valid_wait_rate"]), fmt_pct(aug["valid_wait_rate"])],
            ["有效叫号至就诊等待", fmt_pct(feb["valid_call_wait_rate"]), fmt_pct(aug["valid_call_wait_rate"])],
        ],
    )

    write_latex_table(
        TABLE_DIR / "descriptive_statistics.tex",
        "门诊到达、等待与服务时长描述统计",
        "tab:descriptive-statistics",
        ["指标", "2月窗口", "8月窗口"],
        [
            ["日均挂号人次", fmt_num(feb["daily_mean"], 1), fmt_num(aug["daily_mean"], 1)],
            ["最高单日挂号人次", fmt_int(feb["daily_max"]), fmt_int(aug["daily_max"])],
            ["医生-时段流入均值", fmt_num(feb["arrival_state_mean"], 2), fmt_num(aug["arrival_state_mean"], 2)],
            ["医生-时段流入方差/均值", fmt_num(feb["arrival_state_dispersion"], 2), fmt_num(aug["arrival_state_dispersion"], 2)],
            ["服务时长均值/中位数/P90", f"{fmt_num(feb['service_mean'])}/{fmt_num(feb['service_median'])}/{fmt_num(feb['service_p90'])}", f"{fmt_num(aug['service_mean'])}/{fmt_num(aug['service_median'])}/{fmt_num(aug['service_p90'])}"],
            ["挂号至就诊等待均值/中位数/P90", f"{fmt_num(feb['wait_mean'])}/{fmt_num(feb['wait_median'])}/{fmt_num(feb['wait_p90'])}", f"{fmt_num(aug['wait_mean'])}/{fmt_num(aug['wait_median'])}/{fmt_num(aug['wait_p90'])}"],
            ["唯一预约时段数", fmt_int(feb["appt"]["slot_count"]), fmt_int(aug["appt"]["slot_count"])],
            ["预约满载率", fmt_pct(feb["appt"]["booking_rate"]), fmt_pct(aug["appt"]["booking_rate"])],
        ],
    )

    model_rows = []
    for fit_key, model_label, output_label, inputs in (
        ("model1_service", "Model 1", "服务时长", "W"),
        ("model2_service", "Model 2", "服务时长", "W, Bnear, Gnear"),
        ("model2_booking", "Model 2", "预约开放", "W, Bnear, Gnear, R"),
        ("model3_service", "Model 3", "服务时长", "W, Bnear, Gnear, 系统压力"),
        ("model3_booking", "Model 3", "预约开放", "W, Bnear, Gnear, R, 系统状态"),
    ):
        feb_fit = feb["model_fits"][fit_key]
        aug_fit = aug["model_fits"][fit_key]
        model_rows.append(
            [
                model_label,
                output_label,
                inputs,
                fmt_num(feb_fit["rmse"], 3),
                fmt_num(feb_fit["r2"], 3),
                fmt_int(feb_fit["n"]),
                fmt_num(aug_fit["rmse"], 3),
                fmt_num(aug_fit["r2"], 3),
                fmt_int(aug_fit["n"]),
            ]
        )
    write_latex_table(
        TABLE_DIR / "model_decision_fit.tex",
        "三类模型反馈决策函数拟合结果",
        "tab:model-decision-fit",
        ["模型", "策略输出", "输入状态", "2月RMSE", "2月R2", "2月样本", "8月RMSE", "8月R2", "8月样本"],
        model_rows,
        align="lllrrrrrr",
        resize_to_width=True,
    )

    plot_arrival_profile(analysis)
    plot_service_wait(analysis)
    plot_feedback_fit(analysis)
    plot_model_function_comparison(analysis)

    clean = {}
    for key, value in analysis.items():
        clean[key] = {
            k: v
            for k, v in value.items()
            if k not in {"services", "waits", "points"}
        }
        clean[key]["model_fits"] = {
            model: {
                kk: vv
                for kk, vv in fit.items()
                if kk
                not in {
                    "params",
                    "preds",
                    "actuals",
                    "pred_pairs",
                    "actual_pairs",
                }
            }
            for model, fit in value["model_fits"].items()
        }
    RESULTS_PATH.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")


def plot_arrival_profile(analysis: dict[str, object]) -> None:
    plt.figure(figsize=(8, 4.5))
    all_slots = sorted(set(analysis["feb"]["profile"]) | set(analysis["aug"]["profile"]))
    x = list(range(len(all_slots)))
    labels = {"feb": "2月窗口", "aug": "8月窗口"}
    for key, color in (("feb", "#2f6fbb"), ("aug", "#d95f02")):
        y = [analysis[key]["profile"].get(slot, 0.0) for slot in all_slots]
        plt.plot(x, y, marker="o", linewidth=1.8, markersize=3, label=labels[key], color=color)
    plt.xticks(x[:: max(1, len(x) // 12)], [all_slots[i] for i in x[:: max(1, len(x) // 12)]], rotation=45)
    plt.ylabel("平均挂号流入量")
    plt.xlabel("半小时时段")
    plt.title("两期样本半小时挂号流入曲线")
    plt.grid(True, alpha=0.25)
    plt.legend(frameon=False)
    plt.tight_layout()
    plt.savefig(FIGURE_DIR / "arrival_profile.png", dpi=180)
    plt.close()


def plot_service_wait(analysis: dict[str, object]) -> None:
    fig, axes = plt.subplots(1, 2, figsize=(8.5, 4))
    axes[0].boxplot(
        [analysis["feb"]["services"], analysis["aug"]["services"]],
        tick_labels=["2月窗口", "8月窗口"],
        showfliers=False,
        patch_artist=True,
        boxprops={"facecolor": "#dbe9f6"},
        medianprops={"color": "#b2182b", "linewidth": 1.5},
    )
    axes[0].set_ylabel("分钟")
    axes[0].set_title("服务时长分布")
    axes[0].grid(True, axis="y", alpha=0.25)
    axes[1].boxplot(
        [analysis["feb"]["waits"], analysis["aug"]["waits"]],
        tick_labels=["2月窗口", "8月窗口"],
        showfliers=False,
        patch_artist=True,
        boxprops={"facecolor": "#e5f5e0"},
        medianprops={"color": "#b2182b", "linewidth": 1.5},
    )
    axes[1].set_ylabel("分钟")
    axes[1].set_title("挂号至开始就诊等待时长")
    axes[1].grid(True, axis="y", alpha=0.25)
    fig.tight_layout()
    fig.savefig(FIGURE_DIR / "service_wait_boxplot.png", dpi=180)
    plt.close(fig)


def binned_means(points: list[tuple[float, float]], bins: int = 12) -> tuple[list[float], list[float]]:
    if not points:
        return [], []
    points = sorted(points)
    size = max(1, len(points) // bins)
    xs: list[float] = []
    ys: list[float] = []
    for i in range(0, len(points), size):
        chunk = points[i : i + size]
        xs.append(mean(x for x, _ in chunk))
        ys.append(mean(y for _, y in chunk))
    return xs, ys


def binned_actual_pred(actuals: list[float], preds: list[float], bins: int = 12) -> tuple[list[float], list[float], list[float]]:
    pairs = sorted(zip(actuals, preds), key=lambda pair: pair[0])
    if not pairs:
        return [], [], []
    size = max(1, len(pairs) // bins)
    xs: list[float] = []
    actual_means: list[float] = []
    pred_means: list[float] = []
    for start in range(0, len(pairs), size):
        chunk = pairs[start : start + size]
        xs.append(mean(actual for actual, _ in chunk))
        actual_means.append(mean(actual for actual, _ in chunk))
        pred_means.append(mean(pred for _, pred in chunk))
    return xs, actual_means, pred_means


def binned_actual_pred_by_x(
    actual_pairs: list[tuple[float, float]],
    pred_pairs: list[tuple[float, float]],
    bins: int = 12,
) -> tuple[list[float], list[float], list[float]]:
    pairs = sorted(zip(actual_pairs, pred_pairs), key=lambda pair: pair[0][0])
    if not pairs:
        return [], [], []
    size = max(1, len(pairs) // bins)
    xs: list[float] = []
    actual_means: list[float] = []
    pred_means: list[float] = []
    for start in range(0, len(pairs), size):
        chunk = pairs[start : start + size]
        xs.append(mean(actual_pair[0] for actual_pair, _ in chunk))
        actual_means.append(mean(actual_pair[1] for actual_pair, _ in chunk))
        pred_means.append(mean(pred_pair[1] for _, pred_pair in chunk))
    return xs, actual_means, pred_means


def booking_distribution(values: list[float]) -> list[float]:
    clean = [max(0.0, float(value)) for value in values if math.isfinite(float(value))]
    if not clean:
        return [0.0] * 5
    counts = [0, 0, 0, 0, 0]
    for value in clean:
        if value <= 1e-9:
            counts[0] += 1
        elif value <= 1.0:
            counts[1] += 1
        elif value <= 2.0:
            counts[2] += 1
        elif value <= 4.0:
            counts[3] += 1
        else:
            counts[4] += 1
    total = len(clean)
    return [count / total for count in counts]


def plot_feedback_fit(analysis: dict[str, object]) -> None:
    fig, axes = plt.subplots(2, 2, figsize=(11.5, 7.4))
    titles = {"feb": "2月窗口", "aug": "8月窗口"}
    for row, key in enumerate(("feb", "aug")):
        ax_service = axes[row][0]
        for fit_key, color, label in (
            ("model1_service", "#2166ac", "Model 1"),
            ("model2_service", "#4d9221", "Model 2"),
            ("model3_service", "#762a83", "Model 3"),
        ):
            fit = analysis[key]["model_fits"][fit_key]
            if not fit.get("actual_pairs") or not fit.get("pred_pairs"):
                continue
            xs, actual_means, pred_means = binned_actual_pred_by_x(
                fit["actual_pairs"],
                fit["pred_pairs"],
            )
            ax_service.plot(
                xs,
                actual_means,
                marker="o",
                linewidth=1.4,
                markersize=3.5,
                label=f"{label} 模型求解结果",
                color=color,
                alpha=0.55,
            )
            ax_service.plot(
                xs,
                pred_means,
                linewidth=2,
                label=f"{label} 反馈函数拟合",
                color=color,
                linestyle="--",
                alpha=0.95,
            )
        ax_service.set_title(f"{titles[key]}：服务时长输出对照")
        ax_service.set_xlabel("排队工作量W（分钟）")
        ax_service.set_ylabel("平均单人服务时长（分钟/人）")
        ax_service.set_ylim(bottom=0)
        ax_service.grid(True, alpha=0.25)

        ax_booking = axes[row][1]
        categories = ["0", "0-1", "1-2", "2-4", "4以上"]
        x_positions = list(range(len(categories)))
        bar_width = 0.18
        series: list[tuple[list[float], str, str, str, float, float]] = []
        for fit_key, color, label in (
            ("model2_booking", "#a6611a", "Model 2"),
            ("model3_booking", "#018571", "Model 3"),
        ):
            fit = analysis[key]["model_fits"][fit_key]
            series.append(
                (
                    booking_distribution(fit.get("actuals", [])),
                    color,
                    f"{label} 模型求解",
                    "",
                    0.82,
                    len(series) - 1.5,
                )
            )
            series.append(
                (
                    booking_distribution(fit.get("preds", [])),
                    color,
                    f"{label} 反馈函数",
                    "///",
                    0.32,
                    len(series) - 1.5,
                )
            )
        for values, color, label, hatch, alpha, offset in series:
            ax_booking.bar(
                [pos + offset * bar_width for pos in x_positions],
                values,
                width=bar_width,
                color=color,
                alpha=alpha,
                edgecolor=color,
                hatch=hatch,
                label=label,
            )
        ax_booking.set_title(f"{titles[key]}：后续开放数量区间占比")
        ax_booking.set_xlabel("后续开放数量区间（人）")
        ax_booking.set_ylabel("样本占比")
        ax_booking.set_xticks(x_positions)
        ax_booking.set_xticklabels(categories)
        ax_booking.set_ylim(0, 1)
        ax_booking.set_yticks([0, 0.25, 0.50, 0.75, 1.00])
        ax_booking.set_yticklabels(["0", "25%", "50%", "75%", "100%"])
        ax_booking.grid(True, alpha=0.25)

    axes[0][0].legend(frameon=False, fontsize=7.5, ncol=2)
    axes[0][1].legend(frameon=False, fontsize=7.5, ncol=2)
    fig.tight_layout()
    fig.savefig(FIGURE_DIR / "feedback_fit.png", dpi=180)
    plt.close(fig)


def plot_model_function_comparison(analysis: dict[str, object]) -> None:
    width = 0.36
    colors = {"feb": "#2f6fbb", "aug": "#d95f02"}
    labels = {"feb": "2月窗口", "aug": "8月窗口"}
    panels = [
        ((0, 0), [("Model 1", "model1_service"), ("Model 2", "model2_service"), ("Model 3", "model3_service")], "服务时长RMSE（分钟）", "rmse", "服务时长RMSE"),
        ((0, 1), [("Model 1", "model1_service"), ("Model 2", "model2_service"), ("Model 3", "model3_service")], "服务时长R²", "r2", "服务时长解释力"),
        ((1, 0), [("Model 2", "model2_booking"), ("Model 3", "model3_booking")], "预约开放RMSE（人）", "rmse", "预约开放RMSE"),
        ((1, 1), [("Model 2", "model2_booking"), ("Model 3", "model3_booking")], "预约开放R²", "r2", "预约开放解释力"),
    ]

    fig, axes = plt.subplots(2, 2, figsize=(11, 7.2))
    for (row, col), entries, ylabel, metric, title in panels:
        ax = axes[row][col]
        x = list(range(len(entries)))
        for offset, key in ((-width / 2, "feb"), (width / 2, "aug")):
            values: list[float] = []
            for _, fit_key in entries:
                value = float(analysis[key]["model_fits"][fit_key][metric])
                values.append(value if math.isfinite(value) else 0.0)
            ax.bar([value + offset for value in x], values, width=width, label=labels[key], color=colors[key], alpha=0.9)
        ax.set_xticks(x, [name for name, _ in entries])
        ax.set_ylabel(ylabel)
        ax.set_title(title)
        ax.grid(True, axis="y", alpha=0.25)
        if metric == "r2":
            ax.axhline(0, color="#555555", linewidth=0.8)
    axes[0][1].legend(frameon=False)
    fig.tight_layout()
    fig.savefig(FIGURE_DIR / "model_function_comparison.png", dpi=180)
    plt.close(fig)


def main() -> None:
    analysis = build_analysis()
    write_outputs(analysis)
    print(f"Wrote {RESULTS_PATH}")
    print(f"Wrote tables to {TABLE_DIR}")
    print(f"Wrote figures to {FIGURE_DIR}")


if __name__ == "__main__":
    main()
