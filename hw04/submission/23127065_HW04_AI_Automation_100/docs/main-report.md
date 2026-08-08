# HW04 — AI-Generated Automation Main Report

Student ID: **23127065**  
Submission: **23127065_HW04_AI_Automation_100**  
Public repository: <https://github.com/yuran1811/hcmus-sw-testing--hw>

## 1. Scope and requirements

The automated features are the same three selected in HW02: FR-06 Product Detail (Pool A), FR-09 Discount Coupons (Pool B), and FR-17 Coupon Management (Pool C). Exactly 12 original HW02 case documents per feature were copied into `test-cases/`, giving 36 logical cases. Every selected case is automated; none was excluded.

Test values and expected results are external JSON records in `test-data/`. The TypeScript specs validate data shape, reject duplicate IDs, and preserve the original case identifiers. The suite uses multiple assertion patterns, including visibility/text, exact values, URL transitions, element counts, native validity, and enabled/disabled UI state.

## 2. AI-first workflow and human review

OpenAI Codex assisted with case conversion, Playwright structure, validation, matrix orchestration, and report generation. Context7 was used to verify current Playwright reporter and multi-project configuration. The student reviewed each oracle against the HW02 cases and the visible SUT behavior.

The initial generated approach required several corrections:

1. `getByLabel` timed out because the SUT renders visible login labels without programmatic label/input association. The locator was made relative to the visible label and form.
2. The checkout total is an unlabeled spinbutton, so the test now locates its semantic role instead of assuming an accessible label.
3. Playwright correctly refuses `fill("abc")` on `input[type=number]`; the test now emulates user typing and validates the resulting UI response.
4. Coupon Admin initially produced false passes because native validity was checked before the asynchronously created row rendered. The final test waits for submission and React rendering, then requires that no invalid row exists.
5. Cleanup originally removed an invalid admin row before the failure screenshot. The final test captures and attaches the row in view before cleanup.
6. WebKit lacked host packages and its wrapper discarded `LD_LIBRARY_PATH`. A temporary no-sudo library overlay and reversible cached-wrapper adjustment allowed the real WebKit run. This environment workaround did not modify the SUT.

Strict expected outcomes were not weakened to make reports green. For example, a 10% coupon on 400,000 ₫ must save 40,000 ₫ even though the current SUT displays an impossible negative saving.

## 3. Implementation

| Feature | Data | Spec | Copied cases | Browsers |
| --- | --- | --- | ---: | --- |
| FR-06 Product Detail | `test-data/product-detail.json` | `tests/product-detail.spec.ts` | 12 | Chromium, Firefox, WebKit |
| FR-09 Coupons | `test-data/coupon.json` | `tests/coupon.spec.ts` | 12 | Chromium, Firefox, WebKit |
| FR-17 Coupon Admin | `test-data/coupon-admin.json` | `tests/coupon-admin.spec.ts` | 12 | Chromium, Firefox, WebKit |

`scripts/run-matrix.mjs` executes all nine feature/browser cells even when assertions fail. It creates a separate HTML report, JSON report, and raw artifact directory for each cell. `playwright.config.ts` adds the student ID, feature, browser, and ISO start time to report metadata/title. The reusable root Agent Skill adds a submission gate and an audit script that checks case documents, data, all nine reports, all 108 attempts, and every referenced attachment.

## 4. Authoritative execution

Final matrix interval: **2026-08-08T02:31:22.368Z to 2026-08-08T02:38:59.945Z** (09:31–09:38 ICT). All **108/108** executions were attempted.

| Feature | Chromium | Firefox | WebKit | Total |
| --- | ---: | ---: | ---: | ---: |
| Product Detail | 2 pass / 10 fail | 2 / 10 | 2 / 10 | 6 pass / 30 fail |
| Coupons | 7 / 5 | 7 / 5 | 7 / 5 | 21 pass / 15 fail |
| Coupon Admin | 9 / 3 | 9 / 3 | 9 / 3 | 27 pass / 9 fail |
| **Total** | **18 / 18** | **18 / 18** | **18 / 18** | **54 pass / 54 fail** |

The command exits 1 because genuine failures remain, but the assignment audit exits 0 with `errors: []`. Reports are located at `reports/html/<feature>/<browser>/index.html`; the exact per-case status and attachments are in `reports/run-manifest.json`.

## 5. Defects and gap analysis

The 54 failing executions map to nine distinct defects, each reproduced in all three browsers:

| Defect key | Failed executions | GitHub |
| --- | ---: | --- |
| FR06-MISSING-CATEGORY | 3 | [#22](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/22) |
| FR06-FIRST-CLICK-IGNORED | 9 | [#23](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/23) |
| FR06-QUANTITY-NOT-VALIDATED | 15 | [#24](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) |
| FR06-UNAUTHENTICATED-CART-ADD | 3 | [#25](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/25) |
| FR09-COUPON-ALLOWS-GUEST | 3 | [#26](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/26) |
| FR09-PERCENT-CALCULATION | 6 | [#27](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/27) |
| FR09-THRESHOLD-EXCLUDES-EQUALITY | 6 | [#28](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/28) |
| FR17-NEGATIVE-MINIMUM | 3 | [#29](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/29) |
| FR17-NONPOSITIVE-DISCOUNT | 6 | [#30](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/30) |

The complete report and screenshots are in `docs/bug-report.md` and `evidence/bugs/`. Current coverage is intentionally limited to the selected 36 HW02 UI cases; it does not claim API, mobile, load, accessibility, or security penetration coverage.

## 6. Agent Skill

The existing `.agents/skills/automation-test/` was updated rather than duplicated. It now covers external test data, copied case documents, 3×3 execution, separate labeled reports, screenshot-first defect triage, GitHub issue publication, and a repeatable audit gate. Its metadata passes the Skill Creator validator, and the assignment audit passes against this submission.

## 7. Submission limitations and human actions

The narrated videos are deliberately represented by conspicuous placeholders because AI cannot provide the student's voice, face-cam, `whoami`, or `hostname` evidence. Recording scripts are included in Vietnamese. The Git-history constraint is also not satisfied: only two current commits modify these HW04 specs, both on one date; no commits were backdated or fabricated. This folder is left unzipped as requested.

## 8. Reproduction commands

```sh
npm install
npx playwright install
npm run typecheck
npm run list
npm run run:matrix
```

Run the root audit command shown in `README.md` after the matrix. A nonzero matrix exit with 108 attempted cases is expected until the nine SUT defects are fixed.
