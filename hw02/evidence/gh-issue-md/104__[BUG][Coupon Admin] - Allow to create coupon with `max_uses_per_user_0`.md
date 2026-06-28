# [BUG][Coupon Admin] - Allow to create coupon with `max_uses_per_user<0`

- **Issue Number**: #104
- **State**: OPEN
- **Created At**: 2026-06-28T14:54:14Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/104

---

## Found by Test Case

TC-COUPON-ADMIN-012

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với max_uses_per_user âm.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối giá trị âm.

## Actual result

Backend chấp nhận max_uses_per_user âm và trả về 200.

## Evidence

<img width="769" height="304" alt="Image" src="https://github.com/user-attachments/assets/eb670500-ed62-43b8-acc5-22a1ba412c50" />
