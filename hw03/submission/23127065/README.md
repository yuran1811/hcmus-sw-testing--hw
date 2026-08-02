# 23127065 — Ngô Nguyễn Thế Khoa — HW03 Task 1 + Task 2 Phase 1

## Delivery status

| Area | Status |
| --- | --- |
| Task 1 checklist design | Complete — 85 reviewed items across IA-01..IA-04 |
| Task 1 execution | Complete — local Chromium, Cart + Admin Coupon |
| Task 1 bug reporting | Complete in Markdown; GitHub links are inserted after issue publication |
| Task 2 Phase 1 design/instruments | Complete |
| Seven real recruits | Pending explicit `[P01_*]`..`[P07_*]` replacement by the student |
| Human pilot | Pending explicit `[PILOT_*]` replacement and evidence by the student |
| Task 2 Phase 2/3 | Out of scope |
| Task 3 cross-platform | Complete — full 85-item Task 1 matrix on Chrome, Firefox, and Safari-compatible WebKit; actual Safari, Firefox, and Chrome Cart evidence attached |
| Agent Skill | Complete locally — reusable skill and two recorded demonstrations; YouTube URL placeholders await student upload |

This package does not misrepresent placeholders or the automated technical rehearsal as real participant evidence.

## Test summary

| Metric | Value |
| --- | ---: |
| Screens tested | 2 — Customer Cart and Admin Coupon |
| Usability flows prepared | 1 |
| Checklist items designed/executed | 85 / 85 |
| Passed | 52 |
| Failed | 33 |
| Bug groups | 20 |
| Failure screenshots | 33 |
| Real participants entered | 0 / 7 — placeholders pending |
| Human pilot completed | 0 / 1 — placeholder pending |
| Task 3 cross-browser checks | 255 executed: 156 passed, 99 reproducible existing failures |

## Key files

- `23127065-report.md` and `23127065-report.pdf`: combined report.
- `GUI_Testing.md`, `GUI_Testing.pdf`, and `23127065_HW03_GUI_Checklist.xlsx`: Task 1 design and execution.
- `Bug_Report.md` and `evidence/task1/`: defect report and failure-only screenshots.
- `Cross_Browser_Testing.md` and `evidence/task3/`: Task 3 three-browser execution and labeled screenshots.
- `Usability_Testing.md`, `Usability_Testing_Phase1.pdf`, and `tests/usability/`: Task 2 Phase 1 preparation and technical rehearsal.
- `AI_Audit_Report.md`, `AI_Critique.md`, and `Git_Commit_Log.txt`: mandatory process evidence.
- `Agent_Skill_Demo.md` and `evidence/agent-skill/`: reusable skill invocation, two complete-flow videos, and Playwright traces.
- `tests/automation/`: reproducible Playwright execution and artifact validation.

## Reproduction

1. Start the EShop backend, customer frontend and admin frontend on ports 3000, 5173 and 5174.
2. In `tests/automation`, run `npm install` and `npx playwright install chromium`.
3. Run `npm run run`, `npm run rehearse`, `npm run demo`, `npm run generate`, then `npm run validate`.

The SUT database should be backed up before execution and restored afterward because the technical rehearsal creates an order and coupon checks use disposable data.

## Self-assessment for current requested scope

| Criterion | Maximum | Current evidence status |
| --- | ---: | --- |
| Task 1 — GUI checklist, execution, bugs | 30 | Complete |
| Task 2 Phase 1 — plan and prepare | Part of 40 | Structurally prepared; real recruitment and pilot evidence pending |
| Task 2 Phase 2/3 | Part of 40 | Not requested |
| Task 3 | 20 | Complete 85-item matrix across three browser engines; see `Cross_Browser_Testing.md` |
| Agent Skills | 10 | Reusable `gui-checklist-runner`, two local end-to-end videos and traces complete; replace two explicit YouTube URL placeholders after upload |
