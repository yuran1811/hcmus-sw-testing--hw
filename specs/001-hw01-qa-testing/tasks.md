# Tasks: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Input**: `specs/001-hw01-qa-testing/plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`, `contracts/`

**Branch**: `001-hw01-qa-testing` | **Generated**: 2026-05-31

---

## Legend

| Marker       | Meaning                                                           |
| ------------ | ----------------------------------------------------------------- |
| `[P]`        | Can run in parallel (no dependency on an incomplete sibling task) |
| `[USn]`      | Belongs to User Story n                                           |
| `⚠️ MANUAL`  | Cannot be done by AI/agent — student must execute in person       |
| `📸 ACCOUNT` | Screenshot must show your login/display name (anti-cheat)         |
| `🎙️ VOICE`   | Video must contain student voice narration (anti-cheat)           |
| `FR-nnn`     | Functional Requirement(s) this task satisfies                     |

---

## Phase 1: Setup — Directory Scaffold & File Skeletons

**Purpose**: Create the directory tree and empty files that every subsequent task writes into. Must be complete before any content work begins.

- [x] T001 Create directory skeleton: `mkdir -p hw01/ai-artifacts hw01/evidence/jobs hw01/evidence/mindmap hw01/evidence/videos` (FR-020, FR-021)
- [x] T002 Scaffold `hw01/report.md` with full section outline (Cover Page, Sections 1–4, Appendix A–B) and `<!-- TODO -->` placeholders per `plan.md` report structure (FR-020)
- [x] T003 [P] Initialize `hw01/ai-artifacts/prompt-log.md` with header, column format (`| HH:MM dd/mm/yyyy | Tool | Prompt summary | Purpose |`), and one example row (FR-023)
- [x] T004 [P] Initialize `hw01/ai-artifacts/audit-reports.md` with 5-section template header and one blank entry skeleton (FR-014, FR-024)
- [x] T005 [P] Create `hw01/evidence/placeholder.md` as a directory marker with note: "Replace with actual evidence files during execution" (FR-020)
- [x] T006 Git commit: `chore: scaffold hw01 directory structure and report skeleton` (FR-021)

**Checkpoint**: `hw01/` directory tree exists; `report.md`, `prompt-log.md`, `audit-reports.md` all exist with correct headers.

---

## Phase 2: Foundational — Prerequisites Before Story Work

**Purpose**: One-time setup items that every story depends on. No story work can begin until T007–T008 are done.

⚠️ **CRITICAL**: Complete T007 and T008 before beginning Phase 3.

- [x] T007 Download [AI-02], [AI-03], [AI-05] templates from course Moodle; save blank copies to `hw01/evidence/AI-02-blank.md`, `hw01/evidence/AI-03-blank.md`, `hw01/evidence/AI-05-blank.md` (FR-024) _(placeholder templates created — replace with official Moodle versions)_
- [ ] T008 Record the official submission deadline from Moodle in `hw01/report.md` Cover Page; compute and record the 60-day recency window start date (job postings must be published after this date) (FR-001, FR-003)

**Checkpoint**: Templates downloaded; deadline and recency window documented in report cover page.

---

## Phase 3: User Story 1 — QA/QC Job Market Research & Analysis (R1, 40 pts, Priority: P1) 🎯 MVP

**Goal**: 10 job postings with full field coverage + 1 ISTQB mindmap audit with 3 identified mistakes.

**Independent Test**: Verify 10 entries in Section 1.1 each have URL + screenshot ref + skills + salary + AI Impact; ≥3 postings mention AI/LLM skills; Section 1.2 lists exactly 3 mindmap mistakes with ISTQB citations.

**Points at stake**: 40 pts (10×3 base content + 10 AI Impact sub-component)

### Job Postings — R1 (10 entries)

