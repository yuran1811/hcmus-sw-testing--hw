# [BUG][Coupon Admin] - Delete non-exist coupon still get status `200`

- **Issue Number**: #105
- **State**: OPEN
- **Created At**: 2026-06-28T14:56:48Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/105

---

## Found by Test Case

TC-COUPON-ADMIN-014

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi DELETE /api/admin/coupons/999999.
2. Kiểm tra status code.

## Expected result

Phải trả về 4xx khi coupon không tồn tại.

## Actual result

API trả về 200 thay vì 404/4xx.

## Evidence

<img width="779" height="224" alt="Image" src="https://github.com/user-attachments/assets/9747ce75-12bd-4520-bbab-01ab7cd7f5db" />
