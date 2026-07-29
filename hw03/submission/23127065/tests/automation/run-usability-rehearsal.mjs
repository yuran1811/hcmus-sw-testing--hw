import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const submissionRoot = path.resolve(here, "../..");
const evidenceDir = path.join(submissionRoot, "evidence/task2");
const outputPath = path.join(submissionRoot, "tests/usability/technical-rehearsal.json");
const webUrl = process.env.WEB_BASE_URL ?? "http://127.0.0.1:5173";

await fs.mkdir(evidenceDir, { recursive: true });
await fs.mkdir(path.dirname(outputPath), { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const observations = [];

async function navigate(locator, pathname) {
  await locator.click();
  await page.waitForURL((url) => url.pathname === pathname);
  await page.waitForTimeout(100);
}

async function addFromDetail(productId, quantity) {
  await navigate(page.getByRole("link", { name: "EShop" }), "/");
  await navigate(page.locator(`a[href="/product/${productId}"]`), `/product/${productId}`);
  await page.locator('input[type="number"]').fill(String(quantity));
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.waitForTimeout(100);
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.getByRole("button", { name: /đã thêm/i }).waitFor();
}

try {
  await page.goto(`${webUrl}/login`);
  const loginInputs = page.locator("input");
  await loginInputs.nth(0).fill("test@eshop.com");
  await loginInputs.nth(1).fill("Test1234!");
  await navigate(page.getByRole("button", { name: "Sign In" }), "/");

  await addFromDetail(1, 2);
  await addFromDetail(2, 1);
  await navigate(page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  observations.push({
    checkpoint: "Multiple products",
    result: await page.locator("tbody tr").count() === 2 ? "Passed" : "Failed",
    detail: "Two selected products should appear as separate cart rows.",
  });

  const quantityControls = await page.getByRole("button", { name: /tăng|giảm|\+|−|-/i }).count();
  observations.push({
    checkpoint: "Adjust quantity in cart",
    result: quantityControls >= 2 ? "Passed" : "Blocked",
    detail: quantityControls >= 2 ? "Quantity controls are available." : "The cart exposes quantity as read-only text; no +/− controls exist.",
  });

  const rowsBeforeDelete = await page.locator("tbody tr").count();
  await page.getByRole("button", { name: "Xóa" }).first().click();
  await page.waitForTimeout(100);
  const rowsAfterDelete = await page.locator("tbody tr").count();
  observations.push({
    checkpoint: "Remove product",
    result: rowsAfterDelete === rowsBeforeDelete - 1 ? "Passed with concern" : "Failed",
    detail: rowsAfterDelete === rowsBeforeDelete - 1 ? "The item is removed immediately, without the FR-24 confirmation dialog." : "The intended item was not removed.",
  });

  await navigate(page.getByRole("button", { name: /tiến hành thanh toán/i }), "/checkout");
  const couponValue = await page.getByPlaceholder(/nhập mã giảm giá/i).inputValue();
  observations.push({
    checkpoint: "Checkout without coupon",
    result: couponValue === "" ? "Passed" : "Failed",
    detail: "Coupon input remained blank and no discount was applied.",
  });

  await page.getByRole("button", { name: /xác nhận thanh toán/i }).click();
  await page.getByText(/thanh toán thành công/i).waitFor();
  observations.push({ checkpoint: "Order completion", result: "Passed", detail: "The SUT displayed its success state." });

  await navigate(page.getByRole("button", { name: /quay lại trang chủ/i }), "/");
  await navigate(page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  const cartCleared = await page.getByText(/đang trống/i).count() === 1;
  observations.push({
    checkpoint: "Post-checkout cart state",
    result: cartCleared ? "Passed" : "Failed",
    detail: cartCleared ? "Cart is empty after checkout." : "The purchased item remains in the cart after checkout, contrary to FR-08.",
  });
  await page.screenshot({ path: path.join(evidenceDir, "technical-rehearsal-final-state.png"), fullPage: true });

  await fs.writeFile(outputPath, `${JSON.stringify({
    executedAt: new Date().toISOString(),
    label: "Automated technical rehearsal — not a human pilot",
    scenario: "Add multiple products, adjust quantity/remove an item, then checkout without a coupon",
    observations,
    evidence: "evidence/task2/technical-rehearsal-final-state.png",
  }, null, 2)}\n`);
  console.log(`Technical rehearsal completed with ${observations.length} checkpoints.`);
} finally {
  await context.close();
  await browser.close();
}
