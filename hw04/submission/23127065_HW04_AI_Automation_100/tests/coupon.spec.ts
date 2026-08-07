import { expect, test } from '@playwright/test';
import { loadCases } from './data.js';

type CouponCase = { id: string; code: string; total: string; login: boolean; expected: 'success' | 'error' | 'disabled'; final?: string; message?: string };
const cases = loadCases<CouponCase>(new URL('../test-data/coupon.json', import.meta.url));
const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';

async function openCheckout(page: import('@playwright/test').Page, login: boolean) {
  if (login) {
    await page.goto(`${baseURL}/login`);
    await page.locator('input').nth(0).fill('test@eshop.com');
    await page.locator('input').nth(1).fill('Test1234!');
    await page.getByRole('button', { name: 'Sign In' }).click();
  }
  await page.goto(`${baseURL}/product/1`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const add = page.getByRole('button', { name: 'Thêm vào giỏ hàng' });
  await add.click();
  await add.click();
  await page.goto(`${baseURL}/checkout`);
  await expect(page.getByText('Mã Giảm Giá')).toBeVisible();
}

test.describe('FR-09 Coupon', () => {
  for (const row of cases) {
    test(`${row.id} ${row.code || 'blank'}`, async ({ page }) => {
      await openCheckout(page, row.login);
      await page.locator('input[type="number"]').fill(row.total);
      const code = page.getByPlaceholder('Nhập mã giảm giá...');
      await code.fill(row.code);
      const apply = page.getByRole('button', { name: 'Áp dụng' });
      if (row.expected === 'disabled') {
        await expect(apply).toBeDisabled();
        return;
      }
      await apply.click();
      if (row.expected === 'success') {
        await expect(page.locator('p').filter({ hasText: /Thành tiền/ })).toContainText(row.final!);
      } else {
        await expect(page.locator('p.text-red-600')).toContainText(new RegExp(row.message!, 'i'));
      }
    });
  }
});
