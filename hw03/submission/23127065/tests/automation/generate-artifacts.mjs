import ExcelJS from "exceljs";
import { marked } from "marked";
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const guiPath = path.join(root, "GUI_Testing.md");
const usabilityPath = path.join(root, "Usability_Testing.md");
const results = JSON.parse(await fs.readFile(path.join(root, "tests/test-runs/task1-results.json"), "utf8"));
const catalog = JSON.parse(await fs.readFile(path.join(here, "bug-catalog.json"), "utf8"));
let issueLinks = {};
try { issueLinks = JSON.parse(await fs.readFile(path.join(root, "issue-links.json"), "utf8")); } catch {}

const resultById = new Map(results.results.map((item) => [item.id, item]));
let gui = await fs.readFile(guiPath, "utf8");
let inChecklist = true;
const lines = gui.split("\n").map((line) => {
  if (line.startsWith("## 5.")) inChecklist = false;
  if (!inChecklist) return line;
  const match = line.match(/^\| ((?:CART|COUPON)-GUI-\d+) \|/);
  if (!match) return line;
  const result = resultById.get(match[1]);
  if (!result) throw new Error(`Missing result for ${match[1]}`);
  const cells = line.split("|");
  cells[5] = result.status === "Passed" ? " ✅ Passed " : " ❌ Failed ";
  const note = result.note.replaceAll("|", "\\|").replaceAll("\n", " ");
  const issue = result.bugId && issueLinks[result.bugId] ? ` [${result.bugId}](${issueLinks[result.bugId]})` : result.bugId ? ` ${result.bugId}` : "";
  const evidence = result.evidence ? ` [Screenshot](${result.evidence})` : "";
  cells[6] = ` ${note}${issue}${evidence} `;
  return cells.join("|");
});
gui = lines.join("\n");

