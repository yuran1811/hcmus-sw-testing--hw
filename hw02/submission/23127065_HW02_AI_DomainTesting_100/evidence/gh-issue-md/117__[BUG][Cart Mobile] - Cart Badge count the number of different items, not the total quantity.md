# [BUG][Cart Mobile] - Cart Badge count the number of different items, not the total quantity

- **Issue Number**: #117
- **State**: OPEN
- **Created At**: 2026-06-28T15:24:55Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/117

---

## Found by Test Case

TC-CART-MOBILE-023

## Requirement liên quan

FR-20

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:8081, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Thêm 1 sản phẩm với quantity = 2.
2. Thêm thêm sản phẩm khác quantity = 1.
3. Quan sát badge navbar.

## Expected result

Badge phải hiển thị tổng quantity của các item.

## Actual result

Badge đếm theo số dòng sản phẩm thay vì tổng số lượng.

## Evidence

<img width="498" height="306" alt="Image" src="https://github.com/user-attachments/assets/eb32b282-7243-409e-9b38-d040ef14c781" />
