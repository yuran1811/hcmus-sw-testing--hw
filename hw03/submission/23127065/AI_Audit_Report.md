# \[AI-02\] - Báo cáo kiểm toán AI

---

## Thông tin sinh viên

| | |
| --- | --- |
| Họ và tên | NGÔ NGUYỄN THẾ KHOA |
| Mã số sinh viên | 23127065 |
| Lớp / khóa | 23KTPM3 |
| Mã bài tập | HW03 |
| Công cụ AI đã sử dụng | OpenAI Codex, Context7 MCP |

---

## Kiểm toán AI-01

**Mã neo:** `#ai-01`

### 1. Yêu cầu và công cụ

OpenAI Codex — 29/07/2026, múi giờ Asia/Ho_Chi_Minh

> “following the guiding principles in hw03/docs/requirement.pdf, use the SUT at ../hcmus-sw-testing--eshop-sut to run services (front/backend) to finish the task 1 and task 2 (phase 1 only) ... use context7”

### 2. Kết quả đầu ra của AI

AI trích xuất các ràng buộc của bài tập, kiểm tra bản nháp hiện có và đề xuất phạm vi/phương án thực hiện.

### 3. Phán quyết

**CẦN ĐIỀU CHỈNH**

### 4. Lý do

Đề xuất ban đầu có tệp usability không liên quan đến Lumiere Cinema và nội dung hồ sơ người tham gia tổng hợp. Các nội dung này không phù hợp với phạm vi SUT và không được dùng để thay thế dữ liệu người tham gia thật.

### 5. Điều chỉnh của sinh viên

Loại bỏ tệp Lumiere Cinema và toàn bộ nội dung hồ sơ tổng hợp. Xác nhận không được tạo dữ liệu giả về người tham gia thật.

---

## Kiểm toán AI-02

**Mã neo:** `#ai-02`

### 1. Yêu cầu và công cụ

OpenAI Codex — 29/07/2026

> “cart + coupons for task 1, and flow ‘Thêm nhiều sản phẩm vào giỏ → Chỉnh sửa số lượng/xoá sản phẩm → Checkout không coupon’ for task 2”

### 2. Kết quả đầu ra của AI

AI xác định hai màn hình cho Task 1 và một luồng usability không dùng coupon cho Task 2.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Phạm vi cuối cùng do sinh viên cung cấp; AI không tự suy diễn tính duy nhất giữa các nhóm.

### 5. Điều chỉnh của sinh viên

Xác nhận và sử dụng đúng phạm vi đã chọn cho các tài liệu Task 1 và Task 2.

---

## Kiểm toán AI-03

**Mã neo:** `#ai-03`

### 1. Yêu cầu và công cụ

OpenAI Codex — 29/07/2026

> “make it as placeholder first, i will fill them in later.”

### 2. Kết quả đầu ra của AI

AI thay thông tin định danh và bằng chứng thử nghiệm sơ bộ bằng các placeholder rõ ràng, kèm cảnh báo phải hoàn thiện trước khi nộp.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Các placeholder không được trình bày như dữ liệu thật; không còn tên người tham gia, trích dẫn, thời lượng hay điểm SUS có vẻ hợp lý nhưng không có nguồn kiểm chứng.

### 5. Điều chỉnh của sinh viên

Kiểm tra lại để bảo đảm không còn dữ liệu người tham gia hoặc kết quả usability bị tạo dựng.

---

## Kiểm toán AI-04

**Mã neo:** `#ai-04`

### 1. Yêu cầu và công cụ

OpenAI Codex — 29/07/2026

> “Implement the plan.”

### 2. Kết quả đầu ra của AI

AI tạo và chạy checklist Playwright, chụp bằng chứng cho các trường hợp thất bại, đồng thời tạo báo cáo, XLSX/PDF, technical rehearsal và bản nháp bug report.

### 3. Phán quyết

**CẦN ĐIỀU CHỈNH**

### 4. Lý do

Lần chạy đầu có lỗi tự động hóa do thời điểm tải lại SPA và trạng thái giao diện. Vì vậy, kết quả chỉ được chấp nhận sau khi đã sửa kịch bản, chạy lại và kiểm tra trực quan bằng chứng đại diện.

### 5. Điều chỉnh của sinh viên

