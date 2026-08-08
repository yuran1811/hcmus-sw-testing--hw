# AI Conversion and Human Review Log

| Feature / stage | AI proposal or assumption | Human review and final decision |
| --- | --- | --- |
| FR-06 locator | Use accessible labels for login/inputs | SUT label associations are missing; use visible-label-relative or role locators. |
| FR-06 invalid input | Fill `abc` into a number input | Use keyboard input because Playwright rejects impossible `fill`; keep missing UI validation as a defect. |
| FR-06 oracle | Treat first click behavior as implemented | Require immediate feedback after one click; preserve the failure. |
| FR-09 result | Check only the success message | Assert exact savings and final totals; this exposed the percentage formula defect. |
| FR-09 threshold | Mirror current `>` implementation | Keep requirement equality (`>=`) as the oracle. |
| FR-17 rejection | Check native validity and immediately check zero rows | Wait for submission/render, require no matching row, capture it before cleanup, then delete it in `finally`. |
| Matrix | Stop on first nonzero browser run | Continue all nine cells and fail only after recording all 108 attempts. |
| Evidence | Depend only on automatic failure screenshots | Add explicit pre-cleanup screenshot where cleanup would hide the defect. |

This is an honest decision log derived from the implemented session. It is not presented as a verbatim transcript.
