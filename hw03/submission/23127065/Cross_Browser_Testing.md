# Task 3 — Thực thi kiểm thử đa trình duyệt

## Phạm vi và môi trường

Danh sách kiểm tra đầy đủ của Task 1 được thực thi ba lần trên SUT EShop cục bộ: toàn bộ 50 mục kiểm tra Giỏ hàng khách hàng và 35 mục kiểm tra Mã giảm giá quản trị viên. Mỗi lần chạy sử dụng một ngữ cảnh trình duyệt mới. Cơ sở dữ liệu backend được sao lưu trước khi chạy và khôi phục sau khi hoàn tất tất cả ma trận kiểm thử.

| Ma trận | Trình duyệt / engine | Chế độ | Đã thực thi | Đạt | Không đạt |
| --- | --- | --- | ---: | ---: | ---: |
| Chrome | Google Chrome 151.0.7922.72 | Ngữ cảnh ẩn danh cô lập | 85 | 52 | 33 |
| Firefox | Firefox 151.0 | Ngữ cảnh ẩn danh cô lập | 85 | 52 | 33 |
| WebKit | WebKit 26.5, Safari | Ngữ cảnh ẩn danh cô lập | 85 | 52 | 33 |
| **Tổng cộng** | **3 engine trình duyệt** |  | **255** | **156** | **99** |

Trạng thái của cả 85 mã danh sách kiểm tra hoàn toàn giống nhau trong cả ba ma trận. Ba mươi ba mục không đạt là các lỗi Task 1 hiện có và có thể tái hiện, không phải phát hiện chỉ xuất hiện khi kiểm thử đa trình duyệt. Mọi ảnh chụp lỗi theo từng trình duyệt đều là ảnh chụp cửa sổ trình duyệt thực có giao diện, nằm trong `evidence/task3/`, hiển thị thanh trình duyệt, URL cục bộ, cùng nhãn `23127065 | Ngô Nguyễn Thế Khoa | 23127065@student.hcmus.edu.vn`, trình duyệt/engine, macOS và Apple M1 Pro.

## Kết quả và khả năng tái hiện

| Hiện vật | Nội dung |
| --- | --- |
| [Kết quả Chrome](tests/test-runs/task3-chrome-results.json) | 85 kết quả có cấu trúc; kênh Google Chrome |
| [Kết quả Firefox](tests/test-runs/task3-firefox-results.json) | 85 kết quả có cấu trúc; Firefox |
| [Kết quả WebKit](tests/test-runs/task3-webkit-results.json) | 85 kết quả có cấu trúc; WebKit tương thích Safari |
| `evidence/task3/chrome/` | 33 ảnh chụp lỗi Chrome có nhãn |
| `evidence/task3/firefox/` | 33 ảnh chụp lỗi Firefox có nhãn |
| `evidence/task3/webkit/` | 33 ảnh chụp lỗi WebKit có nhãn |

Không có lần chạy nào bị chặn. Mỗi ma trận đều có số liệu khớp là `85 = 52 đạt + 33 không đạt`.

## Bằng chứng trên trình duyệt thực

Safari, Firefox Developer Edition (riêng tư) và Google Chrome (Ẩn danh) cũng được mở trên máy Mac **Apple M1 Pro** tại `http://127.0.0.1:5173/cart`. Đây là các ảnh chụp cửa sổ trình duyệt thực: thanh trình duyệt hiển thị rõ URL cục bộ và mỗi ảnh đều có nhãn bắt buộc về email sinh viên, trình duyệt, hệ điều hành và thiết bị. Bằng chứng trực quan này xác nhận cùng trạng thái truy cập Giỏ hàng ẩn danh trên các trình duyệt đã cài đặt thực tế; ma trận tương thích Safari đầy đủ ở trên chạy bằng Playwright WebKit, không phải SafariDriver.

### Bằng chứng lỗi trên Google Chrome

![Ảnh chụp lỗi CART-GUI-002 trên Google Chrome](evidence/task3/chrome/CART-GUI-002.png)

![Ảnh chụp lỗi CART-GUI-003 trên Google Chrome](evidence/task3/chrome/CART-GUI-003.png)

