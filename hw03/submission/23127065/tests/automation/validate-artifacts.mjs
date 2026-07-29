import ExcelJS from "exceljs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const results = JSON.parse(await fs.readFile(path.join(root, "tests/test-runs/task1-results.json"), "utf8"));
const gui = await fs.readFile(path.join(root, "GUI_Testing.md"), "utf8");
const usability = await fs.readFile(path.join(root, "Usability_Testing.md"), "utf8");
const catalog = JSON.parse(await fs.readFile(path.join(here, "bug-catalog.json"), "utf8"));
const issueLinks = JSON.parse(await fs.readFile(path.join(root, "issue-links.json"), "utf8"));
const failures = results.results.filter((item) => item.status === "Failed");
const screenshots = (await fs.readdir(path.join(root, "evidence/task1"))).filter((name) => name.endsWith(".png"));

const assertions = [];
function assert(condition, message) { if (!condition) throw new Error(message); assertions.push(message); }
assert(results.results.length === 85, "85 machine results present");
assert(results.counts.passed + results.counts.failed === 85, "result counts sum to 85");
assert(screenshots.length === failures.length, "one screenshot exists for every failed item");
assert(failures.every((item) => catalog[item.bugId]), "every failure maps to a catalogued bug");
assert(Object.keys(issueLinks).length === Object.keys(catalog).length, "every bug group has a GitHub issue link");
assert(Object.values(issueLinks).every((url) => /^https:\/\/github\.com\/yuran1811\/hcmus-sw-testing--hw\/issues\/\d+$/.test(url)), "all GitHub issue links target the homework repository");
assert((gui.match(/^\| (?:CART|COUPON)-GUI-\d+ \|.*\| (?:✅ Passed|❌ Failed) \|/gm) ?? []).length === 85, "85 checklist rows present in Markdown");
assert(!gui.includes("| ☐"), "no checklist status is blank");
assert(!/Lumiere|synthetic persona|cust1@cust\.vn/i.test(usability), "unrelated or synthetic usability content removed");
assert((usability.match(/\[P0[1-7]_NAME\]/g) ?? []).length === 7, "seven explicit participant placeholders present");
assert(usability.includes("[PILOT_NAME_PROFILE]"), "pilot placeholder record present");

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(path.join(root, "23127065_HW03_GUI_Checklist.xlsx"));
assert(workbook.getWorksheet("Checklist").rowCount === 86, "Excel contains header plus 85 checks");
assert(workbook.getWorksheet("Summary").getCell("B4").value === results.counts.passed, "Excel passed count matches JSON");
assert(workbook.getWorksheet("Summary").getCell("B5").value === results.counts.failed, "Excel failed count matches JSON");
for (const file of ["GUI_Testing.pdf", "Usability_Testing_Phase1.pdf", "23127065-report.pdf"]) {
  assert((await fs.stat(path.join(root, file))).size > 10_000, `${file} is non-empty`);
}
console.log(`Validated ${assertions.length} artifact invariants.`);
