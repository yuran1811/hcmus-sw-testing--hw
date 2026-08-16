# AI Audit Report — HW05

## Thông tin

| Trường | Giá trị |
| --- | --- |
| Sinh viên | NGÔ NGUYỄN THẾ KHOA — 23127065 — 23KTPM3 |
| Công cụ AI | OpenAI Codex; Context7 MCP |
| Thời gian | 08/08/2026, Asia/Ho_Chi_Minh |

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

**AI output:** Theo requirement cập nhật, cả Load, Stress và Spike dùng `POST /api/login` → `GET /api/products?search` → `POST /api/checkout`. Backend dùng port 3000, JWT bearer và body checkout gồm `total_amount`, `shipping_address`.

**Rà soát:** CẦN HUMAN CONFIRM. Route/method/body đã xác minh từ code, nhưng AI không thể biết lựa chọn của thành viên khác; sinh viên phải xác nhận uniqueness.

## AI-04 — Context7/JMeter

**Công cụ / thời gian:** Context7 MCP, library `/apache/jmeter` — 08/08/2026.

**Prompt:**

> Official current guidance for command-line non-GUI test execution, writing raw JTL results, generating the HTML dashboard, CSV Data Set Config, and why resource-heavy GUI listeners should be disabled during load execution.

**AI output:** Dùng `jmeter -n -t test.jmx -l test.jtl`; giảm listener, không dùng View Results Tree/Table trong load run; dùng CSV Data Set; ưu tiên CSV JTL; HTML ReportGenerator đọc CSV. Context7 cũng trả yêu cầu Java 17 cho nhánh tài liệu hiện hành.

**Rà soát:** HỢP LỆ. JMeter 5.6.3 được tải từ Apache, SHA-512 hợp lệ; máy dùng OpenJDK 26.0.2. View Results Tree chỉ giữ dạng debug listener disabled.

## AI-05 — Sinh và sửa test plan

**Công cụ / thời gian:** OpenAI Codex — 08/08/2026.

**Prompt:** Sinh ba plan data-driven dùng chung workflow Login → Search → Checkout, ba CSV độc lập, parent Transaction Controller, timer/assertion/override property, ba listener khác nhau và runner fail-closed.

**AI output:** Tạo ba JMX, ba CSV, `run-jmeter.sh`, `analyze-jtl.py`, evidence audit và process monitor.

**Rà soát:** CẦN ĐIỀU CHỈNH. Các lần đầu gặp: `sqlite3` native binding thiếu; `node-gyp` chọn Python 3.14; Java socket bị sandbox chặn; chạy dashboard song song tranh chấp thư mục temp. Đã sửa bằng Python hệ thống cho rebuild, backend cô lập port 3001, JMeter localhost ngoài sandbox, run tuần tự và temp dir riêng. Smoke được chấp nhận chỉ sau khi cả ba đạt 0 lỗi và có `index.html`.

## AI-06 — Kết quả đo và phân tích AI

**Công cụ / thời gian:** JMeter + Agent Skill + OpenAI Codex — 08/08/2026, 19:21–19:38 ICT.

**Prompt:** Chạy intended Load/Stress/Spike và endurance 10 phút; tính samples, failure, throughput, p50/p90/p95/p99/max; phân tích và đề xuất tối ưu.

**AI output:**

- Load workflow rerun: 1.460 samples, 0 lỗi, 12,174 workflow/s, p95 1.851 ms.
- Stress workflow rerun: 5.323, 0 lỗi, 44,373 workflow/s, p95 550 ms.
- Spike workflow rerun: 34.980 parent workflows, 0 lỗi, 582,612 workflow/s, p95 362 ms; checkout riêng 34.836 samples, 587,038 req/s, p95 123 ms. Thời lượng raw JTL là 60,040 s, đúng profile.
- Endurance: 15.449 workflow samples, 0 lỗi, 25,749 workflow/s, p95 1.859 ms, 599,974 s; resource CSV được lưu cùng JTL.
- Đề xuất index, WAL, pool, prepared statement, p95 gate.

**Rà soát:** CẦN ĐIỀU CHỈNH. Không gọi parent workflow là checkout; không cộng HTTP sample để suy ra workflow; không gọi endurance value là failure threshold; và không kết luận memory leak từ một run. Spike JTL 60,040 s xác nhận profile 60 s. Các sửa đổi ghi ở Main Report Mục 7.

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
