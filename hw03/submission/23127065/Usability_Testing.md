# Task 2 — Usability Evaluation

## 1. Trạng thái và phạm vi

| Thuộc tính | Giá trị |
| --- | --- |
| SUT | EShop Web, `http://localhost:5173` |
| Luồng | Thêm nhiều sản phẩm → chỉnh số lượng/xóa sản phẩm → checkout không coupon |
| FR liên quan | FR-05, FR-06, FR-07, FR-08; IA-01..IA-04 |
| Phương pháp | Moderated usability evaluation, think-aloud |
| Người tham gia | 7 người thật |
| Công cụ sau phiên | SUS 10 câu + 4 probe questions + think-aloud observation log |

## 2. Objectives

1. Xác định người dùng có tìm được cách chọn nhiều sản phẩm và đi tới giỏ hàng mà không cần gợi ý hay không.
2. Đánh giá khả năng nhận biết và sử dụng thao tác chỉnh số lượng, xóa sản phẩm không còn muốn mua, đồng thời hiểu tác động lên thành tiền và tổng cộng.
3. Xác định điểm nghẽn khi chuyển từ giỏ hàng sang checkout và mức độ tự tin rằng danh sách hàng, số lượng và tổng tiền vẫn chính xác.
4. Đánh giá khả năng phục hồi khi thao tác mong đợi không xuất hiện hoặc hệ thống phản hồi khác dự đoán.
5. Ghi nhận thời gian, do dự, lỗi thao tác, yêu cầu trợ giúp và mức độ tin tưởng; không dùng kết quả kỹ thuật thay cho hành vi người thật.

## 3. Target user profile và tiêu chí tuyển chọn

- Từ 18 tuổi, từng mua hàng trực tuyến ít nhất một lần trong 6 tháng gần đây.
- Có thể sử dụng website trên laptop/desktop hoặc điện thoại mà không cần người hỗ trợ thường xuyên.
- Đồng ý tham gia, think aloud, lưu ghi chú quan sát và ghi màn hình/âm thanh theo lựa chọn consent.
- Contact lưu trong báo cáo phải che bốn chữ số giữa đối với số điện thoại/Zalo; không đưa contact đầy đủ vào Git.

## 4. Task scenario cho participant

> Bạn đang chuẩn bị mua một số sản phẩm công nghệ cho nhu cầu cá nhân. Hãy chọn nhiều hơn một sản phẩm, bảo đảm giỏ hàng cuối cùng có đúng các mặt hàng và số lượng bạn muốn, bỏ một sản phẩm mà bạn đổi ý không mua, rồi hoàn tất đặt hàng mà không sử dụng mã giảm giá. Hãy dừng lại khi bạn tin rằng đơn hàng đã hoàn tất.

Scenario chỉ mô tả mục tiêu. Moderator không đọc tên nút, route, thứ tự click hoặc cách sửa số lượng. Tài khoản test được cung cấp như dữ liệu đầu vào, không phải chỉ dẫn thao tác.

### Dữ liệu phiên

- Website: `http://localhost:5173`
- Tài khoản: `test@eshop.com` / `Test1234!`
- Trạng thái đầu: đã đăng nhập, giỏ hàng trống, ở trang chủ.
- Không đưa mã coupon; participant được nhắc mục tiêu là checkout **không coupon**.

### Tiêu chí outcome

| Outcome | Định nghĩa |
| --- | --- |
| Success | Tự hoàn tất mục tiêu, không nhận hướng dẫn thao tác từ moderator. |
| Success with assistance | Hoàn tất sau một can thiệp trung lập hoặc yêu cầu làm rõ scenario. |
| Failure | Bỏ cuộc, checkout sai giỏ hàng, hoặc không thể tiếp tục vì UI/bug. |

## 5. Moderator script

### Mở đầu

