# [BUG][Product Detail] - Product with invalid quantity still be added to cart

- **Issue Number**: #64
- **State**: OPEN
- **Created At**: 2026-06-28T11:14:49Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64

---

## Found by Test Case

TC-PRODUCT-DETAIL-005 / TC-PRODUCT-DETAIL-006 / TC-PRODUCT-DETAIL-007 / TC-PRODUCT-DETAIL-008 / TC-PRODUCT-DETAIL-009

## Requirement liên quan

FR-06

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/product/1, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Mở trang Product Detail.
2. Nhập quantity không hợp lệ, ví dụ: `0`, `-1`, `1.5`, `e`, `,`, `.` hoặc các giá trị tương tự; để trống quantity
3. Bấm "Thêm vào giỏ hàng".

## Expected result

Hệ thống từ chối quantity <= 0, các giá trị không phải số, quantity rỗng, hiển thị lỗi phù hợp.

## Actual result

Quantity không hợp lệ vẫn được chấp nhận và thêm sản phẩm vào giỏ hàng thay vì bị từ chối.

## Evidence

https://github.com/user-attachments/assets/32a144b7-1aab-4e82-bdce-3aa005664138
