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

## 12. Phase 3 — Tổng hợp và phân loại phát hiện

Các ghi chú được nhóm theo cùng hành vi hoặc cùng nguyên nhân giao diện. Một phát hiện được xem là **systemic** khi xuất hiện ở từ hai participant trở lên; một nhận xét chỉ xuất hiện trong một phiên được giữ riêng để tránh suy rộng từ một người dùng.

| Nhóm pain point | Số participant | Phân loại | Bằng chứng | Kết luận phân tích |
| --- | ---: | --- | --- | --- |
| Không có phản hồi rõ ràng sau khi thêm vào giỏ | 4 (Khoa, An, Anh, Dat) | Systemic | ADD-CART-NO-FEEDBACK | Người dùng không biết hành động đã thành công nên kiểm tra lại hoặc thử lại; đây là nguyên nhân trực tiếp của do dự và thao tác lặp. |
| Phải bấm thêm vào giỏ nhiều lần | 3 (Tan, An, Dat) | Systemic | ADD-CART-RETRY | Cần tái hiện kỹ thuật để phân biệt lỗi xử lý click với hệ quả của việc thiếu feedback. Dù nguyên nhân nào, hành vi quan sát được vẫn làm người dùng mất niềm tin vào thao tác thêm giỏ. |
| Không thể/quá khó quản lý số lượng và các dòng trùng | 3 (Khoa, Dang, Dat) | Systemic | CART-QUANTITY-MANAGEMENT | Đây là rào cản đối với mục tiêu cốt lõi của scenario: điều chỉnh số lượng trước checkout. Ghi nhận phù hợp với bug đã tái hiện BUG-CART-12 và BUG-CART-13. |
| Có thể sửa thành tiền ở checkout, làm giảm trust | 4 (Khoa, An, Dang, Dat) | Systemic | CHECKOUT-TOTAL-EDITABLE | Đây là vấn đề trust nghiêm trọng; cần tái hiện có kiểm soát trước khi xác nhận là bug và mở issue riêng. |
| Không biết nơi xem trạng thái đơn sau thanh toán | 1 (Tan) | Isolated | Probe answer | Là vấn đề discoverability cần theo dõi ở vòng test sau; một phản hồi chưa đủ để kết luận là lỗi thiết kế hệ thống. |
| Giỏ còn dữ liệu sau checkout | 1 (Dang) | Isolated | CART-RETAINED-AFTER-CHECKOUT | Cần tái hiện để xác định đó là trạng thái mong đợi, dữ liệu test cũ, hay lỗi. Không gộp vào systemic finding. |

## 13. Ưu tiên khắc phục

Severity được xác định theo ảnh hưởng tới việc hoàn thành scenario, mức rủi ro đặt đơn sai, tần suất quan sát và mức độ tự tin của người dùng — không chỉ theo số người nêu ý kiến.

| Priority | Finding | Severity | Rationale | Hành động đề xuất | Bug/issue đã có |
| --- | --- | --- | --- | --- | --- |
| P0 | Không có điều khiển tăng/giảm số lượng trong giỏ | S1 — blocker | Participant không thể điều chỉnh số lượng như scenario yêu cầu; có nguy cơ checkout sai đơn. | Thêm điều khiển tăng/giảm có giới hạn, cập nhật thành tiền/tổng cộng và kiểm thử lại flow. | [BUG-CART-13](Bug_Report.md#bug-cart-13--cart-provides-no-controls-for-changing-item-quantity), [GitHub issue #9](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) |
| P1 | Sản phẩm trùng thành nhiều dòng, quản lý số lượng không rõ | S2 — nguy cơ đặt sai | Xuất hiện ở ba participant và khiến họ không hiểu số lượng thực tế của đơn. | Gộp cùng sản phẩm vào một dòng và hiển thị quantity rõ ràng. | [BUG-CART-12](Bug_Report.md#bug-cart-12--adding-the-same-product-creates-duplicate-cart-rows), [GitHub issue #8](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/8) |
| P1 | Tổng tiền có thể bị chỉnh ở checkout | S2 — rủi ro trust | Bốn participant phản ứng tiêu cực; hành vi này có thể làm người dùng không tin giá trị đơn hàng. | Khoá trường tổng tiền, tính từ cart phía hệ thống, rồi tái hiện và tạo GitHub issue kèm screenshot nếu xác nhận. | Chưa xác nhận bằng tái hiện kỹ thuật trong bộ evidence hiện có. |
| P2 | Thiếu feedback sau khi thêm vào giỏ / phải thử lại | S3 — chậm và retry | Bảy ghi nhận gộp từ hai biểu hiện liên quan (4 không thấy feedback, 3 retry); làm chậm chọn sản phẩm nhưng không tự nó chặn checkout. | Hiển thị toast/badge cập nhật và trạng thái button; tái hiện click retry để tách lỗi chức năng khỏi vấn đề feedback. | Chưa xác nhận bằng tái hiện kỹ thuật trong bộ evidence hiện có. |
| P3 | Không rõ nơi xem trạng thái đơn | S4 — discoverability | Một participant nêu vấn đề sau checkout; cần thêm dữ liệu trước khi ưu tiên cao hơn. | Đánh giá lại ở vòng tiếp theo sau khi flow chính được sửa. | Chưa là bug được xác nhận. |

## 14. Kết luận Phase 3 và bug triage

Điểm SUS trung bình **66.8/100** và độ phân tán lớn (42.5–92.5) cho thấy luồng có thể hoàn thành với một số người dùng, nhưng chưa tạo trải nghiệm nhất quán. Pain point có ảnh hưởng lớn nhất không phải là phàn nàn thị giác đơn lẻ: đó là việc không thể quản lý số lượng, cách biểu diễn sản phẩm trùng, và sự thiếu tin cậy ở tổng tiền checkout.

Hai defect đã được tái hiện trong tài liệu bug và đã có GitHub Issues là **BUG-CART-12** và **BUG-CART-13**; ảnh issue/screenshot được lưu trong [Bug_Report.md](Bug_Report.md). Các quan sát `ADD-CART-*`, `CHECKOUT-TOTAL-EDITABLE` và `CART-RETAINED-AFTER-CHECKOUT` được giữ là kết quả usability có nguồn participant, nhưng chưa được ghi là genuine bug cho đến khi tái hiện được và đăng GitHub Issue có screenshot. Cách tách này tránh biến phản hồi đơn lẻ hoặc môi trường test thành defect đã xác nhận.

Vòng test tiếp theo nên chạy lại cùng scenario sau khi xử lý P0/P1, sử dụng cùng SUS và probes để so sánh thay đổi về completion, retry và trust thay vì chỉ dựa vào cảm nhận của moderator.