![Ảnh chụp lỗi CART-GUI-004 trên Google Chrome](evidence/task3/chrome/CART-GUI-004.png)

![Ảnh chụp lỗi CART-GUI-005 trên Google Chrome](evidence/task3/chrome/CART-GUI-005.png)

![Ảnh chụp lỗi CART-GUI-010 trên Google Chrome](evidence/task3/chrome/CART-GUI-010.png)

![Ảnh chụp lỗi CART-GUI-015 trên Google Chrome](evidence/task3/chrome/CART-GUI-015.png)

![Ảnh chụp lỗi CART-GUI-020 trên Google Chrome](evidence/task3/chrome/CART-GUI-020.png)

![Ảnh chụp lỗi CART-GUI-021 trên Google Chrome](evidence/task3/chrome/CART-GUI-021.png)

![Ảnh chụp lỗi CART-GUI-022 trên Google Chrome](evidence/task3/chrome/CART-GUI-022.png)

![Ảnh chụp lỗi CART-GUI-023 trên Google Chrome](evidence/task3/chrome/CART-GUI-023.png)

![Ảnh chụp lỗi CART-GUI-024 trên Google Chrome](evidence/task3/chrome/CART-GUI-024.png)

![Ảnh chụp lỗi CART-GUI-025 trên Google Chrome](evidence/task3/chrome/CART-GUI-025.png)

![Ảnh chụp lỗi CART-GUI-028 trên Google Chrome](evidence/task3/chrome/CART-GUI-028.png)

![Ảnh chụp lỗi CART-GUI-029 trên Google Chrome](evidence/task3/chrome/CART-GUI-029.png)

![Ảnh chụp lỗi CART-GUI-032 trên Google Chrome](evidence/task3/chrome/CART-GUI-032.png)

![Ảnh chụp lỗi CART-GUI-038 trên Google Chrome](evidence/task3/chrome/CART-GUI-038.png)

![Ảnh chụp lỗi CART-GUI-043 trên Google Chrome](evidence/task3/chrome/CART-GUI-043.png)

![Ảnh chụp lỗi CART-GUI-044 trên Google Chrome](evidence/task3/chrome/CART-GUI-044.png)

![Ảnh chụp lỗi CART-GUI-045 trên Google Chrome](evidence/task3/chrome/CART-GUI-045.png)

![Ảnh chụp lỗi CART-GUI-048 trên Google Chrome](evidence/task3/chrome/CART-GUI-048.png)

![Ảnh chụp lỗi COUPON-GUI-005 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-005.png)

![Ảnh chụp lỗi COUPON-GUI-006 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-006.png)

![Ảnh chụp lỗi COUPON-GUI-015 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-015.png)

![Ảnh chụp lỗi COUPON-GUI-016 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-016.png)

![Ảnh chụp lỗi COUPON-GUI-019 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-019.png)

![Ảnh chụp lỗi COUPON-GUI-020 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-020.png)

![Ảnh chụp lỗi COUPON-GUI-022 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-022.png)

![Ảnh chụp lỗi COUPON-GUI-024 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-024.png)

![Ảnh chụp lỗi COUPON-GUI-025 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-025.png)

![Ảnh chụp lỗi COUPON-GUI-027 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-027.png)

![Ảnh chụp lỗi COUPON-GUI-028 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-028.png)

![Ảnh chụp lỗi COUPON-GUI-030 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-030.png)

![Ảnh chụp lỗi COUPON-GUI-034 trên Google Chrome](evidence/task3/chrome/COUPON-GUI-034.png)

### Bằng chứng lỗi trên Firefox

![Ảnh chụp lỗi CART-GUI-002 trên Firefox](evidence/task3/firefox/CART-GUI-002.png)

![Ảnh chụp lỗi CART-GUI-003 trên Firefox](evidence/task3/firefox/CART-GUI-003.png)

![Ảnh chụp lỗi CART-GUI-004 trên Firefox](evidence/task3/firefox/CART-GUI-004.png)

![Ảnh chụp lỗi CART-GUI-005 trên Firefox](evidence/task3/firefox/CART-GUI-005.png)

![Ảnh chụp lỗi CART-GUI-010 trên Firefox](evidence/task3/firefox/CART-GUI-010.png)

