# Feature Specification: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Feature Branch**: `001-hw01-qa-testing`

**Created**: 2026-05-31

**Status**: Draft

**Input**: User description: "Create a comprehensive Software Testing HW01 report covering QA/QC job market analysis, 20 real-world software defects documentation, and physical stand fan testing with ISTQB methodology. All artifacts must include AI Audit Reports demonstrating critical evaluation of AI-generated content."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - QA/QC Job Market Research & Analysis (Priority: P1)

As a software testing student, I research and analyze 10 real QA/QC job postings from the current market (published within 60 days of submission) to understand how AI is transforming QA/QC roles and what skills employers demand in 2026+.

**Why this priority**: This requirement carries the highest weight (40 pts, broken down as: 10 jobs × 3 pts = 30 pts base content + 10 pts AI Impact sub-component including ISTQB mindmap audit) and establishes the foundation for understanding the QA/QC profession. It demonstrates the student's ability to research, analyze, and synthesize real-world job market data with critical AI evaluation.

**Independent Test**: Can be fully tested by verifying that 10 job postings are documented with all required fields (link, screenshot, description, skills, salary, AI Impact Analysis), that at least 3 postings explicitly require AI/LLM/automation-AI skills, and that the ISTQB mindmap audit identifies exactly 3 AI mistakes with citations.

**Acceptance Scenarios**:

1. **Given** the student has access to job posting platforms, **When** they collect 10 QA/QC job postings published within 60 days of submission, **Then** each posting includes: a working URL, a dated screenshot showing the student's account name, job description, required skills list, salary information, and a 1-2 sentence AI Impact Analysis.
2. **Given** 10 job postings are collected, **When** reviewing the set for AI-skill coverage, **Then** at least 3 postings explicitly require AI/LLM/automation-AI skills (e.g., prompt engineering for testing, AI-assisted test generation, LLM-based automation).
3. **Given** AI tools are used during research or analysis, **When** an AI-generated artifact is produced, **Then** a complete AI Audit Report (5-section template) accompanies it with a VALID/INVALID/INCOMPLETE verdict and student correction.
4. **Given** the student needs to demonstrate understanding of QA/QC roles (CLO G9.1), **When** they ask an AI tool to generate an ISTQB-based QA/QC role mindmap, **Then** the student identifies exactly 3 mistakes in the AI-generated mindmap with reasoning that cites course materials or ISTQB standards.

---

### User Story 2 - Physical Stand Fan Test Design & Execution (Priority: P2)

As a software testing student, I apply ISTQB testing methodology to design 15 test cases for a specific stand fan, execute at least 5 of them on the real device with video evidence, and discover at least 5 defects — proving I can apply testing principles to physical products.

**Why this priority**: Per the AI-first rubric, R3 content scores 25 pts (with 15 pts allocated separately to AI compliance across all requirements). This is the most hands-on requirement, requiring physical test execution, video recording, and defect discovery. It uniquely demonstrates the student's ability to apply testing theory to tangible products and find edge cases that AI cannot.

**Independent Test**: Can be fully tested by verifying 15 ISTQB-structured test cases exist (with ≥3 AI-missed edge cases), at least 5 are executed with video recordings (≤60s each), at least 5 defects are documented, and 1 photo shows the device with student ID card.

**Acceptance Scenarios**:

1. **Given** a specific stand fan is available for testing, **When** the student designs test cases, **Then** 15 test cases following ISTQB structure (Objective / Input / Steps / Expected / Actual / Verdict) are produced.
2. **Given** 15 test cases exist, **When** reviewing for edge case coverage, **Then** at least 3 test cases are edge cases that AI tools cannot find, each accompanied by a screenshot of AI conversation and a written explanation of why AI missed them.
3. **Given** test cases are designed, **When** executing tests on the real device, **Then** at least 5 test cases are physically executed with video recordings (≤60s each) and at least 5 defects are discovered and documented.
4. **Given** a physical device is used, **When** documenting the test setup, **Then** 1 photo shows the stand fan with the student ID card in the same frame, and the brand, model, year, and serial number (masked) are declared.

---

