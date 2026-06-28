# [BUG][Coupon] - Un-auth user can apply the coupon

- **Issue Number**: #97
- **State**: OPEN
- **Created At**: 2026-06-28T14:04:53Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/97

---

## Found by Test Case

TC-COUPON-008

## Requirement liên quan

FR-09

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/checkout, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gọi API /api/apply-coupon khi chưa đăng nhập.
2. Quan sát phản hồi hệ thống.

## Expected result

Phải trả về lỗi xác thực.

## Actual result

API cho phép khách chưa đăng nhập áp dụng coupon thành công.

## Evidence

<img width="960" height="574" alt="Image" src="https://github.com/user-attachments/assets/fb4ff931-e053-46f0-8071-474602eabb8b" />
