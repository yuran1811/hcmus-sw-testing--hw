import { expect, test, type Page } from '@playwright/test';
import { hasOnlyKeys, isOneOf, isRecord, isString, loadCases, type BaseCase } from './data.js';

type AdminCase = BaseCase & {
  code: string;
  type: 'percent' | 'fixed';
  discount: string;
  minimum: string;
  expiry: string;
  limit: string;
  expected: 'created' | 'rejected' | 'created-expired';
  invalidField?: 'code' | 'discount' | 'minimum' | 'expiry' | 'limit';
};

const allowedKeys = ['id', 'category', 'code', 'type', 'discount', 'minimum', 'expiry', 'limit', 'expected', 'invalidField', 'defectKey'] as const;
function isAdminCase(value: unknown): value is AdminCase {
  if (!isRecord(value) || !hasOnlyKeys(value, allowedKeys)) return false;
  if (![value.id, value.category, value.code, value.discount, value.minimum, value.expiry, value.limit, value.defectKey].every(isString)) return false;
  if (!isOneOf(value.type, ['percent', 'fixed'] as const) || !isOneOf(value.expected, ['created', 'rejected', 'created-expired'] as const)) return false;
  return value.invalidField === undefined || isOneOf(value.invalidField, ['code', 'discount', 'minimum', 'expiry', 'limit'] as const);
}

const cases = loadCases<AdminCase>(new URL('../test-data/coupon-admin.json', import.meta.url), 'FR-17 Coupon Admin', isAdminCase);
const baseURL = process.env.ESHOP_ADMIN_URL ?? 'http://localhost:5174';

async function openCoupons(page: Page): Promise<void> {
  await page.goto(baseURL);
  await page.getByPlaceholder('Email').fill(process.env.ESHOP_ADMIN_EMAIL ?? 'admin@eshop.com');
  await page.getByPlaceholder('Password').fill(process.env.ESHOP_ADMIN_PASSWORD ?? 'Admin123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Mã Giảm Giá', { exact: true }).click();
  await expect(page.getByText('Tạo mã giảm giá mới')).toBeVisible();
}

test.describe('FR-17 Coupon Admin', () => {
  for (const row of cases) {
    test(`${row.id} ${row.category} ${row.expected}`, async ({ page }, testInfo) => {
      if (row.defectKey) testInfo.annotations.push({ type: 'defect-key', description: row.defectKey });
      await openCoupons(page);

      const suffix = `${testInfo.project.name}_${Date.now()}`.replace(/\W/g, '_').toUpperCase();
      const codeValue = row.code ? `HW04_${row.code}_${suffix}` : '';
      const code = page.getByPlaceholder('Mã coupon (VD: SAVE10)');
      const discount = page.getByPlaceholder(/Giá trị %|Số tiền/);
      const minimum = page.getByPlaceholder('Đơn tối thiểu (₫)');
      const expiry = page.getByPlaceholder('Ngày hết hạn');
      const limit = page.getByPlaceholder('Số lần dùng tối đa/người');
      await code.fill(codeValue);
      await page.locator('select').selectOption(row.type);
      await discount.fill(row.discount);
      await minimum.fill(row.minimum);
      await expiry.fill(row.expiry);
      await limit.fill(row.limit);

      const couponRow = page.locator('tbody tr').filter({ hasText: codeValue || '__NO_EMPTY_CODE_ROW__' });
      let assertionError: unknown;
      try {
        const submission = row.expected === 'rejected'
          ? page.waitForResponse((response) => response.request().method() === 'POST', { timeout: 1500 }).catch(() => null)
          : Promise.resolve(null);
        await page.getByRole('button', { name: 'Tạo mã' }).click();
        if (row.expected === 'rejected') {
          await submission;
          await page.waitForTimeout(500);
          await expect(couponRow).toHaveCount(0);
        } else {
          await expect(couponRow).toHaveCount(1);
          if (row.expected === 'created-expired') await expect(couponRow).toContainText('Hết hạn');
          else await expect(couponRow).toContainText(codeValue);
        }
      } catch (error) {
        if (row.defectKey && await couponRow.count()) {
          const defectScreenshot = testInfo.outputPath('confirmed-defect.png');
          await couponRow.scrollIntoViewIfNeeded();
          await page.screenshot({ path: defectScreenshot });
          await testInfo.attach('confirmed-defect', {
            path: defectScreenshot,
            contentType: 'image/png',
          });
        }
        assertionError = error;
      } finally {
        if (codeValue && await couponRow.count()) {
          await couponRow.getByRole('button', { name: 'Xóa' }).click();
          await expect(couponRow).toHaveCount(0);
        }
      }
      if (assertionError) throw assertionError;
    });
  }
});
