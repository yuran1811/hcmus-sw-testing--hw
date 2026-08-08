## Automated evidence

- Feature: FR-06 Product Detail
- Case: `TC-PRODUCT-DETAIL-001`
- Reproduced: Chromium, Firefox, and WebKit (3/3 executions)
- Severity: Medium

### Steps

1. Open `/product/1`.
2. Wait for the product details to load.
3. Inspect the displayed name, price, description, and category.

### Expected

The detail view displays the product category `Điện thoại` with the other required product information.

### Actual

The name, price, and description are visible, but the category is absent.

![Missing product category](https://raw.githubusercontent.com/yuran1811/hcmus-sw-testing--hw/main/hw04/submission/23127065_HW04_AI_Automation_100/evidence/bugs/FR06-MISSING-CATEGORY/TC-PRODUCT-DETAIL-001-chromium.png)

Run evidence: `reports/html/product-detail/{chromium,firefox,webkit}` and `reports/run-manifest.json`.
