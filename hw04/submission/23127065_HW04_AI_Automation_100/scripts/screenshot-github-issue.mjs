import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const [issueUrl, outputPath] = process.argv.slice(2);
if (!issueUrl || !outputPath) throw new Error('Usage: npm run screenshot:issue -- <issue-url> <output-path>');
mkdirSync(new URL('../evidence/github/', import.meta.url), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto(issueUrl, { waitUntil: 'networkidle' });
await page.locator('main').waitFor();
await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();
