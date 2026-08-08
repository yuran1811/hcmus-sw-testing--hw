import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'reports', 'run-manifest.json'), 'utf8'));
const evidenceRoot = path.join(root, 'evidence', 'bugs');
const defects = new Map();

for (const run of manifest.results) {
  for (const testCase of run.cases) {
    if (testCase.status !== 'failed') continue;
    const key = testCase.annotations?.find((item) => item.type === 'defect-key')?.description;
    if (!key) continue;

    const current = defects.get(key) ?? { executions: 0, candidates: [] };
    current.executions += 1;
    current.candidates.push({ run, testCase });
    defects.set(key, current);
  }
}

const index = [];
for (const [defectKey, defect] of [...defects].sort(([left], [right]) => left.localeCompare(right))) {
  const selected = defect.candidates.find(({ run }) => run.browser === 'chromium') ?? defect.candidates[0];
  const screenshot = selected.testCase.attachments.find((item) => item.name === 'confirmed-defect' && item.path)
    ?? selected.testCase.attachments.find((item) => item.contentType === 'image/png' && item.path);
  const errorContext = selected.testCase.attachments.find((item) => item.contentType === 'text/markdown');
  if (!screenshot?.path) throw new Error(`${defectKey} has no failure screenshot`);

  const targetDir = path.join(evidenceRoot, defectKey);
  const basename = `${selected.testCase.id}-${selected.run.browser}`;
  await mkdir(targetDir, { recursive: true });
  await copyFile(screenshot.path, path.join(targetDir, `${basename}.png`));
  if (errorContext?.path) await copyFile(errorContext.path, path.join(targetDir, `${basename}-error-context.md`));

  index.push({
    defectKey,
    executions: defect.executions,
    feature: selected.run.feature,
    browser: selected.run.browser,
    caseId: selected.testCase.id,
    screenshot: path.posix.join('evidence', 'bugs', defectKey, `${basename}.png`),
    errorContext: errorContext?.path
      ? path.posix.join('evidence', 'bugs', defectKey, `${basename}-error-context.md`)
      : null,
  });
}

await mkdir(evidenceRoot, { recursive: true });
await writeFile(path.join(evidenceRoot, 'index.json'), `${JSON.stringify({ generatedAt: manifest.finishedAt, defects: index }, null, 2)}\n`);
console.log(`Collected ${index.length} defect screenshots in ${path.relative(root, evidenceRoot)}`);