Sửa lỗi tự động hóa, chạy lại checklist và chỉ giữ các lỗi sản phẩm vẫn tái hiện sau lần chạy lại.

---

## Kiểm toán AI-05

**Mã neo:** `#ai-05`

### 1. Yêu cầu và công cụ

Context7 MCP, sử dụng tài liệu Playwright chính thức — 29/07/2026

Yêu cầu: hướng dẫn hiện hành về kiểm thử GUI nhiều dịch vụ cục bộ, locator bền vững, web-first assertion và ảnh chụp khi thất bại.

### 2. Kết quả đầu ra của AI

AI đề xuất role/label locator, chờ trạng thái giao diện, context trình duyệt cô lập và ảnh full-page chỉ cho trường hợp thất bại.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Các thực hành này phù hợp với tài liệu chính thức. Playwright được ghim ở phiên bản 1.61.0 sau khi 1.54.1 không tương thích với Ubuntu 26.04; không thay đổi phiên bản dependency của SUT.

### 5. Điều chỉnh của sinh viên

Áp dụng các thực hành trên vào checklist và giữ nguyên dependency do SUT quản lý.

---

## Kiểm toán AI-06

**Mã neo:** `#ai-06`

### 1. Yêu cầu và công cụ

OpenAI Codex + Context7 MCP — 30/07/2026

> “complete the 7. Agent Skill in hw03/docs/requirement.pdf also. use context7”

### 2. Kết quả đầu ra của AI

AI đóng gói `gui-checklist-runner`, bổ sung tài liệu tham chiếu/template tái sử dụng và ghi nhận hai lần trình diễn SUT hoàn chỉnh với video, trace Playwright.

### 3. Phán quyết

**HỢP LỆ**

### 4. Lý do

Hướng dẫn Playwright 1.61.0 về việc đóng browser context trước khi lưu video ổn định đã được áp dụng. Các liên kết YouTube chưa công bố được giữ ở dạng placeholder rõ ràng, không được tuyên bố là đã xuất bản.

### 5. Điều chỉnh của sinh viên

Kiểm tra video và trace sau khi đóng context; giữ placeholder cho các liên kết chưa được công bố.

---

## Tổng hợp độ chính xác của AI

| Chỉ số | Số lượng | Tỷ lệ |
| --- | ---: | ---: |
| Tổng số kết quả AI được kiểm toán | 6 | - |
| HỢP LỆ (đúng, được chấp nhận) | 4 | 66,7% |
| KHÔNG HỢP LỆ (sai, bị loại bỏ) | 0 | 0% |
| CẦN ĐIỀU CHỈNH (chỉ dùng sau khi sửa) | 2 | 33,3% |

## Kết luận

AI hỗ trợ hiệu quả cho việc lập checklist, chạy thử GUI và đóng gói Agent Skill. Tuy nhiên, mọi đề xuất ngoài phạm vi, dữ liệu có nguy cơ bị hiểu là dữ liệu người tham gia thật, và lỗi do kịch bản tự động hóa đều phải được sinh viên xem xét, sửa và kiểm chứng lại trước khi đưa vào bài nộp.

## Tuyên bố bắt buộc

Tôi đã sử dụng OpenAI Codex và Context7 MCP để hỗ trợ phân tích yêu cầu, xây dựng và thực thi checklist GUI, chuẩn bị tài liệu/bằng chứng, và đóng gói Agent Skill. Tôi đã tự rà soát, điều chỉnh các kết quả trước khi sử dụng trong bài nộp; không sử dụng AI để tạo dữ liệu người tham gia, trích dẫn, thời lượng hoặc điểm SUS giả. Các yêu cầu nguyên văn và kết quả có ảnh hưởng trực tiếp đến bài nộp được tóm tắt trong báo cáo này. Thông tin đăng nhập GitHub và thông tin liên hệ cá nhân chưa che được đã được loại bỏ.

## Chữ ký

| | |
| --- | --- |
| Họ và tên | NGÔ NGUYỄN THẾ KHOA |
| Mã số sinh viên | 23127065 |
| Lớp / khóa | 23KTPM3 |
| Học phần | CS423 / CSC13003 – Software Testing |
| Ngày | 03/08/2026 |
| Chữ ký | khoa |
