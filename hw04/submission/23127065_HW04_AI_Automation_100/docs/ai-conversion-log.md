# AI Conversion Log — HW04 Task 1

| Feature | Stage | Prompt / input reviewed | Outcome / human review |
| --- | --- | --- | --- |
| FR-06 | Analyse | SUT specification and ProductDetail UI | Identified product content, positive-integer quantity, and immediate feedback requirements. |
| FR-06 | Design | Twelve candidate cases | Retained content, default, boundary, invalid, and valid-quantity cases. |
| FR-06 | Review | Generated locator and assertion approach | Replaced positional selectors with role/text/input locators; kept the first-click feedback failure as a defect. |
| FR-09 | Analyse | Coupon rules C1–C5 and calculation formula | Designed threshold, expiry, unknown, authentication, casing, and fixed/percent cases. |
| FR-09 | Review | Checkout implementation | Kept the exact threshold and authentication expectations; do not accept the SUT's client-controlled total or incorrect percent calculation. |
| FR-17 | Analyse | Coupon CRUD requirement and admin UI | Modelled required fields plus valid and invalid numeric/date cases. |
| FR-17 | Review | Generated form coverage | Added cleanup and explicit negative expectations; browser-native validation is not treated as backend validation. |

All data records are stored in `test-data/`; the specs load and validate them at runtime. This log records actual work performed in this repository, not fabricated AI transcripts.
