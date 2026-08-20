import { chromium } from "/Users/lap15045/@repos/hcmus-sw-testing--hw/hw04/submission/23127065_HW04_AI_Automation_100/node_modules/playwright";
import { resolve } from "path";
import { mkdirSync } from "fs";

const rootDir = resolve(import.meta.dir, "..");
const ciEvidenceDir = resolve(rootDir, "ci/evidence");
mkdirSync(ciEvidenceDir, { recursive: true });

const passUrl = "https://github.com/yuran1811/hcmus-sw-testing--hw/actions/runs/32390866536";
const failUrl = "https://github.com/yuran1811/hcmus-sw-testing--hw/actions/runs/32390874323";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Capturing pass run evidence...");
  await page.goto(passUrl, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${ciEvidenceDir}/pass-run.png`, fullPage: false });

  console.log("Capturing intentional failure run evidence...");
  await page.goto(failUrl, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${ciEvidenceDir}/intentional-fail-run.png`, fullPage: false });

  await browser.close();
  console.log("CI run screenshots saved to", ciEvidenceDir);
}

main().catch(console.error);