const executionSection = `

## 9. Kết quả thực thi

| Chỉ số | Kết quả |
| --- | ---: |
| Checklist items thiết kế | ${results.counts.total} |
| Items đã thực thi | ${results.counts.total} |
| Passed | ${results.counts.passed} |
| Failed | ${results.counts.failed} |
| Pass rate | ${(results.counts.passed / results.counts.total * 100).toFixed(1)}% |
| Bug groups | ${Object.keys(catalog).length} |

Môi trường: ${results.environment.browser}, ${results.environment.os}; Customer Web \`${results.environment.webUrl}\`; Admin \`${results.environment.adminUrl}\`. Mỗi item Failed có screenshot riêng; item Passed không tạo screenshot.
`;
gui = gui.replace(/\n## 9\. Kết quả thực thi[\s\S]*$/, "").trimEnd() + executionSection;
await fs.writeFile(guiPath, `${gui.trimEnd()}\n`);

const affectedByBug = {};
for (const result of results.results.filter((item) => item.status === "Failed")) {
  (affectedByBug[result.bugId] ??= []).push(result);
}

let bugReport = `# Task 1 Bug Report\n\nExecution: ${results.executedAt}. All findings below were reproduced against the local EShop SUT.\n\n`;
for (const [bugId, meta] of Object.entries(catalog)) {
  const affected = affectedByBug[bugId] ?? [];
  if (!affected.length) continue;
  const issueUrl = issueLinks[bugId] ?? "Pending publication";
  bugReport += `## ${bugId} — ${meta.title}\n\n`;
  bugReport += `| Field | Value |\n| --- | --- |\n| Severity | **${meta.severity}** |\n| Screen | ${meta.screen} |\n| GitHub issue | ${issueUrl === "Pending publication" ? issueUrl : `[Open issue](${issueUrl})`} |\n| Affected checks | ${affected.map((item) => item.id).join(", ")} |\n\n`;
  bugReport += `**Steps to reproduce**\n\n1. Start the seeded backend and relevant frontend.\n2. Open ${meta.screen}.\n3. Perform the actions described by ${affected.map((item) => item.id).join(", ")}.\n4. Observe the actual behavior recorded below.\n\n`;
  bugReport += `**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.\n\n`;
  bugReport += `**Actual:** ${affected.map((item) => item.note).join(" ")}\n\n`;
  bugReport += `**Evidence:** ${affected.map((item) => `[${item.id}](${item.evidence})`).join(", ")}\n\n`;
}
await fs.writeFile(path.join(root, "Bug_Report.md"), bugReport);

const humanReasons = {
  "CART-GUI-016": "Accessibility tree coverage",
  "CART-GUI-025": "Quantity boundary value",
  "CART-GUI-027": "XSS display safety",
  "CART-GUI-032": "Dialog focus trap",
  "CART-GUI-037": "Rapid repeated activation",
  "CART-GUI-041": "WCAG reflow at 200% zoom",
  "CART-GUI-046": "Measured contrast",
  "CART-GUI-048": "Document language metadata",
  "CART-GUI-049": "RTL layout",
  "COUPON-GUI-020": "Percent upper boundary",
  "COUPON-GUI-022": "Past-date validation",
  "COUPON-GUI-026": "XSS display safety"
};

function aspectFor(id) {
  const number = Number(id.match(/(\d+)$/)[1]);
  if (id.startsWith("CART")) {
    if (number <= 8) return "IA-01, IA-03";
    if (number <= 13) return "IA-04, IA-03";
    if (number <= 27) return "IA-01, IA-02, IA-04";
    if (number <= 37) return "IA-03, IA-04";
    return "IA-01, IA-03";
  }
  if (number <= 7) return "IA-01, IA-03";
  if (number <= 15) return "IA-01, IA-04";
  if (number <= 26) return "IA-02, IA-04";
  if (number <= 30) return "IA-03, IA-04";
  return "IA-01, IA-02, IA-03";
}

const checklistRows = gui.split("\n").filter((line) => /^\| (?:CART|COUPON)-GUI-\d+ \|.*\| (?:✅ Passed|❌ Failed) \|/.test(line)).map((line) => {
  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  const result = resultById.get(cells[0]);
  return {
    id: cells[0], priority: cells[1], procedure: cells[2], expected: cells[3],
    screen: cells[0].startsWith("CART") ? "Cart" : "Admin Coupon",
    aspect: aspectFor(cells[0]), source: humanReasons[cells[0]] ? "Human review addition" : "AI draft + human review",
    gap: humanReasons[cells[0]] ?? "", status: result.status, bug: result.bugId,
    notes: result.note, evidence: result.evidence,
  };
});

const workbook = new ExcelJS.Workbook();
workbook.creator = "Ngô Nguyễn Thế Khoa — 23127065";
const sheet = workbook.addWorksheet("Checklist");
sheet.columns = [
  ["ID", "id", 18], ["Priority", "priority", 10], ["Screen", "screen", 16], ["IA", "aspect", 20],
  ["Procedure", "procedure", 55], ["Expected", "expected", 65], ["Source", "source", 24], ["AI gap rationale", "gap", 30],
  ["Status", "status", 12], ["Bug", "bug", 18], ["Notes", "notes", 65], ["Evidence", "evidence", 42]
].map(([header, key, width]) => ({ header, key, width }));
sheet.addRows(checklistRows);
sheet.views = [{ state: "frozen", ySplit: 1 }];
sheet.autoFilter = { from: "A1", to: "L86" };
sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F4E78" } };
for (const row of sheet.getRows(2, checklistRows.length)) {
  row.alignment = { vertical: "top", wrapText: true };
  if (row.getCell(9).value === "Failed") row.getCell(9).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFC7CE" } };
  else row.getCell(9).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFC6EFCE" } };
}
const summary = workbook.addWorksheet("Summary");
summary.addRows([
  ["Metric", "Value"], ["Designed", results.counts.total], ["Executed", results.counts.total],
  ["Passed", results.counts.passed], ["Failed", results.counts.failed],
  ["Pass rate", results.counts.passed / results.counts.total], ["Bug groups", Object.keys(catalog).length],
  ["Scope", "Cart + Admin Coupon; local Chromium only"]
]);
summary.getRow(1).font = { bold: true };
summary.getCell("B6").numFmt = "0.0%";
summary.columns = [{ width: 22 }, { width: 55 }];
await workbook.xlsx.writeFile(path.join(root, "23127065_HW03_GUI_Checklist.xlsx"));

const readOptional = async (name) => { try { return await fs.readFile(path.join(root, name), "utf8"); } catch { return ""; } };
const usability = await fs.readFile(usabilityPath, "utf8");
const audit = await readOptional("AI_Audit_Report.md");
const critique = await readOptional("AI_Critique.md");
const readme = await readOptional("README.md");
const main = `# 23127065 — HW03 AI GUI & Usability\n\n${readme}\n\n---\n\n${gui}\n\n---\n\n${bugReport}\n\n---\n\n${usability}\n\n---\n\n${audit}\n\n---\n\n${critique}`;
await fs.writeFile(path.join(root, "23127065-report.md"), `${main.trim()}\n`);

const css = `body{font-family:Arial,sans-serif;line-height:1.45;color:#172033;max-width:1100px;margin:32px auto;padding:0 24px}table{border-collapse:collapse;width:100%;font-size:10px}th,td{border:1px solid #bbb;padding:5px;vertical-align:top}th{background:#e9eef5}h1,h2{page-break-after:avoid}img{max-width:100%;height:auto}code{background:#f3f4f6;padding:1px 3px}@page{size:A4;margin:12mm}`;
const browser = await chromium.launch({ headless: true });
async function renderPdf(markdown, outputName) {
  const htmlPath = path.join(root, `.render-${outputName}.html`);
  const html = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><base href="${pathToFileURL(root + path.sep).href}"><style>${css}</style></head><body>${marked.parse(markdown)}</body></html>`;
  await fs.writeFile(htmlPath, html);
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.pdf({ path: path.join(root, outputName), format: "A4", printBackground: true });
  await page.close();
  await fs.unlink(htmlPath);
}
await renderPdf(gui, "GUI_Testing.pdf");
await renderPdf(usability, "Usability_Testing_Phase1.pdf");
await renderPdf(main, "23127065-report.pdf");
await browser.close();

console.log(`Generated Markdown, XLSX, and PDF artifacts for ${results.counts.total} checks.`);
