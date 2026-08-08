# \[AI-02\] - Báo cáo kiểm toán AI

---

## Thông tin sinh viên

| | |
| --- | --- |
| Họ và tên | NGÔ NGUYỄN THẾ KHOA |
| Mã số sinh viên | 23127065 |
| Lớp / khóa | 23KTPM3 |
| Mã bài tập | HW04 |
| Công cụ AI đã sử dụng | OpenAI Codex, Context7 MCP |
| Công cụ kiểm thử / hỗ trợ | Playwright 1.62.1, GitHub CLI, code-review-graph |

---

## Kiểm toán AI-01

**Mã neo:** `#ai-01`

### 1. Yêu cầu và công cụ

OpenAI Codex + Context7 MCP — 08/08/2026, múi giờ Asia/Ho_Chi_Minh

> “complete the hw04/docs/requirement.pdf: 6. (task 1), 7., 8., 9., 10. and 14. (partial in folders, not need to zip). use context7”

### 2. Kết quả đầu ra của AI

AI đọc yêu cầu HW04, đối chiếu ba feature đã chọn trong HW02 và lập kế hoạch cho 36 test case data-driven, chín lượt chạy feature-browser, báo cáo HTML, AI Audit Report, AI Critique và cấu trúc thư mục nộp bài không nén ZIP.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Phạm vi ba feature FR-06, FR-09 và FR-17 bám đúng lựa chọn HW02 và yêu cầu Task 1. Kế hoạch không tuyên bố đã có video do sinh viên tự quay hoặc lịch sử Git chưa tồn tại.

### 5. Điều chỉnh của sinh viên

Xác nhận mỗi feature dùng đúng 12 test case gốc và giữ hai video ở dạng placeholder rõ ràng cho đến khi sinh viên tự ghi hình.

---

## Kiểm toán AI-02

**Mã neo:** `#ai-02`

### 1. Yêu cầu và công cụ

OpenAI Codex — 08/08/2026

> “add addition to the plan so that: 1. already have the .agents/skills/automation-test -> update/add to this dir 2. include the test cases in the submisison folder also 3. ensure all feature test cases be runned 4. create and take screenshot for each bug while running and issue for these bugs on github”

### 2. Kết quả đầu ra của AI

AI cập nhật kế hoạch để sửa skill hiện có thay vì tạo skill trùng lặp, sao chép 36 tài liệu test case vào bài nộp, bắt buộc thử đủ 108 execution và tạo một ảnh chụp cùng GitHub Issue cho mỗi lỗi khác biệt đã xác nhận.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Các tiêu chí bổ sung có thể kiểm chứng bằng file, manifest, báo cáo Playwright và GitHub Issues; không phụ thuộc vào mô tả chủ quan của AI.

### 5. Điều chỉnh của sinh viên

Chốt quy tắc một issue cho một hành vi lỗi khác biệt, không tạo một issue riêng cho từng browser hoặc từng execution thất bại.

---

## Kiểm toán AI-03

**Mã neo:** `#ai-03`

### 1. Yêu cầu và công cụ

OpenAI Codex + Playwright — 08/08/2026

> “Implement the plan.”

### 2. Kết quả đầu ra của AI

AI tạo dữ liệu JSON, ba file Playwright spec, matrix runner, báo cáo, skill audit và chạy thử các luồng Product Detail, Coupon và Coupon Admin.

### 3. Phán quyết

**CẦN ĐIỀU CHỈNH**

### 4. Lý do

Kịch bản ban đầu giả định label hiển thị cũng là accessible label, cố `fill("abc")` vào `input[type=number]`, và định vị tổng tiền checkout bằng label không được liên kết. Các lỗi này gây timeout hoặc lỗi automation, chưa phải lỗi SUT.

### 5. Điều chỉnh của sinh viên

Thay locator bằng role hoặc locator tương đối theo label hiển thị, mô phỏng thao tác bàn phím cho dữ liệu chữ trong number input, chạy lại case đại diện và chỉ giữ thất bại xuất hiện ở assertion nghiệp vụ.

---

## Kiểm toán AI-04

**Mã neo:** `#ai-04`

### 1. Yêu cầu và công cụ

Context7 MCP, sử dụng tài liệu Playwright chính thức — 08/08/2026

Yêu cầu: kiểm tra API hiện hành cho HTML reporter có tiêu đề/metadata, output folder riêng và project Chromium / Firefox / WebKit.

### 2. Kết quả đầu ra của AI

AI đề xuất cấu hình Playwright nhiều project, HTML reporter có `title`, JSON reporter bổ sung, thư mục artifact riêng và metadata chứa mã sinh viên, feature, browser cùng ISO timestamp.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Cấu hình dựa trên tài liệu chính thức và được kiểm chứng bằng chín báo cáo thật. Khi chờ report tải xong, tiêu đề `Run by: 23127065`, timestamp và 12 kết quả của cell đều hiển thị.

### 5. Điều chỉnh của sinh viên

Giữ HTML report làm bằng chứng bắt buộc và dùng JSON report/manifest cho audit tự động; không chỉnh sửa HTML thủ công sau khi chạy.

---

## Kiểm toán AI-05

**Mã neo:** `#ai-05`

### 1. Yêu cầu và công cụ

OpenAI Codex + Playwright — 08/08/2026, 09:17–09:38

Yêu cầu: chạy đủ matrix, phân biệt lỗi automation với lỗi sản phẩm, chụp bằng chứng trước cleanup và kiểm tra đường dẫn artifact.

### 2. Kết quả đầu ra của AI

