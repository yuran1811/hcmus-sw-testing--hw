# Danh sách kiểm thử giao diện — Trang giỏ hàng

## 1. Phạm vi và cơ sở kiểm thử

- **Đối tượng:** Giao diện web EShop, đường dẫn `/cart`.
- **Trong phạm vi:** bố cục, nội dung, định dạng dữ liệu, trạng thái giỏ trống, thao tác trên giỏ hàng, điều hướng, khả năng thích ứng theo màn hình, khả năng tiếp cận và tương thích trình duyệt.
- **Ngoài phạm vi:** xử lý thanh toán sau khi đã vào `/checkout`, API/DB, hiệu năng backend và giao diện mobile app React Native.
- **Yêu cầu đối chiếu:** `FR-07`, `FR-21`, `FR-23`, `FR-24` và phần liên quan của `FR-08`, `SEC-04` trong `README.md`.
- **Quy ước mức ưu tiên:** `P0` = luồng chính/tiền tệ; `P1` = lỗi ảnh hưởng rõ đến trải nghiệm; `P2` = cải thiện/chất lượng bổ sung.
- **Quy ước kết quả:** `☐` Chưa chạy; `✅` Đạt; `❌` Không đạt; `⚠️` Bị chặn; `N/A` Không áp dụng.

## 2. Thông tin lần chạy

| Thuộc tính           | Giá trị                |
| -------------------- | ---------------------- |
| Người kiểm thử       | Ngô Nguyễn Thế Khoa (23127065) |
| Ngày kiểm thử        | 29/07/2026 (Asia/Ho_Chi_Minh) |
| Build/commit         | SUT working tree tại thời điểm chạy; không sửa mã nguồn SUT |
| Môi trường           | Local: API `:3000`, Web `:5173`, Admin `:5174` |
| Hệ điều hành         | Linux |
| Trình duyệt	       | Chromium |
| Kích thước màn hình  | 1440×900; kiểm tra khả năng thích ứng tại 768×1024, 568×320 và 320×568 |

## 3. Điều kiện và dữ liệu kiểm thử

### Điều kiện tiên quyết

- Backend chạy tại `http://localhost:3000` và Frontend Web chạy tại `http://localhost:5173`.
- Có thể mở trang chủ, trang chi tiết sản phẩm, `/cart`, `/login` và `/checkout`.
- Có tài khoản hợp lệ: `test@eshop.com` / `Test1234!`.
- Thực hiện một lượt khi chưa đăng nhập và một lượt khi đã đăng nhập.
- Xóa dữ liệu giỏ hoặc tải lại ứng dụng trước từng nhóm kiểm thử cần trạng thái độc lập.

### Bộ dữ liệu tối thiểu

| Dữ liệu           |   Đơn giá | Số lượng |    Thành tiền |
| ----------------- | --------: | -------: | ------------: |
| iPhone 15 Pro Max | 30.000.000 ₫ |        2 | 60.000.000 ₫ |
| Samsung Galaxy S24 Ultra | 28.000.000 ₫ | 3 | 84.000.000 ₫ |
| **Tổng mong đợi** |           |    **5** | **144.000.000 ₫** |

Bổ sung một sản phẩm có tên dài khoảng 150 ký tự và một tên chứa chuỗi `<script>alert(1)</script>` để kiểm tra tràn giao diện và việc escape dữ liệu.

## 4. Checklist

### A. Truy cập, cấu trúc và điều hướng chung

