import { expect, test } from '@playwright/test';
import { loadCases } from './data.js';

type ProductCase = { id: string; kind: 'text' | 'image-alt' | 'quantity-value' | 'reject-quantity' | 'accept-quantity'; field?: 'title' | 'price' | 'description' | 'category'; expected?: string; quantity?: string };
const cases = loadCases<ProductCase>(new URL('../test-data/product-detail.json', import.meta.url));
const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';

test.describe('FR-06 Product Detail', () => {
  for (const row of cases) {
    test(`${row.id} ${row.kind}`, async ({ page }) => {
      await page.goto(`${baseURL}/product/1`);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      const quantity = page.locator('input[type="number"]');
      if (row.kind === 'text') {
        const locator = row.field === 'title' ? page.getByRole('heading', { level: 1 }) : row.field === 'price' ? page.locator('p').filter({ hasText: '₫' }).first() : row.field === 'description' ? page.locator('p').filter({ hasText: 'Điện thoại' }) : page.getByText(row.expected!, { exact: true });
        if (row.field === 'category') await expect(locator).toBeVisible();
        else await expect(locator).toHaveText(row.expected!);
      } else if (row.kind === 'image-alt') {
        await expect(page.getByRole('img')).toHaveAttribute('alt', row.expected!);
      } else if (row.kind === 'quantity-value') {
        await expect(quantity).toHaveValue(row.quantity!);
      } else {
        await quantity.fill(row.quantity!);
        await page.getByRole('button', { name: 'Thêm vào giỏ hàng' }).click();
        await page.getByRole('button', { name: 'Thêm vào giỏ hàng' }).click();
        if (row.kind === 'reject-quantity') {
          const success = page.getByRole('button', { name: 'Đã thêm' });
          await expect(success).toBeVisible();
          await expect(success).toBeHidden();
        } else await expect(page.getByRole('button', { name: 'Đã thêm' })).toBeVisible();
      }
    });
  }
});
