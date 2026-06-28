# [BUG][Coupon Admin] - Allow to create coupon with `discount_value<0`

- **Issue Number**: #100
- **State**: OPEN
- **Created At**: 2026-06-28T14:41:17Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/100

---

## Found by Test Case

TC-COUPON-ADMIN-007

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với discount_value âm.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối giá trị âm.

## Actual result

Backend chấp nhận discount_value âm và trả về 200.

## Evidence

<img width="774" height="306" alt="Image" src="https://github.com/user-attachments/assets/7073611a-38a0-41af-861d-24ed5cdf34d9" />