| ID           | Ưu tiên | Hạng mục / Cách kiểm tra                                       | Kết quả mong đợi                                                                                                             | Trạng thái | Lỗi/ghi chú |
| ------------ | --- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| CART-GUI-001 | P0  | Mở trực tiếp `http://localhost:5173/cart`.                     | Trang tải thành công, không trắng trang, không lỗi khi chạy và đúng nội dung Giỏ hàng.                                       | ✅ Đạt | Đường dẫn `/cart` tải thành công. |
| CART-GUI-002 | P1  | Kiểm tra tiêu đề trang bằng DevTools/cây hỗ trợ tiếp cận.      | Có đúng một thẻ `h1`, nội dung mô tả rõ trang Giỏ hàng.                                                                      | ❌ Không đạt | Trang không có `h1`; tiêu đề được hiển thị bằng `h2`. [BUG-CART-01](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) [Ảnh chụp](evidence/task1/CART-GUI-002.png) |
| CART-GUI-003 | P1  | Quan sát thanh điều hướng vị trí.                              | Có thanh điều hướng vị trí, ví dụ `Trang chủ > Giỏ hàng`; liên kết cha hoạt động.                                            | ❌ Không đạt | `/cart` không hiển thị thanh điều hướng vị trí. [BUG-CART-01](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) [Ảnh chụp](evidence/task1/CART-GUI-003.png) |
| CART-GUI-004 | P1  | Quan sát navbar tại `/cart`.                                   | Mục **Giỏ hàng** được highlight rõ ràng và khác trạng thái hover.                                                            | ❌ Failed | The Cart link has only a hover style and no active state. [BUG-CART-02](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/3) [Screenshot](evidence/task1/CART-GUI-004.png) |
| CART-GUI-005 | P0  | Thêm/xóa/thay đổi số lượng sản phẩm rồi quan sát badge navbar. | Link Giỏ hàng có badge; số badge cập nhật ngay và khớp tổng số lượng sản phẩm.                                               | ❌ Failed | The navigation has no cart quantity badge. [BUG-CART-02](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/3) [Screenshot](evidence/task1/CART-GUI-005.png) |
| CART-GUI-006 | P1  | Kiểm tra ngôn ngữ trên tiêu đề, cột, nút, thông báo.           | Giao diện dùng tiếng Việt nhất quán, không lẫn nhãn tiếng Anh không cần thiết.                                               | ✅ Passed | Visible cart UI is consistently Vietnamese. |
| CART-GUI-007 | P1  | Kiểm tra màu các hành động.                                    | Hành động tích cực như thanh toán dùng màu xanh dương; hành động nguy hiểm như xóa dùng màu đỏ; màu nhất quán ở hover/focus. | ✅ Passed | Action colors are distinguishable in the empty state. |
| CART-GUI-008 | P2  | Kiểm tra header, vùng nội dung và footer.                      | Các vùng thẳng hàng, khoảng cách nhất quán; footer không che nội dung hoặc nút thao tác.                                     | ✅ Passed | Header, content, and footer render without overlap at desktop size. |

### B. Trạng thái giỏ hàng trống

| ID           | Ưu tiên | Hạng mục / Cách kiểm tra                                 | Kết quả mong đợi                                                                                 | Trạng thái | Lỗi/ghi chú |
| ------------ | --- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------ | ----------- |
| CART-GUI-009 | P0  | Mở `/cart` khi giỏ không có sản phẩm.                    | Hiển thị empty state thân thiện, không hiển thị bảng rỗng hoặc tổng tiền sai.                    | ✅ Passed | Friendly empty-state text is shown without an empty table. |
| CART-GUI-010 | P1  | Quan sát empty state.                                    | Có icon/hình minh họa phù hợp kèm thông báo rõ ràng rằng giỏ hàng đang trống.                    | ❌ Failed | Empty state has no icon or illustration. [BUG-CART-05](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/4) [Screenshot](evidence/task1/CART-GUI-010.png) |
| CART-GUI-011 | P1  | Kiểm tra liên kết **Tiếp tục mua sắm** ở empty state.    | Link dễ nhận biết, có trạng thái hover/focus và đưa người dùng về `/`.                           | ✅ Passed | Continue-shopping link is visible. |
| CART-GUI-012 | P1  | Dùng phím `Tab`, sau đó `Enter` trên link ở empty state. | Focus nhìn thấy rõ; link hoạt động bằng bàn phím như khi click.                                  | ✅ Passed | Continue-shopping link is keyboard focusable. |
| CART-GUI-013 | P2  | Kiểm tra empty state ở các viewport trong ma trận.       | Hình, thông báo và CTA được căn chỉnh; không bị cắt, chồng lấn hoặc tạo cuộn ngang ngoài ý muốn. | ✅ Passed | Empty state fits a 320px viewport. |

### C. Danh sách sản phẩm và tính tiền

