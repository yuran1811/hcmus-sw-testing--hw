## Automated evidence

- Feature: FR-09 Discount Coupons
- Cases: `TC-COUPON-001`, `013`
- Reproduced: 6/6 executions across Chromium, Firefox, and WebKit
- Severity: Critical

### Steps

1. Log in and open `/checkout`.
2. Set the total to `400000`.
3. Apply the 10% coupon `SAVE10`.

### Expected

Savings are `40,000 ₫` and the final total is `360,000 ₫`.

### Actual

The UI reports savings of `-3,600,000 ₫` and a final total of `4,000,000 ₫`.

![Incorrect percentage calculation](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR09-PERCENT-CALCULATION/TC-COUPON-001-chromium.png)

Run evidence: `reports/html/coupon/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
