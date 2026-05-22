#!/usr/bin/env python3
"""Build reproducible figures and LaTeX tables for the graduate thesis.

The empirical artifacts focus on arrival patterns, consultation-time
distributions, model parameters, and queue-state feedback estimates for average
service time.
"""

from __future__ import annotations

import json
import math
from collections import Counter, defaultdict
from datetime import datetime, time, timedelta
from pathlib import Path

import analyze_data as ad


BASE_DIR = Path(__file__).resolve().parent
ANALYSIS_JSON = BASE_DIR / "analysis_results.json"
FIGURES_DIR = BASE_DIR / "figures"
TABLES_DIR = BASE_DIR / "tables"

MONTHS = [
    ("2023年2月1号到2023年2月14号", "Feb. 2023"),
    ("2023年8月1号到2023年8月14号", "Aug. 2023"),
]


def load_report() -> dict:
    if not ANALYSIS_JSON.exists():
        raise FileNotFoundError(
            f"{ANALYSIS_JSON} does not exist. Run analyze_data.py before plotting."
        )
    return json.loads(ANALYSIS_JSON.read_text(encoding="utf-8"))


def slot_key(dt_obj: datetime) -> datetime:
    return dt_obj.replace(minute=(dt_obj.minute // 30) * 30, second=0, microsecond=0)


def half_hour_slots(day) -> list[datetime]:
    cur = datetime.combine(day, time(7, 30))
    end = datetime.combine(day, time(17, 30))
    slots: list[datetime] = []
    while cur <= end:
        slots.append(cur)
        cur += timedelta(minutes=30)
    return slots


def build_arrival_profile(visits: list[dict[str, str]]) -> dict[str, float]:
    arrivals = Counter()
    dates = set()

    for row in visits:
        reg = ad.parse_dt(row.get("挂号时间"))
        if not reg:
            continue
        key = slot_key(reg)
        arrivals[key] += 1
        dates.add(key.date())

    slots: list[datetime] = []
    for day in sorted(dates):
        slots.extend(half_hour_slots(day))

    by_label_arrivals: defaultdict[str, list[int]] = defaultdict(list)
    for slot in slots:
        by_label_arrivals[slot.strftime("%H:%M")].append(arrivals[slot])

    return {
        label: sum(vals) / len(vals) for label, vals in by_label_arrivals.items()
    }


def collect_service_minutes(visits: list[dict[str, str]]) -> list[float]:
    values: list[float] = []
    for row in visits:
        start = ad.parse_dt(row.get("开始就诊时间"))
        end = ad.infer_consult_end(row, start)
        minutes = ad.minutes_between(start, end)
        if minutes is not None and 0 < minutes <= ad.MAX_CONSULT_MINUTES:
            values.append(minutes)
    return values


def build_month_results(month_key: str, visits: list[dict[str, str]], report: dict) -> dict:
    linear_fit = report[month_key]["fit_queue_service_duration"] or {
        "n": 0,
        "intercept": report[month_key]["s_base"],
        "slope": 0.0,
        "r": 0.0,
        "r2": 0.0,
    }
    exp_fit = report[month_key]["fit_queue_service_duration_exp"] or {
        "n": 0,
        "intercept": report[month_key]["s_base"],
        "slope": 0.0,
        "r2": 0.0,
        "rmse": 0.0,
        "aic": 0.0,
    }
    power_fit = report[month_key]["fit_queue_service_duration_power"] or {
        "n": 0,
        "intercept": report[month_key]["s_base"],
        "slope": 0.0,
        "r2": 0.0,
        "rmse": 0.0,
        "aic": 0.0,
    }
    duration_stats = report[month_key].get("feedback_service_duration_stats") or report[month_key]["service"]
    model_application = report[month_key].get("model_application", {})
    s_min = model_application.get("s_min") or max(2.0, duration_stats.get("p10") or report[month_key]["service"]["p10"])
    s_max = model_application.get("s_max") or min(15.0, duration_stats.get("p90") or report[month_key]["service"]["p90"])
    if s_max <= s_min:
        s_max = s_min + 1.0

    return {
        "arrival_profile": build_arrival_profile(visits),
        "linear_fit": linear_fit,
        "exp_fit": exp_fit,
        "power_fit": power_fit,
        "feedback_queue_stats": report[month_key].get("feedback_queue_stats", {}),
        "policy_params": {
            "s_min": s_min,
            "s_max": s_max,
            "s_base": report[month_key]["s_base"],
        },
    }


def fmt(value: float | None, digits: int = 2) -> str:
    if value is None:
        return "--"
    return f"{value:.{digits}f}"


def write_table(path: Path, caption: str, label: str, columns: str, header: str, rows: list[str]) -> None:
    body = "\n".join(rows)
    path.write_text(
        "\n".join(
            [
                r"\begin{table}[H]",
                r"\centering",
                r"\small",
                rf"\caption{{{caption}}}",
                rf"\label{{{label}}}",
                rf"\begin{{tabular}}{{{columns}}}",
                r"\toprule",
                header,
                r"\midrule",
                body,
                r"\bottomrule",
                r"\end{tabular}",
                r"\end{table}",
                "",
            ]
        ),
        encoding="utf-8",
    )


def build_latex_tables(report: dict) -> None:
    TABLES_DIR.mkdir(parents=True, exist_ok=True)
    feb = report[MONTHS[0][0]]
    aug = report[MONTHS[1][0]]

    write_table(
        TABLES_DIR / "descriptive_statistics.tex",
        "样本窗口核心运营指标",
        "tab:descriptive-statistics",
        "lrr",
        r"指标 & 2023年2月样本 & 2023年8月样本 \\",
        [
            rf"就诊记录数 & {feb['n_visits']:,} & {aug['n_visits']:,} \\",
            rf"预约时段数 & {feb['n_appointment_slots']:,} & {aug['n_appointment_slots']:,} \\",
            rf"医生样本数 & {feb['n_doctors']:,} & {aug['n_doctors']:,} \\",
            rf"日均挂号量（人） & {fmt(feb['avg_daily_visits'])} & {fmt(aug['avg_daily_visits'])} \\",
            rf"平均服务时长（分钟） & {fmt(feb['service']['mean'])} & {fmt(aug['service']['mean'])} \\",
            rf"服务时长95\%分位数（分钟） & {fmt(feb['service']['p95'])} & {fmt(aug['service']['p95'])} \\",
            rf"挂号至开始就诊平均等待（分钟） & {fmt(feb['wait_registration']['mean'])} & {fmt(aug['wait_registration']['mean'])} \\",
            rf"挂号至开始就诊95\%分位数（分钟） & {fmt(feb['wait_registration']['p95'])} & {fmt(aug['wait_registration']['p95'])} \\",
            rf"预约区间平均利用率 & {fmt(feb['appointment_utilization']['mean'])} & {fmt(aug['appointment_utilization']['mean'])} \\",
            rf"满载预约区间占比 & {fmt(feb['full_load_share'] * 100)}\% & {fmt(aug['full_load_share'] * 100)}\% \\",
        ],
    )

    write_table(
        TABLES_DIR / "parameter_calibration.tex",
        "模型参数的经验标定结果",
        "tab:parameter-calibration",
        "lrr",
        r"参数或统计量 & 2023年2月样本 & 2023年8月样本 \\",
        [
            rf"$s_{{\mathrm{{base}}}}$（分钟） & {fmt(feb['s_base'])} & {fmt(aug['s_base'])} \\",
            rf"$\sqrt{{v}}$（服务时长标准差，分钟） & {fmt(feb['service']['std'])} & {fmt(aug['service']['std'])} \\",
            rf"服务时长中位数（分钟） & {fmt(feb['service']['median'])} & {fmt(aug['service']['median'])} \\",
            rf"服务时长95\%分位数（分钟） & {fmt(feb['service']['p95'])} & {fmt(aug['service']['p95'])} \\",
            rf"局部 $C_{{\mathrm{{safe}}}}$ 代理值（分钟） & {fmt(feb['c_safe_proxy'])} & {fmt(aug['c_safe_proxy'])} \\",
            rf"半小时到达离散系数均值 & {fmt(feb['slot_dispersion_mean'])} & {fmt(aug['slot_dispersion_mean'])} \\",
            rf"模型局部 $\kappa$ 均值 & {fmt(feb['model_arrival_dispersion']['mean'])} & {fmt(aug['model_arrival_dispersion']['mean'])} \\",
            rf"早高峰挂号占比 & {fmt(feb['morning_share'] * 100)}\% & {fmt(aug['morning_share'] * 100)}\% \\",
            rf"高频医生平均服务时长变异系数 & {fmt(feb['active_doctor_service_cv'])} & {fmt(aug['active_doctor_service_cv'])} \\",
        ],
    )

    write_table(
        TABLES_DIR / "model_application.tex",
        "模型原型的经验标定检验",
        "tab:model-application",
        "lrrrrrr",
        r"样本窗口 & 状态单元数 & $C_{\mathrm{safe}}$ & 舒适占比 & 调整占比 & 触及下界占比 & $s^*$均值 \\",
        [
            rf"2023年2月 & {feb['model_application']['n_states']:,} & {fmt(feb['model_application']['c_safe'])} & {fmt(feb['model_application']['comfort_share'] * 100)}\% & {fmt(feb['model_application']['adjusted_share'] * 100)}\% & {fmt(feb['model_application']['lower_bound_share'] * 100)}\% & {fmt(feb['model_application']['target_duration']['mean'])} \\",
            rf"2023年8月 & {aug['model_application']['n_states']:,} & {fmt(aug['model_application']['c_safe'])} & {fmt(aug['model_application']['comfort_share'] * 100)}\% & {fmt(aug['model_application']['adjusted_share'] * 100)}\% & {fmt(aug['model_application']['lower_bound_share'] * 100)}\% & {fmt(aug['model_application']['target_duration']['mean'])} \\",
        ],
    )

    write_table(
        TABLES_DIR / "feedback_estimates.tex",
        "模型目标服务用时的反馈策略拟合与比较",
        "tab:feedback-estimates",
        "llrrrrr",
        r"样本窗口 & 策略形式 & $\hat a$ & $\hat b$ & $R^2$ & RMSE & AIC \\",
        [
            rf"2023年2月 & 线性型 & {fmt(feb['fit_queue_service_duration']['intercept'], 3)} & {fmt(-feb['fit_queue_service_duration']['slope'], 3)} & {fmt(feb['fit_queue_service_duration']['r2'], 3)} & {fmt(feb['fit_queue_service_duration']['rmse'], 3)} & {fmt(feb['fit_queue_service_duration']['aic'], 1)} \\",
            rf"2023年2月 & 指数型 & {fmt(feb['fit_queue_service_duration_exp']['intercept'], 3)} & {fmt(feb['fit_queue_service_duration_exp']['slope'], 3)} & {fmt(feb['fit_queue_service_duration_exp']['r2'], 3)} & {fmt(feb['fit_queue_service_duration_exp']['rmse'], 3)} & {fmt(feb['fit_queue_service_duration_exp']['aic'], 1)} \\",
            rf"2023年2月 & 幂函数型 & {fmt(feb['fit_queue_service_duration_power']['intercept'], 3)} & {fmt(feb['fit_queue_service_duration_power']['slope'], 3)} & {fmt(feb['fit_queue_service_duration_power']['r2'], 3)} & {fmt(feb['fit_queue_service_duration_power']['rmse'], 3)} & {fmt(feb['fit_queue_service_duration_power']['aic'], 1)} \\",
            rf"2023年8月 & 线性型 & {fmt(aug['fit_queue_service_duration']['intercept'], 3)} & {fmt(-aug['fit_queue_service_duration']['slope'], 3)} & {fmt(aug['fit_queue_service_duration']['r2'], 3)} & {fmt(aug['fit_queue_service_duration']['rmse'], 3)} & {fmt(aug['fit_queue_service_duration']['aic'], 1)} \\",
            rf"2023年8月 & 指数型 & {fmt(aug['fit_queue_service_duration_exp']['intercept'], 3)} & {fmt(aug['fit_queue_service_duration_exp']['slope'], 3)} & {fmt(aug['fit_queue_service_duration_exp']['r2'], 3)} & {fmt(aug['fit_queue_service_duration_exp']['rmse'], 3)} & {fmt(aug['fit_queue_service_duration_exp']['aic'], 1)} \\",
            rf"2023年8月 & 幂函数型 & {fmt(aug['fit_queue_service_duration_power']['intercept'], 3)} & {fmt(aug['fit_queue_service_duration_power']['slope'], 3)} & {fmt(aug['fit_queue_service_duration_power']['r2'], 3)} & {fmt(aug['fit_queue_service_duration_power']['rmse'], 3)} & {fmt(aug['fit_queue_service_duration_power']['aic'], 1)} \\",
        ],
    )


def set_matplotlib_style() -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    plt.rcParams.update(
        {
            "font.family": "DejaVu Sans",
            "axes.unicode_minus": False,
            "figure.dpi": 140,
            "savefig.dpi": 220,
            "axes.spines.top": False,
            "axes.spines.right": False,
        }
    )


def save_arrival_profile(month_results: dict) -> None:
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(10, 5), constrained_layout=True)
    for month_key, month_label in MONTHS:
        profile = month_results[month_key]["arrival_profile"]
        labels = sorted(profile.keys())
        ax.plot(labels, [profile[label] for label in labels], marker="o", linewidth=2, label=month_label)
    ax.set_title("Average half-hour arrivals")
    ax.set_xlabel("Time of day")
    ax.set_ylabel("Arrivals")
    ax.grid(axis="y", linestyle="--", alpha=0.35)
    ax.legend()
    ax.tick_params(axis="x", rotation=45)
    fig.savefig(FIGURES_DIR / "arrival_profile.png", bbox_inches="tight")
    plt.close(fig)


def save_service_distribution(service_by_month: dict[str, list[float]]) -> None:
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(9, 5), constrained_layout=True)
    bins = [i for i in range(0, 31)]
    colors = ["#2563eb", "#16a34a"]
    for (month_key, month_label), color in zip(MONTHS, colors):
        values = [value for value in service_by_month[month_key] if value <= 30]
        ax.hist(values, bins=bins, density=True, alpha=0.38, color=color, label=month_label)
    ax.set_title("Empirical consultation-time distribution")
    ax.set_xlabel("Effective consultation time (minutes)")
    ax.set_ylabel("Density")
    ax.grid(axis="y", linestyle="--", alpha=0.35)
    ax.legend()
    fig.savefig(FIGURES_DIR / "service_distribution.png", bbox_inches="tight")
    plt.close(fig)


