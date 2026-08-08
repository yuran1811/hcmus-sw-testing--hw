# 23127065 — Ngô Nguyễn Thế Khoa — HW05

## Trạng thái bài nộp

Các test plan, CSV, raw JTL, HTML dashboard, endurance log, resource CSV, báo cáo và Agent Skill đã được tạo và kiểm tra tự động. Các bằng chứng chỉ con người mới có thể cung cấp vẫn được đánh dấu rõ trong [HUMAN_ACTION_REQUIRED.md](HUMAN_ACTION_REQUIRED.md); không có ảnh chụp, video, chữ ký hoặc GitHub Issue giả.

## Tự đánh giá

> **HUMAN FILL:** Sinh viên phải tự điền cột cuối sau khi xem lại toàn bộ bằng chứng. Không dùng điểm do AI đề xuất làm tự đánh giá cá nhân.

| STT | Tiêu chí | Điểm tối đa | Điểm sinh viên tự đánh giá |
| ---: | --- | ---: | ---: |
| 1 | Task 1 — Load testing | 20 | **[HUMAN FILL]** |
| 2 | Task 1 — Stress testing | 20 | **[HUMAN FILL]** |
| 3 | Task 1 — Spike testing | 20 | **[HUMAN FILL]** |
| 4 | Task 2 — AI analysis + misinterpretation hunt | 10 | **[HUMAN FILL]** |
| 5 | Task 3 — Continuous Performance Testing proposal (G9.6) | 10 | **[HUMAN FILL]** |
| 6 | Agent Skill | 10 | **[HUMAN FILL]** |
|  | **Tổng cộng** | **100** | **[HUMAN FILL]** |

## Tóm tắt kiểm thử

| Kịch bản | Nhóm endpoint | Mẫu | Lỗi | Throughput | p95 | Thời lượng |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Load | Read-heavy — `GET /api/products?search=...` | 2.936 | 0 | 24,699 req/s | 4 ms | 118,869 s |
| Stress | Auth-heavy — `POST /api/login` | 39.156 | 0 | 327,326 req/s | 3 ms | 119,624 s |
| Spike | Transactional — login + `POST /api/checkout` | 115.412 HTTP samples | 0 | 1.926,166 req/s tổng | 48 ms tổng | 59,918 s |
| Endurance | Read-heavy, 40 users | 30.882 | 0 | 51,529 req/s | 3 ms | 599,315 s |

Spike gồm 57.736 lần login và 57.676 lần checkout; không diễn giải 115.412 HTTP samples thành 115.412 giao dịch checkout.

**Ngưỡng endurance ổn định cao nhất đã kiểm thử:** 40 users, 51,529 req/s tính toàn run, p95 3 ms, error rate 0%, RSS backend tối đa 109.232 KiB (106,7 MiB). Đây không phải ngưỡng hỏng tuyệt đối của mọi máy.

## Liên kết

| Nội dung | Liên kết |
| --- | --- |
| Public repository | <https://github.com/yuran1811/hcmus-sw-testing--hw> — **HUMAN: push HW05 và kiểm tra thư mục submission xuất hiện** |
| Demo Load/Stress/Spike ≥ 6 phút | **[HUMAN FILL: unlisted YouTube URL]** |
| Demo Agent Skill end-to-end | **[HUMAN FILL: unlisted YouTube URL]** |
| GitHub Issue BUG-HW05-01 | **[HUMAN FILL: issue URL]** |

## Điều hướng

- [Main_Report.md](Main_Report.md) / `Main_Report.pdf`
- [AI_Audit_Report.md](AI_Audit_Report.md) / `AI_Audit_Report.pdf`
- [AI_Critique.md](AI_Critique.md) / `AI_Critique.pdf`
- [Bug_Report.md](Bug_Report.md)
- [Git_Commit_Log.txt](Git_Commit_Log.txt)
- [HUMAN_ACTION_REQUIRED.md](HUMAN_ACTION_REQUIRED.md)
- `test-plans/`, `data/`, `results/`, `reports/`, `evidence/`, `agent-skill/`
