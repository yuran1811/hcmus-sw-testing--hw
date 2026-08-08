## Automated evidence

- Feature: FR-06 Product Detail
- Cases: `TC-PRODUCT-DETAIL-004`, `010`, `011`
- Reproduced: 9/9 executions across Chromium, Firefox, and WebKit
- Severity: High

### Steps

1. Open `/product/1` as a guest.
2. Enter a valid quantity such as `2`.
3. Click **Thêm vào giỏ hàng** once.

### Expected

The first click adds the selected quantity and immediately shows `Đã thêm` feedback.

### Actual

The first click is ignored: the page stays on the unchanged **Thêm vào giỏ hàng** state with no success feedback.

![First click ignored](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR06-FIRST-CLICK-IGNORED/TC-PRODUCT-DETAIL-004-chromium.png)

Run evidence: `reports/html/product-detail/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
