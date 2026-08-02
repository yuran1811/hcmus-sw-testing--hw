# AI Audit Report

Tuyên bố: **Tôi đã sử dụng công cụ AI cho các công việc sau.**

| Lần tương tác | Công cụ AI | Thời điểm | Yêu cầu | Kết quả đã sử dụng | Rà soát/điều chỉnh của người thực hiện |
| --- | --- | --- | --- | --- | --- |
| AI-01 | OpenAI Codex | 29/07/2026, Asia/Ho_Chi_Minh | “following the guiding principles in hw03/docs/requirement.pdf, use the SUT at ../hcmus-sw-testing--eshop-sut to run services (front/backend) to finish the task 1 and task 2 (phase 1 only) ... use context7” | Extracted assignment constraints, inspected existing drafts and proposed scope/options. | Rejected the unrelated Lumiere Cinema usability file and all synthetic-persona content. Confirmed that real participant data cannot be fabricated. |
| AI-02 | OpenAI Codex | 29/07/2026 | “cart + coupons for task 1, and flow ‘Thêm nhiều sản phẩm vào giỏ → Chỉnh sửa số lượng/xoá sản phẩm → Checkout không coupon’ for task 2” | Locked two Task 1 screens and one no-coupon usability flow. | Student supplied the final scope; AI did not infer group uniqueness. |
| AI-03 | OpenAI Codex | 29/07/2026 | “make it as placeholder first, i will fill them in later.” | Replaced identities and pilot evidence with explicit placeholder tokens and a completion warning. | Verified no plausible fake participant, quote, timing or SUS score remained. |
| AI-04 | OpenAI Codex | 29/07/2026 | “Implement the plan.” | Created and ran the Playwright checklist, captured fail-only evidence, generated reports/XLSX/PDF, technical rehearsal and bug drafts. | Corrected automation errors caused by SPA reload/state timing; visually checked representative screenshots and preserved product failures only after rerun. |
| AI-05 | Context7 MCP using official Playwright documentation | 29/07/2026 | Current guidance for local multi-service GUI testing, resilient locators, web-first assertions and failure screenshots. | Used role/label locators, awaited UI state, isolated browser contexts, and full-page screenshots only on failures. | Pinned Playwright 1.61.0 after 1.54.1 proved incompatible with Ubuntu 26.04; did not change the SUT’s dependency versions. |
| AI-06 | OpenAI Codex + Context7 MCP | 30/07/2026 | “complete the 7. Agent Skill in hw03/docs/requirement.pdf also. use context7” | Packaged `gui-checklist-runner`, added reusable references/templates, and recorded two complete SUT demonstrations with Playwright video and traces. | Applied Playwright 1.61 guidance to close contexts before saving stable videos; retained explicit YouTube placeholders rather than claiming unpublished links. |

## Lưu giữ yêu cầu và kết quả đầu ra

Các yêu cầu nguyên văn của người dùng được ghi ở trên. Toàn bộ phản hồi của trợ lý và nhật ký công cụ vẫn nằm trong lịch sử phiên Codex; báo cáo này chỉ ghi những kết quả có ảnh hưởng trực tiếp đến hồ sơ nộp bài, không sao chép nhật ký tạm thời hoặc thông tin bí mật. Thông tin đăng nhập GitHub và thông tin liên hệ cá nhân chưa che được chủ động loại bỏ.