- [ ] T009 [US1] 📸 ACCOUNT ⚠️ MANUAL Log into LinkedIn/TopCV/ITviec/Glassdoor/Indeed with account showing your display name; search "QA Engineer / QC Engineer / Test Engineer / Automation Engineer"; filter by last 30 days; identify 10 postings ensuring ≥3 explicitly require AI/LLM/automation-AI skills (FR-001, FR-002)
- [ ] T010 [P] [US1] 📸 ACCOUNT ⚠️ MANUAL Capture dated screenshots for job postings 01–05 (account name visible in each frame); save to `hw01/evidence/jobs/job-01-<platform>.png` through `job-05-<platform>.png` (FR-003, anti-cheat)
- [ ] T011 [P] [US1] 📸 ACCOUNT ⚠️ MANUAL Capture dated screenshots for job postings 06–10 (account name visible in each frame); save to `hw01/evidence/jobs/job-06-<platform>.png` through `job-10-<platform>.png` (FR-003, anti-cheat)
- [ ] T012 [US1] Write Section 1.1 in `hw01/report.md` — document all 10 job postings following `contracts/job-posting-schema.md` (URL, screenshot filename, job title, company, platform, post date, required skills, salary, 1–2 sentence AI Impact Analysis) (FR-001, FR-002, FR-003)
- [ ] T013 [P] [US1] Git commit: `req1: add job postings 01-10 with screenshots and AI Impact Analysis` (FR-021)

### ISTQB Mindmap Audit — R1 (10 AI pts)

- [ ] T014 [US1] Prompt AI (Claude or ChatGPT) to generate a detailed ISTQB-based QA/QC role mindmap (roles, testing levels, testing types, process phases); log full prompt + timestamp in `hw01/ai-artifacts/prompt-log.md` (FR-017, FR-023)
- [ ] T015 [US1] ⚠️ MANUAL Save the raw AI mindmap output as `hw01/evidence/mindmap/ai-generated.png` (screenshot or exported image) (FR-017)
- [ ] T016 [US1] ⚠️ MANUAL Identify exactly 3 factual/structural mistakes in the AI-generated mindmap; cite ISTQB CTFL Syllabus v4.0 or course slides for each; create annotated `hw01/evidence/mindmap/corrected.png` marking the errors (FR-017)
- [ ] T017 [US1] Write Section 1.2 (ISTQB Mindmap Audit) in `hw01/report.md` — embed mindmap images, list 3 mistakes with ISTQB citations and corrections (FR-017)
- [ ] T018 [US1] Add Audit Report entry for the mindmap prompt to `hw01/ai-artifacts/audit-reports.md` using 5-section template: Prompt+tool+timestamp, full AI output, Verdict (VALID/INVALID/INCOMPLETE), Reasoning (cite ISTQB/slides), Student fix (annotated corrections) (FR-014)
- [ ] T019 [US1] Git commit: `req1: add ISTQB mindmap audit with 3 identified AI mistakes` (FR-021)

**Checkpoint**: Section 1.1 has 10 entries, ≥3 with AI/LLM skills, all screenshots saved. Section 1.2 has 3 mistakes with ISTQB citations. One Audit Report entry in `audit-reports.md`.

---

## Phase 4: User Story 2 — Physical Stand Fan Test Design & Execution (R3, 25 pts, Priority: P2)

**Goal**: Device declared with photo evidence → 15 ISTQB test cases (≥3 AI-missed edge cases) → ≥5 physically executed with voice-narrated videos → ≥5 defects found and logged.

**Independent Test**: Verify Section 3.1 has device declaration + photo; Section 3.2 has 15 TCs in ISTQB structure with ≥3 edge cases + AI proof screenshots; Section 3.3 has ≥5 executed TCs with YouTube links; Section 3.4 has ≥5 defects; GitHub Issues exist with correct labels.

**Points at stake**: 25 pts (15 TCs + 5 execution videos)

### Device Declaration