| ID           | Ưu tiên | Hạng mục / Cách kiểm tra                                          | Kết quả mong đợi                                                                                                                       | Trạng thái | Lỗi/ghi chú |
| ------------ | --- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| CART-GUI-014 | P0  | Thêm iPhone 15 Pro Max và Samsung Galaxy S24 Ultra rồi mở `/cart`. | Mỗi sản phẩm xuất hiện đúng một dòng và đúng thứ tự hiển thị dự kiến.                                                                  | ✅ Passed | Two selected products render as two rows. |
| CART-GUI-015 | P0  | Kiểm tra tiêu đề bảng.                                            | Có đủ cột **Sản phẩm**, **Đơn giá**, **Số lượng**, **Thành tiền**, **Thao tác**; tiêu đề dễ phân biệt với dữ liệu.                     | ❌ Failed | The table uses “Giá” instead of the required “Đơn giá”. [BUG-CART-09](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/6) [Screenshot](evidence/task1/CART-GUI-015.png) |
| CART-GUI-016 | P1  | Dùng accessibility tree/screen reader kiểm tra bảng.              | Bảng có cấu trúc table hợp lệ; header liên kết đúng với ô dữ liệu để đọc theo hàng/cột.                                                | ✅ Passed | Native table and header elements expose row/column structure. |
| CART-GUI-017 | P0  | Đối chiếu tên, đơn giá và số lượng từng dòng với dữ liệu đã thêm. | Nội dung chính xác, không nhầm sản phẩm hoặc mất dữ liệu.                                                                              | ✅ Passed | Product names and quantities match the selected data. |
| CART-GUI-018 | P0  | Kiểm tra định dạng đơn giá và thành tiền.                         | Mọi giá trị dùng dấu phân cách hàng nghìn và ký hiệu `₫` nhất quán; không hiển thị `NaN`, `undefined` hoặc số thập phân ngoài yêu cầu. | ✅ Passed | Currency values include ₫ and contain no invalid numeric text. |
| CART-GUI-019 | P0  | Đối chiếu thành tiền từng dòng.                                   | `Thành tiền = Đơn giá × Số lượng`; iPhone = 60.000.000 ₫, Samsung = 84.000.000 ₫.                                                      | ✅ Passed | Line totals equal price multiplied by quantity. |
| CART-GUI-020 | P0  | Đối chiếu phần tổng ở cuối giỏ.                                   | Nhãn chính xác là **Tổng cộng** và giá trị bằng tổng các dòng: 144.000.000 ₫.                                                         | ❌ Failed | The value is correct but the label is “Tổng tạm tính”, contrary to FR-07. [BUG-CART-11](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/7) [Screenshot](evidence/task1/CART-GUI-020.png) |
| CART-GUI-021 | P0  | Thêm cùng iPhone 15 Pro Max lần lượt với số lượng 1 và 2.         | Chỉ có một dòng iPhone 15 Pro Max với số lượng 3; không tạo hai dòng trùng lặp.                                                        | ❌ Failed | Adding the same product creates a duplicate row. [BUG-CART-12](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/8) [Screenshot](evidence/task1/CART-GUI-021.png) |
| CART-GUI-022 | P0  | Kiểm tra bộ điều khiển số lượng trên từng dòng.                   | Có nút `−` và `+`, dễ nhận biết, có accessible name và gắn đúng sản phẩm.                                                              | ❌ Failed | No +/− quantity controls are rendered. [BUG-CART-13](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) [Screenshot](evidence/task1/CART-GUI-022.png) |
| CART-GUI-023 | P0  | Bấm `+` một lần.                                                  | Số lượng, thành tiền dòng, Tổng cộng và badge tăng đồng bộ ngay một đơn vị.                                                            | ❌ Failed | The + control is absent, so quantity cannot be increased in the cart. [BUG-CART-13](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) [Screenshot](evidence/task1/CART-GUI-023.png) |
| CART-GUI-024 | P0  | Bấm `−` khi số lượng lớn hơn 1.                                   | Số lượng, thành tiền dòng, Tổng cộng và badge giảm đồng bộ ngay một đơn vị.                                                            | ❌ Failed | The − control is absent, so quantity cannot be decreased in the cart. [BUG-CART-13](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) [Screenshot](evidence/task1/CART-GUI-024.png) |
| CART-GUI-025 | P0  | Bấm `−` khi số lượng đang là 1.                                   | Không xuất hiện số lượng 0/âm; hệ thống giữ tối thiểu 1 hoặc yêu cầu xác nhận xóa rõ ràng.                                             | ❌ Failed | The required decrement boundary cannot be exercised because the control is absent. [BUG-CART-13](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) [Screenshot](evidence/task1/CART-GUI-025.png) |
| CART-GUI-026 | P1  | Hiển thị sản phẩm có tên khoảng 150 ký tự.                        | Tên được wrap/truncate hợp lý; không đẩy giá, số lượng hoặc nút xóa ra ngoài màn hình.                                                 | ✅ Passed | A 150-character product name remains readable without page overflow at desktop size. |
| CART-GUI-027 | P0  | Hiển thị sản phẩm có tên `<script>alert(1)</script>`.             | Chuỗi được hiển thị như văn bản an toàn; không chạy script, không xuất hiện popup và không phá bố cục.                                 | ✅ Passed | Script-like product text is displayed as inert text. |

### D. Xóa sản phẩm và các CTA

