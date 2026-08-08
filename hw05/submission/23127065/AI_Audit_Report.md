# AI Audit Report — HW05

## Thông tin

| Trường | Giá trị |
| --- | --- |
| Sinh viên | NGÔ NGUYỄN THẾ KHOA — 23127065 — 23KTPM3 |
| Công cụ AI | OpenAI Codex; Context7 MCP |
| Thời gian | 08/08/2026, Asia/Ho_Chi_Minh |

## Tuyên bố bắt buộc

> I use AI tools for the following tasks: extracting and tracing the assignment requirements; inspecting the real SUT routes; designing and validating JMeter plans; executing and summarizing JTL evidence; drafting the performance analysis, AI critique, continuous-testing proposal, documentation, and reusable Agent Skill.

Không dùng AI để tạo hoặc giả mạo raw JTL, ảnh resource monitor/hardware, GitHub Issue screenshot, video, giọng nói, chữ ký hay human review.

## AI-01 — Yêu cầu tổng

**Công cụ / thời gian:** OpenAI Codex — 08/08/2026, khoảng 18:55 ICT.

**Prompt của sinh viên:**

> “from hw05/docs/requirement.pdf, finish the requirements and verify the submission until meet all requirements and rules. my student id: 23127065. no need to pack to zip, and notice me all of where need human fill in. use context7”

**AI output:** AI đề xuất trích PDF làm source of truth, lập checklist traceable, audit submission, tạo thiếu sót máy có thể hoàn thành, chạy validation và tách riêng human-fill. AI xác định không được tạo `.jtl`, screenshot hoặc video giả.

**Rà soát:** HỢP LỆ. Submission ban đầu trống; phạm vi triển khai từ đầu là đúng. Việc không đóng ZIP làm theo yêu cầu trực tiếp của sinh viên.

## AI-02 — Trích requirement.pdf

**Công cụ / thời gian:** pdfplumber do Codex điều khiển — 08/08/2026.

**Prompt:** Trích toàn bộ text/table của `hw05/docs/requirement.pdf`, chú ý Requirements, Agent Skill, Anti-AI-Cheat, Submission Regulations và Assessment Template.

**AI output:** PDF có 9 trang; yêu cầu ba nhóm endpoint, ba plan Load/Stress/Spike, ba CSV riêng, ba report views khác nhau, JTL + HTML, screenshot resource/hardware, endurance 10–15 phút, video ≥ 6 phút, AI analysis + human correction, proposal CI, Agent Skill, AI Audit/Critique, Git commit log và README tự đánh giá.

**Rà soát:** HỢP LỆ sau khi trích riêng trang 4–6 và 8–9 vì output toàn PDF lần đầu bị giới hạn hiển thị. Không bỏ sót mục “missing any required document results in 0”.

## AI-03 — Khám phá SUT và chọn endpoint

**Công cụ / thời gian:** Codebase knowledge graph + OpenAI Codex — 08/08/2026.

**Prompt:** Dùng backend thật thay vì chỉ ví dụ trong PDF; tìm route và schema cho product search, login/lockout, checkout.

**AI output:** Chọn Load=`GET /api/products?search`, Stress=`POST /api/login`, Spike=`POST /api/login`→`POST /api/checkout`. Backend dùng port 3000, JWT bearer và body checkout gồm `total_amount`, `shipping_address`.

**Rà soát:** CẦN HUMAN CONFIRM. Route/method/body đã xác minh từ code, nhưng AI không thể biết lựa chọn của thành viên khác; sinh viên phải xác nhận uniqueness.

## AI-04 — Context7/JMeter

**Công cụ / thời gian:** Context7 MCP, library `/apache/jmeter` — 08/08/2026.

**Prompt:**

> Official current guidance for command-line non-GUI test execution, writing raw JTL results, generating the HTML dashboard, CSV Data Set Config, and why resource-heavy GUI listeners should be disabled during load execution.

