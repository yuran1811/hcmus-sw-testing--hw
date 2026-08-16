---
name: performance-test-auditor
description: Run, summarize, and audit Apache JMeter performance-test evidence. Use for JMX validation, CLI Load/Stress/Spike or endurance execution, JTL metric extraction, HTML dashboard generation, evidence completeness checks, and separating machine-verifiable results from screenshots, narration, or human critique.
---

# Performance Test Auditor

Use a fail-closed workflow: never infer that a missing artifact passed and never invent raw metrics, screenshots, issue links, hardware facts, or video evidence.

## Workflow

1. Read the assignment or acceptance criteria and build an artifact checklist. For HW05-style work, read [references/evidence-checklist.md](references/evidence-checklist.md).
2. Run `scripts/validate-jmx.py test-plans` and inspect each JMX plan. Confirm all three independent CSV sources, Login → Search → Checkout ordering, JWT extraction/propagation, assertions, timer, parameterized concurrency/duration, parent workflow transaction, and the required listener/report type.
3. Execute from the submission root with `scripts/run-jmeter.sh`. Use a fresh JTL path and an absent report directory. Run in CLI mode.
4. Summarize the JTL with `scripts/analyze-jtl.py`. Report the parent workflow and each endpoint separately; never turn the sum of HTTP sampler samples into a completed-workflow total.
5. For an endurance run, start `scripts/monitor-process.sh` against the backend PID and keep its CSV beside the endurance JTL.
6. Cross-check every number quoted in the report against the generated summary or raw JTL. Label interpretations separately from measured values.
7. Audit artifacts with `scripts/audit-evidence.sh`. Keep missing human evidence visible as `MISSING`; do not replace it with prose.
8. Require the student to review AI analysis, record corrections with exact JTL values, capture real resource/hardware evidence, narrate the demo, publish links, and sign declarations.

## Commands

```bash
scripts/run-jmeter.sh /path/to/jmeter test-plans/plan.jmx results/run.jtl reports/run \
  -Jthreads=20 -Jramp=20 -Jduration=120
scripts/validate-jmx.py test-plans
scripts/analyze-jtl.py results/run.jtl --markdown results/run-summary.md
scripts/monitor-process.sh 12345 results/endurance-resource.csv 5
scripts/audit-evidence.sh .
```

Treat an execution as verified only when JMeter exits successfully, the JTL has at least one sample, the HTML dashboard contains `index.html`, and the summary can be recomputed.