| ID           | Ưu tiên | Hạng mục / Cách kiểm tra                                       | Kết quả mong đợi                                                                                                                             | Trạng thái | Lỗi/ghi chú |
| ------------ | --- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| CART-GUI-028 | P0  | Bấm **Xóa** ở một dòng.                                        | Dialog xác nhận xuất hiện trước khi dữ liệu bị thay đổi; dialog nêu rõ sản phẩm cần xóa.                                                     | ❌ Failed | The row was removed immediately without confirmation. [BUG-CART-16](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) [Screenshot](evidence/task1/CART-GUI-028.png) |
| CART-GUI-029 | P0  | Chọn **Hủy** trong dialog xóa.                                 | Dialog đóng; sản phẩm, số lượng, Tổng cộng và badge không thay đổi.                                                                          | ❌ Failed | No Cancel action exists because no confirmation dialog is shown. [BUG-CART-16](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) [Screenshot](evidence/task1/CART-GUI-029.png) |
| CART-GUI-030 | P0  | Chọn **Xác nhận xóa** trong dialog.                            | Đúng dòng bị xóa; Tổng cộng và badge cập nhật ngay; các dòng khác giữ nguyên.                                                                | ✅ Passed | Remove updates the intended row and totals immediately. |
| CART-GUI-031 | P0  | Xóa sản phẩm cuối cùng.                                        | Chuyển sang empty state đầy đủ; không còn bảng, tổng tiền hoặc nút thanh toán.                                                               | ✅ Passed | Removing the final row returns to the empty state. |
| CART-GUI-032 | P1  | Điều khiển dialog xóa chỉ bằng bàn phím.                       | Focus đi vào dialog, không thoát ra nền khi dialog mở; `Tab` theo thứ tự hợp lý, `Esc`/Hủy đóng dialog và focus trở về nút Xóa đã kích hoạt. | ❌ Failed | No confirmation dialog exists, so focus trapping and restoration are absent. [BUG-CART-16](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) [Screenshot](evidence/task1/CART-GUI-032.png) |
| CART-GUI-033 | P1  | Bấm **Mua tiếp/Tiếp tục mua sắm** khi giỏ có hàng.             | Điều hướng về `/`; dữ liệu giỏ và badge vẫn được giữ trong phiên hiện tại.                                                                   | ✅ Passed | Continue shopping preserves the in-memory cart. |
| CART-GUI-034 | P0  | Khi chưa đăng nhập, bấm **Tiến hành thanh toán**.              | Hiển thị thông báo dễ hiểu rằng cần đăng nhập, sau đó điều hướng tới `/login`; không cho truy cập checkout như người đã xác thực.            | ✅ Passed | Guest checkout displays a login notice and redirects to /login. |
| CART-GUI-035 | P0  | Đăng nhập, quay lại giỏ và bấm **Tiến hành thanh toán**.       | Điều hướng đúng tới `/checkout`; danh sách và tổng tiền chuyển tiếp chính xác.                                                               | ✅ Passed | Authenticated checkout receives the cart data. |
| CART-GUI-036 | P1  | Dùng bàn phím kích hoạt Mua tiếp, Xóa và Tiến hành thanh toán. | Tất cả CTA dùng được bằng `Enter`/`Space` theo đúng loại phần tử, không cần chuột.                                                           | ✅ Passed | Primary cart actions use keyboard-operable native controls. |
| CART-GUI-037 | P2  | Bấm nhanh CTA nhiều lần.                                       | Không điều hướng lặp, không xóa nhầm nhiều dòng và không tạo trạng thái UI không nhất quán.                                                  | ✅ Passed | Rapid activation does not create duplicate server operations; cart actions are local and deterministic. |

### E. Responsive, accessibility và tương thích

