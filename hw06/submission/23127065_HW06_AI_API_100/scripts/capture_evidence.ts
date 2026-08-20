import { chromium } from "/Users/lap15045/@repos/hcmus-sw-testing--hw/hw04/submission/23127065_HW04_AI_Automation_100/node_modules/playwright";
import { resolve } from "path";
import { mkdirSync } from "fs";

const rootDir = resolve(import.meta.dir, "..");
const evidenceDir = resolve(rootDir, "evidence/bugs");
mkdirSync(evidenceDir, { recursive: true });

const reports = {
  login: `file://${rootDir}/newman/reports/login/index.html`,
  checkout: `file://${rootDir}/newman/reports/checkout/index.html`,
  orderstatus: `file://${rootDir}/newman/reports/orderstatus/index.html`,
};

const issues = [
  { bugId: "BUG-API-001", issueNum: 32, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/32" },
  { bugId: "BUG-API-002", issueNum: 33, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/33" },
  { bugId: "BUG-API-003", issueNum: 34, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/34" },
  { bugId: "BUG-API-004", issueNum: 35, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/35" },
  { bugId: "BUG-API-005", issueNum: 36, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/36" },
  { bugId: "BUG-API-006", issueNum: 37, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/37" },
  { bugId: "BUG-API-007", issueNum: 38, url: "https://github.com/yuran1811/hcmus-sw-testing--hw/issues/38" },
];

async function captureNewmanDefects(browser: any) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  // 1. BUG-API-001 (Login domain validation: Iteration 2, 4, 5)
  console.log("Capturing BUG-API-001 Newman evidence...");
  await page.goto(reports.login, { waitUntil: "networkidle" });
  await page.click("#pills-failed-tab");
  await page.waitForTimeout(500);
  // Expand all failed or specific iteration
  const expandAllBtn = page.getByRole("button", { name: /Expand All/i });
  if (await expandAllBtn.count() > 0) {
    await expandAllBtn.first().click();
    await page.waitForTimeout(600);
  }
  // Scroll to Iteration 2
  const iter2 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 2" }).first();
  if (await iter2.count() > 0) {
    await iter2.scrollIntoViewIfNeeded();
    await iter2.screenshot({ path: `${evidenceDir}/bug-api-001-newman.png` });
  } else {
    await page.screenshot({ path: `${evidenceDir}/bug-api-001-newman.png`, clip: { x: 0, y: 0, width: 1400, height: 800 } });
  }

  // 2. BUG-API-002 (Login lockout after 2 attempts: Iteration 27)
  console.log("Capturing BUG-API-002 Newman evidence...");
  const iter27 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 27" }).first();
  if (await iter27.count() > 0) {
    await iter27.scrollIntoViewIfNeeded();
    await iter27.screenshot({ path: `${evidenceDir}/bug-api-002-newman.png` });
  }

  // 3. BUG-API-003 (Login plaintext password leak: Iteration 32)
  console.log("Capturing BUG-API-003 Newman evidence...");
  const iter32 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 32" }).first();
  if (await iter32.count() > 0) {
    await iter32.scrollIntoViewIfNeeded();
    await iter32.screenshot({ path: `${evidenceDir}/bug-api-003-newman.png` });
  }

  // 4. BUG-API-004 (Checkout invalid totals/addresses: Iteration 4)
  console.log("Capturing BUG-API-004 Newman evidence...");
  await page.goto(reports.checkout, { waitUntil: "networkidle" });
  await page.click("#pills-failed-tab");
  await page.waitForTimeout(500);
  if (await expandAllBtn.count() > 0) {
    await expandAllBtn.first().click();
    await page.waitForTimeout(600);
  }
  const checkoutIter4 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 4" }).first();
  if (await checkoutIter4.count() > 0) {
    await checkoutIter4.scrollIntoViewIfNeeded();
    await checkoutIter4.screenshot({ path: `${evidenceDir}/bug-api-004-newman.png` });
  } else {
    await page.screenshot({ path: `${evidenceDir}/bug-api-004-newman.png`, clip: { x: 0, y: 0, width: 1400, height: 800 } });
  }

  // 5. BUG-API-005 (Checkout empty cart: Iteration 36)
  console.log("Capturing BUG-API-005 Newman evidence...");
  const checkoutIter36 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 36" }).first();
  if (await checkoutIter36.count() > 0) {
    await checkoutIter36.scrollIntoViewIfNeeded();
    await checkoutIter36.screenshot({ path: `${evidenceDir}/bug-api-005-newman.png` });
  }

  // 6. BUG-API-006 (Canceled to delivered: Iteration 21)
  console.log("Capturing BUG-API-006 Newman evidence...");
  await page.goto(reports.orderstatus, { waitUntil: "networkidle" });
  await page.click("#pills-failed-tab");
  await page.waitForTimeout(500);
  if (await expandAllBtn.count() > 0) {
    await expandAllBtn.first().click();
    await page.waitForTimeout(600);
  }
  const orderIter21 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 21" }).first();
  if (await orderIter21.count() > 0) {
    await orderIter21.scrollIntoViewIfNeeded();
    await orderIter21.screenshot({ path: `${evidenceDir}/bug-api-006-newman.png` });
  }

  // 7. BUG-API-007 (Admin role authorization: Iteration 36/37)
  console.log("Capturing BUG-API-007 Newman evidence...");
  const orderIter36 = page.locator("#pills-failed .card").filter({ hasText: "Iteration 36" }).first();
  if (await orderIter36.count() > 0) {
    await orderIter36.scrollIntoViewIfNeeded();
    await orderIter36.screenshot({ path: `${evidenceDir}/bug-api-007-newman.png` });
  }

  await page.close();
}

async function captureGitHubIssues(browser: any) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  for (const issue of issues) {
    console.log(`Capturing GitHub Issue #${issue.issueNum} (${issue.bugId})...`);
    try {
      await page.goto(issue.url, { waitUntil: "networkidle", timeout: 20000 });
      await page.waitForTimeout(1000);
      
      // Capture the main issue discussion header and initial body card
      const issueBody = page.locator(".timeline-comment-group").first();
      if (await issueBody.count() > 0) {
        // Screenshot with surrounding context or issue body
        await page.screenshot({ path: `${evidenceDir}/issue-${issue.issueNum}.png`, clip: { x: 0, y: 0, width: 1280, height: 850 } });
      } else {
        await page.screenshot({ path: `${evidenceDir}/issue-${issue.issueNum}.png`, fullPage: false });
      }
    } catch (err) {
      console.warn(`Warning: failed to screenshot ${issue.url}:`, err);
    }
  }
  
  await page.close();
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  try {
    await captureNewmanDefects(browser);
    await captureGitHubIssues(browser);
    console.log("All screenshots captured successfully in", evidenceDir);
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
