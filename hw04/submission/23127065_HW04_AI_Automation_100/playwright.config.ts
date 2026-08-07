import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['html', { open: 'never', outputFolder: process.env.PLAYWRIGHT_HTML_OUTPUT_DIR ?? 'playwright-report', title: process.env.PLAYWRIGHT_HTML_TITLE ?? 'Run by: 23127065' }]],
  use: { screenshot: { mode: 'only-on-failure', fullPage: true }, trace: 'retain-on-failure', video: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
});
