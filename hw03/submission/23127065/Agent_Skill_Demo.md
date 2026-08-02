# Agent Skill Demonstrations

Skill: [`gui-checklist-runner`](../../../.agents/skills/gui-checklist-runner/SKILL.md)

These recordings demonstrate the reusable skill against the running EShop SUT. They are automation demonstrations and are **not** human usability sessions or pilot evidence.

## Invocation

```text
$gui-checklist-runner
Requirement: hw03/docs/requirement.pdf
SUT: ../hcmus-sw-testing--eshop-sut
Submission: hw03/submission/23127065
Targets: Cart screen checklist and no-coupon checkout technical rehearsal
Deliverables: live execution, reports, video, and trace
```

Reproduce after starting the backend, customer frontend, and admin frontend:

```bash
cd hw03/submission/23127065/tests/automation
npm run demo
```

## Demonstration videos

| Demonstration | Complete screen or flow | Local recording | Diagnostic trace | YouTube link |
| --- | --- | --- | --- | --- |
| Task 1 — Cart screen | Empty cart → add multiple products → inspect populated cart → remove product → continue shopping | [WEBM](evidence/agent-skill/task1-cart-screen.webm) | [Trace](evidence/agent-skill/task1-cart-screen-trace.zip) | `[YOUTUBE_TASK1_DEMO_URL]` |
| Task 2 — No-coupon checkout | Login → add multiple products → remove one → checkout without coupon → successful order → inspect the post-checkout cart defect | [WEBM](evidence/agent-skill/task2-no-coupon-flow.webm) | [Trace](evidence/agent-skill/task2-no-coupon-flow-trace.zip) | `[YOUTUBE_TASK2_DEMO_URL]` |

The local recordings are complete artifacts. The two YouTube tokens are deliberately conspicuous placeholders for the student to replace after uploading the recordings.