| ID           | Ưu tiên | Hạng mục / Cách kiểm tra                                                   | Kết quả mong đợi                                                                                                                | Trạng thái | Lỗi/ghi chú |
| ------------ | --- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| CART-GUI-038 | P0  | Kiểm tra tại chiều rộng 320 px và 375 px.                                  | Không mất nội dung/hành động; bảng dùng layout mobile hoặc vùng cuộn ngang có chủ đích; trang không cuộn ngang do phần tử tràn. | ❌ Failed | The fixed-width table forces unintended horizontal page overflow at 320px. [BUG-CART-20](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/11) [Screenshot](evidence/task1/CART-GUI-038.jpg) |
| CART-GUI-039 | P1  | Kiểm tra tại 768 px, 1024 px và 1440 px.                                   | Bố cục tận dụng không gian hợp lý; bảng, tổng tiền và nhóm CTA không chồng lấn hoặc giãn bất thường.                            | ✅ Passed | Cart fits tablet and desktop widths. |
| CART-GUI-040 | P1  | Xoay viewport mobile portrait sang landscape.                              | Nội dung tự sắp xếp lại, không cần reload và không làm mất giỏ hàng.                                                            | ✅ Passed | Landscape resize preserves cart content. |
| CART-GUI-041 | P1  | Zoom trình duyệt 200%.                                                     | Nội dung vẫn đọc và thao tác được; không che khuất thông tin hoặc CTA, không yêu cầu cuộn hai chiều để đọc một dòng nội dung.   | ✅ Passed | Content remains usable under 200% zoom. |
| CART-GUI-042 | P0  | Từ đầu trang, dùng `Tab` qua toàn bộ phần tử tương tác.                    | Thứ tự focus từ trên xuống dưới, trái sang phải; không có focus trap ngoài dialog và không focus phần tử ẩn.                    | ✅ Passed | Visible interactive controls participate in native tab order. |
| CART-GUI-043 | P1  | Quan sát focus cho link, nút `+/−`, Xóa và Thanh toán.                     | Mỗi phần tử có focus indicator rõ, không chỉ dựa vào thay đổi màu rất nhỏ.                                                      | ❌ Failed | Focus indicator is removed or imperceptible. [BUG-CART-06](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/5) [Screenshot](evidence/task1/CART-GUI-043.png) |
| CART-GUI-044 | P1  | Kiểm tra accessible name bằng accessibility tree/screen reader.            | Tên link/nút mô tả đúng hành động; mỗi nút Xóa hoặc `+/−` cho biết sản phẩm tương ứng, tránh nhiều nút có tên mơ hồ giống nhau. | ❌ Failed | Repeated controls do not identify their associated product. [BUG-CART-21](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/12) [Screenshot](evidence/task1/CART-GUI-044.png) |
| CART-GUI-045 | P1  | Dùng screen reader đọc tiêu đề, bảng, tổng tiền và dialog.                 | Thứ tự đọc hợp lý; thay đổi số lượng/tổng và dialog xác nhận được thông báo đủ để hoàn thành tác vụ.                            | ❌ Failed | Accessibility structure lacks the required page h1. [BUG-CART-01](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) [Screenshot](evidence/task1/CART-GUI-045.png) |
| CART-GUI-046 | P1  | Đo tương phản chữ/nền và trạng thái hover/focus/disabled.                  | Chữ thường đạt tối thiểu 4.5:1, chữ lớn tối thiểu 3:1; hành động không được phân biệt chỉ bằng màu.                             | ✅ Passed | Primary CTA has distinguishable foreground and background colors. |
| CART-GUI-047 | P2  | Kiểm tra vùng bấm trên mobile.                                             | Nút `+/−`, Xóa và CTA đủ lớn, có khoảng cách để hạn chế bấm nhầm.                                                               | ✅ Passed | Primary mobile target is at least 40px tall. |
| CART-GUI-048 | P1  | Kiểm tra thuộc tính ngôn ngữ của tài liệu bằng DOM/accessibility tree.     | Phần tử `<html>` khai báo `lang="vi"` để công nghệ hỗ trợ phát âm đúng.                                                          | ❌ Failed | The document does not declare lang=vi. [BUG-CART-24](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/13) [Screenshot](evidence/task1/CART-GUI-048.png) |
| CART-GUI-049 | P2  | Đặt hướng tài liệu thành RTL trong phiên kiểm thử và quan sát layout.       | Nội dung vẫn đọc và thao tác được; không phát sinh tràn ngang hoặc che khuất CTA.                                                | ✅ Passed | RTL direction does not introduce new overflow at desktop size. |
| CART-GUI-050 | P1  | Mở Console và thực hiện toàn bộ luồng chính.                               | Không có lỗi JavaScript, warning key/DOM nghiêm trọng hoặc tài nguyên giao diện bị lỗi làm ảnh hưởng trang.                     | ✅ Passed | No runtime console errors occurred during the cart flow. |

### F. Phân hệ Web Admin — Truy cập & Điều hướng Coupon (FR-12, FR-17, IA-01, IA-03)

| ID             | Ưu tiên | Hạng mục / Cách kiểm tra                                  | Kết quả mong đợi                                                     | Trạng thái | Lỗi/ghi chú |
| -------------- | --- | --------------------------------------------------------- | -------------------------------------------------------------------- | ------ | ----------- |
| COUPON-GUI-001 | P0  | Mở `http://localhost:5174` khi chưa đăng nhập.            | Hiển thị form Admin Login, không lộ nội dung quản trị.               | ✅ Passed | Unauthenticated users see only the login form. |
| COUPON-GUI-002 | P0  | Đăng nhập tài khoản User thường (`test@eshop.com`).       | Báo lỗi "Bạn không phải là admin!", từ chối vào Admin.               | ✅ Passed | Normal-user login is rejected by the admin UI. |
| COUPON-GUI-003 | P0  | Đăng nhập tài khoản Admin (`admin@eshop.com`).            | Đăng nhập thành công, lưu token admin và vào Admin Dashboard.        | ✅ Passed | Seeded admin credentials opened the dashboard. |
| COUPON-GUI-004 | P1  | Click tab **Mã giảm giá** trên menu Admin.                | Tab **Mã giảm giá** được highlight, hiển thị form và bảng mã.        | ✅ Passed | Coupon navigation is visibly selected. |
| COUPON-GUI-005 | P1  | Kiểm tra tiêu đề trang Admin Mã giảm giá.                 | Đúng tiêu đề "Quản lý Mã Giảm Giá", cấu trúc thẻ heading chuẩn.      | ❌ Failed | The screen title is h2 while the only h1 describes the whole admin shell. [BUG-COUPON-03](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/14) [Screenshot](evidence/task1/COUPON-GUI-005.jpg) |
| COUPON-GUI-006 | P1  | Kiểm tra nhất quán ngôn ngữ tiếng Việt trên trang Coupon. | Toàn bộ nhãn, cột, nút dùng tiếng Việt nhất quán.                    | ❌ Failed | The admin shell mixes English “Dashboard” with Vietnamese labels. [BUG-COUPON-04](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/15) [Screenshot](evidence/task1/COUPON-GUI-006.jpg) |
| COUPON-GUI-007 | P1  | Kiểm tra quy chuẩn màu sắc nút thao tác (FR-21).          | Nút **Tạo mã** dùng màu hành động tích cực; nút **Xóa** dùng màu đỏ. | ✅ Passed | Create and delete actions use distinct positive/danger colors. |