- [ ] T020 [US2] ⚠️ MANUAL 📸 ACCOUNT Take 1 photo of stand fan with your student ID card in the same frame (both fully visible); save to `hw01/evidence/device-photo.jpg` (FR-012, anti-cheat)
- [ ] T021 [US2] ⚠️ MANUAL Write Section 3.1 Device Declaration in `hw01/report.md` — brand, model, year, serial number (mask middle 4 chars, e.g., `KDK-F****-21`), reference `device-photo.jpg` (FR-012, FR-013)

### Test Case Design (15 TCs)

- [ ] T022 [US2] Prompt AI to suggest test cases for a stand fan (safety, performance, usability, boundary, error conditions); log full prompt + timestamp in `hw01/ai-artifacts/prompt-log.md`; save full AI response (FR-009, FR-023)
- [ ] T023 [US2] ⚠️ MANUAL Design all 15 ISTQB-structured test cases in `hw01/report.md` Section 3.2 (Objective / Input / Steps / Expected / Actual / Verdict); use AI output as raw input but verify and extend each case; apply techniques: Equivalence Partitioning, Boundary Value Analysis, Error Guessing (FR-008)
- [ ] T024 [US2] ⚠️ MANUAL Identify ≥3 edge cases the AI did NOT generate (physical-world failure modes, environmental edge cases, safety scenarios requiring hands-on intuition); capture screenshot of AI conversation proving AI missed them; write explanation of why AI missed each one; mark these TCs clearly in Section 3.2 (FR-009, FR-018)
- [ ] T025 [US2] Add Audit Report entry for AI-generated test case batch to `hw01/ai-artifacts/audit-reports.md` (single entry — one prompt = one artifact); Verdict: VALID/INVALID/INCOMPLETE; Student fix highlights added edge cases and corrections (FR-014)
- [ ] T026 [US2] Git commit: `req3: add device declaration and 15 ISTQB test cases with AI edge-case analysis` (FR-021)

### Test Execution & Defect Discovery

- [ ] T027 [US2] ⚠️ MANUAL 🎙️ VOICE Execute TC-01 on real stand fan; record ≤60s video with your voice narrating the test steps and verdict; upload to YouTube Unlisted; note link (FR-010, FR-022)
- [ ] T028 [US2] ⚠️ MANUAL 🎙️ VOICE Execute TC-02 on real stand fan; record ≤60s voice-narrated video; upload to YouTube Unlisted; note link (FR-010, FR-022)
- [ ] T029 [US2] ⚠️ MANUAL 🎙️ VOICE Execute TC-03 on real stand fan; record ≤60s voice-narrated video; upload to YouTube Unlisted; note link (FR-010, FR-022)
- [ ] T030 [US2] ⚠️ MANUAL 🎙️ VOICE Execute TC-04 on real stand fan; record ≤60s voice-narrated video; upload to YouTube Unlisted; note link (FR-010, FR-022)
- [ ] T031 [US2] ⚠️ MANUAL 🎙️ VOICE Execute TC-05 on real stand fan; record ≤60s voice-narrated video; upload to YouTube Unlisted; note link (FR-010, FR-022)
- [ ] T032 [US2] Write Section 3.3 Execution Results in `hw01/report.md` — fill in Actual/Verdict for TC-01 through TC-05; embed YouTube video links; note pass/fail status (FR-010)
- [ ] T033 [US2] ⚠️ MANUAL Document ≥5 defects discovered during execution in Section 3.4 Defect Log in `hw01/report.md` — each entry: TC reference, description, severity (ISTQB: Critical/Major/Minor/Trivial), steps to reproduce, expected vs actual, evidence link (FR-011)
- [ ] T034 [US2] ⚠️ MANUAL 📸 ACCOUNT Create GitHub Issues for each defect found: title format `[DEFECT] TC-NN: <short description>`, labels `defect`, `req3`, `severity:<level>`; include steps-to-reproduce, expected vs actual, video/photo link in body (FR-011)
- [ ] T035 [US2] ⚠️ MANUAL 📸 ACCOUNT Screenshot the GitHub Issues tab showing your GitHub username and all defect issues; save to `hw01/evidence/github-issues.png` (FR-011, anti-cheat)
- [ ] T036 [US2] Git commit: `req3: add execution results (TC-01 to TC-05), videos, and ≥5 defects` (FR-021)

