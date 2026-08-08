# AI Audit Report and Declaration

**Student ID:** 23127065  
**Assignment:** HW06 – API Testing  
**Date:** 2026-08-08

## Tools declared

| Tool | Purpose | Output used |
|---|---|---|
| OpenAI Codex (GPT-5 family coding agent) | rubric decomposition, test design, implementation, audit drafting, local verification | all generated source/report drafts in this folder |
| Context7 | retrieve current Postman and Newman documentation | collection header/schema/data/report/CI decisions |
| pdfplumber 0.11.8 | extract the eight-page requirement PDF | requirement checklist and deliverable map |
| Postman Collection v2.1 / Newman 6.2.2 | execute API cases | CLI, JSON, JUnit, HTML evidence |
| newman-reporter-htmlextra 1.23.1 | HTML report export | `newman/reports/*/index.html` |

## Interaction log

| No. | Actor/tool | Prompt or operation | Result used | Human verification required |
|---:|---|---|---|---|
| 1 | Student → Codex | “from hw06/docs/requirement.pdf, finish the requirements and verify the submission until meet all requirements and rules. my student id: 23127065. no need to pack to zip, and notice me all of where need human fill in. use context7” | Defined task scope and student ID | Confirm this quotation and scope |
| 2 | Codex → pdfplumber | Extract every page of `hw06/docs/requirement.pdf`, especially Requirements and Submission Structure | Three-API, ≥35+5, audit, Postman/Newman, CI, Agent Skill, PDF/MD, issue/screenshot rules | Compare with original PDF |
| 3 | Codex → code knowledge graph | Locate real login, checkout, and admin order-status routes and compare them with `api_specification.md` | Selected one endpoint per pool; discovered implementation/spec discrepancies | Review endpoint uniqueness with group |
| 4 | Codex → Context7/Postman | Current collection pre-request headers, data/environment variables, JSON schema testing | `X-Student-Id` collection script and assertion patterns | Import collection and inspect scripts |
| 5 | Codex → Context7/Newman | Current CLI data/environment, multiple reporters, JUnit, and CI failure behavior | Pinned reproducible Newman commands and CI design | Check commands on student machine |
| 6 | Codex self-directed stage | Generate domain partitions for every request parameter | 105 AI-origin candidates in workbook | Audit every case as VALID/INVALID/INCOMPLETE |
| 7 | Codex self-directed stage | Add security, state-machine, and schema coverage; correct invalid/incomplete candidates | Final executable expectations and traceability | Accept/correct audit reasoning |
| 8 | Codex self-directed stage | Draft five additional missed-risk cases per API | 15 rows labeled `Student-extension draft (HUMAN REQUIRED)` | Student must rewrite/own these cases |
| 9 | Codex → local tools | Generate workbook, JSON data, collection, environment, reusable skill | Machine-readable submission assets | Inspect generated files |
| 10 | Codex → Newman | Run 3 × 40 data-driven cases against isolated exact SUT revision | 267 assertions; 217 passed; 50 failed | Verify report totals and screenshots |
| 11 | Codex analysis | Consolidate failures by root cause | Seven draft genuine defect reports | Reproduce, create public issues, attach screenshots |
| 12 | Codex drafting | Draft reports, CI workflow, skill pseudocode, and human checklist | Markdown/PDF source artifacts | Student critique, declaration, diagram, links |

## AI output audit

The AI-origin matrix contains 105 candidates. Initial labels were 102 `VALID`, two `INVALID`, and one `INCOMPLETE`; the non-valid candidates retain the reason and corrected final version. Those labels are AI-assisted judgments, not proof of human review. The 15 extension rows are intentionally not described as completed student work.

The observed Newman totals were read from raw JSON, not estimated: login 90 assertions/20 failed; checkout 91/26; order status 86/4. Seven defects were inferred by grouping repeated symptoms by endpoint and root cause. Public issues and screenshots are not yet claimed.

## Declaration

I understand that I am responsible for every submitted case, expected result, defect report, and interpretation. I confirm that I reviewed the AI output, corrected it where necessary, supplied my own extension reasoning, and did not submit fabricated human evidence.

- Student name: `TODO(HUMAN)`
- Student ID: 23127065
- Review completed on: `TODO(HUMAN)`
- Signature/acceptance: `TODO(HUMAN): type “I accept” and sign according to course rules`
