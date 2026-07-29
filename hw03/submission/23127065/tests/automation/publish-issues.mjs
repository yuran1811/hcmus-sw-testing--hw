import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const owner = "yuran1811";
const repo = "hcmus-sw-testing--hw";
const token = execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim();
const results = JSON.parse(await fs.readFile(path.join(root, "tests/test-runs/task1-results.json"), "utf8"));
const catalog = JSON.parse(await fs.readFile(path.join(here, "bug-catalog.json"), "utf8"));
const failures = results.results.filter((item) => item.status === "Failed");
const byBug = Object.groupBy(failures, (item) => item.bugId);
const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" };

async function github(pathname, options = {}) {
  const response = await fetch(`https://api.github.com${pathname}`, { headers, ...options });
  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  return response.json();
}

const existing = await github(`/repos/${owner}/${repo}/issues?state=all&per_page=100`);
const links = {};
for (const [bugId, meta] of Object.entries(catalog)) {
  const affected = byBug[bugId] ?? [];
  if (!affected.length) continue;
  const title = `[HW03][${bugId}] ${meta.title}`;
  const prior = existing.find((issue) => issue.title === title);
  if (prior) {
    links[bugId] = prior.html_url;
    continue;
  }
  const screenshots = affected.map((item) => {
    const raw = `https://raw.githubusercontent.com/${owner}/${repo}/main/hw03/submission/23127065/${item.evidence}`;
    return `### ${item.id}\n\n![${item.id}](${raw})`;
  }).join("\n\n");
  const body = `## Environment\n\n- SUT: EShop local backend and frontend\n- Browser: Chromium via Playwright 1.61.0\n- Date: 2026-07-29\n- Screen: ${meta.screen}\n- Severity: **${meta.severity}**\n\n## Affected checklist items\n\n${affected.map((item) => `- ${item.id}`).join("\n")}\n\n## Steps to reproduce\n\n1. Start the seeded EShop backend and relevant frontend.\n2. Open ${meta.screen}.\n3. Perform the actions defined by the affected checklist items.\n4. Observe the behavior below.\n\n## Expected\n\nThe interface satisfies the checklist expectations and its applicable FR/IA requirements.\n\n## Actual\n\n${affected.map((item) => `- **${item.id}:** ${item.note}`).join("\n")}\n\n## Evidence\n\n${screenshots}\n\n---\nStudent: 23127065 — Ngô Nguyễn Thế Khoa`;
  const created = await github(`/repos/${owner}/${repo}/issues`, { method: "POST", body: JSON.stringify({ title, body }) });
  links[bugId] = created.html_url;
  console.log(`${bugId}: ${created.html_url}`);
}

await fs.writeFile(path.join(root, "issue-links.json"), `${JSON.stringify(links, null, 2)}\n`);
console.log(`Recorded ${Object.keys(links).length} GitHub issue links.`);
