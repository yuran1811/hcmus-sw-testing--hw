# [BUG][Cart Mobile] - No confirm dialog on removing item from cart

- **Issue Number**: #115
- **State**: OPEN
- **Created At**: 2026-06-28T15:16:35Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/115

---

## Found by Test Case

TC-CART-MOBILE-014

## Requirement liên quan

FR-20

## Severity / Priority

Minor / P2

## Environment

Chrome, macOS, http://localhost:8081, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Mở giỏ hàng trên mobile.
2. Bấm nút "Xóa" của một sản phẩm.

## Expected result

Phải hiển thị dialog xác nhận trước khi xóa.

## Actual result

Sản phẩm biến mất ngay lập tức, không có dialog xác nhận.

## Evidence

https://github.com/user-attachments/assets/70129bc0-b5e3-4102-b8d5-713fdd397220
