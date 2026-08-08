## Automated evidence

- Feature: FR-17 Coupon Management
- Case: `TC-COUPON-ADMIN-010`
- Reproduced: Chromium, Firefox, and WebKit (3/3 executions)
- Severity: High

### Steps

1. Log in to the admin application and open **Mã Giảm Giá**.
2. Create a coupon with minimum order amount `-1` and otherwise valid fields.
3. Inspect the coupon table.

### Expected

The form or API rejects a negative minimum amount and no coupon row is created.

### Actual

The coupon is created and displayed with a `-1 ₫` minimum.

![Negative minimum coupon created](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR17-NEGATIVE-MINIMUM/TC-COUPON-ADMIN-010-chromium.png)

Run evidence: `reports/html/coupon-admin/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