![Ảnh chụp lỗi CART-GUI-015 trên Firefox](evidence/task3/firefox/CART-GUI-015.png)

![Ảnh chụp lỗi CART-GUI-020 trên Firefox](evidence/task3/firefox/CART-GUI-020.png)

![Ảnh chụp lỗi CART-GUI-021 trên Firefox](evidence/task3/firefox/CART-GUI-021.png)

![Ảnh chụp lỗi CART-GUI-022 trên Firefox](evidence/task3/firefox/CART-GUI-022.png)

![Ảnh chụp lỗi CART-GUI-023 trên Firefox](evidence/task3/firefox/CART-GUI-023.png)

![Ảnh chụp lỗi CART-GUI-024 trên Firefox](evidence/task3/firefox/CART-GUI-024.png)

![Ảnh chụp lỗi CART-GUI-025 trên Firefox](evidence/task3/firefox/CART-GUI-025.png)

![Ảnh chụp lỗi CART-GUI-028 trên Firefox](evidence/task3/firefox/CART-GUI-028.png)

![Ảnh chụp lỗi CART-GUI-029 trên Firefox](evidence/task3/firefox/CART-GUI-029.png)

![Ảnh chụp lỗi CART-GUI-032 trên Firefox](evidence/task3/firefox/CART-GUI-032.png)

![Ảnh chụp lỗi CART-GUI-038 trên Firefox](evidence/task3/firefox/CART-GUI-038.png)

![Ảnh chụp lỗi CART-GUI-043 trên Firefox](evidence/task3/firefox/CART-GUI-043.png)

![Ảnh chụp lỗi CART-GUI-044 trên Firefox](evidence/task3/firefox/CART-GUI-044.png)

![Ảnh chụp lỗi CART-GUI-045 trên Firefox](evidence/task3/firefox/CART-GUI-045.png)

![Ảnh chụp lỗi CART-GUI-048 trên Firefox](evidence/task3/firefox/CART-GUI-048.png)

![Ảnh chụp lỗi COUPON-GUI-005 trên Firefox](evidence/task3/firefox/COUPON-GUI-005.png)

![Ảnh chụp lỗi COUPON-GUI-006 trên Firefox](evidence/task3/firefox/COUPON-GUI-006.png)

![Ảnh chụp lỗi COUPON-GUI-015 trên Firefox](evidence/task3/firefox/COUPON-GUI-015.png)

![Ảnh chụp lỗi COUPON-GUI-016 trên Firefox](evidence/task3/firefox/COUPON-GUI-016.png)

![Ảnh chụp lỗi COUPON-GUI-019 trên Firefox](evidence/task3/firefox/COUPON-GUI-019.png)

![Ảnh chụp lỗi COUPON-GUI-020 trên Firefox](evidence/task3/firefox/COUPON-GUI-020.png)

![Ảnh chụp lỗi COUPON-GUI-022 trên Firefox](evidence/task3/firefox/COUPON-GUI-022.png)

![Ảnh chụp lỗi COUPON-GUI-024 trên Firefox](evidence/task3/firefox/COUPON-GUI-024.png)

![Ảnh chụp lỗi COUPON-GUI-025 trên Firefox](evidence/task3/firefox/COUPON-GUI-025.png)

![Ảnh chụp lỗi COUPON-GUI-027 trên Firefox](evidence/task3/firefox/COUPON-GUI-027.png)

![Ảnh chụp lỗi COUPON-GUI-028 trên Firefox](evidence/task3/firefox/COUPON-GUI-028.png)

![Ảnh chụp lỗi COUPON-GUI-030 trên Firefox](evidence/task3/firefox/COUPON-GUI-030.png)

![Ảnh chụp lỗi COUPON-GUI-034 trên Firefox](evidence/task3/firefox/COUPON-GUI-034.png)

### Bằng chứng lỗi trên WebKit

![Ảnh chụp lỗi CART-GUI-002 trên WebKit](evidence/task3/webkit/CART-GUI-002.png)

![Ảnh chụp lỗi CART-GUI-003 trên WebKit](evidence/task3/webkit/CART-GUI-003.png)

