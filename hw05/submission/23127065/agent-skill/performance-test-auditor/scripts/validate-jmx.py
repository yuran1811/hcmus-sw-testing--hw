#!/usr/bin/env python3
"""Fail-closed static checks for the HW05 unified workflow JMX plans."""

from __future__ import annotations

import argparse
import xml.etree.ElementTree as ET
from pathlib import Path


WORKFLOW = "Workflow: Login → Search → Checkout"
SCENARIOS = {
    "Load": ("23127065_Load_20260809.jmx", "Summary Report", "500", "500"),
    "Stress": ("23127065_Stress_20260809.jmx", "Aggregate Report", "100", "200"),
    "Spike": ("23127065_Spike_20260809.jmx", "View Results Tree (debug only)", "50", None),
}


def values(root: ET.Element, name: str) -> list[str]:
    return [node.text or "" for node in root.findall(f".//stringProp[@name='{name}']")]


def names(root: ET.Element, testclass: str) -> list[str]:
    return [node.get("testname", "") for node in root.findall(f".//*[@testclass='{testclass}']")]


def validate(plan: Path, scenario: str) -> list[str]:
    filename, listener, timer_delay, timer_range = SCENARIOS[scenario]
    failures: list[str] = []
    if plan.name != filename:
        failures.append(f"expected filename {filename}")
    try:
        root = ET.parse(plan).getroot()
    except ET.ParseError as error:
        return [f"invalid XML: {error}"]

    text = ET.tostring(root, encoding="unicode")
    for csv_name in ("auth-credentials.csv", "product-searches.csv", "checkout-payloads.csv"):
        if csv_name not in text:
            failures.append(f"missing CSV source {csv_name}")
    ordered = ["POST Login", "GET Product Search", "POST Checkout"]
    sampler_names = names(root, "HTTPSamplerProxy")
    if [name for name in sampler_names if name in ordered] != ordered:
        failures.append("samplers are not Login → Search → Checkout")
    if WORKFLOW not in names(root, "TransactionController"):
        failures.append("missing parent workflow Transaction Controller")
    if "Extract JWT" not in names(root, "JSONPostProcessor") or "Bearer JWT" not in names(root, "HeaderManager"):
        failures.append("missing JWT extraction or checkout bearer propagation")
    if "JWT extracted and structurally valid" not in names(root, "JSR223Assertion"):
        failures.append("missing JWT validation assertion")
    for assertion in ("Login HTTP 200", "Search HTTP 200", "Expected product fragment", "Checkout HTTP 200", "Checkout response contains orderId"):
        if assertion not in names(root, "ResponseAssertion"):
            failures.append(f"missing assertion {assertion}")
    if listener not in names(root, "ResultCollector"):
        failures.append(f"missing required listener {listener}")
    if scenario == "Spike":
        tree = next((node for node in root.findall(".//*[@testclass='ResultCollector']") if node.get("testname") == listener), None)
        if tree is None or tree.get("enabled") != "false":
            failures.append("Spike View Results Tree must be disabled")
    if timer_delay not in values(root, "ConstantTimer.delay"):
        failures.append(f"missing scenario think-time delay {timer_delay} ms")
    if timer_range is not None and timer_range not in values(root, "RandomTimer.range"):
        failures.append(f"missing scenario think-time range {timer_range} ms")
    return failures


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("plans", type=Path, help="directory containing the three JMX plans")
    args = parser.parse_args()
    failures = []
    for scenario, (filename, *_rest) in SCENARIOS.items():
        plan = args.plans / filename
        issues = validate(plan, scenario) if plan.is_file() else ["plan is missing"]
        if issues:
            failures.extend(f"{plan.name}: {issue}" for issue in issues)
        else:
            print(f"OK      {plan.name}")
    if failures:
        print("\n".join(f"MISSING {failure}" for failure in failures))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
