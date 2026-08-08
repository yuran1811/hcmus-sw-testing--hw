## Automated evidence

- Feature: FR-17 Coupon Management
- Cases: `TC-COUPON-ADMIN-006`, `007`
- Reproduced: 6/6 executions across Chromium, Firefox, and WebKit
- Severity: High

### Steps

1. Log in to the admin application and open **Mã Giảm Giá**.
2. Create a coupon with a discount of `0` or a negative value and otherwise valid fields.
3. Inspect the coupon table.

### Expected

The form or API rejects a non-positive discount and no coupon row is created.

### Actual

The coupon is created; the table visibly contains a `0%` coupon (and also accepts a negative fixed discount).

![Zero percent coupon created](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR17-NONPOSITIVE-DISCOUNT/TC-COUPON-ADMIN-006-chromium.png)

Run evidence: `reports/html/coupon-admin/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
