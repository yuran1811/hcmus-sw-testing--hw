# [BUG][Coupon Admin] - Allow to create coupon with `min_order_amount<0`

- **Issue Number**: #102
- **State**: OPEN
- **Created At**: 2026-06-28T14:48:49Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/102

---

## Found by Test Case

TC-COUPON-ADMIN-010

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons với min_order_amount = -1.
2. Kiểm tra status code.

## Expected result

Backend phải từ chối giá trị âm.

## Actual result

Backend chấp nhận min_order_amount âm và trả về 200.

## Evidence

<img width="779" height="306" alt="Image" src="https://github.com/user-attachments/assets/43a9c1d0-add1-4f91-a4ed-a374ac222bdd" />