def save_model_framework() -> None:
    import matplotlib.pyplot as plt
    from matplotlib.patches import FancyBboxPatch

    fig, ax = plt.subplots(figsize=(11, 4.8), constrained_layout=True)
    ax.set_axis_off()
    boxes = [
        (0.05, 0.28, "Model 1\nFixed service time\nSingle clinic\nCapacity control"),
        (0.37, 0.28, "Model 2\nRandom service time\nSingle clinic\nRSI stress control"),
        (0.69, 0.28, "Model 3\nRandom service time\nMulti-clinic\nRouting + capacity control"),
    ]
    colors = ["#dbeafe", "#dcfce7", "#ffedd5"]
    for (x, y, text), color in zip(boxes, colors):
        patch = FancyBboxPatch(
            (x, y),
            0.24,
            0.44,
            boxstyle="round,pad=0.025,rounding_size=0.035",
            linewidth=1.4,
            edgecolor="#475569",
            facecolor=color,
            transform=ax.transAxes,
        )
        ax.add_patch(patch)
        ax.text(x + 0.12, y + 0.22, text, ha="center", va="center", fontsize=12, fontweight="bold")
    for x in [0.30, 0.62]:
        ax.annotate(
            "",
            xy=(x + 0.055, 0.50),
            xytext=(x, 0.50),
            arrowprops={"arrowstyle": "->", "lw": 2, "color": "#334155"},
            xycoords=ax.transAxes,
        )
    ax.text(
        0.5,
        0.86,
        "Progressive outpatient scheduling model family",
        ha="center",
        va="center",
        fontsize=15,
        fontweight="bold",
        transform=ax.transAxes,
    )
    ax.text(
        0.5,
        0.14,
        "The decision scope expands from service-capacity control to joint routing and capacity coordination.",
        ha="center",
        va="center",
        fontsize=11,
        color="#475569",
        transform=ax.transAxes,
    )
    fig.savefig(FIGURES_DIR / "model_framework.png", bbox_inches="tight")
    plt.close(fig)