### User Story 3 - Software Defects Research & AI Bias Identification (Priority: P3)

As a software testing student, I research and document 20 real software defects publicized between 2022–2026 to understand real-world software failures, and for each defect I identify where AI tools are biased or hallucinate when explaining it.

**Why this priority**: This requirement (20 pts) builds research and critical thinking skills. It uniquely combines defect analysis with AI evaluation — requiring the student to identify 20 instances of AI bias/hallucination across the defect explanations.

**Independent Test**: Can be fully tested by verifying 20 defects are documented with source links, descriptions, severity, consequences, and solutions; at least 5 are AI/LLM-related (hallucination, prompt injection, bias); and each of the 20 defects has 1 identified AI bias/hallucination instance (20 total).

**Acceptance Scenarios**:

1. **Given** access to software defect databases and news sources, **When** the student documents defects, **Then** 20 software defects publicized between 2022–2026 are recorded with: source link, description, severity, consequences, and solution.
2. **Given** 20 defects are documented, **When** reviewing for AI/LLM coverage, **Then** at least 5 defects are related to AI/LLM issues (hallucination, prompt injection, bias).
3. **Given** 20 defects are documented, **When** the student queries AI tools to explain each defect, **Then** for each of the 20 defects, exactly 1 instance of AI bias or hallucination is identified and documented (20 instances total).

---

### User Story 4 - Cross-Cutting AI Audit & Compliance (Priority: P4)

As a software testing student, I demonstrate critical evaluation of AI throughout the entire report by including AI Audit Reports for every AI-generated artifact, writing a single AI critique paragraph, and summarizing AI accuracy metrics.

**Why this priority**: This cross-cutting concern underpins the academic integrity and learning objectives (CLO G9.3) of the entire homework. The AI compliance section carries 15 pts (AI-1: 8 pts, AI-2: 4 pts, AI-3: 3 pts). Without it, other requirements lose their educational value. Note: The ISTQB mindmap audit (CLO G9.1) is part of R1, not this cross-cutting concern.

**Independent Test**: Can be fully tested by verifying AI Audit Reports accompany all AI-generated artifacts, the single AI critique paragraph is 200-300 words, a disclosure statement exists, and an accuracy ratio summary appears.

**Acceptance Scenarios**:

1. **Given** AI tools are used throughout the report, **When** the report is finalized, **Then** a mandatory AI disclosure statement appears at the end.
2. **Given** all AI Audit Reports are completed, **When** summarizing AI performance, **Then** an accuracy ratio is calculated showing VALID/INVALID/INCOMPLETE percentages across all audited artifacts.
3. **Given** AI tools are used throughout the report, **When** writing the AI critique, **Then** exactly ONE 200-300 word paragraph is written for the entire report (not per-requirement), evaluating where AI was wrong/biased/incomplete and what principles were learned.

---

### Edge Cases

- What happens when a job posting link becomes unavailable after screenshot capture? (The screenshot serves as evidence; document the broken link with the date it was last accessible)
- What happens when fewer than 5 defects are found during physical fan testing? (Re-examine test cases, add more creative edge cases, test under varied environmental conditions)
- What happens when AI provides a fully correct explanation for a defect? (The student must still probe deeper or rephrase to elicit bias/hallucination, documenting the attempt)
- How does the student handle a video recording exceeding 60 seconds? (Edit to the critical segment or split into multiple clips within the time limit)
- What happens when the stand fan serial number is not visible or documented? (Contact manufacturer or use model-specific identifiers; document the investigative process)

## Clarifications

### Session 2026-05-31

