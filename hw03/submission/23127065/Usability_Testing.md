# Task 2 — Usability Evaluation, Phase 1

## 1. Trạng thái và phạm vi

| Thuộc tính | Giá trị |
| --- | --- |
| SUT | EShop Web, `http://localhost:5173` |
| Luồng | Thêm nhiều sản phẩm → chỉnh số lượng/xóa sản phẩm → checkout không coupon |
| FR liên quan | FR-05, FR-06, FR-07, FR-08; IA-01..IA-04 |
| Phương pháp | Moderated usability evaluation, think-aloud |
| Người tham gia mục tiêu | 7 người thật ngoài lớp HW03; ưu tiên non-IT/non-tester |
| Công cụ sau phiên | SUS 10 câu + 4 probe questions |
| Pilot | Một người riêng, thực hiện trước 7 phiên chính thức |
| Trạng thái | **Prepared with explicit placeholders — recruitment data and human pilot evidence pending** |

> Không có tên, contact, phát ngôn, thời lượng, quan sát hoặc điểm SUS giả trong tài liệu này. Các token `[Pxx_*]` và `[PILOT_*]` phải được người thực hiện thay bằng dữ liệu thật trước khi tuyên bố hoàn tất Phase 1.

## 2. Objectives

1. Xác định người dùng có tìm được cách chọn nhiều sản phẩm và đi tới giỏ hàng mà không cần gợi ý hay không.
2. Đánh giá khả năng nhận biết và sử dụng thao tác chỉnh số lượng, xóa sản phẩm không còn muốn mua, đồng thời hiểu tác động lên thành tiền và tổng cộng.
3. Xác định điểm nghẽn khi chuyển từ giỏ hàng sang checkout và mức độ tự tin rằng danh sách hàng, số lượng và tổng tiền vẫn chính xác.
4. Đánh giá khả năng phục hồi khi thao tác mong đợi không xuất hiện hoặc hệ thống phản hồi khác dự đoán.
5. Ghi nhận thời gian, do dự, lỗi thao tác, yêu cầu trợ giúp và mức độ tin tưởng; không dùng kết quả kỹ thuật thay cho hành vi người thật.

## 3. Target user profile và tiêu chí tuyển chọn

- Từ 18 tuổi, từng mua hàng trực tuyến ít nhất một lần trong 6 tháng gần đây.
- Có thể sử dụng website trên laptop/desktop hoặc điện thoại mà không cần người hỗ trợ thường xuyên.
- Không phải sinh viên đang học HW03; ưu tiên người không làm IT, QA hoặc kiểm thử phần mềm.
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

Chấm điểm sau Phase 2: câu lẻ đóng góp `response - 1`; câu chẵn đóng góp `5 - response`; tổng đóng góp nhân `2,5`, cho điểm 0–100. Không điền điểm khi chưa có response thật.

### 6.2 Probe questions

| Khía cạnh | Câu hỏi |
| --- | --- |
| Clarity | Nhãn, số lượng, thành tiền và tổng cộng ở bước nào rõ hoặc khó hiểu nhất? |
| Error recovery | Khi không thấy thao tác mong đợi hoặc kết quả khác dự đoán, bạn đã thử cách nào và thông báo có giúp được không? |
| Speed | Bước nào khiến bạn mất thời gian hoặc do dự nhiều nhất? Vì sao? |
| Trust | Điều gì làm bạn tin hoặc không tin rằng giỏ hàng và số tiền checkout là chính xác? |

## 7. Recruitment matrix — placeholders

| ID | Họ và tên | Hồ sơ/quan hệ tuyển | Thiết bị & browser | Contact đã mask | Ngoài lớp HW03 | Consent | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P01 | `[P01_NAME]` | `[P01_PROFILE]` | `[P01_DEVICE_BROWSER]` | `[P01_CONTACT_MASKED]` | `[P01_ELIGIBLE]` | `[P01_CONSENT]` | Chờ điền |
| P02 | `[P02_NAME]` | `[P02_PROFILE]` | `[P02_DEVICE_BROWSER]` | `[P02_CONTACT_MASKED]` | `[P02_ELIGIBLE]` | `[P02_CONSENT]` | Chờ điền |
| P03 | `[P03_NAME]` | `[P03_PROFILE]` | `[P03_DEVICE_BROWSER]` | `[P03_CONTACT_MASKED]` | `[P03_ELIGIBLE]` | `[P03_CONSENT]` | Chờ điền |
| P04 | `[P04_NAME]` | `[P04_PROFILE]` | `[P04_DEVICE_BROWSER]` | `[P04_CONTACT_MASKED]` | `[P04_ELIGIBLE]` | `[P04_CONSENT]` | Chờ điền |
| P05 | `[P05_NAME]` | `[P05_PROFILE]` | `[P05_DEVICE_BROWSER]` | `[P05_CONTACT_MASKED]` | `[P05_ELIGIBLE]` | `[P05_CONSENT]` | Chờ điền |
| P06 | `[P06_NAME]` | `[P06_PROFILE]` | `[P06_DEVICE_BROWSER]` | `[P06_CONTACT_MASKED]` | `[P06_ELIGIBLE]` | `[P06_CONSENT]` | Chờ điền |
| P07 | `[P07_NAME]` | `[P07_PROFILE]` | `[P07_DEVICE_BROWSER]` | `[P07_CONTACT_MASKED]` | `[P07_ELIGIBLE]` | `[P07_CONSENT]` | Chờ điền |

