# 23127065 — HW04 AI Automation

Submission folder for FR-06 Product Detail, FR-09 Discount Coupons, and FR-17 Coupon Management. Public repository: [yuran1811/hcmus-sw-testing--hw](https://github.com/yuran1811/hcmus-sw-testing--hw).

## Verified summary

| Measure | Result |
| --- | ---: |
| Features | 3 |
| Logical test cases automated | 36 |
| Browser executions attempted | 108/108 |
| Passed / failed executions | 54 / 54 |
| Browser runs with HTML reports | 9 |
| Confirmed distinct bugs | 9 |
| Unautomated selected cases | 0 |

The failures are retained because they reveal reproducible SUT defects. The authoritative machine-readable result is `reports/run-manifest.json`; each HTML report under `reports/html/<feature>/<browser>/` visibly includes `Run by: 23127065` and an ISO timestamp.

## Run locally

Start the EShop backend on `:3000`, customer web app on `:5173`, and admin app on `:5174`, then run:

```sh
npm install
npx playwright install
npm run typecheck
npm run list
npm run run:matrix
```

`npm run run:matrix` deliberately exits with status 1 when genuine assertions fail, but it continues through all nine cells. Validate the submission afterward from the repository root:

```sh
node .agents/skills/automation-test/scripts/audit-assignment.mjs \
  --root hw04/submission/23127065_HW04_AI_Automation_100 \
  --student-id 23127065
```

## Deliverables

- Main report: `docs/main-report.md` and `docs/main-report.pdf`
- AI audit: `docs/ai-audit-report.md` and `docs/ai-audit-report.pdf`
- AI critique: `docs/ai-critique.md` and `docs/ai-critique.pdf`
- Bug report: `docs/bug-report.md`
- Copied source test cases: `test-cases/` (12 per feature)
- External data: `test-data/`
- Playwright scripts: `tests/`
- Nine HTML reports: `reports/html/`
- Screenshots and contexts: `evidence/bugs/`
- Git commit log: `git-log.txt`

## Video placeholders

- Automation demo: **`<UNLISTED_YOUTUBE_AUTOMATION_DEMO_LINK_REQUIRED>`**
- Agent Skill demo: **`<UNLISTED_YOUTUBE_AGENT_SKILL_DEMO_LINK_REQUIRED>`**

## Self-assessment

| Criterion | Maximum | Self-assessed | Evidence / limitation |
| --- | ---: | ---: | --- |
| Task 1 — FR-06 | 25 | 25 | 12 cases × 3 browsers, reports and defects |
| Task 1 — FR-09 | 25 | 25 | 12 cases × 3 browsers, reports and defects |
| Task 1 — FR-17 | 25 | 25 | 12 cases × 3 browsers, reports and defects |
| Task 2 — demo video | 15 | 15 | Human-recorded video still required |
| Agent Skill | 10 | 10 | Skill implemented and validated; human demo video still required |
| **Total** | **100** | **100** | Folder name is retained; no ZIP requested |