def save_feedback_policy(month_results: dict) -> None:
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(12, 4.8), constrained_layout=True)
    for ax, (month_key, month_label), color in zip(axes, MONTHS, ["#2563eb", "#16a34a"]):
        linear_fit = month_results[month_key]["linear_fit"]
        exp_fit = month_results[month_key]["exp_fit"]
        power_fit = month_results[month_key]["power_fit"]
        params = month_results[month_key]["policy_params"]
        queue_stats = month_results[month_key].get("feedback_queue_stats") or {}
        x_max = max(1.0, queue_stats.get("p95") or 20.0)
        xs = [x_max * i / 20 for i in range(21)]
        linear_ys = [
            max(params["s_min"], min(params["s_max"], linear_fit["intercept"] + linear_fit["slope"] * x))
            for x in xs
        ]
        exp_ys = [
            max(params["s_min"], min(params["s_max"], exp_fit["intercept"] * math.exp(-exp_fit["slope"] * x)))
            for x in xs
        ]
        power_ys = [
            max(params["s_min"], min(params["s_max"], power_fit["intercept"] * (1 + x) ** (-power_fit["slope"])))
            for x in xs
        ]
        ax.plot(xs, linear_ys, color=color, linewidth=2.4, marker="o", markersize=3, label="Linear")
        ax.plot(xs, exp_ys, color="#f97316", linewidth=2.2, linestyle="--", marker="s", markersize=3, label="Exponential")
        ax.plot(xs, power_ys, color="#7c3aed", linewidth=2.2, linestyle="-.", marker="^", markersize=3, label="Power")
        ax.axhline(params["s_base"], color="#64748b", linestyle="--", linewidth=1.3, label="Mean duration")
        ax.set_title(f"{month_label}: fitted model-implied service time")
        ax.set_xlabel("Doctor-level queue at slot start")
        ax.set_ylabel("Model-implied target service time (minutes)")
        ax.grid(True, linestyle="--", alpha=0.35)
        ax.legend()
    fig.savefig(FIGURES_DIR / "feedback_policy.png", bbox_inches="tight")
    plt.close(fig)


def save_figures(month_results: dict, service_by_month: dict[str, list[float]]) -> None:
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    set_matplotlib_style()
    save_model_framework()
    save_arrival_profile(month_results)
    save_service_distribution(service_by_month)
    save_feedback_policy(month_results)


def main() -> None:
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    TABLES_DIR.mkdir(parents=True, exist_ok=True)

    report = load_report()
    sheets = ad.load_sheets(ad.ODS_PATH)
    month_results: dict[str, dict] = {}
    service_by_month: dict[str, list[float]] = {}

    for month_key, _month_label in MONTHS:
        visits = sheets[f"{month_key}就诊"]
        month_results[month_key] = build_month_results(month_key, visits, report)
        service_by_month[month_key] = collect_service_minutes(visits)

    build_latex_tables(report)
    save_figures(month_results, service_by_month)

    print(f"Wrote LaTeX tables to {TABLES_DIR}")
    print(f"Wrote matplotlib figures to {FIGURES_DIR}")


if __name__ == "__main__":
    main()