**Checkpoint**: 15 TCs in Section 3.2 with ≥3 AI-missed edge cases + proof screenshots. ≥5 TCs executed with YouTube links. ≥5 defects in Section 3.4 and GitHub Issues. device-photo.jpg committed.

---

## Phase 5: User Story 3 — Software Defects Research & AI Bias Identification (R2, 20 pts, Priority: P3)

**Goal**: 20 real software defects (2022–2026) documented with source links, descriptions, severity, consequences, solutions — each with 1 identified AI bias/hallucination instance.

**Independent Test**: Verify 20 defect entries in Section 2; ≥5 are AI/LLM-related; each entry has 1 documented AI bias/hallucination instance; source links are active.

**Points at stake**: 20 pts (20 defects × 1 pt each)

### Defect Research

- [ ] T037 [US3] Research 20 software defects from CVE/NVD, MITRE CVE, The Register, Wired, Ars Technica, VnExpress Tech — filter to 2022–2026; ensure ≥5 are AI/LLM-related (hallucination, prompt injection, bias); record source URLs and publication dates (FR-004, FR-005)

### Defect Documentation

- [ ] T038 [P] [US3] Write defect entries 01–10 in `hw01/report.md` Section 2 following `contracts/defect-entry-schema.md` — each entry: source link, description, severity (ISTQB levels), consequences, solution (FR-004, FR-006)
- [ ] T039 [P] [US3] Write defect entries 11–20 in `hw01/report.md` Section 2 following `contracts/defect-entry-schema.md` — each entry: source link, description, severity (ISTQB levels), consequences, solution (FR-004, FR-006)
- [ ] T040 [US3] Git commit: `req2: add 20 software defect entries with sources and severity classification` (FR-021)

### AI Bias Identification (20 instances)

- [ ] T041 [P] [US3] For defects 01–10: query AI (Claude/ChatGPT) to explain each defect; identify exactly 1 instance of AI bias or hallucination per defect (e.g., wrong CVE date, inflated severity, incorrect root cause); log each prompt in `hw01/ai-artifacts/prompt-log.md` with timestamp (FR-007, FR-023)
- [ ] T042 [P] [US3] For defects 11–20: query AI to explain each defect; identify exactly 1 AI bias/hallucination instance per defect; log each prompt with timestamp in `hw01/ai-artifacts/prompt-log.md` (FR-007, FR-023)
- [ ] T043 [US3] Add identified AI bias/hallucination finding to each of the 20 defect entries in `hw01/report.md` Section 2 — append subsection: "AI Bias Found: [description of what AI got wrong and why]" (FR-007)
- [ ] T044 [US3] Git commit: `req2: add 20 AI bias identification instances to defect entries` (FR-021)

**Checkpoint**: 20 defect entries in Section 2; each has source link + severity + AI bias finding; ≥5 are AI/LLM-related; `prompt-log.md` has ≥20 timestamped defect-explanation entries.

---

## Phase 6: User Story 4 — AI Compliance & Cross-Cutting Artifacts (AI pts, Priority: P4)

**Goal**: All AI Audit Reports complete, mandatory disclosure written, ONE 200–300 word critique paragraph, accuracy ratio calculated, templates [AI-02]/[AI-03]/[AI-05] filled and committed.

**Independent Test**: Verify every AI-generated artifact in the report has a corresponding entry in `audit-reports.md`; critique is exactly 200–300 words; accuracy ratio percentages sum to 100%; disclosure statement is present; prompt-log has timestamps for every AI use.

**Points at stake**: 15 pts (AI-1: 8 pts Audit Reports, AI-2: 4 pts critique + disclosure, AI-3: 3 pts checklist + anti-cheat)

### Audit Reports Completeness

