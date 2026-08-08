## Automated evidence

- Feature: FR-09 Discount Coupons
- Cases: `TC-COUPON-002`, `012`
- Reproduced: 6/6 executions across Chromium, Firefox, and WebKit
- Severity: Medium

### Steps

1. Log in and open `/checkout`.
2. Set the total exactly to the coupon minimum (`500000` for `BIGBUY`).
3. Apply the coupon.

### Expected

An order equal to the documented minimum is eligible and the coupon is applied.

### Actual

The UI rejects the coupon and says the order has not reached the `500,000 ₫` minimum.

![Threshold equality rejected](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR09-THRESHOLD-EXCLUDES-EQUALITY/TC-COUPON-002-chromium.png)

Run evidence: `reports/html/coupon/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