## 8. Human pilot — placeholder record

Pilot dùng một người riêng, không tính vào bảy phiên chính thức.

| Field | Value to replace |
| --- | --- |
| Pilot name/profile | `[PILOT_NAME_PROFILE]` |
| Eligibility/contact masked | `[PILOT_ELIGIBILITY_CONTACT]` |
| Date/time | `[PILOT_DATETIME]` |
| Device/browser | `[PILOT_DEVICE_BROWSER]` |
| Consent | `[PILOT_CONSENT]` |
| Duration | `[PILOT_DURATION]` |
| Outcome | `[PILOT_OUTCOME]` |
| Moderator interventions | `[PILOT_INTERVENTIONS]` |
| Observed confusion/errors | `[PILOT_OBSERVATIONS]` |
| Participant quote, verbatim | `[PILOT_QUOTE]` |
| Evidence path | `[PILOT_EVIDENCE_PATH]` |
| Scenario/instrument refinement | `[PILOT_REFINEMENT]` |

### Pilot acceptance gate

- [ ] Participant and masked contact are genuine and verifiable.
- [ ] Consent choice is recorded before capture begins.
- [ ] Backend and frontend stayed available for the whole session.
- [ ] Scenario was delivered without step-by-step instructions.
- [ ] Duration, hesitations, errors and interventions were recorded from observation.
- [ ] At least one explicit decision records whether the scenario/instruments changed after pilot.
- [ ] Evidence link opens and contains no unmasked contact details.

## 9. Observation template for later sessions

| Time | Screen/task state | Participant action | Verbatim think-aloud | Friction/error | Moderator intervention | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| `[TIME]` | `[STATE]` | `[ACTION]` | `[QUOTE]` | `[OBSERVATION]` | `[NONE_OR_TEXT]` | `[S1-S4]` |

Severity preparation: S1 prevents completion; S2 requires help or risks an incorrect order; S3 causes substantial delay/retry; S4 is minor/cosmetic.

## 10. Automated technical rehearsal — not the human pilot

The local services were exercised on 29/07/2026 to verify that the scenario reaches real SUT states. This is engineering preflight evidence only and cannot satisfy the assignment’s pilot requirement.

| Checkpoint | Result | Observation |
| --- | --- | --- |
| Add multiple products | Passed | Two selected products appeared as separate cart rows. |
| Adjust quantity in cart | Blocked | Quantity is read-only; the required `+`/`−` controls do not exist. |
| Remove a product | Passed with concern | Removal works immediately but has no confirmation dialog. |
| Checkout without coupon | Passed | Coupon input remained blank and no discount was applied. |
| Complete order | Passed | The SUT displayed its success state. |
| Post-checkout cart | Failed | The purchased item remained in the cart, contrary to FR-08. |

Evidence: [technical-rehearsal-final-state.png](evidence/task2/technical-rehearsal-final-state.png). Machine-readable observations: [technical-rehearsal.json](tests/usability/technical-rehearsal.json).

### Refinement recommendation for the real pilot

Keep the selected goal unchanged so the pilot can reveal whether the missing quantity controls are a genuine blocker. Add a moderator stop condition: if the participant cannot find a quantity-edit action after 60 seconds and has explained their expectation, record the task as blocked and continue to deletion/checkout without teaching a workaround. Confirm or revise this rule from the real pilot evidence in `[PILOT_REFINEMENT]`.

## 11. Phase 1 completion gate

The design, scenario, instruments, recruitment criteria, moderator script, observation form and technical preflight are prepared. Phase 1 must remain marked **pending** until all P01–P07 fields and the complete human pilot record are replaced with genuine, reviewable evidence.
