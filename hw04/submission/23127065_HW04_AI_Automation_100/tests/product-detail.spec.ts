import { expect, test } from '@playwright/test';
import { hasOnlyKeys, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';

type ProductCase = BaseCase & {
  action: 'display-details' | 'invalid-product' | 'accept-quantity' | 'reject-quantity' | 'require-login';
  productId: string;
  quantity?: string;
  expectedName?: string;
  expectedPrice?: string;
  expectedDescription?: string;
  expectedCategory?: string;
  expectedFeedback?: string;
  expectedMessage?: string;
};

const allowedKeys = ['id', 'category', 'action', 'productId', 'quantity', 'expectedName', 'expectedPrice', 'expectedDescription', 'expectedCategory', 'expectedFeedback', 'expectedMessage', 'defectKey'] as const;
const actions = ['display-details', 'invalid-product', 'accept-quantity', 'reject-quantity', 'require-login'] as const;
function isProductCase(value: unknown): value is ProductCase {
  if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  if (![value.id, value.category, value.productId, value.defectKey].every(isString) || !isOneOf(value.action, actions)) return false;
  return Object.entries(value).every(([key, item]) => key === 'action' || item === undefined || typeof item === 'string');
}

const cases = loadCases<ProductCase>(new URL('../test-data/product-detail.json', import.meta.url), 'FR-06 Product Detail', isProductCase);
const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';

test.describe('FR-06 Product Detail', () => {
  for (const row of cases) {
    test(`${row.id} ${row.category} ${row.action}`, async ({ page }, testInfo) => {
      if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
      await page.goto(`${baseURL}/product/${row.productId}`);

      if (row.action === 'invalid-product') {
        await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
        return;
      }

      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      if (row.action === 'display-details') {
        await expect(heading).toHaveText(row.expectedName!);
        await expect(page.getByRole('img', { name: row.expectedName })).toHaveAttribute('alt', row.expectedName!);
        await expect(page.locator('p').filter({ hasText: '₫' }).first()).toHaveText(row.expectedPrice!);
        await expect(page.getByText(row.expectedDescription!, { exact: true })).toBeVisible();
        await expect(page.getByText(row.expectedCategory!, { exact: true })).toBeVisible();
        return;
      }

      const quantity = page.locator('input[type="number"]');
      if (row.quantity && !Number.isFinite(Number(row.quantity))) {
        await quantity.clear();
        await quantity.pressSequentially(row.quantity);
      } else {
        await quantity.fill(row.quantity ?? '');
      }
      await page.getByRole('button', { name: 'Thêm vào giỏ hàng' }).click();

      if (row.action === 'accept-quantity') {
        await expect(page.getByRole('button', { name: row.expectedFeedback! })).toBeVisible();
      } else if (row.action === 'reject-quantity') {
        await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
      } else {
        await expect(page).toHaveURL(/\/login(?:$|\?)/);
        await expect(page.getByText(new RegExp(row.expectedMessage!, 'i'))).toBeVisible();
      }
    });
  }
});
