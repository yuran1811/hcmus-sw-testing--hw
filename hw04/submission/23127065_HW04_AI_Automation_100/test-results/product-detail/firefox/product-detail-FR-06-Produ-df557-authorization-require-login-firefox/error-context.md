# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-detail.spec.ts >> FR-06 Product Detail >> TC-PRODUCT-DETAIL-012 authorization require-login
- Location: tests/product-detail.spec.ts:29:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/login(?:$|\?)/
Received string:  "http://localhost:5173/product/1"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "http://localhost:5173/product/1"

```

```yaml
- banner:
  - link "EShop":
    - /url: /
  - navigation:
    - link "Giỏ hàng":
      - /url: /cart
    - link "Đăng nhập":
      - /url: /login
    - link "Đăng ký":
      - /url: /register
- main:
  - img "iPhone 15 Pro Max"
  - heading "iPhone 15 Pro Max" [level=1]
  - paragraph: 30,000,000 ₫
  - paragraph: Điện thoại cao cấp của Apple
  - text: "Số lượng:"
  - spinbutton: "1"
  - button "Thêm vào giỏ hàng"
- contentinfo: © 2026 EShop SUT. Dành cho mục đích kiểm thử.
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { hasOnlyKeys, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';
  3  | 
  4  | type ProductCase = BaseCase & {
  5  |   action: 'display-details' | 'invalid-product' | 'accept-quantity' | 'reject-quantity' | 'require-login';
  6  |   productId: string;
  7  |   quantity?: string;
  8  |   expectedName?: string;
  9  |   expectedPrice?: string;
  10 |   expectedDescription?: string;
  11 |   expectedCategory?: string;
  12 |   expectedFeedback?: string;
  13 |   expectedMessage?: string;
  14 | };
  15 | 
  16 | const allowedKeys = ['id', 'category', 'action', 'productId', 'quantity', 'expectedName', 'expectedPrice', 'expectedDescription', 'expectedCategory', 'expectedFeedback', 'expectedMessage', 'defectKey'] as const;
  17 | const actions = ['display-details', 'invalid-product', 'accept-quantity', 'reject-quantity', 'require-login'] as const;
  18 | function isProductCase(value: unknown): value is ProductCase {
  19 |   if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  20 |   if (![value.id, value.category, value.productId, value.defectKey].every(isString) || !isOneOf(value.action, actions)) return false;
  21 |   return Object.entries(value).every(([key, item]) => key === 'action' || item === undefined || typeof item === 'string');
  22 | }
  23 | 
  24 | const cases = loadCases<ProductCase>(new URL('../test-data/product-detail.json', import.meta.url), 'FR-06 Product Detail', isProductCase);
  25 | const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';
  26 | 
  27 | test.describe('FR-06 Product Detail', () => {
  28 |   for (const row of cases) {
  29 |     test(`${row.id} ${row.category} ${row.action}`, async ({ page }, testInfo) => {
  30 |       if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
  31 |       await page.goto(`${baseURL}/product/${row.productId}`);
  32 | 
  33 |       if (row.action === 'invalid-product') {
  34 |         await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
  35 |         return;
  36 |       }
  37 | 
  38 |       const heading = page.getByRole('heading', { level: 1 });
  39 |       await expect(heading).toBeVisible();
  40 | 
  41 |       if (row.action === 'display-details') {
  42 |         await expect(heading).toHaveText(row.expectedName!);
  43 |         await expect(page.getByRole('img', { name: row.expectedName })).toHaveAttribute('alt', row.expectedName!);
  44 |         await expect(page.locator('p').filter({ hasText: '₫' }).first()).toHaveText(row.expectedPrice!);
  45 |         await expect(page.getByText(row.expectedDescription!, { exact: true })).toBeVisible();
  46 |         await expect(page.getByText(row.expectedCategory!, { exact: true })).toBeVisible();
  47 |         return;
  48 |       }
  49 | 
  50 |       const quantity = page.locator('input[type="number"]');
  51 |       if (row.quantity && !Number.isFinite(Number(row.quantity))) {
  52 |         await quantity.clear();
  53 |         await quantity.pressSequentially(row.quantity);
  54 |       } else {
  55 |         await quantity.fill(row.quantity ?? '');
  56 |       }
  57 |       await page.getByRole('button', { name: 'Thêm vào giỏ hàng' }).click();
  58 | 
  59 |       if (row.action === 'accept-quantity') {
  60 |         await expect(page.getByRole('button', { name: row.expectedFeedback! })).toBeVisible();
  61 |       } else if (row.action === 'reject-quantity') {
  62 |         await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
  63 |       } else {
> 64 |         await expect(page).toHaveURL(/\/login(?:$|\?)/);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  65 |         await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
  66 |       }
  67 |     });
  68 |   }
  69 | });
  70 | 
```