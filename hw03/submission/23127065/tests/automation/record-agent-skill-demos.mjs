import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const submissionRoot = path.resolve(here, "../..");
const outputDir = path.join(submissionRoot, "evidence/agent-skill");
const webUrl = process.env.WEB_BASE_URL ?? "http://127.0.0.1:5173";

await fs.mkdir(outputDir, { recursive: true });
for (const name of await fs.readdir(outputDir)) {
  if (name.startsWith("page@") && name.endsWith(".webm")) await fs.unlink(path.join(outputDir, name));
}

const browser = await chromium.launch({ headless: true });
const results = [];

function card(title, lines) {
  const items = lines.map((line) => `<li>${line}</li>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
    body{margin:0;background:#0f172a;color:#e2e8f0;font:24px/1.5 system-ui;display:grid;place-items:center;min-height:100vh}
    main{width:min(1000px,85vw);background:#1e293b;border:2px solid #38bdf8;border-radius:24px;padding:48px;box-shadow:0 20px 70px #020617}
    h1{color:#7dd3fc;font-size:42px;margin-top:0}code{color:#fde68a}li{margin:14px 0}.tag{color:#86efac;font-weight:700}
  </style></head><body><main><div class="tag">HW03 Agent Skill Demonstration</div><h1>${title}</h1><ul>${items}</ul></main></body></html>`;
}

async function showCard(page, title, lines) {
  await page.setContent(card(title, lines));
  await page.waitForTimeout(1400);
}

async function navigate(locator, pathname) {
  await locator.click();
  await locator.page().waitForURL((url) => url.pathname === pathname);
  await locator.page().waitForTimeout(250);
}

async function addProduct(page, productId, quantity) {
  await navigate(page.getByRole("link", { name: "EShop" }), "/");
  await navigate(page.locator(`a[href="/product/${productId}"]`), `/product/${productId}`);
  await page.locator('input[type="number"]').fill(String(quantity));
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.waitForTimeout(150);
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.getByRole("button", { name: /đã thêm/i }).waitFor();
}

async function recordScenario(name, title, run) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: outputDir, size: { width: 1280, height: 720 } },
  });
  await context.tracing.start({ screenshots: true, snapshots: true, sources: false });
  const page = await context.newPage();
  const video = page.video();
  const videoPath = path.join(outputDir, `${name}.webm`);
  const tracePath = path.join(outputDir, `${name}-trace.zip`);
  let error;

  try {
    await showCard(page, title, [
      "Invocation: <code>$gui-checklist-runner</code>",
      "SUT: EShop on ports 3000, 5173 and 5174",
      "Evidence: live browser flow, final status, video and trace",
    ]);
    const outcome = await run(page);
    await showCard(page, `${title} — Complete`, [
      "Live SUT flow executed end to end",
      ...(outcome ?? []),
      "Artifacts saved under <code>evidence/agent-skill/</code>",
      "YouTube URL remains an explicit student-upload placeholder",
    ]);
  } catch (caught) {
    error = caught;
    await showCard(page, `${title} — Automation Error`, [String(caught.message)]).catch(() => {});
  } finally {
    await context.tracing.stop({ path: tracePath }).catch(() => {});
    await context.close();
    const rawVideoPath = await video.path();
    await video.saveAs(videoPath);
    if (rawVideoPath !== videoPath) await fs.unlink(rawVideoPath).catch(() => {});
  }

  results.push({
    name,
    title,
    status: error ? "Failed" : "Passed",
    video: `evidence/agent-skill/${name}.webm`,
    trace: `evidence/agent-skill/${name}-trace.zip`,
    error: error?.message ?? "",
  });
  if (error) throw error;
}

try {
  await recordScenario("task1-cart-screen", "Task 1 — Complete Cart Screen", async (page) => {
    await page.goto(`${webUrl}/cart`);
    await page.getByText(/đang trống/i).waitFor();
    await addProduct(page, 1, 2);
    await addProduct(page, 2, 1);
    await navigate(page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
    await page.locator("tbody tr").nth(1).waitFor();
    await page.getByRole("button", { name: "Xóa" }).first().click();
    await page.locator("tbody tr").nth(0).waitFor();
    await navigate(page.getByRole("link", { name: /mua tiếp/i }), "/");
    return ["Cart states and primary actions were exercised"];
  });

  await recordScenario("task2-no-coupon-flow", "Task 2 — No-Coupon Checkout Rehearsal", async (page) => {
    await page.goto(`${webUrl}/login`);
    const fields = page.locator("input");
    await fields.nth(0).fill("test@eshop.com");
    await fields.nth(1).fill("Test1234!");
    await navigate(page.getByRole("button", { name: "Sign In" }), "/");
    await addProduct(page, 1, 2);
    await addProduct(page, 2, 1);
    await navigate(page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
    await page.getByRole("button", { name: "Xóa" }).first().click();
    await navigate(page.getByRole("button", { name: /tiến hành thanh toán/i }), "/checkout");
    const coupon = page.getByPlaceholder(/nhập mã giảm giá/i);
    if (await coupon.inputValue() !== "") throw new Error("Coupon field was not empty.");
    await page.getByRole("button", { name: /xác nhận thanh toán/i }).click();
    await page.getByText(/thanh toán thành công/i).waitFor();
    await navigate(page.getByRole("button", { name: /quay lại trang chủ/i }), "/");
    await navigate(page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
    const cartCleared = await page.getByText(/đang trống/i).count() === 1;
    return [
      "Checkout without a coupon reached the SUT success state",
      cartCleared ? "Post-checkout cart was empty" : "Observed FR-08 failure: purchased item remained in the cart",
    ];
  });
} finally {
  await browser.close();
  await fs.writeFile(path.join(outputDir, "demo-results.json"), `${JSON.stringify({
    executedAt: new Date().toISOString(),
    label: "Automated Agent Skill demonstrations — not human usability evidence",
    webUrl,
    results,
  }, null, 2)}\n`);
}

console.log(`Recorded ${results.length} Agent Skill demonstrations.`);
