# [BUG][Cart Mobile] - Total label not display correctly

- **Issue Number**: #116
- **State**: OPEN
- **Created At**: 2026-06-28T15:21:25Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/116

---

## Found by Test Case

TC-CART-MOBILE-022

## Requirement liên quan

FR-20

## Severity / Priority

Minor / P2

## Environment

Chrome, macOS, http://localhost:8081, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Mở giỏ hàng trên mobile với sản phẩm hợp lệ.
2. Quan sát giá, thành tiền và nhãn tổng.

## Expected result

Tiền tệ hiển thị nhất quán; nhãn phải là "Tổng cộng".

## Actual result

Nhãn hiển thị là "Tổng tạm tính".

## Evidence

<img width="498" height="479" alt="Image" src="https://github.com/user-attachments/assets/c9b619a2-78a3-4d07-9c43-fa06005ec134" />
