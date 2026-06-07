# Quickstart: HW01 Execution Guide

**Branch**: `001-hw01-qa-testing` | **Date**: 2026-05-31

Step-by-step guide for producing each deliverable. Follow this sequence — it minimizes rework and keeps Git history clean.

---

## Prerequisites

```bash
# 1. Verify Pandoc is available (for PDF export)
pandoc --version
# If not: brew install pandoc

# 2. Confirm current branch
git branch --show-current
# Expected: 001-hw01-qa-testing

# 3. Create directory skeleton
mkdir -p hw01/ai-artifacts hw01/evidence/jobs hw01/evidence/mindmap hw01/evidence/videos
```

---

## Step 0 — Scaffold Report

```bash
# Create report skeleton with all section headers
touch hw01/report.md
touch hw01/ai-artifacts/prompt-log.md
touch hw01/ai-artifacts/audit-reports.md
touch hw01/evidence/placeholder.md

git add hw01/
git commit -m "chore: scaffold hw01 directory structure and report skeleton"
```

The report skeleton should contain the full section outline from `plan.md` with `<!-- TODO -->` placeholders. See [data-model.md](data-model.md) for each section's entity format.

---

## Step 1 — R1: QA/QC Job Market (10 postings)

**Goal**: 10 job entries + 1 ISTQB mindmap audit. Target: ~3 pts × 10 + 10 AI pts = 40 pts.

### 1a. Collect job postings

1. Log into LinkedIn / TopCV / ITviec with an account showing your name
2. Search: "QA Engineer", "QC Engineer", "Test Engineer", "Software Tester", "Automation Engineer"
3. Filter: Published date → Last 30 days (to ensure within 60-day window)
4. For each of 10 postings:
   - Take a dated screenshot showing your account name visible
   - Save to `hw01/evidence/jobs/job-NN-<platform>.png`
   - Copy the URL, title, company, skills, salary
5. Ensure ≥3 postings explicitly mention AI/LLM/automation-AI skills

```bash
# After every 5 job postings added to report.md:
git add hw01/report.md hw01/evidence/jobs/
git commit -m "req1: add job postings NN-MM with screenshots"
```

### 1b. ISTQB Mindmap Audit

1. Open Claude or ChatGPT
2. Send prompt: "Generate a detailed mindmap of QA/QC roles and responsibilities based on ISTQB standards. Include: role definitions, testing levels, testing types, and process phases."
3. Log in `hw01/ai-artifacts/prompt-log.md` (with timestamp)
4. Capture the AI output (screenshot or paste)
5. Save raw output as `hw01/evidence/mindmap/ai-generated.png`
6. Identify exactly 3 mistakes — cite ISTQB CTFL Syllabus v4.0 or course slides
7. Create annotated `hw01/evidence/mindmap/corrected.png`
8. Add Audit Report entry to `hw01/ai-artifacts/audit-reports.md`
9. Write Section 1.2 in `hw01/report.md` using the schema from [data-model.md](data-model.md)

```bash
git add hw01/report.md hw01/evidence/mindmap/ hw01/ai-artifacts/
git commit -m "req1: add ISTQB mindmap audit with 3 identified AI mistakes"
```

---

## Step 2 — R2: 20 Software Defects

**Goal**: 20 documented defects (2022–2026) each with AI bias analysis. Target: 1 pt × 20 = 20 pts.

### 2a. Source defects

1. Browse: https://nvd.nist.gov (filter 2022–2026), https://cve.mitre.org, The Register, Ars Technica, VnExpress Tech
2. For ≥5 entries: choose AI/LLM defects — search "ChatGPT hallucination", "prompt injection", "LLM bias"
3. Fill each defect entry using the schema in [data-model.md](data-model.md)

### 2b. AI bias elicitation (mandatory for all 20)

For each defect:

