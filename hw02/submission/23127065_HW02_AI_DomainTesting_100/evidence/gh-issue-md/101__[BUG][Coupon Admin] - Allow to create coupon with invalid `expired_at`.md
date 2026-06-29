# [BUG][Coupon Admin] - Allow to create coupon with invalid `expired_at`

- **Issue Number**: #101
- **State**: OPEN
- **Created At**: 2026-06-28T14:44:26Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/101

---

## Found by Test Case

TC-COUPON-ADMIN-009

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với expired_at = 31-12-2099.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối định dạng ngày không hợp lệ.

## Actual result

Backend chấp nhận ngày sai định dạng và trả về 200.

## Evidence

<img width="779" height="311" alt="Image" src="https://github.com/user-attachments/assets/5295d1f5-65cc-4b35-9b54-ae500129a48e" />
