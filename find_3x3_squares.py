from __future__ import annotations

from functools import lru_cache
from itertools import product


SIZE = 3
OLD_TARGET = 11
NEW_TARGET = 13

FROM_DIGIT = 6
TO_DIGIT = 9

# 搜索范围。若要求全是非负整数，可改成 0, 11；那组条件无解。
MIN_VALUE = -5
MAX_VALUE = 16
VALUES = tuple(range(MIN_VALUE, MAX_VALUE + 1))
VALUE_INDEX = {value: index for index, value in enumerate(VALUES)}

MAX_SHOW = 20


def required_change_count() -> int:
    """How many FROM_DIGIT values must become TO_DIGIT values."""
    total_gap = SIZE * (NEW_TARGET - OLD_TARGET)
    single_gap = TO_DIGIT - FROM_DIGIT
    if single_gap <= 0 or total_gap % single_gap != 0:
        raise ValueError("目标总和差不能由当前数字替换方式得到")
    return total_gap // single_gap


def count_key(cells: tuple[int, ...]) -> tuple[int, ...]:
    counts = [0] * len(VALUES)
    for value in cells:
        counts[VALUE_INDEX[value]] += 1
    return tuple(counts)


def duplicate_cells(counts: tuple[int, ...]) -> int:
    """Extra repeated cells beyond one copy of each used digit."""
    return sum(max(0, count - 1) for count in counts)


def used_digit_count(counts: tuple[int, ...]) -> int:
    return sum(count > 0 for count in counts)


def format_counts(counts: tuple[int, ...]) -> str:
    parts = [f"{value}x{count}" for value, count in zip(VALUES, counts) if count]
    return " ".join(parts)


def print_matrix(matrix: tuple[tuple[int, ...], ...]) -> None:
    for row in matrix:
        print(" ".join(str(value) for value in row))


@lru_cache(maxsize=None)
def row_patterns(target: int) -> tuple[tuple[int, ...], ...]:
    return tuple(row for row in product(VALUES, repeat=SIZE) if sum(row) == target)


@lru_cache(maxsize=None)
def row_pattern_counts(target: int) -> tuple[tuple[tuple[int, ...], tuple[int, ...]], ...]:
    return tuple((row, count_key(row)) for row in row_patterns(target))


@lru_cache(maxsize=None)
def min_sum_from_counts(counts: tuple[int, ...], cell_count: int) -> int:
    total = 0
    left = cell_count
    for value, count in zip(VALUES, counts):
        take = min(left, count)
        total += take * value
        left -= take
        if left == 0:
            return total
    raise ValueError("剩余数字不够填充")


@lru_cache(maxsize=None)
def max_sum_from_counts(counts: tuple[int, ...], cell_count: int) -> int:
    total = 0
    left = cell_count
    for value, count in zip(reversed(VALUES), reversed(counts)):
        take = min(left, count)
        total += take * value
        left -= take
        if left == 0:
            return total
    raise ValueError("剩余数字不够填充")


def columns_can_still_reach(
    column_sums: tuple[int, ...],
    rows_left: int,
    counts: tuple[int, ...],
    target: int,
) -> bool:
    min_possible = min_sum_from_counts(counts, rows_left)
    max_possible = max_sum_from_counts(counts, rows_left)
    return all(
        min_possible <= target - column_sum <= max_possible
        for column_sum in column_sums
    )


@lru_cache(maxsize=None)
def arrangements_for_counts(
    counts: tuple[int, ...],
    target: int,
) -> tuple[tuple[tuple[int, ...], ...], ...]:
    """All 3x3 arrangements using exactly counts and line sum target."""
    results: list[tuple[tuple[int, ...], ...]] = []
    rows = row_pattern_counts(target)

    def backtrack(
        row_index: int,
        column_sums: tuple[int, ...],
        remaining_counts: tuple[int, ...],
        chosen_rows: list[tuple[int, ...]],
    ) -> None:
        if row_index == SIZE:
            if all(value == target for value in column_sums) and sum(remaining_counts) == 0:
                results.append(tuple(chosen_rows))
            return

        rows_left_after_this = SIZE - row_index - 1
        for row, row_counts in rows:
            if any(row_counts[i] > remaining_counts[i] for i in range(len(VALUES))):
                continue

            next_column_sums = tuple(
                column_sums[col] + row[col] for col in range(SIZE)
            )

            next_counts = tuple(
                remaining_counts[i] - row_counts[i] for i in range(len(VALUES))
            )
            if not columns_can_still_reach(
                next_column_sums,
                rows_left_after_this,
                next_counts,
                target,
            ):
                continue

            chosen_rows.append(row)
            backtrack(row_index + 1, next_column_sums, next_counts, chosen_rows)
            chosen_rows.pop()

    backtrack(0, (0,) * SIZE, counts, [])
    return tuple(results)