1. Ask AI: "Explain the <defect name> bug — what caused it, how severe was it, and how was it fixed?"
2. Log prompt in `hw01/ai-artifacts/prompt-log.md`
3. Identify 1 bias/hallucination (wrong CVSS score, fabricated fix, denied severity, etc.)
4. Document the identified bias in the defect entry's `AI Bias / Hallucination Identified` block

```bash
# Commit in batches of 5-10 defects:
git add hw01/report.md hw01/ai-artifacts/prompt-log.md
git commit -m "req2: document defects NN-MM with AI bias analysis"
```

---

## Step 3 — R3: Stand Fan Testing

**Goal**: 15 ISTQB test cases, ≥5 executed with video, ≥5 defects found. Target: 25 pts.

### 3a. Device declaration

1. Take 1 photo: stand fan + your student ID card in the same frame
2. Save as `hw01/evidence/device-photo.jpg`
3. Write Section 3.1 in report: brand, model, year, serial number (mask middle 4 chars)

```bash
git add hw01/evidence/device-photo.jpg hw01/report.md
git commit -m "req3: add device declaration photo and device info"
```

### 3b. Probe AI for test cases first (required for edge case proof)

1. Prompt Claude/ChatGPT: "Generate 15 ISTQB-structured test cases for a household stand fan covering functional, safety, and reliability testing."
2. Log the prompt
3. Capture AI output (full text or screenshot)
4. Identify which test cases the AI MISSED (safety hazards, environmental stress, simultaneous-input cases)
5. Save the AI conversation screenshot as `hw01/evidence/ai-tc-probe.png`
6. Add an Audit Report entry

### 3c. Design 15 test cases

Design test cases covering:

- **Functional** (5): speed settings (1/2/3), oscillation on/off, timer function, height adjustment, power on/off
- **Boundary** (3): max speed sustained, min speed stability, timer at 0/max limits
- **AI-Missed Edge Cases** (≥3): e.g., safety contact test, simultaneous button press, high-load power strip behavior
- **Exploratory** (2): unexpected scenarios discovered during testing

Use the schema from [data-model.md](data-model.md) for each test case.

```bash
git add hw01/report.md
git commit -m "req3: design 15 ISTQB test cases including 3 AI-missed edge cases"
```

### 3d. Execute ≥5 test cases

For each test case executed:

1. Set up your smartphone camera to record
2. SPEAK ALOUD: your name, student ID, test case ID, and what you're doing (anti-cheat: voice narration required)
3. Execute the test steps
4. Record actual result
5. Stop recording (clip must be ≤60s — edit if needed)
6. Upload to YouTube as Unlisted: title `HW01-TC-NN-<StudentID>-<description>`
7. Copy YouTube URL into the test case's Video field
8. If a defect is found: create a GitHub Issue + fill Defect-R3-NN entry

```bash
git add hw01/report.md
git commit -m "req3: add execution results for TC-NN to TC-MM with video links"
```

---

## Step 4 — AI Compliance Section

**Goal**: AI Critique (200–300 words) + Accuracy Summary + Disclosure Statement. Target: 8 + 4 + 3 = 15 pts.

### 4a. Complete Audit Reports

After all R1/R2/R3 AI interactions are logged:

1. Ensure every AI-generated artifact batch has a complete Audit-NN entry in `hw01/ai-artifacts/audit-reports.md`
2. Tally: VALID count, INVALID count, INCOMPLETE count

```bash
git add hw01/ai-artifacts/
git commit -m "ai-audit: complete all 5-section audit reports for R1, R2, R3 artifacts"
```

### 4b. Write Section 4

1. **Section 4.1** — AI Critique: exactly 1 paragraph, 200–300 words. Answer: Where was AI wrong/biased/incomplete? Why did AI fail? What principle did you learn for collaborating with AI?
2. **Section 4.2** — AI Accuracy Summary: VALID X/N (X%), INVALID Y/N (Y%), INCOMPLETE Z/N (Z%). Conclude: WHEN to use / not use AI for this work.
3. **Section 4.3** — Disclosure Statement: paste the mandatory template from `hw01/requirements.md §5`

