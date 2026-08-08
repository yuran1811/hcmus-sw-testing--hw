# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: coupon.spec.ts >> FR-09 Coupon >> TC-COUPON-008 authorization SAVE10
- Location: tests/coupon.spec.ts:37:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('p.text-red-600')
Expected pattern: /đăng nhập/i
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('p.text-red-600')

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
  - heading "Xác Nhận Đơn Hàng" [level=2]
  - heading "Sản phẩm:" [level=3]
  - list
  - text: "Tổng tiền thanh toán (VND):"
  - spinbutton: "400000"
  - text: Mã Giảm Giá
  - textbox "Nhập mã giảm giá...": SAVE10
  - button "Áp dụng"
  - paragraph: ✅ Áp dụng thành công! Giảm 10%
  - paragraph:
    - text: "Tiết kiệm:"
    - strong: "-3,600,000 ₫"
  - paragraph:
    - text: "Thành tiền:"
    - strong: 4,000,000 ₫
  - text: "Tổng thanh toán: 4,000,000 ₫"
  - button "Xác Nhận Thanh Toán"
- contentinfo: © 2026 EShop SUT. Dành cho mục đích kiểm thử.
```

# Test source

```ts
  1  | import { expect, test, type Page } from '@playwright/test';
  2  | import { hasOnlyKeys, isBoolean, isNumber, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';
  3  | 
  4  | type CouponCase = BaseCase & {
  5  |   code: string;
  6  |   total: number;
  7  |   login: boolean;
  8  |   expected: 'success' | 'error';
  9  |   expectedDiscount?: number;
  10 |   expectedFinal?: number;
  11 |   expectedMessage?: string;
  12 | };
  13 | 
  14 | const allowedKeys = ['id', 'category', 'code', 'total', 'login', 'expected', 'expectedDiscount', 'expectedFinal', 'expectedMessage', 'defectKey'] as const;
  15 | function isCouponCase(value: unknown): value is CouponCase {
  16 |   if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  17 |   if (![value.id, value.category, value.code, value.defectKey].every(isString)) return false;
  18 |   if (!isNumber(value.total) || !isBoolean(value.login) || !isOneOf(value.expected, ['success', 'error'] as const)) return false;
  19 |   if (value.expected === 'success') return isNumber(value.expectedDiscount) && isNumber(value.expectedFinal);
  20 |   return isString(value.expectedMessage);
  21 | }
  22 | 
  23 | const cases = loadCases<CouponCase>(new URL('../test-data/coupon.json', import.meta.url), 'FR-09 Coupon', isCouponCase);
  24 | const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';
  25 | 
  26 | async function login(page: Page): Promise<void> {
  27 |   await page.goto(`${baseURL}/login`);
  28 |   const loginForm = page.locator('form').filter({ hasText: 'Username' });
  29 |   await loginForm.locator('label').filter({ hasText: 'Username' }).locator('..').locator('input').fill(process.env.ESHOP_USER_EMAIL ?? 'test@eshop.com');
  30 |   await loginForm.locator('label').filter({ hasText: 'Mật khẩu' }).locator('..').locator('input').fill(process.env.ESHOP_USER_PASSWORD ?? 'Test1234!');
  31 |   await page.getByRole('button', { name: 'Sign In' }).click();
  32 |   await expect(page.getByText(/Chào,/)).toBeVisible();
  33 | }
  34 | 
  35 | test.describe('FR-09 Coupon', () => {
  36 |   for (const row of cases) {
  37 |     test(`${row.id} ${row.category} ${row.code}`, async ({ page }, testInfo) => {
  38 |       if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
  39 |       if (row.login) await login(page);
  40 |       await page.goto(`${baseURL}/checkout`);
  41 |       await expect(page.getByText('Mã Giảm Giá')).toBeVisible();
  42 | 
  43 |       await page.getByRole('spinbutton').fill(String(row.total));
  44 |       await page.getByPlaceholder('Nhập mã giảm giá...').fill(row.code);
  45 |       await page.getByRole('button', { name: 'Áp dụng' }).click();
  46 | 
  47 |       if (row.expected === 'success') {
  48 |         await expect(page.getByText(/Áp dụng thành công/i)).toBeVisible();
  49 |         await expect(page.getByText(`Tiết kiệm: ${row.expectedDiscount!.toLocaleString()} ₫`, { exact: false })).toBeVisible();
  50 |         await expect(page.getByText(`Thành tiền: ${row.expectedFinal!.toLocaleString()} ₫`, { exact: false })).toBeVisible();
  51 |       } else {
> 52 |         await expect(page.locator('p.text-red-600')).toContainText(new RegExp(row.expectedMessage!, 'i'));
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  53 |         await expect(page.getByText(/Tiết kiệm:/)).toHaveCount(0);
  54 |       }
  55 |     });
  56 |   }
  57 | });
  58 | 
```