# [BUG][Coupon] - BIGBUY be rejected at its threshold

- **Issue Number**: #69
- **State**: OPEN
- **Created At**: 2026-06-28T11:54:39Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/69

---

## Found by Test Case

TC-COUPON-002, TC-COUPON-012

## Requirement liên quan

FR-09

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/checkout, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Áp dụng mã BIGBUY cho đơn hàng đúng min_order_amount.
2. Kiểm tra phản hồi từ hệ thống.

## Expected result

Đơn hàng bằng đúng ngưỡng tối thiểu phải được chấp nhận.

## Actual result

Hệ thống từ chối do so sánh `>` thay vì `>=`.

## Evidence

<img width="428" height="441" alt="Image" src="https://github.com/user-attachments/assets/5db0c325-ffce-44e6-9234-1399455fd11f" />

