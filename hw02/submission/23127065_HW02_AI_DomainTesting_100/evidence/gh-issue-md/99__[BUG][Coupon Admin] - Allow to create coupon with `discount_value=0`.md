# [BUG][Coupon Admin] - Allow to create coupon with `discount_value=0`

- **Issue Number**: #99
- **State**: OPEN
- **Created At**: 2026-06-28T14:38:10Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/99

---

## Found by Test Case

TC-COUPON-ADMIN-006

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với discount_value = 0.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối discount_value = 0.

## Actual result

Backend chấp nhận request và trả về 200.

## Evidence

<img width="778" height="316" alt="Image" src="https://github.com/user-attachments/assets/2c6b0d87-a639-4a42-a49f-9c4f996c2653" />
