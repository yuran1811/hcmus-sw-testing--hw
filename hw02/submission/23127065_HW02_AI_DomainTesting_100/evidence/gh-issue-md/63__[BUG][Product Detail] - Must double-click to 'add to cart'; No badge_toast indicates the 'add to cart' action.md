# [BUG][Product Detail] - Must double-click to 'add to cart'; No badge/toast indicates the 'add to cart' action

- **Issue Number**: #63
- **State**: OPEN
- **Created At**: 2026-06-28T10:17:29Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/63

---

## Found by Test Case

TC-PRODUCT-DETAIL-004

## Requirement liên quan

FR-06

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/product/1, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Mở trang Product Detail.
2. Nhập quantity hợp lệ.
3. Bấm "Thêm vào giỏ hàng" một lần.

## Expected result

Sản phẩm được thêm ngay và navbar có badge số lượng.

## Actual result

Phải bấm 2 lần mới thêm được và navbar không có badge số lượng.

## Evidence

https://github.com/user-attachments/assets/a252bb90-4ffc-4c44-96a0-61e5da007bf2