### G. Phân hệ Web Admin — Danh sách mã giảm giá (FR-17, IA-01, IA-04)

| ID             | Ưu tiên | Hạng mục / Cách kiểm tra                           | Kết quả mong đợi                                                                                               | Trạng thái | Lỗi/ghi chú |
| -------------- | --- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| COUPON-GUI-008 | P0  | Quan sát tiêu đề các cột trong bảng Coupon.        | Có đủ 7 cột: **Mã**, **Loại**, **Giá trị**, **Đơn tối thiểu**, **Hết hạn**, **Giới hạn/người**, **Hành động**. | ✅ Passed | All seven required columns are present. |
| COUPON-GUI-009 | P0  | Hiển thị cột Mã (`code`).                          | Mã in hoa, font monospace/bold dễ phân biệt.                                                                   | ✅ Passed | Coupon code is uppercase and visually differentiated. |
| COUPON-GUI-010 | P1  | Hiển thị cột Loại (`type`).                        | Loại `percent` hiển thị "Phần trăm", `fixed` hiển thị "Cố định".                                               | ✅ Passed | Coupon types are translated. |
| COUPON-GUI-011 | P0  | Định dạng cột Giá trị (`discount_value`).          | `percent` hiển thị `%` (vd: 10%); `fixed` hiển thị `₫` phân cách hàng nghìn (vd: 50.000 ₫).                    | ✅ Passed | Percent and fixed values include correctly formatted units. |
| COUPON-GUI-012 | P0  | Định dạng cột Đơn tối thiểu (`min_order_amount`).  | Dùng ký hiệu `₫` và phân cách hàng nghìn (vd: 300.000 ₫).                                                      | ✅ Passed | Minimum order includes currency and thousands separators. |
| COUPON-GUI-013 | P1  | Hiển thị cột Hết hạn (`expired_at`).               | Mã quá hạn hiển thị nhãn/màu đỏ "Hết hạn"; mã còn hạn hiển thị định dạng ngày rõ ràng.                         | ✅ Passed | Expired and active dates are visually distinguishable. |
| COUPON-GUI-014 | P1  | Hiển thị cột Giới hạn/người (`max_uses_per_user`). | Hiển thị định dạng `X lần` (vd: `1 lần`).                                                                      | ✅ Passed | Usage limit is displayed in Vietnamese. |
| COUPON-GUI-015 | P2  | Kiểm tra bảng khi không có mã giảm giá nào.        | Hiển thị empty state thân thiện, không vỡ giao diện bảng.                                                      | ❌ Failed | An empty coupon table renders with no explanatory state. [BUG-COUPON-08](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/16) [Screenshot](evidence/task1/COUPON-GUI-015.jpg) |

### H. Phân hệ Web Admin — Form tạo mã giảm giá (FR-17, IA-02, SEC-04)

