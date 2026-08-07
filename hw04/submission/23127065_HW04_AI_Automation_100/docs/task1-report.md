# HW04 Task 1 — AI-generated automation scripts

Student ID: **23127065**

## Requirement ledger

| Feature | Requirement | Cases | Data | Spec | Browsers | Reports |
| --- | --- | ---: | --- | --- | --- | --- |
| Product Detail | FR-06 | 12 | `product-detail.json` | `product-detail.spec.ts` | Chromium, Firefox, WebKit | `reports/html/product-detail/*` |
| Coupon | FR-09 | 12 | `coupon.json` | `coupon.spec.ts` | Chromium, Firefox, WebKit | `reports/html/coupon/*` |
| Coupon Admin | FR-17 | 12 | `coupon-admin.json` | `coupon-admin.spec.ts` | Chromium, Firefox, WebKit | `reports/html/coupon-admin/*` |

The suite uses visibility/text, value, attribute, count, and enabled-state assertions. Run results, timestamps, and all nine report locations are recorded in `reports/run-manifest.json` after `npm run run:matrix`.

## Execution status

The complete 9-cell matrix ran on 2026-08-08 (Asia/Ho_Chi_Minh) and generated all nine separate HTML report folders. Chromium and Firefox executed the tests and retained genuine failures, including the missing product category, coupon threshold/calculation defects, and coupon-admin validation defects. WebKit could not launch because this host lacks `libavif16` and `libmanette-0.2-0`; those report cells are environment-blocked, not product results. Every report has a visible `Run by: 23127065` label and ISO timestamp.

## Human review and AI critique

AI output initially encourages straightforward happy-path interaction checks, which is inadequate for this SUT. I reviewed the system requirements and source UI before retaining any case. The review exposed fragile possibilities: positional controls in the admin coupon table, fixed sleeps while waiting for React state, assuming a success response means a valid business result, and accepting a browser's native form validation as proof that the backend validates an input. I replaced those with user-facing locators, Playwright web-first assertions, explicit expected values in external data, and individual observable oracles. The resulting suite intentionally keeps requirements strict when the application violates them. For example, Product Detail should show feedback after one add-to-cart click, while the current code ignores that first click. Coupon calculations must follow the documented percentage formula, not the current implementation's incorrect arithmetic. The central lesson is that AI can accelerate case generation and boilerplate, but it cannot be trusted to define the oracle or infer the actual product contract. The student must compare each proposed test against the specification, inspect the UI and state dependencies, and preserve genuine failures as defect evidence rather than changing tests merely to turn reports green.

## Issue evidence

Created tracking issue: [#22 — Product Detail omits the product category](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/22). Its Playwright-captured public-page evidence is `evidence/github/issue-22.png`; it links existing SUT issue #62 rather than creating a duplicate.
