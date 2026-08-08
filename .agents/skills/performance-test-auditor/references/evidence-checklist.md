# Performance evidence checklist

## Machine-verifiable

- Three distinct scenario plans named `{StudentID}_{ScenarioType}_{YYYYMMDD}.jmx`.
- Exactly one read-heavy, one auth-heavy, and one transactional mapping.
- One independent CSV file per endpoint group.
- Distinct listener/report types across Load, Stress, and Spike.
- One non-empty raw `.jtl` and one HTML dashboard with `index.html` per scenario.
- Endurance JTL lasting approximately 10–15 minutes with a numeric stability conclusion.
- Reported samples, error rate, throughput, p50, p90, p95, p99, and maximum match the raw JTL.
- Main report, AI Audit Report, AI Critique, README, bug report, and Git commit log exist.

## Human-attributable

- Endpoint uniqueness is confirmed with group members.
- Tool and backend resource monitor appear in the same real screenshot for each run.
- Hardware screenshot shows the real hostname and specifications.
- Demo is at least six minutes, unlisted, narrated by the student in Vietnamese, and shows the tool plus resource monitor together.
- The student critiques AI interpretations in 200–300 words and verifies cited JTL values.
- Public repository and any genuine GitHub issue links are published and checked.
- The student signs/accepts the AI declaration and self-assessment.

Missing human-attributable evidence must remain explicitly `MISSING` until supplied.