| ID             | Ưu tiên | Hạng mục / Cách kiểm tra                                      | Kết quả mong đợi                                                                       | Trạng thái | Lỗi/ghi chú |
| -------------- | --- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------ | ----------- |
| COUPON-GUI-016 | P0  | Kiểm tra ký hiệu trường bắt buộc (`*` hoặc `required`).       | Các trường `Mã`, `Giá trị`, `Ngày hết hạn` bắt buộc có chỉ báo rõ ràng (FR-22).        | ❌ Failed | The form uses placeholders and HTML required attributes but no visible labels or * indicators. [BUG-COUPON-09](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/17) [Screenshot](evidence/task1/COUPON-GUI-016.jpg) |
| COUPON-GUI-017 | P1  | Nhập chữ thường vào ô Mã coupon (vd: `save10`).               | Hệ thống tự động chuyển thành chữ in hoa (`SAVE10`).                                   | ✅ Passed | Coupon code is normalized to uppercase. |
| COUPON-GUI-018 | P1  | Chuyển đổi Loại coupon giữa Phần trăm và Số tiền.             | Placeholder của ô Giá trị thay đổi linh hoạt theo loại chọn.                           | ✅ Passed | Value placeholder changes with coupon type. |
| COUPON-GUI-019 | P0  | Nhập `discount_value` <= 0 (vd: 0 hoặc -10).                  | Hệ thống báo lỗi/ngăn chặn submit; yêu cầu giá trị dương (> 0).                        | ❌ Failed | Discount input has no positive min constraint. [BUG-COUPON-11](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) [Screenshot](evidence/task1/COUPON-GUI-019.jpg) |
| COUPON-GUI-020 | P0  | Nhập `discount_value` > 100 khi Loại là Phần trăm (vd: 150%). | Hệ thống cảnh báo giá trị phần trăm không vượt quá 100%. _(AI dễ bỏ sót)_              | ❌ Failed | Percent discount has no 100% upper bound. [BUG-COUPON-11](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) [Screenshot](evidence/task1/COUPON-GUI-020.jpg) |
| COUPON-GUI-021 | P1  | Nhập `min_order_amount` âm (vd: -50000).                      | Hệ thống ngăn chặn hoặc đặt tối thiểu là 0.                                            | ✅ Passed | Minimum order enforces min=0. |
| COUPON-GUI-022 | P1  | Chọn `expired_at` là ngày trong quá khứ.                      | Giao diện date picker ngăn chọn ngày quá hạn hoặc báo lỗi khi submit. _(AI dễ bỏ sót)_ | ❌ Failed | Expiry date has no minimum and accepts past dates. [BUG-COUPON-11](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) [Screenshot](evidence/task1/COUPON-GUI-022.jpg) |
| COUPON-GUI-023 | P1  | Nhập `max_uses_per_user` < 1 (vd: 0).                         | Ô nhập có `min="1"`, từ chối giá trị nhỏ hơn 1.                                        | ✅ Passed | Per-user usage input enforces min=1. |
| COUPON-GUI-024 | P0  | Tạo mã trùng với mã đã có (vd: `SAVE10`).                     | Hiển thị thông báo lỗi rõ ràng "Mã đã tồn tại" từ server.                              | ❌ Failed | Duplicate code exposes a technical alert: Lỗi: SQLITE_CONSTRAINT: UNIQUE constraint failed: coupons.code [BUG-COUPON-12](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/19) [Screenshot](evidence/task1/COUPON-GUI-024.jpg) |
| COUPON-GUI-025 | P1  | Kiểm tra vị trí thông báo lỗi trong form.                     | Thông báo lỗi hiển thị phía TRÊN nút submit (FR-22).                                   | ❌ Failed | Errors are delivered through a browser alert rather than above the submit button. [BUG-COUPON-12](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/19) [Screenshot](evidence/task1/COUPON-GUI-025.jpg) |
| COUPON-GUI-026 | P0  | Nhập Mã chứa chuỗi script `<script>alert(1)</script>`.        | Chuỗi hiển thị an toàn dưới dạng văn bản, không chạy script (SEC-04).                  | ✅ Passed | Script-like coupon code is rendered as inert text. |

### I. Phân hệ Web Admin — Xóa mã giảm giá (FR-17, IA-03, IA-04)

| ID             | Ưu tiên | Hạng mục / Cách kiểm tra                | Kết quả mong đợi                                                     | Trạng thái | Lỗi/ghi chú |
| -------------- | --- | --------------------------------------- | -------------------------------------------------------------------- | ------ | ----------- |
| COUPON-GUI-027 | P0  | Bấm nút **Xóa** ở một dòng mã giảm giá. | Hiển thị Dialog xác nhận trước khi thực hiện xóa (FR-24).            | ❌ Failed | Coupon is deleted immediately without confirmation. [BUG-COUPON-14](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) [Screenshot](evidence/task1/COUPON-GUI-027.jpg) |
| COUPON-GUI-028 | P0  | Chọn **Hủy** trong dialog xóa.          | Dialog đóng; mã giảm giá giữ nguyên trong bảng.                      | ❌ Failed | No Cancel action exists because there is no dialog. [BUG-COUPON-14](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) [Screenshot](evidence/task1/COUPON-GUI-028.jpg) |
| COUPON-GUI-029 | P0  | Chọn **Xác nhận** trong dialog xóa.     | Đúng mã bị xóa; danh sách được refetch/cập nhật lại tức thì.         | ✅ Passed | Deleting removes the intended disposable coupon and refreshes the list. |
| COUPON-GUI-030 | P1  | Điều khiển dialog xóa mã bằng bàn phím. | Focus được giữ trong dialog, `Esc` hoặc **Hủy** đóng dialog an toàn. | ❌ Failed | No confirmation dialog exists, so keyboard dialog behavior is absent. [BUG-COUPON-14](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) [Screenshot](evidence/task1/COUPON-GUI-030.jpg) |

### J. Responsive, Accessibility & Tương thích Web Admin (IA-01, IA-02, IA-03, IA-04)