![Ảnh chụp lỗi CART-GUI-004 trên WebKit](evidence/task3/webkit/CART-GUI-004.png)

![Ảnh chụp lỗi CART-GUI-005 trên WebKit](evidence/task3/webkit/CART-GUI-005.png)

![Ảnh chụp lỗi CART-GUI-010 trên WebKit](evidence/task3/webkit/CART-GUI-010.png)

![Ảnh chụp lỗi CART-GUI-015 trên WebKit](evidence/task3/webkit/CART-GUI-015.png)

![Ảnh chụp lỗi CART-GUI-020 trên WebKit](evidence/task3/webkit/CART-GUI-020.png)

![Ảnh chụp lỗi CART-GUI-021 trên WebKit](evidence/task3/webkit/CART-GUI-021.png)

![Ảnh chụp lỗi CART-GUI-022 trên WebKit](evidence/task3/webkit/CART-GUI-022.png)

![Ảnh chụp lỗi CART-GUI-023 trên WebKit](evidence/task3/webkit/CART-GUI-023.png)

![Ảnh chụp lỗi CART-GUI-024 trên WebKit](evidence/task3/webkit/CART-GUI-024.png)

![Ảnh chụp lỗi CART-GUI-025 trên WebKit](evidence/task3/webkit/CART-GUI-025.png)

![Ảnh chụp lỗi CART-GUI-028 trên WebKit](evidence/task3/webkit/CART-GUI-028.png)

![Ảnh chụp lỗi CART-GUI-029 trên WebKit](evidence/task3/webkit/CART-GUI-029.png)

![Ảnh chụp lỗi CART-GUI-032 trên WebKit](evidence/task3/webkit/CART-GUI-032.png)

![Ảnh chụp lỗi CART-GUI-038 trên WebKit](evidence/task3/webkit/CART-GUI-038.png)

![Ảnh chụp lỗi CART-GUI-043 trên WebKit](evidence/task3/webkit/CART-GUI-043.png)

![Ảnh chụp lỗi CART-GUI-044 trên WebKit](evidence/task3/webkit/CART-GUI-044.png)

![Ảnh chụp lỗi CART-GUI-045 trên WebKit](evidence/task3/webkit/CART-GUI-045.png)

![Ảnh chụp lỗi CART-GUI-048 trên WebKit](evidence/task3/webkit/CART-GUI-048.png)

![Ảnh chụp lỗi COUPON-GUI-005 trên WebKit](evidence/task3/webkit/COUPON-GUI-005.png)

![Ảnh chụp lỗi COUPON-GUI-006 trên WebKit](evidence/task3/webkit/COUPON-GUI-006.png)

![Ảnh chụp lỗi COUPON-GUI-015 trên WebKit](evidence/task3/webkit/COUPON-GUI-015.png)

![Ảnh chụp lỗi COUPON-GUI-016 trên WebKit](evidence/task3/webkit/COUPON-GUI-016.png)

![Ảnh chụp lỗi COUPON-GUI-019 trên WebKit](evidence/task3/webkit/COUPON-GUI-019.png)

![Ảnh chụp lỗi COUPON-GUI-020 trên WebKit](evidence/task3/webkit/COUPON-GUI-020.png)

![Ảnh chụp lỗi COUPON-GUI-022 trên WebKit](evidence/task3/webkit/COUPON-GUI-022.png)

![Ảnh chụp lỗi COUPON-GUI-024 trên WebKit](evidence/task3/webkit/COUPON-GUI-024.png)

![Ảnh chụp lỗi COUPON-GUI-025 trên WebKit](evidence/task3/webkit/COUPON-GUI-025.png)

![Ảnh chụp lỗi COUPON-GUI-027 trên WebKit](evidence/task3/webkit/COUPON-GUI-027.png)

![Ảnh chụp lỗi COUPON-GUI-028 trên WebKit](evidence/task3/webkit/COUPON-GUI-028.png)

![Ảnh chụp lỗi COUPON-GUI-030 trên WebKit](evidence/task3/webkit/COUPON-GUI-030.png)

![Ảnh chụp lỗi COUPON-GUI-034 trên WebKit](evidence/task3/webkit/COUPON-GUI-034.png)