> Cảm ơn bạn đã tham gia. Hôm nay chúng tôi kiểm thử sản phẩm, không kiểm thử bạn. Không có thao tác đúng hoặc sai từ phía bạn. Trong lúc làm, xin hãy nói thành lời điều bạn đang tìm, điều bạn mong chờ và bất cứ điều gì khiến bạn phân vân. Tôi sẽ quan sát và không hướng dẫn cách dùng giao diện; nếu bạn hoàn toàn bị kẹt, tôi có thể hỏi một câu trung lập. Bạn có đồng ý tiếp tục và cho phép lưu loại bằng chứng đã chọn trong phiếu consent không?

### Quy tắc điều phối

- Không chỉ vào màn hình, đọc tên nút, giải thích UI hoặc xác nhận participant “đang làm đúng”.
- Khi participant im lặng, dùng câu trung lập: “Bạn đang nghĩ gì lúc này?”.
- Khi bị kẹt, chờ tối thiểu 20 giây rồi hỏi: “Bạn mong đợi điều gì sẽ xảy ra?”.
- Chỉ can thiệp khi participant dừng hoàn toàn; ghi nguyên văn thời điểm và nội dung can thiệp.
- Kết thúc bằng SUS trước, sau đó mới hỏi probes để tránh probes ảnh hưởng điểm scale.

## 6. Instruments

### 6.1 SUS — System Usability Scale

Thang Likert 1–5: 1 = Hoàn toàn không đồng ý; 5 = Hoàn toàn đồng ý.

1. Tôi nghĩ rằng mình sẽ muốn sử dụng hệ thống này thường xuyên.
2. Tôi thấy hệ thống này phức tạp một cách không cần thiết.
3. Tôi thấy hệ thống dễ sử dụng.
4. Tôi nghĩ rằng mình sẽ cần người có chuyên môn hỗ trợ để sử dụng hệ thống.
5. Tôi thấy các chức năng trong hệ thống được tích hợp tốt.
6. Tôi thấy hệ thống có quá nhiều điểm không nhất quán.
7. Tôi nghĩ đa số mọi người sẽ học cách sử dụng hệ thống rất nhanh.
8. Tôi thấy hệ thống rất rườm rà khi sử dụng.
9. Tôi cảm thấy tự tin khi sử dụng hệ thống.
10. Tôi cần học nhiều điều trước khi có thể sử dụng hệ thống.

### 6.2 Probe questions

| Khía cạnh | Câu hỏi |
| --- | --- |
| Clarity | Nhãn, số lượng, thành tiền và tổng cộng ở bước nào rõ hoặc khó hiểu nhất? |
| Error recovery | Khi không thấy thao tác mong đợi hoặc kết quả khác dự đoán, bạn đã thử cách nào và thông báo có giúp được không? |
| Speed | Bước nào khiến bạn mất thời gian hoặc do dự nhiều nhất? Vì sao? |
| Trust | Điều gì làm bạn tin hoặc không tin rằng giỏ hàng và số tiền checkout là chính xác? |

## 7. Recruitment matrix

| ID | Họ và tên | Thiết bị & browser | Contact đã mask | Consent |
| --- | --- | --- | --- | --- |
| P01 | Nguyễn Lê Hồ Anh Khoa | Laptop - Edge | 094xxxx515 | Yes |
| P02 | Mạch Quốc Tấn | Laptop - Edge | 093xxxx328 | Yes |
| P03 | Ân Tiến Nguyên An | Laptop - Edge | 086xxxx517 | Yes |
| P04 | Nguyễn Tuấn Anh | Laptop - Chrome | 036xxxx674 | Yes |
| P05 | Nguyễn Huy Quân | Laptop - Edge | 090xxxx779 | Yes |
| P06 | Nguyễn Thành Dâng | Laptop - Edge | 036xxxx676 | Yes |
| P07 | Trương Thành Đạt | Laptop - Chrome | 085xxxx607 | Yes |

## 8. Human pilot

