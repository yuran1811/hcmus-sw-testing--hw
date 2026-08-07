import { expect, test } from '@playwright/test';
import { loadCases } from './data.js';

type AdminCase = { id: string; code: string; type: 'percent' | 'fixed'; discount: string; minimum: string; expiry: string; limit: string; expected: 'created' | 'rejected' };
const cases = loadCases<AdminCase>(new URL('../test-data/coupon-admin.json', import.meta.url));
const baseURL = process.env.ESHOP_ADMIN_URL ?? 'http://localhost:5174';

async function openCoupons(page: import('@playwright/test').Page) {
  await page.goto(baseURL);
  await page.getByPlaceholder('Email').fill('admin@eshop.com');
  await page.getByPlaceholder('Password').fill('Admin123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Mã Giảm Giá', { exact: true }).click();
  await expect(page.getByText('Tạo mã giảm giá mới')).toBeVisible();
}

test.describe('FR-17 Coupon Admin', () => {
  for (const row of cases) {
    test(`${row.id} ${row.expected}`, async ({ page }) => {
      await openCoupons(page);
      const codeInput = page.getByPlaceholder('Mã coupon (VD: SAVE10)');
      await codeInput.fill(row.code);
      await page.locator('select').selectOption(row.type);
      await page.getByPlaceholder(/Giá trị %|Số tiền/).fill(row.discount);
      await page.getByPlaceholder('Đơn tối thiểu (₫)').fill(row.minimum);
      await page.getByPlaceholder('Ngày hết hạn').fill(row.expiry);
      await page.getByPlaceholder('Số lần dùng tối đa/người').fill(row.limit);
      await page.getByRole('button', { name: 'Tạo mã' }).click();
      const couponRow = page.locator('tbody tr').filter({ hasText: row.code });
      if (row.expected === 'created') await expect(couponRow).toHaveCount(1);
      else if (!row.code) expect(await codeInput.evaluate((input) => (input as HTMLInputElement).checkValidity())).toBe(false);
      else await expect(couponRow).toHaveCount(0);
      if (row.code && await couponRow.count()) await couponRow.getByRole('button', { name: 'Xóa' }).click();
    });
  }
});