AI thực thi nhiều lần để sửa harness, sau đó tạo lần chạy cuối gồm 108/108 execution: 54 pass, 54 fail, chín nhóm lỗi tái hiện trên cả ba browser.

### 3. Phán quyết

**CẦN ĐIỀU CHỈNH**

### 4. Lý do

Assertion Coupon Admin ban đầu kiểm tra quá sớm nên Chromium có thể pass giả trước khi React render coupon không hợp lệ. Ảnh thất bại tự động cũng được chụp sau cleanup nên không còn hiển thị dòng coupon lỗi. Hai lượt chạy tập trung sau đó còn làm sạch nhầm thư mục raw artifact của matrix.

### 5. Điều chỉnh của sinh viên

Chờ kết quả submit và render, yêu cầu số dòng coupon lỗi bằng 0, chụp `confirmed-defect` trước cleanup, cô lập output và chạy lại toàn bộ matrix cuối. Script audit được bổ sung để kiểm tra 108 execution, chín report, mọi attachment path và screenshot của case lỗi.

---

## Kiểm toán AI-06

**Mã neo:** `#ai-06`

### 1. Yêu cầu và công cụ

OpenAI Codex + GitHub CLI + Playwright — 08/08/2026, 09:39–09:48

Yêu cầu: hoàn thiện báo cáo, PDF, screenshot, cập nhật Agent Skill và công bố GitHub Issues cho các lỗi đã xác nhận.

### 2. Kết quả đầu ra của AI

AI cập nhật `.agents/skills/automation-test`, tạo các tài liệu Markdown/PDF, xác minh trực quan chín screenshot, kiểm tra URL ảnh công khai trả HTTP 200, cập nhật issue #22 và tạo issue #23–#30.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Skill vượt qua validator; assignment audit trả `errors: []`; ba PDF là A4, có text thật và đã kiểm tra trang đầu. Mỗi issue liên kết đúng screenshot công khai và kết quả matrix.

### 5. Điều chỉnh của sinh viên

Giữ nguyên 54 failure do lỗi SUT thay vì làm yếu expected result. Công khai hai hạn chế: video phải do sinh viên tự quay và lịch sử Git 8 commit test-script trong bốn ngày chưa đạt.

---

## Kiểm toán AI-07

**Mã neo:** `#ai-07`

### 1. Yêu cầu và công cụ

OpenAI Codex + Git — 08/08/2026

> “1. use AI audit report as from hw03/submission/23127065/AI_Audit_Report.md 2. use \"git log --graph --all --stat\" to export git commit log from cc9687873837904d4d2c7ae0c92c70d94f7791bd”

### 2. Kết quả đầu ra của AI

AI chuyển AI Audit Report của HW04 sang cùng cấu trúc tiếng Việt của HW03 và xuất lịch sử Git dạng graph kèm stat, bao gồm commit mốc `cc9687873837904d4d2c7ae0c92c70d94f7791bd` đến `HEAD`.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Nội dung HW04 vẫn phản ánh đúng các tương tác và điều chỉnh thực tế; file log được tạo trực tiếp từ Git, không tóm tắt, chỉnh sửa hoặc dựng thêm commit.

### 5. Điều chỉnh của sinh viên

Diễn giải “from commit” là phạm vi bao gồm commit mốc đến `HEAD`, sử dụng `cc9687873837904d4d2c7ae0c92c70d94f7791bd^..HEAD` để không loại commit đầu khỏi log.

---

## Tổng hợp độ chính xác của AI

| Chỉ số | Số lượng | Tỷ lệ |
| --- | ---: | ---: |
| Tổng số kết quả AI được kiểm toán | 7 | - |
| HỢP LỆ (đúng, được chấp nhận) | 5 | 71,4% |
| KHÔNG HỢP LỆ (sai, bị loại bỏ) | 0 | 0% |
| CẦN ĐIỀU CHỈNH (chỉ dùng sau khi sửa) | 2 | 28,6% |

## Kết luận

AI hỗ trợ hiệu quả trong việc chuyển đổi test case, xây dựng matrix Playwright, phân tích failure, tạo báo cáo và công bố bằng chứng. Tuy nhiên, locator dựa trên giả định semantic HTML, negative assertion chạy quá sớm và thứ tự chụp ảnh/cleanup đều có thể tạo kết quả sai hoặc che mất lỗi. Vì vậy, mọi kết quả chỉ được chấp nhận sau khi sinh viên kiểm tra oracle theo yêu cầu, chạy lại đủ ba browser, kiểm tra trực quan screenshot và xác minh artifact bằng script audit.

## Tuyên bố bắt buộc

Tôi đã sử dụng OpenAI Codex và Context7 MCP để hỗ trợ phân tích yêu cầu, chuyển đổi và rà soát test case Playwright, xây dựng dữ liệu và matrix runner, thực thi kiểm thử, phân tích lỗi, chuẩn bị tài liệu/PDF và cập nhật Agent Skill. Tôi đã tự rà soát, điều chỉnh và chạy lại các kết quả trước khi sử dụng trong bài nộp. Tôi không sử dụng AI để tạo video, giọng nói, face-cam, kết quả chạy giả hoặc lịch sử Git giả; các nội dung chưa có bằng chứng người thật được giữ dưới dạng placeholder rõ ràng.

## Chữ ký

| | |
| --- | --- |
| Họ và tên | NGÔ NGUYỄN THẾ KHOA |
| Mã số sinh viên | 23127065 |
| Lớp / khóa | 23KTPM3 |
| Học phần | CS423 / CSC13003 – Software Testing |
| Ngày | 08/08/2026 |
| Chữ ký | khoa |
