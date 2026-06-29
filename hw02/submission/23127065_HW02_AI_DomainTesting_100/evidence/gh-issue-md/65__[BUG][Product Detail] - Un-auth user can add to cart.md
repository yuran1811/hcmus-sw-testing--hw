# [BUG][Product Detail] - Un-auth user can add to cart

- **Issue Number**: #65
- **State**: OPEN
- **Created At**: 2026-06-28T11:22:11Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/65

---

## Found by Test Case

TC-PRODUCT-DETAIL-012

## Requirement liên quan

FR-06, FR-08

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/product/1, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Mở trang Product Detail khi chưa đăng nhập.
2. Nhập quantity hợp lệ.
3. Bấm "Thêm vào giỏ hàng".

## Expected result

Phải yêu cầu đăng nhập hoặc chuyển hướng sang màn hình đăng nhập.

## Actual result

Khách vãng lai vẫn thêm sản phẩm vào giỏ thành công.

## Evidence

https://github.com/user-attachments/assets/7db6383a-c6c0-49b3-9cd9-22bc4e250c8c
