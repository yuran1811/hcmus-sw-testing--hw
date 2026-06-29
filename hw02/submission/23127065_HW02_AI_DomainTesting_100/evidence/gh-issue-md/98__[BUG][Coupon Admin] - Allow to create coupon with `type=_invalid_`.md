# [BUG][Coupon Admin] - Allow to create coupon with `type="invalid"`

- **Issue Number**: #98
- **State**: OPEN
- **Created At**: 2026-06-28T14:30:20Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/98

---

## Found by Test Case

TC-COUPON-ADMIN-005

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với type = voucher.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối type không hợp lệ.

## Actual result

Backend chấp nhận type voucher và trả về 200.

## Evidence

<img width="838" height="332" alt="Image" src="https://github.com/user-attachments/assets/c671967d-bf87-4f6a-9604-7d9a23355569" />
