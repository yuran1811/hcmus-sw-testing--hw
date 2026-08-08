import { defineConfig, devices, type ReporterDescription } from '@playwright/test';

const runTitle = process.env.PLAYWRIGHT_HTML_TITLE ?? 'Run by: 23127065';
const reporters: ReporterDescription[] = [
  ['html', {
    open: 'never',
    outputFolder: process.env.PLAYWRIGHT_HTML_OUTPUT_DIR ?? 'playwright-report',
    title: runTitle,
  }],
];
if (process.env.PLAYWRIGHT_JSON_OUTPUT_FILE) {
  reporters.push(['json', { outputFile: process.env.PLAYWRIGHT_JSON_OUTPUT_FILE }]);
}

export default defineConfig({
  testDir: './tests',
  outputDir: process.env.PLAYWRIGHT_TEST_OUTPUT_DIR ?? 'test-results',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: reporters,
  metadata: {
    runBy: '23127065',
    feature: process.env.HW04_FEATURE ?? 'all',
    browser: process.env.HW04_BROWSER ?? 'all',
    startedAt: process.env.HW04_STARTED_AT ?? new Date().toISOString(),
  },
  use: {
    screenshot: { mode: 'only-on-failure', fullPage: true },
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