**AI output:** Dùng `jmeter -n -t test.jmx -l test.jtl`; giảm listener, không dùng View Results Tree/Table trong load run; dùng CSV Data Set; ưu tiên CSV JTL; HTML ReportGenerator đọc CSV. Context7 cũng trả yêu cầu Java 17 cho nhánh tài liệu hiện hành.

**Rà soát:** HỢP LỆ. JMeter 5.6.3 được tải từ Apache, SHA-512 hợp lệ; máy dùng OpenJDK 26.0.2. View Results Tree chỉ giữ dạng debug listener disabled.

## AI-05 — Sinh và sửa test plan

**Công cụ / thời gian:** OpenAI Codex — 08/08/2026.

**Prompt:** Sinh ba plan data-driven, timer/assertion/override property, ba listener khác nhau và runner fail-closed.

**AI output:** Tạo ba JMX, ba CSV, `run-jmeter.sh`, `analyze-jtl.py`, evidence audit và process monitor.

**Rà soát:** CẦN ĐIỀU CHỈNH. Các lần đầu gặp: `sqlite3` native binding thiếu; `node-gyp` chọn Python 3.14; Java socket bị sandbox chặn; chạy dashboard song song tranh chấp thư mục temp. Đã sửa bằng Python hệ thống cho rebuild, backend cô lập port 3001, JMeter localhost ngoài sandbox, run tuần tự và temp dir riêng. Smoke được chấp nhận chỉ sau khi cả ba đạt 0 lỗi và có `index.html`.

## AI-06 — Kết quả đo và phân tích AI

**Công cụ / thời gian:** JMeter + Agent Skill + OpenAI Codex — 08/08/2026, 19:21–19:38 ICT.

**Prompt:** Chạy intended Load/Stress/Spike và endurance 10 phút; tính samples, failure, throughput, p50/p90/p95/p99/max; phân tích và đề xuất tối ưu.

**AI output:**

- Load: 2.936 samples, 0 lỗi, 24,699 req/s, p95 4 ms.
- Stress: 39.156, 0 lỗi, 327,326 req/s, p95 3 ms.
- Spike overall: 115.412 HTTP samples, 0 lỗi, 1.926,166 req/s, p95 48 ms; checkout riêng 57.676 samples, 963,966 req/s, p95 50 ms.
- Endurance: 30.882, 0 lỗi, 51,529 req/s, p95 3 ms, RSS max 109.232 KiB.
- Đề xuất index, WAL, pool, prepared statement, p95 gate.

**Rà soát:** CẦN ĐIỀU CHỈNH. Không gọi overall Spike là checkout throughput; không gọi endurance value là failure threshold; không kết luận memory leak từ một run; B-tree index không tự giúp `LIKE '%term%'`; generic SQLite pool thiếu căn cứ. Các sửa đổi ghi ở Main Report Mục 7.

## AI-07 — Agent Skill

**Công cụ / thời gian:** OpenAI skill-creator — 08/08/2026.

**Prompt:** Tạo skill tái dùng để run/audit JMeter và không giả bằng chứng người thật.

**AI output:** `performance-test-auditor` gồm SKILL.md, metadata, runner, JTL analyzer, resource monitor, evidence auditor và checklist.

**Rà soát:** HỢP LỆ VỀ CẤU TRÚC. Official validator báo `Skill is valid!`; runner/analyzer đã dùng trên bốn run. **HUMAN:** video end-to-end của skill chưa được cung cấp.

## Tổng hợp

| Phán quyết | Số tương tác |
| --- | ---: |
| HỢP LỆ | 3 |
| CẦN ĐIỀU CHỈNH | 3 |
| CẦN HUMAN CONFIRM | 1 |

## Chữ ký human review

> **HUMAN FILL:** Tôi đã đọc prompt/output, đối chiếu raw artifacts và chấp nhận/chỉnh sửa báo cáo trên.

| Họ tên | Ngày | Chữ ký |
| --- | --- | --- |
| **[HUMAN FILL]** | **[HUMAN FILL]** | **[HUMAN FILL]** |
