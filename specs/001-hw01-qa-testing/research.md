# Phase 0 Research: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Branch**: `001-hw01-qa-testing` | **Date**: 2026-05-31

All NEEDS CLARIFICATION items from the plan's Technical Context are resolved here.

---

## 1. AI Audit Report Templates Location

**Question**: The requirements reference `/AI Templates folder` with [AI-02], [AI-03], [AI-05] — where do these files live?

**Resolution**: The templates are not yet committed to this repository. They are course-supplied documents referenced in `hw01/requirements.md`. The student must:
1. Download [AI-02], [AI-03], [AI-05] from the course Moodle page
2. Fill them out and commit as `hw01/evidence/AI-02-audit-report.md`, `hw01/evidence/AI-03-disclosure.md`, `hw01/evidence/AI-05-checklist.md`
3. Reference them as appendices in `hw01/report.md`

**Decision**: Audit Report content is inlined in `hw01/ai-artifacts/audit-reports.md` following the 5-section template structure defined in `hw01/requirements.md`. Signed PDF forms ([AI-03], [AI-05]) are scanned and added to `hw01/evidence/`.

---

## 2. Pandoc PDF Export Workflow

**Question**: Is Pandoc available on macOS? What export command is needed?

**Resolution**:
- Install: `brew install pandoc`
- Export command: `pandoc hw01/report.md -o hw01/report.pdf --pdf-engine=xelatex` (or `--pdf-engine=wkhtmltopdf` as fallback)
- Simple fallback: VS Code Markdown PDF extension or `pandoc hw01/report.md -o hw01/report.pdf` (uses default engine)

**Decision**: Use `pandoc hw01/report.md -o hw01/report.pdf` as the canonical export command. Document the Pandoc version in the report's cover page. If Pandoc is unavailable, VS Code's "Export to PDF" feature is acceptable as a fallback — document the tool used.

---

## 3. Job Posting Recency Window

**Question**: "Published within 60 days of submission" — when is the submission deadline?

**Resolution**: The submission deadline is listed on Moodle (not in the repository). Per spec clarification: "Published within 60 days is measured from the homework submission deadline." For planning purposes, assume the window opens approximately 60 days before the deadline, meaning postings published from roughly late March 2026 onward qualify (if deadline is late May 2026).

**Decision**: Capture the submission deadline from Moodle at research time. Record the deadline date explicitly in the report's cover page. Filter all job postings by publication date — if a posting was published more than 60 days before the deadline, discard and find a replacement. Take a dated screenshot on the day of capture to prove recency.

---

## 4. GitHub Issues for Bug Logging

**Question**: Requirements originally mentioned Mantis — the clarification says GitHub Issues. What format should Issue titles follow?

**Resolution**: Per `hw01/requirements.md` clarification: "Mantis is NO longer used for HW01. Instead, log all defects found during physical-device testing as Issues in your own GitHub repository (include screenshot of the Issues page showing your GitHub username)."

**Decision**:
- Create GitHub Issues on this repository (`001-hw01-qa-testing` branch scope)
- Issue title format: `[DEFECT] TC-NN: <short description>` (e.g., `[DEFECT] TC-03: Oscillation mechanism stops unexpectedly after 10 minutes`)
- Labels: `defect`, `req3`, `severity:<Critical|Major|Minor|Trivial>`
- Include: steps to reproduce, expected vs actual, severity, photo/video link
- Screenshot the Issues tab showing your GitHub username → save to `hw01/evidence/github-issues.png`

---

## 5. Defect Classification Standard

**Question**: What severity classification to use for R2 software defects?

**Resolution**: Per spec clarification: "ISTQB-aligned categories (Critical/Major/Minor/Trivial) recommended as primary standard; equivalent frameworks (IEEE 1044) acceptable." 

**Decision**: Use ISTQB severity levels throughout all defect entries (R2 and R3):
- **Critical**: System crash, data loss, security breach, safety hazard
- **Major**: Major function fails, significant loss of functionality, no workaround
- **Minor**: Non-critical function impaired, workaround exists
- **Trivial**: Cosmetic issue, minor inconvenience, documentation error

Apply these consistently. Note the standard once in Section 2's introduction; do not repeat per entry.

---

## 6. Video Platform & Copyright Handling

**Question**: YouTube Unlisted is the primary platform — what if a video gets blocked?

**Resolution**: Per clarification: "YouTube Unlisted is the primary platform. Alternative platforms (Google Drive, OneDrive, etc.) are only accepted if the YouTube video was removed/blocked due to a copyright claim — students must first make every effort to upload to YouTube."

**Decision**: 
- Upload all execution videos to YouTube as Unlisted
- Filename in YouTube: `HW01-TC-NN-<student-id>-<description>`
- If blocked by copyright: switch audio track in YouTube Studio, or re-upload with original audio only (fan motor sounds are not copyrighted)
- Embed YouTube links in the report table: `[▶ Watch TC-01](https://youtu.be/...)`
- Keep local `.mp4` files as backup in `hw01/evidence/videos/` (not committed — use `.gitignore` for large files, or use Git LFS)