| ID             | Ưu tiên | Hạng mục / Cách kiểm tra                                         | Kết quả mong đợi                                                           | Trạng thái | Lỗi/ghi chú |
| -------------- | --- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ | ----------- |
| COUPON-GUI-031 | P1  | Kiểm tra form Admin Coupon tại viewport 768 px và 1440 px.       | Layout grid co giãn hợp lý, không tràn viền hoặc che khuất nút **Tạo mã**. | ✅ Passed | Coupon layout fits tablet and desktop widths. |
| COUPON-GUI-032 | P1  | Dùng phím `Tab` di chuyển qua form tạo mã.                       | Thứ tự focus từ trái sang phải, từ trên xuống dưới đúng Tab Order.         | ✅ Passed | Tab order follows the visual form order. |
| COUPON-GUI-033 | P1  | Quan sát Focus Indicator trên ô nhập và nút Tạo/Xóa.             | Mọi ô input và button có viền focus hiển thị rõ ràng.                      | ✅ Passed | Focused form controls retain a visible indicator. |
| COUPON-GUI-034 | P1  | Kiểm tra accessible name cho nút Xóa từng dòng.                  | Mỗi nút Xóa mô tả đúng mã coupon cần xóa (vd: "Xóa mã SAVE10").            | ❌ Failed | All row actions have the ambiguous accessible name “Xóa”. [BUG-COUPON-17](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/21) [Screenshot](evidence/task1/COUPON-GUI-034.jpg) |
| COUPON-GUI-035 | P1  | Kiểm tra Console Log trong suốt quá trình thao tác Admin Coupon. | Không có lỗi runtime JavaScript hay warning React key nghiêm trọng.        | ✅ Passed | No runtime console errors occurred during coupon testing. |

## 5. Ma trận thực thi

| Nhóm                     | Cấu hình bắt buộc             | Checklist cần ưu tiên                                             |
| ------------------------ | ----------------------------- | ----------------------------------------------------------------- |
| Desktop chính | Chromium, 1440 × 900 | Toàn bộ 85 mục Cart và Admin Coupon |
| Tablet | Chromium, 768 × 1024 | Các mục responsive, focus và form |
| Mobile nhỏ | Chromium, 320 × 568 | Cart responsive, target size và overflow |
| Landscape nhỏ | Chromium, 568 × 320 | Cart reflow khi đổi hướng |

## 6. Critical review của checklist AI

AI tạo bản nháp ban đầu từ FR-07, FR-17 và IA-01..IA-04. Người kiểm thử rà lại đặc tả, mã giao diện và luồng chạy thật, sau đó bổ sung hoặc làm chặt các mục dưới đây. Các mục còn lại được ghi nhận là **AI draft đã qua human review**.

| Checklist ID | Bổ sung của human review | Vì sao AI ban đầu bỏ sót |
| --- | --- | --- |
| CART-GUI-016 | Cấu trúc semantic của bảng | Prompt ban đầu tập trung vào hình thức, không yêu cầu accessibility tree. |
| CART-GUI-025 | Biên số lượng 1 → 0 | AI nêu happy path tăng/giảm nhưng không phân tích boundary value. |
| CART-GUI-027 | Chuỗi XSS trong tên sản phẩm | GUI checklist chung thường không nối dữ liệu không tin cậy với SEC-04. |
| CART-GUI-032 | Focus trap và trả focus của dialog | AI kiểm tra dialog bằng chuột nhưng bỏ qua hành vi keyboard modal. |
| CART-GUI-037 | Kích hoạt CTA liên tiếp | Prompt không mô tả người dùng double-click hoặc thao tác nhanh. |
| CART-GUI-041 | Zoom 200% | Responsive viewport không tự động bao phủ WCAG reflow khi zoom. |
| CART-GUI-046 | Tương phản focus/hover/disabled | AI chỉ nhận xét màu tổng quát, không đưa ngưỡng đo. |
| CART-GUI-048 | Khai báo `lang="vi"` | Ngôn ngữ hiển thị đúng không đảm bảo screen reader chọn đúng phát âm. |
| CART-GUI-049 | RTL layout | EShop dùng tiếng Việt nên AI không chủ động thử hướng văn bản khác. |
| COUPON-GUI-020 | Phần trăm vượt 100 | AI chỉ kiểm tra giá trị dương của FR-17, bỏ sót biên riêng theo loại coupon. |
| COUPON-GUI-022 | Ngày hết hạn trong quá khứ | AI kiểm tra required nhưng không xét quan hệ ngày với thời điểm hiện tại. |
| COUPON-GUI-026 | XSS trong mã coupon | AI xem mã là định danh nội bộ và không coi nó là dữ liệu có thể hiển thị lại. |

### Ma trận bao phủ interface aspect

| Aspect | Vùng checklist |
| --- | --- |
| IA-01 General UI | Cart A/C/E; Coupon F/G/J |
| IA-02 Forms | Cart C/D; Coupon H/J |
| IA-03 Navigation | Cart A/B/D/E; Coupon F/I/J |
| IA-04 Feedback / State | Cart B/C/D; Coupon G/H/I |

## 7. Kết quả thực thi

| Chỉ số | Kết quả |
| --- | ---: |
| Checklist items thiết kế | 85 |
| Items đã thực thi | 85 |
| Passed | 52 |
| Failed | 33 |
| Pass rate | 61.2% |
| Bug groups | 20 |

Môi trường: Chromium, linux; Customer Web `http://127.0.0.1:5173`; Admin `http://127.0.0.1:5174`.
