# [BUG][Coupon Admin] - Allow to create coupon without `code` field

- **Issue Number**: #109
- **State**: OPEN
- **Created At**: 2026-06-28T15:02:46Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/109

---

## Found by Test Case

TC-COUPON-ADMIN-025

## Requirement liên quan

FR-17

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5174, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Gửi POST /api/admin/coupons mà không có field code.
2. Kiểm tra status code.

## Expected result

Thiếu field bắt buộc phải bị từ chối.

## Actual result

Backend vẫn chấp nhận request và trả về 200.

## Evidence

<img width="771" height="286" alt="Image" src="https://github.com/user-attachments/assets/885082d9-6a16-4f54-9b6b-7de342693b0b" />
