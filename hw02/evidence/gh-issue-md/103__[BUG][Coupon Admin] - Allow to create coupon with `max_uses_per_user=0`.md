# [BUG][Coupon Admin] - Allow to create coupon with `max_uses_per_user=0`

- **Issue Number**: #103
- **State**: OPEN
- **Created At**: 2026-06-28T14:52:13Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/103

---

## Found by Test Case

TC-COUPON-ADMIN-011

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với max_uses_per_user = 0.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối giá trị 0.

## Actual result

Backend chấp nhận max_uses_per_user = 0 và trả về 200.

## Evidence

<img width="790" height="310" alt="Image" src="https://github.com/user-attachments/assets/2a6897e6-414d-43bb-a670-676e04e72b19" />