- [ ] T045 [US4] Review `hw01/ai-artifacts/audit-reports.md` — cross-check against all sections of `hw01/report.md` to confirm every AI-generated artifact (mindmap, test case batch, defect explanations, any other AI output) has a complete 5-section entry; add any missing entries (FR-014)

### AI Critique & Accuracy Summary

- [ ] T046 [US4] Write Section 4.1 AI Critique in `hw01/report.md` — exactly ONE paragraph, 200–300 words (count precisely); must address: where AI got it wrong/biased/incomplete, WHY it failed, and the principle(s) learned for AI collaboration on this HW (FR-015)
- [ ] T047 [US4] Count VALID/INVALID/INCOMPLETE verdicts across all Audit Report entries; write Section 4.2 AI Accuracy Summary in `hw01/report.md` — include percentage breakdown and 2–3 sentence conclusion: WHEN should AI be used vs. not used for this type of work (FR-019)

### Disclosure Statement & Templates

- [ ] T048 [US4] Write Section 4.3 Mandatory Disclosure in `hw01/report.md` using the standard template: name every AI tool used, sections it generated, what you reviewed/modified, what was written entirely by you; reference Appendix A (FR-016)
- [ ] T049 [P] [US4] Fill out [AI-02] AI Audit Report template form (from `hw01/evidence/AI-02-blank.md`); signed/completed copy to `hw01/evidence/AI-02-audit-report.md` (FR-024)
- [ ] T050 [P] [US4] Fill out [AI-03] AI Disclosure Form (from `hw01/evidence/AI-03-blank.md`); signed copy to `hw01/evidence/AI-03-disclosure.md` (FR-024)
- [ ] T051 [P] [US4] Fill out [AI-05] Privacy & Responsible Use Checklist (from `hw01/evidence/AI-05-blank.md`); signed copy to `hw01/evidence/AI-05-checklist.md` (FR-024)

### Prompt Log Verification

- [ ] T052 [US4] ⚠️ MANUAL Audit `hw01/ai-artifacts/prompt-log.md` — verify there is a timestamped entry for EVERY AI prompt sent throughout the entire report (R1 mindmap, R2 defect queries, R3 test case generation, any drafting assistance); add any missing entries before final commit (FR-023, anti-cheat)

- [ ] T053 [US4] Git commit: `ai: add audit reports, critique, accuracy summary, disclosure, AI templates` (FR-021)

**Checkpoint**: `audit-reports.md` has one entry per AI-generated artifact. Section 4.1 critique is 200–300 words. Section 4.2 has VALID/INVALID/INCOMPLETE percentages. Section 4.3 disclosure is present. Templates AI-02, AI-03, AI-05 committed. `prompt-log.md` has all timestamped entries.

---

## Phase 7: Final Submission — Self-Assessment, Export, & Packaging

**Purpose**: Verify completeness, export PDF, package zip, final commit.

- [ ] T054 Self-assessment: run through all checklist items in `specs/001-hw01-qa-testing/checklists/requirements.md` and `checklists/validation.md`; confirm every FR-001 through FR-026 is satisfied; document any gaps; write Section 5 Self-Assessment table in `hw01/report.md` filling in self-assessed grade for all 6 rubric criteria (Job Market 40 pts, Software Defects 20 pts, Physical-product test design 25 pts, AI-1 8 pts, AI-2 4 pts, AI-3 3 pts) with brief per-criterion justification (FR-001–FR-026)
- [ ] T055 ⚠️ MANUAL Oral defense prep: ensure you can (a) demo any of the 15 test cases live on your machine/device, (b) explain the reasoning behind each test input choice, (c) point out at least 1 specific AI mistake you identified and corrected — these are the oral defense question types (FR-025)
- [ ] T056 Export PDF: run `pandoc hw01/report.md -o hw01/report.pdf` (fallback: VS Code Markdown PDF extension); verify PDF renders all sections, images, and tables correctly; document Pandoc version in report cover page (FR-020)
- [ ] T057 Package submission zip: create `StudentID_HW01_AI_<grade>.zip` containing `hw01/report.pdf`, `hw01/ai-artifacts/`, `hw01/evidence/`, GitHub repository URL in a `README-submission.txt` (FR-020)
- [ ] T058 Final git commit: `chore: final submission — report.pdf exported, all artifacts committed` (FR-021)

