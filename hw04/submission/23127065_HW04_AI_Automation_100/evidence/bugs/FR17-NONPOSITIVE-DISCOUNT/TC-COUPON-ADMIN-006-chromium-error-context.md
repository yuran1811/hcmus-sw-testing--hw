# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: coupon-admin.spec.ts >> FR-17 Coupon Admin >> TC-COUPON-ADMIN-006 boundary rejected
- Location: tests/coupon-admin.spec.ts:37:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('tbody tr').filter({ hasText: 'HW04_DISCOUNT_ZERO_CHROMIUM_1786156618787' })
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('tbody tr').filter({ hasText: 'HW04_DISCOUNT_ZERO_CHROMIUM_1786156618787' })
    14 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - heading "EShop Admin" [level=1] [ref=e5]
    - list [ref=e6]:
      - listitem [ref=e7] [cursor=pointer]: Dashboard
      - listitem [ref=e8] [cursor=pointer]: Danh mục
      - listitem [ref=e9] [cursor=pointer]: Sản phẩm
      - listitem [ref=e10] [cursor=pointer]: Mã Giảm Giá
      - listitem [ref=e11] [cursor=pointer]: Đơn hàng
      - listitem [ref=e12] [cursor=pointer]: Người dùng
      - listitem [ref=e13] [cursor=pointer]: Đăng xuất
  - generic [ref=e15]:
    - heading "Quản lý Mã Giảm Giá" [level=2] [ref=e16]
    - generic [ref=e17]:
      - heading "Tạo mã giảm giá mới" [level=3] [ref=e18]
      - generic [ref=e19]:
        - 'textbox "Mã coupon (VD: SAVE10)" [ref=e20]'
        - combobox [ref=e21]:
          - option "Phần trăm (%)" [selected]
          - option "Số tiền cố định (₫)"
        - 'spinbutton "Giá trị % (VD: 10)" [ref=e22]'
        - spinbutton "Đơn tối thiểu (₫)" [ref=e23]: "0"
        - textbox [ref=e24]:
          - /placeholder: Ngày hết hạn
        - spinbutton "Số lần dùng tối đa/người" [ref=e25]: "1"
      - button "Tạo mã" [ref=e26] [cursor=pointer]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row [ref=e29]:
          - columnheader "Mã" [ref=e30]
          - columnheader "Loại" [ref=e31]
          - columnheader "Giá trị" [ref=e32]
          - columnheader "Đơn tối thiểu" [ref=e33]
          - columnheader "Hết hạn" [ref=e34]
          - columnheader "Giới hạn/người" [ref=e35]
          - columnheader "Hành động" [ref=e36]
      - rowgroup [ref=e37]:
        - row [ref=e38]:
          - cell "SAVE10" [ref=e39]
          - cell "Phần trăm" [ref=e40]
          - cell "10%" [ref=e41]
          - cell "300,000 ₫" [ref=e42]
          - cell "2099-12-31" [ref=e43]
          - cell "1 lần" [ref=e44]
          - cell [ref=e45]:
            - button "Xóa" [ref=e46] [cursor=pointer]
        - row [ref=e47]:
          - cell "BIGBUY" [ref=e48]
          - cell "Cố định" [ref=e49]
          - cell "50,000 ₫" [ref=e50]
          - cell "500,000 ₫" [ref=e51]
          - cell "2099-12-31" [ref=e52]
          - cell "1 lần" [ref=e53]
          - cell [ref=e54]:
            - button "Xóa" [ref=e55] [cursor=pointer]
        - row [ref=e56]:
          - cell "VIP100" [ref=e57]
          - cell "Cố định" [ref=e58]
          - cell "100,000 ₫" [ref=e59]
          - cell "300,000 ₫" [ref=e60]
          - cell "2099-12-31" [ref=e61]
          - cell "2 lần" [ref=e62]
          - cell [ref=e63]:
            - button "Xóa" [ref=e64] [cursor=pointer]
        - row [ref=e65]:
          - cell "EXPIRED" [ref=e66]
          - cell "Phần trăm" [ref=e67]
          - cell "20%" [ref=e68]
          - cell "100,000 ₫" [ref=e69]
          - cell "Hết hạn" [ref=e70]
          - cell "1 lần" [ref=e71]
          - cell [ref=e72]:
            - button "Xóa" [ref=e73] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, test, type Page } from '@playwright/test';
  2  | import { hasOnlyKeys, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';
  3  | 
  4  | type AdminCase = BaseCase & {
  5  |   code: string;
  6  |   type: 'percent' | 'fixed';
  7  |   discount: string;
  8  |   minimum: string;
  9  |   expiry: string;
  10 |   limit: string;
  11 |   expected: 'created' | 'rejected' | 'created-expired';
  12 |   invalidField?: 'code' | 'discount' | 'minimum' | 'expiry' | 'limit';
  13 | };
  14 | 
  15 | const allowedKeys = ['id', 'category', 'code', 'type', 'discount', 'minimum', 'expiry', 'limit', 'expected', 'invalidField', 'defectKey'] as const;
  16 | function isAdminCase(value: unknown): value is AdminCase {
  17 |   if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  18 |   if (![value.id, value.category, value.code, value.discount, value.minimum, value.expiry, value.limit, value.defectKey].every(isString)) return false;
  19 |   if (!isOneOf(value.type, ['percent', 'fixed'] as const) || !isOneOf(value.expected, ['created', 'rejected', 'created-expired'] as const)) return false;
  20 |   return value.invalidField === undefined || isOneOf(value.invalidField, ['code', 'discount', 'minimum', 'expiry', 'limit'] as const);
  21 | }
  22 | 
  23 | const cases = loadCases<AdminCase>(new URL('../test-data/coupon-admin.json', import.meta.url), 'FR-17 Coupon Admin', isAdminCase);
  24 | const baseURL = process.env.ESHOP_ADMIN_URL ?? 'http://localhost:5174';
  25 | 
  26 | async function openCoupons(page: Page): Promise<void> {
  27 |   await page.goto(baseURL);
  28 |   await page.getByPlaceholder('Email').fill(process.env.ESHOP_ADMIN_EMAIL ?? 'admin@eshop.com');
  29 |   await page.getByPlaceholder('Password').fill(process.env.ESHOP_ADMIN_PASSWORD ?? 'Admin123!');
  30 |   await page.getByRole('button', { name: 'Login' }).click();
  31 |   await page.getByText('Mã Giảm Giá', { exact: true }).click();
  32 |   await expect(page.getByText('Tạo mã giảm giá mới')).toBeVisible();
  33 | }
  34 | 
  35 | test.describe('FR-17 Coupon Admin', () => {
  36 |   for (const row of cases) {
  37 |     test(`${row.id} ${row.category} ${row.expected}`, async ({ page }, testInfo) => {
  38 |       if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
  39 |       await openCoupons(page);
  40 | 
  41 |       const suffix = `${testInfo.project.name}_${Date.now()}`.replace(/\W/g, '_').toUpperCase();
  42 |       const codeValue = row.code ? `HW04_${row.code}_${suffix}` : '';
  43 |       const code = page.getByPlaceholder('Mã coupon (VD: SAVE10)');
  44 |       const discount = page.getByPlaceholder(/Giá trị %|Số tiền/);
  45 |       const minimum = page.getByPlaceholder('Đơn tối thiểu (₫)');
  46 |       const expiry = page.getByPlaceholder('Ngày hết hạn');
  47 |       const limit = page.getByPlaceholder('Số lần dùng tối đa/người');
  48 |       await code.fill(codeValue);
  49 |       await page.locator('select').selectOption(row.type);
  50 |       await discount.fill(row.discount);
  51 |       await minimum.fill(row.minimum);
  52 |       await expiry.fill(row.expiry);
  53 |       await limit.fill(row.limit);
  54 | 
  55 |       const couponRow = page.locator('tbody tr').filter({ hasText: codeValue || '__NO_EMPTY_CODE_ROW__' });
  56 |       let assertionError: unknown;
  57 |       try {
  58 |         const submission = row.expected === 'rejected'
  59 |           ? page.waitForResponse((response) => response.request().method() === 'POST', { timeout: 1500 }).catch(() => null)
  60 |           : Promise.resolve(null);
  61 |         await page.getByRole('button', { name: 'Tạo mã' }).click();
  62 |         if (row.expected === 'rejected') {
  63 |           await submission;
  64 |           await page.waitForTimeout(500);
> 65 |           await expect(couponRow).toHaveCount(0);
     |                                   ^ Error: expect(locator).toHaveCount(expected) failed
  66 |         } else {
  67 |           await expect(couponRow).toHaveCount(1);
  68 |           if (row.expected === 'created-expired') await expect(couponRow).toContainText('Hết hạn');
  69 |           else await expect(couponRow).toContainText(codeValue);
  70 |         }
  71 |       } catch (error) {
  72 |         if (row.defectKey && await couponRow.count()) {
  73 |           const defectScreenshot = testInfo.outputPath('confirmed-defect.png');
  74 |           await couponRow.scrollIntoViewIfNeeded();
  75 |           await page.screenshot({ path: defectScreenshot });
  76 |           await testInfo.attach('confirmed-defect', {
  77 |             path: defectScreenshot,
  78 |             contentType: 'image/png',
  79 |           });
  80 |         }
  81 |         assertionError = error;
  82 |       } finally {
  83 |         if (codeValue && await couponRow.count()) {
  84 |           await couponRow.getByRole('button', { name: 'Xóa' }).click();
  85 |           await expect(couponRow).toHaveCount(0);
  86 |         }
  87 |       }
  88 |       if (assertionError) throw assertionError;
  89 |     });
  90 |   }
  91 | });
  92 | 
```