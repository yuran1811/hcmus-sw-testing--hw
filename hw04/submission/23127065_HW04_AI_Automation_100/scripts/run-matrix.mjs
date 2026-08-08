import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const studentId = '23127065';
const features = [
  ['product-detail', 'tests/product-detail.spec.ts'],
  ['coupon', 'tests/coupon.spec.ts'],
  ['coupon-admin', 'tests/coupon-admin.spec.ts'],
];
const browsers = ['chromium', 'firefox', 'webkit'];
const cells = features.flatMap(([feature, spec]) => browsers.map((browser) => ({ feature, spec, browser })));

function collectSpecs(suites, output = []) {
  for (const suite of suites ?? []) {
    output.push(...(suite.specs ?? []));
    collectSpecs(suite.suites, output);
  }
  return output;
}

function summarize(jsonFile) {
  const report = JSON.parse(readFileSync(jsonFile, 'utf8'));
  const specs = collectSpecs(report.suites);
  const cases = specs.map((spec) => {
    const test = spec.tests?.[0];
    const result = test?.results?.at(-1);
    return {
      id: spec.title.match(/TC-[A-Z-]+-\d{3}/)?.[0] ?? spec.title,
      title: spec.title,
      status: result?.status ?? 'did-not-run',
      durationMs: result?.duration ?? 0,
      attachments: (result?.attachments ?? []).map((attachment) => ({ name: attachment.name, path: attachment.path, contentType: attachment.contentType })),
      annotations: test?.annotations ?? [],
    };
  });
  const statusCounts = cases.reduce((counts, item) => {
    counts[item.status] = (counts[item.status] ?? 0) + 1;
    return counts;
  }, {});
  return { total: cases.length, statusCounts, cases };
}

const startedAt = new Date().toISOString();
const results = [];
for (const cell of cells) {
  const cellStartedAt = new Date().toISOString();
  const report = `reports/html/${cell.feature}/${cell.browser}`;
  const jsonReport = `reports/json/${cell.feature}/${cell.browser}.json`;
  const artifacts = `test-results/${cell.feature}/${cell.browser}`;
  mkdirSync(report, { recursive: true });
  mkdirSync(`reports/json/${cell.feature}`, { recursive: true });
  mkdirSync(artifacts, { recursive: true });

  const title = `Run by: ${studentId} | ${cell.feature} | ${cell.browser} | ${cellStartedAt}`;
  const run = spawnSync(process.execPath, ['node_modules/@playwright/test/cli.js', 'test', cell.spec, '--project', cell.browser], {
    stdio: 'inherit',
    env: {
      ...process.env,
      PLAYWRIGHT_HTML_OPEN: 'never',
      PLAYWRIGHT_HTML_OUTPUT_DIR: report,
      PLAYWRIGHT_HTML_TITLE: title,
      PLAYWRIGHT_JSON_OUTPUT_FILE: jsonReport,
      PLAYWRIGHT_TEST_OUTPUT_DIR: artifacts,
      HW04_FEATURE: cell.feature,
      HW04_BROWSER: cell.browser,
      HW04_STARTED_AT: cellStartedAt,
    },
  });

  let summary = { total: 0, statusCounts: { 'did-not-run': 12 }, cases: [] };
  try {
    summary = summarize(jsonReport);
  } catch (error) {
    summary.error = String(error);
  }
  results.push({
    ...cell,
    startedAt: cellStartedAt,
    finishedAt: new Date().toISOString(),
    exitCode: run.status ?? 1,
    report,
    jsonReport,
    artifacts,
    label: title,
    ...summary,
  });
}

const manifest = {
  studentId,
  expectedLogicalCases: 36,
  expectedExecutions: 108,
  startedAt,
  finishedAt: new Date().toISOString(),
  results,
};
writeFileSync('reports/run-manifest.json', JSON.stringify(manifest, null, 2));

for (const cell of results) {
  console.log(`${cell.feature}/${cell.browser}: ${cell.total}/12 executed, status=${JSON.stringify(cell.statusCounts)}, report=${cell.report}`);
}
process.exitCode = results.some((result) => result.total !== 12 || result.statusCounts.skipped || result.statusCounts['did-not-run']) ? 2 : results.some((result) => result.exitCode !== 0) ? 1 : 0;
