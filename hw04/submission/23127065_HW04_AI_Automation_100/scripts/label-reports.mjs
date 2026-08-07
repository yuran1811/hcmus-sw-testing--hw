import { readFileSync, writeFileSync } from 'node:fs';

for (const feature of ['product-detail', 'coupon', 'coupon-admin']) {
  for (const browser of ['chromium', 'firefox', 'webkit']) {
    const path = `reports/html/${feature}/${browser}/index.html`;
    const html = readFileSync(path, 'utf8');
    if (html.includes('hw04-student-label')) continue;
    const label = `<aside id="hw04-student-label" style="position:fixed;right:12px;bottom:12px;z-index:9999;padding:8px 12px;background:#0f172a;color:#fff;border-radius:6px;font:600 14px sans-serif">Run by: 23127065 | ${feature} | ${browser} | ${new Date().toISOString()}</aside>`;
    writeFileSync(path, html.replace('</body>', `${label}</body>`));
  }
}
