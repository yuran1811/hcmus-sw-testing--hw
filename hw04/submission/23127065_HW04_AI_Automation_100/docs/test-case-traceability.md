# Test Case Traceability

All listed Markdown cases are copied unchanged from HW02 into `test-cases/`; each ID maps to one external JSON row and one generated Playwright test in every browser.

| Feature | Selected IDs | JSON | Spec | Executions |
| --- | --- | --- | --- | ---: |
| FR-06 | TC-PRODUCT-DETAIL-001 through 012 | `product-detail.json` | `product-detail.spec.ts` | 36 |
| FR-09 | TC-COUPON-001 through 008, 012 through 015 | `coupon.json` | `coupon.spec.ts` | 36 |
| FR-17 | TC-COUPON-ADMIN-001, 002, 003, 006, 007, 008, 010, 011, 012, 020, 022, 024 | `coupon-admin.json` | `coupon-admin.spec.ts` | 36 |

The authoritative status for every ID/browser pair is `reports/run-manifest.json`. No selected case is skipped or marked did-not-run.
