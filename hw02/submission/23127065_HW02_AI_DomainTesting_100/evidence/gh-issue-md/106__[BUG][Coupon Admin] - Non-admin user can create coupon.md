# [BUG][Coupon Admin] - Non-admin user can create coupon

- **Issue Number**: #106
- **State**: OPEN
- **Created At**: 2026-06-28T15:00:39Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/106

---

## Found by Test Case

TC-COUPON-ADMIN-017

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Đăng nhập bằng tài khoản role user.
2. Gửi POST /api/admin/coupons.

## Expected result

Non-admin phải nhận 403 Forbidden.

## Actual result

Middleware phân quyền thiếu và request vẫn trả về 200.

## Evidence

<img width="777" height="456" alt="Image" src="https://github.com/user-attachments/assets/ab1eb27d-3510-4295-beaa-7374aac388f3" />
<img width="784" height="455" alt="Image" src="https://github.com/user-attachments/assets/769cf98c-28dd-455d-96ec-cf89df56d59f" />