| Field | Value to replace |
| --- | --- |
| Pilot name/profile | Tăng Xuân Bắc |
| Eligibility/contact masked | 083xxxx541 |
| Date/time | 29/08/2026 20:12 |
| Device/browser | Laptop - Firefox |
| Consent | Yes |
| Duration | 5 mins |
| Outcome | Verify the flow |
| Moderator interventions | No |
| Observed confusion/errors | No |
| Participant quote, verbatim | No |
| Scenario/instrument refinement | No |

## 9. Kết quả SUS

Điểm SUS được tính theo công thức chuẩn: với câu lẻ, trừ 1; với câu chẵn, lấy 5 trừ điểm; cộng tất cả rồi nhân 2.5.

| ID | Người tham gia | Điểm SUS |
| --- | --- | ---: |
| P01 | Khoa | 67.5 |
| P02 | Tan | 92.5 |
| P03 | An | 65.0 |
| P04 | Anh | 60.0 |
| P05 | Quan | 62.5 |
| P06 | Dang | 77.5 |
| P07 | Dat | 42.5 |
| **Trung bình** | **7 phản hồi** | **66.8** |

Điểm dao động từ 42.5 đến 92.5 (trung vị 65.0). Kết quả cho thấy trải nghiệm giữa các participant không đồng đều; cần đọc cùng phản hồi mở bên dưới thay vì suy diễn outcome của từng phiên chỉ từ điểm SUS.

## 10. Phát hiện định tính từ probe questions

| Chủ đề | Bằng chứng trong phản hồi | Diễn giải |
| --- | --- | --- |
| Thiếu phản hồi khi thêm vào giỏ | Khoa, An, Anh, Dat và Quan nói không biết thao tác thêm giỏ đã thành công và phải thử lại hoặc vào giỏ kiểm tra. | Đây là điểm gây do dự và làm chậm luồng chọn sản phẩm. |
| Số lượng và dòng sản phẩm | Khoa hỏi vì sao sản phẩm cùng loại không được gộp; Dang và Dat nêu việc muốn mua nhiều món phải thêm/xóa từng lần. | Cần làm rõ hoặc bổ sung thao tác quản lý số lượng và cách hệ thống biểu diễn sản phẩm trùng. |
| Độ tin cậy của tổng tiền | An, Dang, Dat và Quan cho biết họ không tin tổng tiền vì có thể điều chỉnh giá/tổng tiền ở bước thanh toán. | Đây là rủi ro trust cần ưu tiên kiểm tra trong luồng cart-to-checkout. |
| Khả năng tìm trạng thái đơn | Tan muốn tìm trạng thái đơn sau thanh toán và thử vào thông tin cá nhân. | Cần kiểm tra khả năng khám phá trạng thái đơn sau khi checkout. |

## 11. Think-aloud observations

Severity: S1 prevents completion; S2 requires help or risks an incorrect order; S3 causes substantial delay/retry; S4 is minor/cosmetic. Cùng một vấn đề dùng cùng nhãn error và severity.

