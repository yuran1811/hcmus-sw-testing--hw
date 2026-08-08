## Automated evidence

- Feature: FR-06 Product Detail
- Cases: `TC-PRODUCT-DETAIL-005` through `009`
- Reproduced: 15/15 executions across Chromium, Firefox, and WebKit
- Severity: High

### Steps

1. Open `/product/1`.
2. Enter an invalid quantity (`0`, a negative value, a decimal, blank, or alphabetic input).
3. Click **Thêm vào giỏ hàng**.

### Expected

The UI rejects the value and displays a clear quantity validation message.

### Actual

No validation message is displayed; values such as `0` remain accepted by the interaction flow.

![Quantity zero accepted without validation](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR06-QUANTITY-NOT-VALIDATED/TC-PRODUCT-DETAIL-005-chromium.png)

Run evidence: `reports/html/product-detail/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