def line_sum_matrices(target: int):
    rows = row_patterns(target)

    def backtrack(
        row_index: int,
        column_sums: tuple[int, ...],
        chosen_rows: list[tuple[int, ...]],
    ):
        if row_index == SIZE:
            if all(value == target for value in column_sums):
                yield tuple(chosen_rows)
            return

        rows_left_after_this = SIZE - row_index - 1
        min_possible = rows_left_after_this * VALUES[0]
        max_possible = rows_left_after_this * VALUES[-1]

        for row in rows:
            next_column_sums = tuple(
                column_sums[col] + row[col] for col in range(SIZE)
            )
            if any(
                target - column_sum < min_possible
                or target - column_sum > max_possible
                for column_sum in next_column_sums
            ):
                continue

            chosen_rows.append(row)
            yield from backtrack(row_index + 1, next_column_sums, chosen_rows)
            chosen_rows.pop()

    yield from backtrack(0, (0,) * SIZE, [])


def change_counts(counts: tuple[int, ...], change_count: int) -> tuple[int, ...]:
    changed = list(counts)
    changed[VALUE_INDEX[FROM_DIGIT]] -= change_count
    changed[VALUE_INDEX[TO_DIGIT]] += change_count
    return tuple(changed)


def find_solutions(limit: int = MAX_SHOW) -> list[tuple]:
    if FROM_DIGIT not in VALUE_INDEX or TO_DIGIT not in VALUE_INDEX:
        raise ValueError("搜索范围必须包含要替换的数字")

    change_count = required_change_count()
    old_by_counts: dict[tuple[int, ...], list] = {}

    for old_matrix in line_sum_matrices(OLD_TARGET):
        old_counts = count_key(tuple(value for row in old_matrix for value in row))
        if old_counts[VALUE_INDEX[FROM_DIGIT]] < change_count:
            continue

        if old_counts not in old_by_counts:
            old_by_counts[old_counts] = [old_matrix, 0]
        old_by_counts[old_counts][1] += 1

    solutions = []

    for old_counts, (old_matrix, old_total) in old_by_counts.items():
        new_counts = change_counts(old_counts, change_count)
        new_arrangements = arrangements_for_counts(new_counts, NEW_TARGET)
        if not new_arrangements:
            continue

        score = (
            duplicate_cells(old_counts) + duplicate_cells(new_counts),
            duplicate_cells(old_counts),
            duplicate_cells(new_counts),
            -used_digit_count(old_counts),
            -used_digit_count(new_counts),
        )
        solutions.append(
            (
                score,
                old_counts,
                new_counts,
                old_matrix,
                new_arrangements[0],
                old_total,
                len(new_arrangements),
            )
        )

    solutions.sort(key=lambda item: item[0])
    return solutions[:limit]


def main() -> None:
    change_count = required_change_count()
    solutions = find_solutions()

    print(
        f"需要把 {change_count} 个 {FROM_DIGIT} 变成 {TO_DIGIT}，"
        f"搜索范围 {MIN_VALUE}..{MAX_VALUE}，"
        f"找到 {len(solutions)} 个重复数字较少的候选：\n"
    )

    for index, item in enumerate(solutions, start=1):
        _, old_counts, new_counts, old_matrix, new_matrix, old_total, new_total = item

        print(f"方案 {index}")
        print(
            f"原数字：{format_counts(old_counts)} "
            f"(重复格数 {duplicate_cells(old_counts)}，可排列 {old_total} 种)"
        )
        print_matrix(old_matrix)
        print()
        print(
            f"改后数字：{format_counts(new_counts)} "
            f"(重复格数 {duplicate_cells(new_counts)}，可排列 {new_total} 种)"
        )
        print_matrix(new_matrix)
        print("-" * 24)


if __name__ == "__main__":
    main()
