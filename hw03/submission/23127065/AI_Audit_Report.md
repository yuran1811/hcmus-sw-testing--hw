# AI Audit Report

Declaration: **I use AI tools for the following tasks.**

| Interaction | AI tool | Date/time | Prompt | Output used | Human review/correction |
| --- | --- | --- | --- | --- | --- |
| AI-01 | OpenAI Codex | 29/07/2026, Asia/Ho_Chi_Minh | “following the guiding principles in hw03/docs/requirement.pdf, use the SUT at ../hcmus-sw-testing--eshop-sut to run services (front/backend) to finish the task 1 and task 2 (phase 1 only) ... use context7” | Extracted assignment constraints, inspected existing drafts and proposed scope/options. | Rejected the unrelated Lumiere Cinema usability file and all synthetic-persona content. Confirmed that real participant data cannot be fabricated. |
| AI-02 | OpenAI Codex | 29/07/2026 | “cart + coupons for task 1, and flow ‘Thêm nhiều sản phẩm vào giỏ → Chỉnh sửa số lượng/xoá sản phẩm → Checkout không coupon’ for task 2” | Locked two Task 1 screens and one no-coupon usability flow. | Student supplied the final scope; AI did not infer group uniqueness. |
| AI-03 | OpenAI Codex | 29/07/2026 | “make it as placeholder first, i will fill them in later.” | Replaced identities and pilot evidence with explicit placeholder tokens and a completion warning. | Verified no plausible fake participant, quote, timing or SUS score remained. |
| AI-04 | OpenAI Codex | 29/07/2026 | “Implement the plan.” | Created and ran the Playwright checklist, captured fail-only evidence, generated reports/XLSX/PDF, technical rehearsal and bug drafts. | Corrected automation errors caused by SPA reload/state timing; visually checked representative screenshots and preserved product failures only after rerun. |
| AI-05 | Context7 MCP using official Playwright documentation | 29/07/2026 | Current guidance for local multi-service GUI testing, resilient locators, web-first assertions and failure screenshots. | Used role/label locators, awaited UI state, isolated browser contexts, and full-page screenshots only on failures. | Pinned Playwright 1.61.0 after 1.54.1 proved incompatible with Ubuntu 26.04; did not change the SUT’s dependency versions. |

## Prompt/output preservation

The verbatim user prompts are recorded above. Full assistant messages and tool traces remain in the Codex session history; this report records the outputs that materially influenced submitted artifacts without copying transient logs or secrets. GitHub credentials and unmasked personal contacts are intentionally excluded.

## Human accountability checklist

- [x] Compared the checklist with FR-07, FR-17, IA-01..IA-04 and SEC-04.
- [x] Added human-review gaps and documented why the AI draft missed them.
- [x] Re-ran the automation after correcting harness errors; did not count harness errors as SUT bugs.
- [x] Kept screenshots only for Failed items.
- [x] Clearly separated the automated technical rehearsal from the required human pilot.
- [ ] Replace participant and pilot placeholders with genuine evidence before final submission.
- [ ] Review every GitHub issue and report statement as the submitting student.