- Q: What is the exact grading breakdown per sub-component? → A: Per AI-first rubric: R1=40 pts (10×3 base + 10 AI Impact/mindmap), R2=20 pts (20 defects × 1pt), R3=25 pts (15 TCs + 5 videos), AI-1=8 pts (Audit Reports), AI-2=4 pts (critique + disclosure), AI-3=3 pts (checklist + anti-cheat). Total=100.
- Q: Is the 200-300 word AI critique per-requirement or one total? → A: ONE paragraph total for the entire report (per requirements Section 4: "Write a 200–300-word paragraph" singular, and rubric line "AI Critique 200–300 words" as single 4-pt item).
- Q: Does the ISTQB mindmap audit belong to R1 or cross-cutting? → A: R1 (per CLO mapping table: "G9.1 → R1: AI Tool draws a QA/QC role mindmap; you find 3 mistakes"). It's thematically tied to QA/QC role understanding.
- Q: Should defect severity use a specific standard? → A: ISTQB-aligned categories (Critical/Major/Minor/Trivial) recommended as primary standard; equivalent frameworks (IEEE 1044) acceptable. Flexible but must be consistent within the report.
- Q: What constitutes a "defect" for physical product testing vs. a design limitation? → A: A defect is any deviation from: (a) manufacturer's stated specs/manual, (b) safety standards, or (c) reasonable user expectations. Inherent design limitations of the product category are NOT defects unless they contradict the device's own documentation.
- Q: What are the Bloom-AI levels for this homework? → A: G9.1 = Understand (ask AI for ISTQB mindmap, find 3 mistakes), G9.3 = Analyse (find ≥3 edge cases AI missed on a real device).
- Q: What is the exact mandatory disclosure template? → A: "[Test cases / script / dataset / report] was initially generated by [AI tool name]; I reviewed and modified [section X], added [edge cases Y, Z]; [section W] was written entirely by me. The detailed AI Audit Report is attached as Appendix A. I confirm I did not use AI to generate any artifact listed in the prohibited category below."
- Q: What constitutes acceptable video quality? → A: Video must clearly show the test execution, device behavior, and any defects observed. Voice narration must be audible. Exact resolution not specified but must be sufficient for TA grading verification.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: Report MUST include exactly 10 QA/QC job postings published within 60 days of submission date
- **FR-002**: At least 3 of the 10 job postings MUST explicitly require AI/LLM/automation-AI skills
- **FR-003**: Each job posting MUST include: working URL, dated screenshot (showing student's account name), job description, required skills, salary information, and 1-2 sentence AI Impact Analysis
- **FR-004**: Report MUST document exactly 20 software defects publicized between 2022 and 2026
- **FR-005**: At least 5 of the 20 defects MUST be related to AI/LLM issues (hallucination, prompt injection, bias)
- **FR-006**: Each defect MUST include: source link, description, severity classification, consequences, and solution
- **FR-007**: For EACH of the 20 defects, the student MUST identify exactly 1 instance where an AI tool is biased or hallucinates when explaining the defect (20 instances total)
- **FR-008**: Report MUST contain exactly 15 test cases for a specific stand fan following ISTQB structure (Objective / Input / Steps / Expected / Actual / Verdict)
- **FR-009**: At least 3 of the 15 test cases MUST be edge cases that AI tools cannot find, each accompanied by a screenshot of AI conversation and written explanation of why AI missed them
- **FR-010**: At least 5 test cases MUST be physically executed on the real device with video recordings (≤60 seconds each)
- **FR-011**: At least 5 defects MUST be discovered during physical test execution
- **FR-012**: Report MUST include 1 photo showing the stand fan with the student ID card in the same frame
- **FR-013**: Report MUST declare the stand fan's brand, model, year, and serial number (mask the middle 4 characters of the serial number for privacy)
- **FR-014**: Every AI-generated artifact MUST include a complete AI Audit Report following the 5-section template (Prompt+tool, AI output, Verdict, Reasoning, Student fix). Reasoning MUST be grounded in ISTQB standards or course materials. Verdict options: VALID (AI output is factually correct and complete), INVALID (AI output contains factual errors), INCOMPLETE (AI output is partially correct but missing critical information)
- **FR-015**: Report MUST include exactly ONE 200-300 word AI critique paragraph for the entire report (not per-requirement), evaluating where AI was wrong/biased/incomplete and what principles were learned for collaborating with AI
- **FR-016**: Report MUST include a mandatory AI disclosure statement
- **FR-017**: As part of R1 (CLO G9.1), student MUST ask AI for a QA/QC role mindmap based on ISTQB and identify exactly 3 mistakes in the AI output, with reasoning citing course materials or ISTQB standards
- **FR-018**: Student MUST find at least 3 edge cases for the stand fan that AI missed, with proof (CLO G9.3)
- **FR-019**: Report MUST summarize AI accuracy ratio at the end (VALID/INVALID/INCOMPLETE percentages) AND conclude: WHEN should AI be used / not used for this work?
- **FR-020**: Report MUST be authored in Markdown format with PDF export
- **FR-021**: Report MUST be Git-versioned with clear commits per logical step
- **FR-022**: Execution videos MUST contain the student's own voice narration (anti-cheat requirement; AI-generated or silent videos are grounds for zero grade)
- **FR-023**: Student MUST maintain a prompt log (.md file) with timestamps for every AI prompt sent during the assignment
- **FR-024**: Submission MUST attach [AI-02] AI Audit Report template, [AI-03] AI Disclosure Form (signed), and [AI-05] Privacy & Responsible Use Checklist (signed) from the /AI Templates folder
- **FR-025**: Student MUST be prepared for an oral defense (random 30% selection): live demo of any test case, explain input choice, and identify 1 AI mistake corrected
- **FR-026**: Report MUST include a self-assessment table at the end of the main content (before appendices), listing all 6 rubric criteria — Job Market 2026+ (40 pts), Software Defects 2022–2026 (20 pts), Physical-product test design (25 pts), AI-1 Audit Report (8 pts), AI-2 Critique + Disclosure (4 pts), AI-3 Checklist + anti-cheat (3 pts) — with the student's self-assessed grade for each criterion
- **FR-027**: Submission filename MUST follow pattern `StudentID_HW01_AI_<grade>.zip` where grade is 3 digits in range [000, 100]
- **FR-028**: Submission MUST include an Excel file containing: Test Cases, Checklist, and Test Summary Report (incremental)
- **FR-029**: Execution videos MUST be hosted as YouTube Unlisted links. Alternative platforms (Google Drive, OneDrive) are only accepted if YouTube removes/blocks the video due to copyright — student must first attempt YouTube upload
- **FR-030**: [AI-06] Student Acknowledgement MUST be signed in Week 1 as a prerequisite before any AI-assisted homework is graded
- **FR-031**: QA/QC role mindmap MUST be delivered in PNG or Markdown format
- **FR-032**: Each test execution MUST document environmental conditions and device state at time of testing
- **FR-033**: Test cases SHOULD demonstrate traceability to device specifications, user manual, or safety standards
- **FR-034**: One batch of AI output generated by a single prompt counts as ONE artifact requiring one AI Audit Report entry (e.g., 15 test cases from one prompt = 1 entry)
- **FR-035**: All AI prompt timestamps in the prompt log and Audit Report MUST use format HH:MM dd/mm/yyyy
- **FR-036**: AI output in the Audit Report MUST be presented as either full text OR a red-bordered screenshot with annotations — no summaries or paraphrases
- **FR-037**: Test case Verdict field MUST use standard values: PASS / FAIL / BLOCKED (per ISTQB)
- **FR-038**: Test case design SHOULD reference test design techniques (equivalence partitioning, boundary value analysis) where applicable
- **FR-039**: Late submission is NOT permitted; false AI disclosure or copying between students results in 0 grade and disciplinary board referral

### Key Entities

- **Job Posting**: A real QA/QC job advertisement with URL, screenshot, description, skills, salary, and AI impact analysis. Constrained to 60-day recency window.
- **Software Defect**: A publicized software bug/failure from 2022-2026 with source evidence, severity classification (using ISTQB-aligned categories: Critical, Major, Minor, Trivial — or equivalent standard such as IEEE 1044), and documented AI evaluation bias.
- **Test Case**: An ISTQB-structured verification activity for the stand fan with objective, inputs, steps, expected/actual results, and verdict.
- **AI Audit Report**: A 5-section evaluation document applied to every AI-generated artifact, demonstrating critical judgment.
- **Physical Device (Stand Fan)**: The specific device under test, identified by brand/model/serial, with photo evidence linking it to the student.
- **Defect Report**: A documented issue found during physical test execution of the stand fan. A defect is defined as any observed behavior that deviates from: (a) the manufacturer's stated specifications or manual claims, (b) applicable safety standards, or (c) reasonable user expectations for the product category. Design limitations inherent to all products of that type are NOT defects unless they contradict the device's own documentation or marketing claims.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: All 10 job postings are verifiable via working URLs and dated screenshots within the required recency window
- **SC-002**: At least 30% of job postings (3/10) demonstrate AI/LLM skill requirements in the QA/QC market
- **SC-003**: All 20 defects are traceable to public sources published between 2022-2026
- **SC-004**: 100% of AI-generated artifacts have accompanying AI Audit Reports with clear VALID/INVALID/INCOMPLETE verdicts
- **SC-005**: At least 3 test cases demonstrably prove AI limitations by showing AI conversation failures alongside student-discovered edge cases
- **SC-006**: Physical test execution produces at least 5 documented defects with video evidence under 60 seconds each
- **SC-007**: AI accuracy summary quantifies the ratio of VALID vs INVALID vs INCOMPLETE AI outputs across the entire report
- **SC-008**: The single AI critique paragraph is within the 200-300 word range and substantively evaluates AI performance across the entire report
- **SC-009**: Git history demonstrates incremental progress with descriptive commit messages per logical step
- **SC-010**: The ISTQB mindmap audit correctly identifies 3 verifiable AI mistakes with citations to course materials
- **SC-011**: All execution videos include student voice narration (not silent); prompt log .md is committed with timestamps for every AI prompt
- **SC-012**: [AI-02] Audit Report, [AI-03] Disclosure Form, and [AI-05] Privacy Checklist are attached as appendices in the final submission

## Assumptions

- The student has access to common job posting platforms (LinkedIn, Indeed, Glassdoor, or equivalent Vietnamese/international platforms)
- The student has a personal account on job platforms that can be shown in screenshots for verification
- The student has physical access to a functioning stand fan for the duration of the testing period
- A smartphone or camera capable of recording video (≤60s) is available for test execution evidence
- The student has access to at least one AI tool (ChatGPT, Gemini, Copilot, etc.) for the AI audit sections
- "Published within 60 days" is measured from the homework submission deadline
- Severity classification for defects uses ISTQB-aligned categories (Critical, Major, Minor, Trivial) as the primary standard, with equivalent frameworks acceptable if applied consistently
- The stand fan is a common household appliance with standard features (speed settings, oscillation, height adjustment, timer)
- Internet access is available for job market research and defect database searches
- The submission deadline and course materials (slides, ISTQB references) are accessible to the student

## Grading Breakdown (AI-First Rubric)

| #    | Criteria                     | Points  | Sub-component Detail                                                                |
| ---- | ---------------------------- | ------- | ----------------------------------------------------------------------------------- |
| 1    | Job Market 2026+             | 40      | 10 jobs × 3 pts = 30 (base content) + 10 (AI Impact Analysis + ISTQB mindmap audit) |
| 2    | Software Defects 2022–2026   | 20      | 20 defects × 1 pt each (including AI bias identification per defect)                |
| 3    | Physical-product test design | 25      | 15 test cases + ≥5 video executions + ≥5 defects discovered                         |
| AI-1 | AI Audit Report (5-section)  | 8       | One entry per AI-generated artifact (batch = 1 entry). Covers all requirements.     |
| AI-2 | AI Critique + Disclosure     | 4       | ONE 200-300 word paragraph total + [AI-03] Disclosure Form                          |
| AI-3 | Checklist + anti-cheat       | 3       | [AI-05] signed + device photo + voice narration + account screenshots               |
|      | **Total**                    | **100** |                                                                                     |

**Key scoring notes**:

- "One batch generated by a single prompt counts as ONE artifact" for AI Audit Report purposes
- The ISTQB mindmap audit (find 3 mistakes) is scored within R1's "AI Impact" sub-component (10 pts)
- R3's heading in requirements says "40 pts" but the AI-first rubric (which "replaces the previous rubric") allocates 25 pts to R3 content and 15 pts to AI compliance
