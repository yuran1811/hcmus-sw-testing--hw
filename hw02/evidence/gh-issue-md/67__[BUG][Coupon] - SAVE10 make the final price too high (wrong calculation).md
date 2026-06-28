# [BUG][Coupon] - SAVE10 make the final price too high (wrong calculation)

- **Issue Number**: #67
- **State**: OPEN
- **Created At**: 2026-06-28T11:35:23Z
- **Author**: yuran1811
- **URL**: https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/67

---

## Found by Test Case

TC-COUPON-001, TC-COUPON-013

## Requirement liên quan

FR-09

## Severity / Priority

Major / P1

## Environment

Chrome, macOS, http://localhost:5173/checkout, 85af3ba875c88283615e22cb108f13e2fccaf0e9

## Steps to reproduce

1. Áp dụng mã SAVE10 cho đơn hàng hợp lệ.
2. Quan sát số tiền giảm và tổng thanh toán.

## Expected result

Giảm giá phần trăm phải tính đúng theo discount_value.

## Actual result

Backend dùng công thức sai và làm tổng hóa đơn tăng vọt.

## Evidence

<img width="436" height="497" alt="Image" src="https://github.com/user-attachments/assets/5a045806-a03b-49df-98dc-02b6f276753a" />

