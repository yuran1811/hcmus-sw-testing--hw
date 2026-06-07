# Data Model: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Branch**: `001-hw01-qa-testing` | **Date**: 2026-05-31

Defines the schema for every entity type produced in this assignment. These are the canonical formats — all report sections must conform to them.

---

## Entity 1: Job Posting (R1)

Used in: `hw01/report.md` Section 1.1 — 10 entries required

```markdown
### Job-NN: <Job Title> at <Company>

| Field              | Value                                          |
| ------------------ | ---------------------------------------------- |
| **Platform**       | LinkedIn / TopCV / ITviec / Glassdoor / Indeed |
| **URL**            | <working link>                                 |
| **Published Date** | YYYY-MM-DD                                     |
| **Screenshot**     | [view](../evidence/jobs/job-NN-<platform>.png) |
| **Location**       | <city, country> / Remote                       |
| **Salary**         | <range or "Not disclosed">                     |

**Required Skills**:

- <Skill 1>
- <Skill 2>
- ...

**AI/LLM Skills Required**: Yes / No  
_(If Yes: quote the exact phrase from the posting)_

**Job Description Summary** (3–5 sentences):

<summary>

**AI Impact Analysis** (1–2 sentences):
<analysis — how AI is changing this role or what AI tools are mentioned>
```

**Validation rules**:

- `Published Date` must be within 60 days of the submission deadline
- Screenshot filename must follow `job-NN-<platform>.png` (e.g., `job-01-linkedin.png`)
- Screenshot must visibly show the student's account name/username
- At least 3 of 10 entries must have `AI/LLM Skills Required: Yes`
- `Salary` cannot be blank — if not disclosed, say "Not disclosed"

---

## Entity 2: ISTQB Mindmap Audit (R1)

Used in: `hw01/report.md` Section 1.2 — 1 entry required

```markdown
## 1.2 ISTQB Mindmap Audit

**Prompt sent to AI**: "<full prompt text>"
**Tool + Timestamp**: Claude / ChatGPT — HH:MM DD/MM/YYYY

**AI-Generated Mindmap**: [view AI output](../evidence/mindmap/ai-generated.png)

**Corrected Mindmap**: [view correction](../evidence/mindmap/corrected.png)

### Identified Mistakes

| #   | Mistake Description | Why It Is Wrong | ISTQB/Course Citation             |
| --- | ------------------- | --------------- | --------------------------------- |
| M1  | <AI's claim>        | <why incorrect> | <ISTQB CTFL v4.0 §X.X or slide N> |
| M2  | <AI's claim>        | <why incorrect> | <citation>                        |
| M3  | <AI's claim>        | <why incorrect> | <citation>                        |

**AI Audit Report**: see [Appendix A — Audit Entry: Mindmap](../ai-artifacts/audit-reports.md#mindmap)
```

---

## Entity 3: Software Defect (R2)

Used in: `hw01/report.md` Section 2 — 20 entries required

```markdown
### Defect-NN: <Defect Name / CVE ID>

| Field               | Value                                               |
| ------------------- | --------------------------------------------------- |
| **Year Publicized** | 20XX                                                |
| **Source URL**      | <link>                                              |
| **Affected System** | <software/system name>                              |
| **Severity**        | Critical / Major / Minor / Trivial                  |
| **Type**            | AI/LLM / Security / Performance / UI / Data / Other |

**Description** (2–3 sentences):
<what happened>

**Consequences**:
<impact — data loss, financial damage, security breach, etc.>

**Solution / Fix**:
<how it was resolved or mitigated>

**AI Bias / Hallucination Identified**:

- **Prompt sent**: "<prompt asking AI to explain this defect>"
- **Tool**: Claude / ChatGPT
- **Bias observed**: <describe — hallucinated CVE score / wrong root cause / denied severity / fabricated fix details>
- **Correct information**: <cite the actual source>
```

**Validation rules**:

- Year must be 2022–2026
- Source URL must be publicly accessible (CVE database, news article, vendor advisory)
- Severity must use ISTQB categories (Critical/Major/Minor/Trivial)
- At least 5 of 20 entries must have `Type: AI/LLM`
- Every entry must have an `AI Bias / Hallucination Identified` block — no exceptions

---

## Entity 4: ISTQB Test Case (R3)

Used in: `hw01/report.md` Section 3.2 — 15 entries required

