import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const cells = [
  ['product-detail', 'tests/product-detail.spec.ts'],
  ['coupon', 'tests/coupon.spec.ts'],
  ['coupon-admin', 'tests/coupon-admin.spec.ts']
].flatMap(([feature, spec]) => ['chromium', 'firefox', 'webkit'].map((browser) => ({ feature, spec, browser })));

const startedAt = new Date().toISOString();
const results = [];
for (const cell of cells) {
  const outputFolder = `reports/html/${cell.feature}/${cell.browser}`;
  mkdirSync(outputFolder, { recursive: true });
  const result = spawnSync(process.execPath, ['node_modules/playwright/cli.js', 'test', cell.spec, '--project', cell.browser], {
    stdio: 'inherit',
    env: { ...process.env, PLAYWRIGHT_HTML_OPEN: 'never', PLAYWRIGHT_HTML_OUTPUT_DIR: outputFolder, PLAYWRIGHT_HTML_TITLE: `Run by: 23127065 | ${cell.feature} | ${cell.browser} | ${new Date().toISOString()}` }
  });
  const reportPath = `${outputFolder}/index.html`;
  const label = `<aside id="hw04-student-label" style="position:fixed;right:12px;bottom:12px;z-index:9999;padding:8px 12px;background:#0f172a;color:#fff;border-radius:6px;font:600 14px sans-serif">Run by: 23127065 | ${cell.feature} | ${cell.browser} | ${new Date().toISOString()}</aside>`;
  writeFileSync(reportPath, readFileSync(reportPath, 'utf8').replace('</body>', `${label}</body>`));
  results.push({ ...cell, exitCode: result.status ?? 1, report: outputFolder });
}
writeFileSync('reports/run-manifest.json', JSON.stringify({ studentId: '23127065', startedAt, finishedAt: new Date().toISOString(), results }, null, 2));
process.exitCode = results.some((result) => result.exitCode !== 0) ? 1 : 0;
