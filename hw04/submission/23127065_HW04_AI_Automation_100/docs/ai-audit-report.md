# AI Audit Report — HW04

Declaration: **I use AI tools for the following tasks.**

## Tools declared

| Tool | Use |
| --- | --- |
| OpenAI Codex (GPT-5 family) | Planning, Playwright generation/review, test-data validation, runner and report code, debugging, documentation |
| Context7 MCP | Current Playwright HTML reporter and browser-project documentation |
| Playwright 1.62.1 | Real UI execution, HTML/JSON reports, screenshots, traces, and videos |
| code-review-graph | Repository structural review before targeted source inspection |
| GitHub CLI | Publishing and verifying issues #22–#30 |

## Interaction record

This record contains the actual user prompts available in the session. The client did not export exact message timestamps, so they are marked honestly instead of inventing times. Execution timestamps are taken from generated artifacts.

| Date/time | AI tool | User prompt | AI output and student review |
| --- | --- | --- | --- |
| 2026-08-08, exact message time unavailable | OpenAI Codex | `complete the hw04/docs/requirement.pdf: 6. (task 1), 7., 8., 9., 10. and 14. (partial in folders, not need to zip). use context7` | Proposed a submission plan covering 36 data-driven cases, nine browser reports, Skill update, audit/critique, and partial folder submission. Scope was checked against the PDF. |
| 2026-08-08, exact message time unavailable | OpenAI Codex | `add addition to the plan so that: 1. already have the .agents/skills/automation-test -> update/add to this dir 2. include the test cases in the submisison folder also 3. ensure all feature test cases be runned 4. create and take screenshot for each bug while running and issue for these bugs on github` | Revised the plan to update the existing root skill, copy all selected cases, require 108 attempts, capture one screenshot per distinct defect, and publish GitHub issues. |
| 2026-08-08, exact message time unavailable | OpenAI Codex | `Implement the plan.` | Implemented specs, data, runner, reports, evidence, Skill, GitHub issues, and documentation. Human-evidence items were left as placeholders. |
| 2026-08-08 09:17–09:25 ICT | OpenAI Codex + Playwright | Execute and repair the full matrix. | The AI first found unassociated labels and an invalid `fill("abc")`; those harness bugs were corrected. Human review rejected a false-positive admin assertion that checked validity before React rendered the created row. |
| 2026-08-08 09:31–09:38 ICT | OpenAI Codex + Playwright | Run the final artifact-integrity matrix and audit all attachments. | Produced the authoritative 108-attempt run: 54 passed, 54 failed, nine distinct defects. The audit confirmed all case documents, reports, and attachment paths exist. |
| 2026-08-08 09:39–09:40 ICT | OpenAI Codex + GitHub CLI | Publish test evidence and one issue per confirmed defect. | Pushed commit `5f8cc30`, verified all nine raw screenshots returned HTTP 200, updated issue #22, and created issues #23–#30. |

## Representative AI output and corrections

- Generated: role/label-based login locators. Correction: the SUT labels are visually present but not associated, so label-relative locators were required.
- Generated: direct text fill for an alphabetic number-input case. Correction: keyboard input was used because Playwright protects against impossible number-field fill values.
- Generated: immediate zero-row assertion for rejected admin coupons. Correction: wait for submit/render and capture the unexpected row before cleanup.
- Generated: automatic failure screenshots. Correction: admin cleanup made those screenshots hide the defect, so an explicit pre-cleanup attachment was added.
- Suggested environment install: system WebKit dependencies. Correction: sudo was unavailable; a temporary extracted-library overlay enabled a genuine WebKit run without changing the SUT.

The detailed conversion decisions are also recorded in `ai-conversion-log.md`. This appendix is a faithful summary of the available interaction record, not a fabricated verbatim transcript.
