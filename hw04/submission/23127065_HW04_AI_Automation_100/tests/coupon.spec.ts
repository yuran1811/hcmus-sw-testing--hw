import { expect, test, type Page } from '@playwright/test';
import { hasOnlyKeys, isBoolean, isNumber, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';

type CouponCase = BaseCase & {
  code: string;
  total: number;
  login: boolean;
  expected: 'success' | 'error';
  expectedDiscount?: number;
  expectedFinal?: number;
  expectedMessage?: string;
};

const allowedKeys = ['id', 'category', 'code', 'total', 'login', 'expected', 'expectedDiscount', 'expectedFinal', 'expectedMessage', 'defectKey'] as const;
function isCouponCase(value: unknown): value is CouponCase {
  if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  if (![value.id, value.category, value.code, value.defectKey].every(isString)) return false;
  if (!isNumber(value.total) || !isBoolean(value.login) || !isOneOf(value.expected, ['success', 'error'] as const)) return false;
  if (value.expected === 'success') return isNumber(value.expectedDiscount) && isNumber(value.expectedFinal);
  return isString(value.expectedMessage);
}

const cases = loadCases<CouponCase>(new URL('../test-data/coupon.json', import.meta.url), 'FR-09 Coupon', isCouponCase);
const baseURL = process.env.ESHOP_WEB_URL ?? 'http://localhost:5173';

async function login(page: Page): Promise<void> {
  await page.goto(`${baseURL}/login`);
  const loginForm = page.locator('form').filter({ hasText: 'Username' });
  await loginForm.locator('label').filter({ hasText: 'Username' }).locator('..').locator('input').fill(process.env.ESHOP_USER_EMAIL ?? 'test@eshop.com');
  await loginForm.locator('label').filter({ hasText: 'Mật khẩu' }).locator('..').locator('input').fill(process.env.ESHOP_USER_PASSWORD ?? 'Test1234!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText(/Chào,/)).toBeVisible();
}

test.describe('FR-09 Coupon', () => {
  for (const row of cases) {
    test(`${row.id} ${row.category} ${row.code}`, async ({ page }, testInfo) => {
      if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
      if (row.login) await login(page);
      await page.goto(`${baseURL}/checkout`);
      await expect(page.getByText('Mã Giảm Giá')).toBeVisible();

      await page.getByRole('spinbutton').fill(String(row.total));
      await page.getByPlaceholder('Nhập mã giảm giá...').fill(row.code);
      await page.getByRole('button', { name: 'Áp dụng' }).click();

      if (row.expected === 'success') {
        await expect(page.getByText(/Áp dụng thành công/i)).toBeVisible();
        await expect(page.getByText(`Tiết kiệm: ${row.expectedDiscount!.toLocaleString()} ₫`, { exact: false })).toBeVisible();
        await expect(page.getByText(`Thành tiền: ${row.expectedFinal!.toLocaleString()} ₫`, { exact: false })).toBeVisible();
      } else {
        await expect(page.locator('p.text-red-600')).toContainText(new RegExp(row.expectedMessage!, 'i'));
        await expect(page.getByText(/Tiết kiệm:/)).toHaveCount(0);
      }
    });
  }
});