```markdown
### TC-NN: <Test Case Title>

| Field                   | Value                                                                             |
| ----------------------- | --------------------------------------------------------------------------------- |
| **ID**                  | TC-NN                                                                             |
| **Requirement Traced**  | <manufacturer spec / safety standard / user expectation>                          |
| **Design Technique**    | Equivalence Partitioning / Boundary Value Analysis / Error Guessing / Exploratory |
| **AI-Missed Edge Case** | Yes / No                                                                          |
| **Executed**            | Yes / No                                                                          |
| **Video**               | [▶ Watch](https://youtu.be/...) _(if executed)_                                   |

**Objective**: <one sentence stating what this test verifies>

**Preconditions / Input**:

- Fan state: <off/speed-1/speed-2/speed-3/oscillating/static>
- Environment: <room conditions, any special setup>
- <any other precondition>

**Test Steps**:

1. <Step 1>
2. <Step 2>
3. ...

**Expected Result**:
<what SHOULD happen per manufacturer spec or safety standard>

**Actual Result** _(fill at execution time)_:
<what DID happen — or "Not executed" if no video>

**Verdict**: PASS / FAIL / BLOCKED / Not executed

**Defect Reference** _(if FAIL)_: [DEFECT] TC-NN: <issue link>
```

**Validation rules**:

- All 7 fields (Objective / Input / Steps / Expected / Actual / Verdict) must be present
- `Design Technique` must be stated for each test case
- At least 3 entries must have `AI-Missed Edge Case: Yes` (with proof in Section 3.2 notes)
- At least 5 entries must have `Executed: Yes` with a valid YouTube Unlisted link
- `Actual Result` and `Verdict` are "Not executed" only for non-executed test cases

---

## Entity 5: Physical Defect Report (R3)

Used in: `hw01/report.md` Section 3.4 — ≥5 entries required

```markdown
### Defect-R3-NN: <Short Description>

| Field                | Value                              |
| -------------------- | ---------------------------------- |
| **Linked Test Case** | TC-NN                              |
| **Severity**         | Critical / Major / Minor / Trivial |
| **Reproducible**     | Yes / No / Intermittent            |
| **GitHub Issue**     | [#NN](issue-url)                   |

**Steps to Reproduce**:

1. <step>
2. <step>

**Expected Behavior**: <per manufacturer spec or user expectation>

**Actual Behavior**: <what was observed>

**Evidence**: [video frame / screenshot](link)
```

---

## Entity 6: AI Audit Report Entry

Used in: `hw01/ai-artifacts/audit-reports.md` — one entry per AI-generated artifact batch

```markdown
## Audit-NN: <Artifact Description>

**Anchor ID**: `#audit-NN-<slug>` _(used for cross-referencing from report sections)_

| Field                 | Value                                                     |
| --------------------- | --------------------------------------------------------- |
| **(1) Prompt + Tool** | Full prompt text + tool name + timestamp HH:MM DD/MM/YYYY |
| **(2) AI Output**     | Full output pasted below (or screenshot link)             |
| **(3) Verdict**       | VALID / INVALID / INCOMPLETE                              |
| **(4) Reasoning**     | 2–5 sentences citing ISTQB §X.X or course slide N         |
| **(5) Student Fix**   | Corrected artifact — highlighted changes                  |

---

### (2) Full AI Output

<paste AI response verbatim, or: ![AI output screenshot](../evidence/...png)>

### (5) Student Fix (Corrected Artifact)

<paste corrected version; use `~~strikethrough~~` for removed text, **bold** for additions>
```

---

## Entity 7: Prompt Log Entry

Used in: `hw01/ai-artifacts/prompt-log.md` — append-only, every AI prompt

```markdown
## [HH:MM DD/MM/YYYY] — <purpose in 5 words>

**Tool**: Claude / ChatGPT  
**Requirement scope**: R1 / R2 / R3 / Cross-cutting  
**Prompt**:

> <full prompt text>

**Response summary**: <1 sentence — what AI returned; full response in audit-reports.md if applicable>
**Audit Report**: Audit-NN _(if applicable)_
```

---

## Traceability Matrix

| Functional Requirement | Entity / Section             | Evidence Location                            |
| ---------------------- | ---------------------------- | -------------------------------------------- |
| FR-001–003             | Job Posting (×10)            | Section 1.1 + `evidence/jobs/`               |
| FR-017                 | ISTQB Mindmap Audit          | Section 1.2 + `evidence/mindmap/`            |
| FR-004–007             | Software Defect (×20)        | Section 2                                    |
| FR-008–009             | ISTQB Test Case (×15)        | Section 3.2                                  |
| FR-010                 | Executed TCs (≥5) + videos   | Section 3.3 + YouTube links                  |
| FR-011                 | Physical Defect Report (≥5)  | Section 3.4 + GitHub Issues                  |
| FR-012–013             | Device Declaration           | Section 3.1 + `evidence/device-photo.jpg`    |
| FR-014                 | AI Audit Report Entry        | `ai-artifacts/audit-reports.md` + Appendix A |
| FR-015                 | AI Critique paragraph        | Section 4.1                                  |
| FR-016                 | Disclosure Statement         | Section 4.3                                  |
| FR-019                 | AI Accuracy Summary          | Section 4.2                                  |
| FR-022–023             | Prompt Log + voice narration | `ai-artifacts/prompt-log.md` + video audio   |
| FR-024                 | [AI-02] [AI-03] attached     | Appendix B + C                               |
| FR-025                 | Oral defense prep            | quickstart.md §5                             |