| Participant | Time | Screen/task state | Participant action | Verbatim think-aloud | Friction/error | Moderator intervention | Severity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khoa | 0:07 | Trang thông tin sản phẩm | Thêm vào giỏ | Ở trang danh sách sản phẩm, bấm thêm vào giỏ thì hệ thống không phản hồi. Phải vào trang giỏ hàng kiểm tra | ADD-CART-NO-FEEDBACK — không có xác nhận sau khi thêm giỏ | No | S3 |
| Khoa | 0:25 | Trang giỏ hàng | Xem thông tin | Ở trang giỏ hàng, tại sao các sản phẩm cùng loại không được nhóm vào cùng dòng | CART-QUANTITY-MANAGEMENT — dòng trùng và quản lý số lượng không rõ | No | S2 |
| Khoa | 0:53 | Trang thanh toán | Thay đổi thành tiền | Kì thế nhỉ, sao lại cho chỉnh tổng tiền vậy nè | CHECKOUT-TOTAL-EDITABLE — người dùng có thể sửa tổng tiền | No | S2 |
| Tan | 0:39 | Trang chi tiết sản phẩm | Thêm vào giỏ | À phải bấm 2 cái vào nút thêm vào giỏ lận | ADD-CART-RETRY — phải bấm thêm giỏ nhiều lần | No | S2 |
| An | 0:27 | Trang chi tiết sản phẩm | Thêm vào giỏ hàng | Nhấp 1 cái thì không được. À phải nhấp 2 cái. Nút này rất dễ gây hiểu nhầm. | ADD-CART-RETRY — phải bấm thêm giỏ nhiều lần | No | S2 |
| An | 0:53 | Trang danh sách sản phẩm | Thêm vào giỏ hàng | Bấm thêm vào giỏ mà sao không có thông báo gì hết | ADD-CART-NO-FEEDBACK — không có xác nhận sau khi thêm giỏ | No | S3 |
| An | 1:12 | Trang chi tiết sản phẩm | Thêm vào giỏ hàng | À phải bấm 2 cái vào nút thêm vào giỏ. Khá là khó chịu | ADD-CART-RETRY — phải bấm thêm giỏ nhiều lần | No | S2 |
| An | 1:40 | Trang thanh toán | Điều chỉnh thành tiền | Ủa sao lại có nút tăng giảm. Là có thể chỉnh được giá tiền à? Vậy là không uy tín rồi! | CHECKOUT-TOTAL-EDITABLE — người dùng có thể sửa tổng tiền | No | S2 |
| Anh | 0:28 | Trang danh sách sản phẩm | Thêm vào giỏ | Mình thêm thử mà sao không thấy gì nhỉ? Thêm cái khác vẫn không thấy gì | ADD-CART-NO-FEEDBACK — không có xác nhận sau khi thêm giỏ | No | S3 |
| Dang | 1:09 | Trang giỏ hàng | Xem thông tin các sản phẩm đã thêm | Quản lí số lượng không hợp lí: bị tách thành nhiều hàng và muốn xóa bớt thì không được. Nên gom lại và có cách quản lí số lượng hợp lí hơn | CART-QUANTITY-MANAGEMENT — dòng trùng và quản lý số lượng không rõ | No | S2 |
| Dang | 1:45 | Trang thanh toán | Thay đổi thành tiền | Giá tiền cho giảm xuống được ?!! | CHECKOUT-TOTAL-EDITABLE — người dùng có thể sửa tổng tiền | No | S2 |
| Dang | 1:57 | Trang giỏ hàng | Xem thông tin | Thanh toán rồi mà vẫn còn | CART-RETAINED-AFTER-CHECKOUT — giỏ vẫn còn sau thanh toán | No | S2 |
| Dat | 0:45 | Trang danh sách sản phẩm | Thêm vào giỏ | Không có cái gì thông báo để biết là đã thêm vào hay chưa => Gây khó chịu | ADD-CART-NO-FEEDBACK — không có xác nhận sau khi thêm giỏ | No | S3 |
| Dat | 1:15 | Trang giỏ hàng | Chỉnh số lượng | Chỗ này nó đang không cho mình thêm số lượng vô từng sản phẩm => không biết thêm kiểu gì, chỉ cho xóa | CART-QUANTITY-MANAGEMENT — dòng trùng và quản lý số lượng không rõ | No | S2 |
| Dat | 1:38 | Trang danh sách sản phẩm | Thêm vào giỏ | À muốn thêm sản phẩm thì phải thêm 2 lần => cột số lượng trong giỏ hàng vô nghĩa quá | ADD-CART-RETRY — phải bấm thêm giỏ nhiều lần | No | S2 |
| Dat | 2:30 | Trang thanh toán | Đổi thành tiền | Ơ cho mình sửa thành tiền này. Không có chặn người dùng thay đổi => Không logic lắm | CHECKOUT-TOTAL-EDITABLE — người dùng có thể sửa tổng tiền | No | S2 |