```bash
git add hw01/report.md
git commit -m "ai-audit: add AI critique paragraph, accuracy summary, and disclosure"
```

### 4c. Attach appendices

1. Appendix A: copy Audit Reports from `hw01/ai-artifacts/audit-reports.md` into `hw01/report.md`
2. Appendix B: scan/photograph signed [AI-03] Disclosure Form → save as `hw01/evidence/AI-03-disclosure.pdf`
3. Appendix C: scan/photograph signed [AI-05] Privacy Checklist → save as `hw01/evidence/AI-05-checklist.pdf`
4. Appendix D: copy Prompt Log from `hw01/ai-artifacts/prompt-log.md` into `hw01/report.md`

```bash
git add hw01/report.md hw01/evidence/
git commit -m "chore: attach appendices A-D (audit reports, disclosure, checklist, prompt log)"
```

---

## Step 5 — PDF Export & Final Submission

```bash
# Export to PDF
pandoc hw01/report.md -o hw01/report.pdf

# Verify PDF looks correct, then commit
git add hw01/report.pdf
git commit -m "chore: add PDF export of final report"

# Create submission zip
zip -r <StudentID>_HW01_AI_<grade>.zip hw01/ --exclude "*.mp4"
```

**Submission checklist** (verify before submitting to Moodle):

- [ ] `hw01/report.md` + `hw01/report.pdf` present
- [ ] 10 job posting screenshots in `hw01/evidence/jobs/` (all show account name)
- [ ] `hw01/evidence/mindmap/ai-generated.png` + `hw01/evidence/mindmap/corrected.png`
- [ ] `hw01/evidence/device-photo.jpg` (fan + student ID card)
- [ ] ≥5 YouTube Unlisted video links in report (TC execution)
- [ ] `hw01/ai-artifacts/prompt-log.md` committed with timestamps
- [ ] `hw01/ai-artifacts/audit-reports.md` with entry per AI artifact
- [ ] GitHub Issues screenshot showing ≥5 physical defects with your username
- [ ] [AI-03] Disclosure Form signed and attached (Appendix B)
- [ ] [AI-05] Privacy Checklist signed and attached (Appendix C)
- [ ] AI Critique paragraph: 200–300 words (count it)
- [ ] Self-assessment grade filled at end of report
- [ ] Zip filename: `StudentID_HW01_AI_<grade>.zip` (3-digit grade, e.g., `_085.zip`)

---

## Step 6 — Oral Defense Preparation

A random 30% of students receive an oral defense invitation. Prepare:

1. **Live demo**: be ready to execute any of your 15 test cases on the actual device, in real-time
2. **Input justification**: for each executed test case, know WHY you chose that specific input (equivalence class? boundary? edge case?) — reference ISTQB design techniques
3. **AI mistake**: identify 1 specific AI mistake you corrected and explain why AI got it wrong (cite the correct ISTQB/source information)

**Preparation notes to keep in report** (Section 4 or separate appendix):

- List which ISTQB design technique applies to each test case
- Note the reasoning for each boundary value chosen
- Write one paragraph per AI-missed edge case explaining the physical-world reasoning AI lacks

---

## Reference Quick Links

| Resource                 | URL                                                                    |
| ------------------------ | ---------------------------------------------------------------------- |
| CVE Database             | https://nvd.nist.gov/vuln/search                                       |
| MITRE CVE                | https://cve.mitre.org                                                  |
| The Register             | https://www.theregister.com                                            |
| ISTQB CTFL Syllabus v4.0 | https://www.istqb.org/certifications/certified-tester-foundation-level |
| LinkedIn Jobs            | https://www.linkedin.com/jobs                                          |
| TopCV                    | https://www.topcv.vn                                                   |
| ITviec                   | https://itviec.com                                                     |
| This repo's Issues       | https://github.com/<your-username>/<repo>/issues                       |
