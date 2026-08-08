## Automated evidence

- Feature: FR-09 Discount Coupons
- Case: `TC-COUPON-008`
- Reproduced: Chromium, Firefox, and WebKit (3/3 executions)
- Severity: High

### Steps

1. Ensure no customer session exists.
2. Open `/checkout` and set the total to `400000`.
3. Apply `SAVE10`.

### Expected

Coupon application is rejected with a message requiring login.

### Actual

The guest receives a success message and a calculated discounted total.

![Guest coupon application succeeds](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR09-COUPON-ALLOWS-GUEST/TC-COUPON-008-chromium.png)

Run evidence: `reports/html/coupon/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
