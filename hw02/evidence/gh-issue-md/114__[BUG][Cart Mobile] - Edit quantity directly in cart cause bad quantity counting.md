# [BUG][Cart Mobile] - Edit quantity directly in cart cause bad quantity counting

- **Issue Number**: #114
- **State**: OPEN
- **Created At**: 2026-06-28T15:14:35Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/114

---

## Found by Test Case

TC-CART-MOBILE-008, TC-CART-MOBILE-011, TC-CART-MOBILE-020, TC-CART-MOBILE-021

## Requirement liên quan

FR-20

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:8081, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Thêm sản phẩm vào giỏ trên mobile.
2. Sửa quantity trực tiếp trong giỏ ở các giá trị 1, 2 và giá trị hợp lệ khác.
3. Quan sát badge navbar và số lượng trong giỏ.

## Expected result

Badge và quantity phải phản ánh đúng tổng số lượng sản phẩm.

## Actual result

Hệ thống đếm sai số lượng sau khi sửa trực tiếp.

## Evidence

https://github.com/user-attachments/assets/11e3bff7-873f-481c-b960-1ae552b45893
