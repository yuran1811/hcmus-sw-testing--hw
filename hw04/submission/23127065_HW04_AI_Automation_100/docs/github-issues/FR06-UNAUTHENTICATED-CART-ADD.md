## Automated evidence

- Feature: FR-06 Product Detail
- Case: `TC-PRODUCT-DETAIL-012`
- Reproduced: Chromium, Firefox, and WebKit (3/3 executions)
- Severity: High

### Steps

1. Ensure no customer session exists.
2. Open `/product/1`.
3. Click **Thêm vào giỏ hàng**.

### Expected

The guest is redirected to `/login` and receives an authentication message.

### Actual

The user remains on `/product/1`; no login redirect or authentication message is shown.

![Guest remains on product page](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR06-UNAUTHENTICATED-CART-ADD/TC-PRODUCT-DETAIL-012-chromium.png)

Run evidence: `reports/html/product-detail/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