**Checkpoint**: All 26 FRs verified. `hw01/report.pdf` committed. Submission zip ready for Moodle upload. Repository URL noted.

---

## Dependency Graph

```
Phase 1 (T001–T006)
    └── Phase 2 (T007–T008)
            ├── Phase 3 US1/R1 (T009–T019)  ← Start here for 40 pts
            ├── Phase 4 US2/R3 (T020–T036)  ← Requires physical device session
            └── Phase 5 US3/R2 (T037–T044)  ← Can run parallel to Phase 4

Phase 3 + Phase 4 + Phase 5 complete
    └── Phase 6 US4/AI (T045–T053)  ← Cross-cutting, requires all content done
            └── Phase 7 Submission (T054–T058)
```

**Story completion order**: US1 (R1) → US2 (R3) + US3 (R2) [parallel] → US4 (AI) → Submission

**Parallel opportunities within each phase**:

- Phase 3: T010 ∥ T011 (screenshots 01–05 vs 06–10)
- Phase 5: T038 ∥ T039 (defects 01–10 vs 11–20); T041 ∥ T042 (AI queries 01–10 vs 11–20)
- Phase 6: T049 ∥ T050 ∥ T051 (template forms are independent)

---

## Manual / Physical Tasks Summary

> These tasks CANNOT be delegated to an AI agent. The student must execute them personally. TA grading checks these artifacts for authenticity.

| Task       | Reason                                                         | Anti-cheat Check                          |
| ---------- | -------------------------------------------------------------- | ----------------------------------------- |
| T009       | Job platform search with account login                         | Account name in screenshot                |
| T010, T011 | Job screenshot capture (10 images)                             | Account name visible in each image        |
| T015       | Save AI mindmap output as image                                | Needs human screenshot of AI tool         |
| T016       | Annotate mindmap with corrections                              | Human judgment on ISTQB errors            |
| T020       | Device photo with student ID card                              | Photo authenticity (physical ID in frame) |
| T021       | Record device serial number                                    | Physical inspection of device             |
| T023       | Design 15 test cases with device knowledge                     | Physical-world intuition required         |
| T024       | Identify AI-missed edge cases                                  | Human critical analysis                   |
| T027–T031  | Execute 5 test cases on real device                            | Physical execution required               |
| T031       | Execute TC-05 on real device with voice narration              | Physical execution + voice required       |
| T033       | Document ≥5 defects discovered during execution in Section 3.4 | Physical execution required               |
| T034, T035 | Create and screenshot GitHub Issues                            | GitHub account name visible               |
| T052       | Audit and complete prompt log                                  | Honest timestamped record                 |
| T055       | Oral defense preparation                                       | Live demo readiness                       |

---

## Implementation Strategy

**MVP Scope (Phase 3 only)**: Complete US1/R1 first — 40 pts, no physical device needed, can be done entirely with a laptop. Establishes the report structure and AI workflow patterns used in every subsequent phase.

**Incremental delivery**:

1. **Session 1** (~2h): Phases 1–2 + Phase 3 (US1/R1 — all job postings + mindmap audit)
2. **Session 2** (~2h): Phase 4 (US2/R3 — physical device required; bring student ID card and fan)
3. **Session 3** (~1h): Phase 5 (US3/R2 — desktop research)
4. **Session 4** (~1h): Phase 6–7 (AI compliance review + PDF export + packaging)

**Critical path**: T020 (device photo) and T027–T031 (video recordings) require the physical device and a quiet space for voice narration — schedule these for Session 2 in one uninterrupted block.
