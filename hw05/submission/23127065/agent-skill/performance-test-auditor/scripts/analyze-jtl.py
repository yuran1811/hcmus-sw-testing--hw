#!/usr/bin/env python3
"""Compute reproducible performance metrics from a JMeter CSV JTL."""

from __future__ import annotations

import argparse
import csv
import math
from collections import defaultdict
from pathlib import Path


def percentile(values: list[int], fraction: float) -> int:
    ordered = sorted(values)
    return ordered[max(0, math.ceil(len(ordered) * fraction) - 1)]


def summarize(rows: list[dict[str, str]]) -> list[dict[str, object]]:
    groups: dict[str, list[dict[str, str]]] = defaultdict(list)
    groups["OVERALL"] = rows
    for row in rows:
        groups[row.get("label", "(unlabelled)")].append(row)

    output = []
    for label, samples in groups.items():
        elapsed = [int(row["elapsed"]) for row in samples]
        failures = sum(row.get("success", "").lower() != "true" for row in samples)
        timestamps = [int(row["timeStamp"]) for row in samples]
        end_times = [stamp + duration for stamp, duration in zip(timestamps, elapsed)]
        span_seconds = max((max(end_times) - min(timestamps)) / 1000, 0.001)
        output.append(
            {
                "label": label,
                "samples": len(samples),
                "failures": failures,
                "error_rate": failures * 100 / len(samples),
                "throughput": len(samples) / span_seconds,
                "average": sum(elapsed) / len(elapsed),
                "p50": percentile(elapsed, 0.50),
                "p90": percentile(elapsed, 0.90),
                "p95": percentile(elapsed, 0.95),
                "p99": percentile(elapsed, 0.99),
                "maximum": max(elapsed),
                "duration_seconds": span_seconds,
            }
        )
    return output


def render_markdown(summary: list[dict[str, object]]) -> str:
    lines = [
        "| Label | Samples | Failures | Error % | Throughput req/s | Avg ms | p50 | p90 | p95 | p99 | Max ms | Duration s |",
        "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ]
    for item in summary:
        lines.append(
            "| {label} | {samples} | {failures} | {error_rate:.3f} | {throughput:.3f} | "
            "{average:.1f} | {p50} | {p90} | {p95} | {p99} | {maximum} | {duration_seconds:.3f} |".format(**item)
        )
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("jtl", type=Path)
    parser.add_argument("--markdown", type=Path)
    args = parser.parse_args()

    with args.jtl.open(newline="", encoding="utf-8-sig") as handle:
        rows = list(csv.DictReader(handle))
    required = {"timeStamp", "elapsed", "label", "success"}
    if not rows:
        raise SystemExit("JTL contains no samples")
    missing = required - rows[0].keys()
    if missing:
        raise SystemExit(f"JTL is missing required columns: {sorted(missing)}")

    markdown = render_markdown(summarize(rows))
    print(markdown, end="")
    if args.markdown:
        args.markdown.parent.mkdir(parents=True, exist_ok=True)
        args.markdown.write_text(markdown, encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
