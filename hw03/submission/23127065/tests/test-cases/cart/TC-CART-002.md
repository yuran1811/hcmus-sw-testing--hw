# TC-CART-002: Thêm cùng một sản phẩm nhiều lần (Gộp số lượng)

## Requirement ID

FR-07

## Module / Test type / Technique

Cart / Functional / Equivalence Partitioning

## Preconditions

- Giỏ hàng đã có iPhone 15 Pro Max (Số lượng = 1)

## Test data

| Product | iPhone 15 Pro Max |
| Quantity added | 2 |

## Test steps

1. Mở trang Chi tiết iPhone 15 Pro Max
2. Ô số lượng nhập = 2
3. Bấm nút **Thêm vào giỏ hàng**
4. Mở trang Giỏ hàng (`/cart`)

## Expected result

- Bảng giỏ hàng chỉ có đúng 1 dòng cho iPhone 15 Pro Max (không tạo dòng mới trùng lặp).
- Số lượng của iPhone 15 Pro Max tăng từ 1 thành 3.
- Thành tiền dòng và Tổng cộng cập nhật chính xác = Đơn giá × 3.

## Status / Related bugs

Not Run / None
