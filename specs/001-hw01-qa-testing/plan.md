# Implementation Plan: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Branch**: `001-hw01-qa-testing` | **Date**: 2026-05-31 | **Spec**: [specs/001-hw01-qa-testing/spec.md](spec.md)

**Input**: Feature specification from `specs/001-hw01-qa-testing/spec.md`

## Summary

HW01 is a **documentation/research assignment** (not a software project). The deliverable is a comprehensive report (`hw01/report.md`) demonstrating QA/QC competency across three requirements: job market analysis (R1, 40 pts), software defects research (R2, 20 pts), and physical stand fan test design + execution (R3, 25 pts), plus AI compliance (15 pts). The "implementation" means producing evidence-backed Markdown artifacts with AI Audit Reports for every AI-generated artifact.

**Authoring stack**: Markdown → PDF via Pandoc | **Version control**: Git, one commit per logical step | **AI tools**: Claude (primary), ChatGPT (secondary) — both declared.

## Technical Context

**Document Format**: Markdown (primary), PDF via Pandoc (export)

**Report Platform**: Git-versioned Markdown in `hw01/report.md`; PDF from `pandoc hw01/report.md -o hw01/report.pdf`

**Research Platforms**:
- Job postings: LinkedIn, TopCV (Vietnamese market), ITviec, Glassdoor, Indeed
- Defect databases: CVE/NVD (https://nvd.nist.gov), MITRE CVE (https://cve.mitre.org), The Register, Wired, Ars Technica, VnExpress Tech

**AI Tools**:
- Primary: Claude (Anthropic) — declare version in each Audit Report
- Secondary: ChatGPT — for cross-validation and deliberate hallucination probing

**Screenshot Tool**: macOS native screenshot (Cmd+Shift+4) or browser screenshot

**Video Recording**: Smartphone camera; upload to YouTube Unlisted (≤60s per clip)

**Bug Tracking**: GitHub Issues on this repository (replaces Mantis for HW01)

**Test Methodology**: ISTQB standard — Equivalence Partitioning, Boundary Value Analysis, Error Guessing, Exploratory Testing

**Physical Device**: Stand fan (brand/model/serial declared at test time)

**Constraints**:
- Job postings: published within 60 days of submission deadline
- Defects: publicized 2022–2026
- Videos: ≤60s each, must contain student voice narration
- AI critique: exactly ONE 200–300 word paragraph total
- Submission zip: `StudentID_HW01_AI_<grade>.zip`

**Scale/Scope**:
- 10 job postings | 20 defects | 15 test cases | ≥5 executed tests | ≥5 defects found
- ≥3 AI bias instances per defect (20 total) | ≥3 AI-missed edge cases | 1 ISTQB mindmap audit

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| # | Principle | Gate Condition | Status |
|---|-----------|---------------|--------|
| I | Evidence-Based Documentation | Every job posting, defect, and test result has a working URL + dated screenshot showing student account name | ✅ PASS — plan mandates source links and account-name screenshots for all R1/R2 artifacts |
| II | AI-Augmented with Critical Evaluation | Every AI-generated artifact has a 5-section Audit Report; 20 AI bias instances documented; ONE 200–300 word critique; disclosure statement present | ✅ PASS — `hw01/ai-artifacts/audit-reports.md` and `prompt-log.md` are first-class deliverables |
| III | ISTQB-Aligned Testing Methodology | All 15 test cases follow Objective/Input/Steps/Expected/Actual/Verdict structure; design techniques identified; traceability table present | ✅ PASS — data-model.md locks the test case schema; quickstart.md cross-references ISTQB |
| IV | Markdown-First, Git-Versioned | Report in `hw01/report.md`; PDF export committed; commit per logical step with `req1:`, `req2:`, `req3:` prefixes | ✅ PASS — no proprietary formats; commit conventions defined in this plan |
| V | Physical Product Testing Focus | ≥5 test cases physically executed; ≥5 defects discovered; ≥3 AI-missed edge cases with proof; voice-narrated videos; device photo with student ID card | ✅ PASS — R3 workflow requires real device execution before any commit for that section |

**Constitution Check Result**: All 5 gates PASS. No violations to justify. Proceed to Phase 0.

## Project Structure

### Specification artifacts

```text
specs/001-hw01-qa-testing/
├── plan.md          ← this file (Phase 0+1 output)
├── research.md      ← Phase 0: resolved unknowns + source decisions
├── data-model.md    ← Phase 1: entity schemas for every deliverable type
├── quickstart.md    ← Phase 1: step-by-step execution guide
├── contracts/
│   ├── job-posting-schema.md      ← R1 entry format contract
│   ├── defect-entry-schema.md     ← R2 entry format contract
│   ├── test-case-schema.md        ← R3 ISTQB test case contract
│   └── ai-audit-schema.md         ← cross-cutting AI Audit Report contract
└── tasks.md         ← Phase 2 output (/speckit.tasks — NOT created here)
```

### Report deliverables (repository root)

```text
hw01/
├── report.md                    ← primary deliverable (all sections)
├── report.pdf                   ← Pandoc export (committed at submission)
├── ai-artifacts/
│   ├── prompt-log.md            ← append-only, timestamped (anti-cheat)
│   └── audit-reports.md         ← 5-section AI Audit Reports (one entry per artifact)
└── evidence/
    ├── device-photo.jpg          ← stand fan + student ID card (anti-cheat)
    ├── jobs/                     ← R1 job posting screenshots (10 files)
    │   └── job-NN-<platform>.png
    ├── mindmap/
    │   ├── ai-generated.png      ← raw AI mindmap output
    │   └── corrected.png         ← annotated with 3 identified mistakes
    └── videos/                   ← R3 execution recordings (YouTube links in report)
        └── tc-NN-<description>.mp4  (local backup; primary = YouTube Unlisted)
```

### Report sections outline

```text
hw01/report.md
├── Cover Page           (student info, date, tools declared)
├── Section 1 — R1: QA/QC Job Market 2026+
│   ├── 1.1 Job Postings (10 entries, FR-001–003)
│   └── 1.2 ISTQB Mindmap Audit (FR-017)
├── Section 2 — R2: 20 Software Defects 2022–2026
│   └── 2.x Defect entries 1–20 (FR-004–007)
├── Section 3 — R3: Stand Fan Test Design & Execution
│   ├── 3.1 Device Declaration (FR-012–013)
│   ├── 3.2 Test Cases 1–15 (FR-008–009)
│   ├── 3.3 Execution Results & Videos (FR-010)
│   └── 3.4 Defect Log (FR-011)
├── Section 4 — AI Collaboration
│   ├── 4.1 AI Critique (FR-015, 200–300 words)
│   ├── 4.2 AI Accuracy Summary (FR-019)
│   └── 4.3 Mandatory Disclosure (FR-016)
├── Section 5 — Self-Assessment
│   └── Rubric table with self-assessed grades per criterion (FR-026)
├── Appendix A — AI Audit Reports [AI-02]  (FR-014, FR-024)
├── Appendix B — AI Disclosure Form [AI-03] (FR-024)
├── Appendix C — AI Privacy Checklist [AI-05]
└── Appendix D — Prompt Log (FR-023)
```

**Structure Decision**: Single `hw01/` directory — documentation project with no source code. All evidence is file-based (screenshots, videos, Markdown). No `src/` or `tests/` directories needed.

## Git Commit Convention

| Prefix | Scope | Example |
|--------|-------|---------|
| `req1:` | R1 job postings | `req1: add job postings 1-5 with screenshots` |
| `req1:` | R1 mindmap audit | `req1: add ISTQB mindmap AI audit with 3 corrections` |
| `req2:` | R2 defects | `req2: document defects 1-10 with AI bias analysis` |
| `req3:` | R3 test cases | `req3: design 15 ISTQB test cases for stand fan` |
| `req3:` | R3 execution | `req3: add execution results for TC-01 to TC-05 with video links` |
| `ai-audit:` | Audit reports | `ai-audit: add audit reports for R1 AI artifacts` |
| `chore:` | Infrastructure | `chore: add directory structure and report skeleton` |

## Grading Traceability

| Points | Requirement | Key Deliverables | FRs |
|--------|-------------|-----------------|-----|
| 30 | R1 — 10 job postings × 3 pts | 10 entries with URL, screenshot, description, skills, salary, AI impact | FR-001–003 |
| 10 | R1 — AI Impact + mindmap audit | ≥3 AI-skill jobs; ISTQB mindmap with 3 corrected mistakes | FR-002, FR-017 |
| 20 | R2 — 20 defects × 1 pt | 20 entries; ≥5 AI/LLM; 1 AI bias per entry (20 total) | FR-004–007 |
| 25 | R3 — test design + execution | 15 ISTQB TCs; ≥3 AI-missed edge cases; ≥5 videos; ≥5 defects | FR-008–011 |
| 8  | AI-1 — Audit Reports | 5-section report per AI-generated artifact | FR-014 |
| 4  | AI-2 — Critique + Disclosure | ONE 200–300 word paragraph + [AI-03] signed | FR-015–016 |
| 3  | AI-3 — Checklist + anti-cheat | [AI-05] signed + device photo + voice narration + account screenshots | FR-012, FR-022–025 |
| **100** | **Total** | | |