---

## 7. Stand Fan Edge Cases AI Misses

**Question**: What categories of stand fan edge cases are most likely beyond AI's knowledge?

**Research findings**:

AI tools generate test cases based on common documented behavior (speed settings, oscillation toggle, timer). They systematically miss:

1. **Environmental edge cases**: high humidity, dusty environment, proximity to walls (<20cm clearance), carpet vs. hard floor stability
2. **Mechanical wear edge cases**: behavior after continuous operation for 4+ hours, oscillation alignment after physical impact to the head
3. **Electrical edge cases**: behavior on voltage fluctuations (Thai 220V ± 10%), behavior when plugged into a power strip with other high-load appliances
4. **Safety edge cases**: touching the guard grill with a finger during operation, inserting a pencil through the grill gap
5. **User interaction edge cases**: adjusting height while fan is running at maximum speed, pressing all buttons simultaneously, removing the back guard clip while spinning

**Decision**: Design ≥3 test cases from categories (1), (4), and (5) above. For each, screenshot the AI conversation showing the AI did NOT generate these — then write 2–3 sentences explaining why (AI lacks physical world grounding for wear/safety behavior).

---

## 8. ISTQB Mindmap Audit Methodology

**Question**: What does "identify 3 mistakes in AI-generated ISTQB mindmap" mean operationally?

**Resolution**: Per spec (FR-017) and CLO G9.1: ask AI to generate an ISTQB-based QA/QC role mindmap, then identify exactly 3 errors with citations to course materials or ISTQB standards.

**Research findings**: Common AI mistakes in ISTQB mindmaps:
- Confusing QA (process assurance) with QC (product verification)
- Missing key ISTQB testing levels (component → integration → system → acceptance)
- Omitting non-functional testing types (performance, security, usability)
- Wrong process model (e.g., V-Model with incorrect phase mappings)
- Hallucinated ISTQB roles or responsibilities not in the syllabus

**Decision**: 
1. Prompt Claude: "Generate a detailed mindmap of QA/QC roles and responsibilities based on ISTQB standards"
2. Capture full AI output (screenshot or paste)
3. Identify exactly 3 mistakes citing: ISTQB CTFL Syllabus v4.0 (or course slides)
4. Save AI output as `hw01/evidence/mindmap/ai-generated.png`; save annotated correction as `hw01/evidence/mindmap/corrected.png`
5. Write one Audit Report entry in `hw01/ai-artifacts/audit-reports.md` for this artifact

---

## 9. AI Bias Elicitation Strategy (R2)

**Question**: What if AI gives a fully correct explanation for a defect — how to find the bias?

**Resolution**: Per spec edge case: "The student must still probe deeper or rephrase to elicit bias/hallucination, documenting the attempt."

**Decision** (probe strategy per defect type):
- **CVE/security defects**: Ask AI for root cause → probe for hallucinated CVE numbers or wrong CVSS scores
- **AI/LLM defects**: Ask AI to explain the hallucination → AI often self-contradicts or denies the defect's severity
- **UI/UX defects**: Ask AI for "best practices violated" → AI tends to over-generalize with incorrect standards citations
- **Performance defects**: Ask AI for root cause metrics → AI often fabricates specific numbers not in the source
- If the first prompt yields a correct answer: use a follow-up probe ("Are there any other causes?") to surface overconfidence or fabricated alternatives

Document the probe prompt in `hw01/ai-artifacts/prompt-log.md` and note the identified bias in the defect entry.

---

## Summary of Resolved Decisions

| # | Unknown | Decision |
|---|---------|----------|
| 1 | AI Templates location | Download from Moodle; inline 5-section content in `audit-reports.md`; commit signed PDFs to `hw01/evidence/` |
| 2 | PDF export tooling | `pandoc hw01/report.md -o hw01/report.pdf`; fallback: VS Code Markdown PDF |
| 3 | Job posting recency | Record submission deadline from Moodle; filter all postings to within 60-day window |
| 4 | Bug tracking platform | GitHub Issues on this repo; format `[DEFECT] TC-NN: <desc>`; screenshot Issues tab |
| 5 | Defect severity standard | ISTQB (Critical/Major/Minor/Trivial); consistent throughout R2 and R3 |
| 6 | Video platform | YouTube Unlisted primary; local `.mp4` backup; `.gitignore` large files |
| 7 | AI-missed edge cases | Target: environmental, safety, and simultaneous-input categories |
| 8 | Mindmap audit methodology | Prompt → capture → annotate 3 mistakes with ISTQB citations → Audit Report |
| 9 | AI bias elicitation | Probe with follow-up prompts; document attempt + bias type per defect |
