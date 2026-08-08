# HW04 Bug Report

Final evidence source: `reports/run-manifest.json` (108/108 attempted, 54 failures). Every issue below has a Playwright screenshot in `evidence/bugs/` and a public screenshot embedded on GitHub.

| Issue | Feature | Summary | Severity | Reproduction |
| --- | --- | --- | --- | ---: |
| [#22](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/22) | FR-06 | Product category is missing | Medium | 3/3 |
| [#23](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/23) | FR-06 | First add-to-cart click is ignored | High | 9/9 |
| [#24](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | FR-06 | Invalid quantities have no validation | High | 15/15 |
| [#25](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/25) | FR-06 | Guest add-to-cart has no authentication gate | High | 3/3 |
| [#26](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/26) | FR-09 | Guest can apply a coupon | High | 3/3 |
| [#27](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/27) | FR-09 | Percentage calculation returns impossible totals | Critical | 6/6 |
| [#28](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/28) | FR-09 | Exact minimum threshold is rejected | Medium | 6/6 |
| [#29](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/29) | FR-17 | Negative minimum order amount is accepted | High | 3/3 |
| [#30](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/30) | FR-17 | Zero and negative discounts are accepted | High | 6/6 |

## Evidence index

Each issue's exact steps, expected result, actual result, and screenshot Markdown are preserved in `docs/github-issues/`. The consolidated machine-readable mapping is `evidence/bugs/index.json`. Product and Coupon evidence uses Playwright's on-failure screenshot. Admin evidence is captured before the cleanup block removes the invalid row, so the created `0%` and `-1 ₫` records are visibly present.

## Triage notes

- These are distinct observable behaviors, not one issue per failing browser execution.
- All nine reproduce in Chromium, Firefox, and WebKit, so none is classified as browser-specific.
- Test-created admin coupons use unique codes and are deleted in `finally`, including when the assertion fails.
- Issues document the SUT behavior only; the SUT source was not modified.
