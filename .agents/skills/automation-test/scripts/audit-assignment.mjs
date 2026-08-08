#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const args = Object.fromEntries(process.argv.slice(2).reduce((pairs, item, index, all) => {
  if (item.startsWith('--')) pairs.push([item.slice(2), all[index + 1]]);
  return pairs;
}, []));

if (!args.root || !args['student-id']) {
  console.error('Usage: audit-assignment.mjs --root <submission> --student-id <id>');
  process.exit(2);
}

const root = resolve(args.root);
const studentId = args['student-id'];
const features = [
  ['product-detail', 'product-detail.json'],
  ['coupon', 'coupon.json'],
  ['coupon-admin', 'coupon-admin.json'],
];
const browsers = ['chromium', 'firefox', 'webkit'];
const errors = [];

for (const [feature, dataFile] of features) {
  const dataPath = resolve(root, 'test-data', dataFile);
  if (!existsSync(dataPath)) {
    errors.push(`Missing data file: ${dataPath}`);
    continue;
  }
  const cases = JSON.parse(readFileSync(dataPath, 'utf8'));
  if (!Array.isArray(cases) || cases.length < 12) errors.push(`${feature}: expected at least 12 data records`);
  const ids = cases.map((item) => item.id);
  if (new Set(ids).size !== ids.length) errors.push(`${feature}: duplicate case IDs`);
  for (const id of ids) {
    const casePath = resolve(root, 'test-cases', feature, `${id}.md`);
    if (!existsSync(casePath)) errors.push(`${feature}: missing case document ${id}.md`);
  }
}

const manifestPath = resolve(root, 'reports', 'run-manifest.json');
if (!existsSync(manifestPath)) {
  errors.push('Missing reports/run-manifest.json');
} else {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (manifest.studentId !== studentId) errors.push('Manifest student ID does not match');
  if (manifest.expectedLogicalCases !== 36 || manifest.expectedExecutions !== 108) errors.push('Manifest must declare 36 logical cases and 108 executions');
  if (!Array.isArray(manifest.results) || manifest.results.length !== 9) errors.push('Manifest must contain nine matrix cells');
  for (const [feature] of features) {
    for (const browser of browsers) {
      const cell = manifest.results?.find((item) => item.feature === feature && item.browser === browser);
      if (!cell) {
        errors.push(`Missing matrix cell: ${feature}/${browser}`);
        continue;
      }
      if (cell.total !== 12) errors.push(`${feature}/${browser}: expected 12 attempted cases, found ${cell.total}`);
      if (!cell.label?.includes(`Run by: ${studentId}`) || !/\d{4}-\d{2}-\d{2}T/.test(cell.label)) errors.push(`${feature}/${browser}: missing student label or ISO timestamp`);
      if (typeof cell.report !== 'string' || !existsSync(resolve(root, cell.report, 'index.html'))) errors.push(`${feature}/${browser}: missing HTML report`);
      if (typeof cell.jsonReport !== 'string' || !existsSync(resolve(root, cell.jsonReport))) errors.push(`${feature}/${browser}: missing JSON report`);
      if (!Array.isArray(cell.cases) || cell.cases.length !== 12) errors.push(`${feature}/${browser}: incomplete per-case results`);
      for (const testCase of cell.cases ?? []) {
        for (const attachment of testCase.attachments ?? []) {
          if (attachment.path && !existsSync(attachment.path)) errors.push(`${feature}/${browser}/${testCase.id}: missing attachment ${attachment.path}`);
        }
        const hasDefectKey = testCase.annotations?.some((annotation) => annotation.type === 'defect-key');
        const hasScreenshot = testCase.attachments?.some((attachment) => attachment.contentType === 'image/png' && attachment.path && existsSync(attachment.path));
        if (testCase.status === 'failed' && hasDefectKey && !hasScreenshot) errors.push(`${feature}/${browser}/${testCase.id}: defect has no screenshot`);
      }
    }
  }
}

const result = { root, studentId, features: 3, logicalCases: 36, expectedExecutions: 108, errors };
console.log(JSON.stringify(result, null, 2));
process.exitCode = errors.length ? 1 : 0;
