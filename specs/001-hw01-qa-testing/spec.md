# Feature Specification: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Feature Branch**: `001-hw01-qa-testing`

**Created**: 2026-05-31

**Status**: Draft

**Input**: User description: "Create a comprehensive Software Testing HW01 report covering QA/QC job market analysis, 20 real-world software defects documentation, and physical stand fan testing with ISTQB methodology. All artifacts must include AI Audit Reports demonstrating critical evaluation of AI-generated content."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - QA/QC Job Market Research & Analysis (Priority: P1)

As a software testing student, I research and analyze 10 real QA/QC job postings from the current market (published within 60 days of submission) to understand how AI is transforming QA/QC roles and what skills employers demand in 2026+.

**Why this priority**: This requirement carries the highest weight (40 pts) and establishes the foundation for understanding the QA/QC profession. It demonstrates the student's ability to research, analyze, and synthesize real-world job market data with critical AI evaluation.

**Independent Test**: Can be fully tested by verifying that 10 job postings are documented with all required fields (link, screenshot, description, skills, salary, AI Impact Analysis) and that at least 3 postings explicitly require AI/LLM/automation-AI skills.

**Acceptance Scenarios**:

1. **Given** the student has access to job posting platforms, **When** they collect 10 QA/QC job postings published within 60 days of submission, **Then** each posting includes: a working URL, a dated screenshot showing the student's account name, job description, required skills list, salary information, and a 1-2 sentence AI Impact Analysis.
2. **Given** 10 job postings are collected, **When** reviewing the set for AI-skill coverage, **Then** at least 3 postings explicitly require AI/LLM/automation-AI skills (e.g., prompt engineering for testing, AI-assisted test generation, LLM-based automation).
3. **Given** AI tools are used during research or analysis, **When** an AI-generated artifact is produced, **Then** a complete AI Audit Report (5-section template) accompanies it with a VALID/INVALID/INCOMPLETE verdict and student correction.

---

### User Story 2 - Physical Stand Fan Test Design & Execution (Priority: P2)

As a software testing student, I apply ISTQB testing methodology to design 15 test cases for a specific stand fan, execute at least 5 of them on the real device with video evidence, and discover at least 5 defects — proving I can apply testing principles to physical products.

**Why this priority**: This requirement also carries 40 pts and is the most hands-on, requiring physical test execution, video recording, and defect discovery. It uniquely demonstrates the student's ability to apply testing theory to tangible products and find edge cases that AI cannot.

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

As a software testing student, I demonstrate critical evaluation of AI throughout the entire report by including AI Audit Reports for every AI-generated artifact, writing AI critique paragraphs, auditing an AI-generated ISTQB mindmap, and summarizing AI accuracy metrics.

**Why this priority**: This cross-cutting concern underpins the academic integrity and learning objectives (CLO G9.1, G9.3) of the entire homework. Without it, other requirements lose their educational value.

**Independent Test**: Can be fully tested by verifying AI Audit Reports accompany all AI-generated artifacts, the ISTQB mindmap audit identifies 3 AI mistakes, ≥3 edge cases are proven AI-missed, AI critique paragraphs are 200-300 words, a disclosure statement exists, and an accuracy ratio summary appears.

**Acceptance Scenarios**:

1. **Given** the student uses AI to generate an ISTQB mindmap, **When** auditing it, **Then** exactly 3 mistakes are identified with reasoning citing course materials or ISTQB standards.
2. **Given** AI tools are used throughout the report, **When** the report is finalized, **Then** a mandatory AI disclosure statement appears at the end.
3. **Given** all AI Audit Reports are completed, **When** summarizing AI performance, **Then** an accuracy ratio is calculated showing VALID/INVALID/INCOMPLETE percentages across all audited artifacts.
4. **Given** AI tools are used for major tasks, **When** reviewing each usage, **Then** a 200-300 word AI critique paragraph accompanies each major AI usage section.

---

### Edge Cases

- What happens when a job posting link becomes unavailable after screenshot capture? (The screenshot serves as evidence; document the broken link with the date it was last accessible)
- What happens when fewer than 5 defects are found during physical fan testing? (Re-examine test cases, add more creative edge cases, test under varied environmental conditions)
- What happens when AI provides a fully correct explanation for a defect? (The student must still probe deeper or rephrase to elicit bias/hallucination, documenting the attempt)
- How does the student handle a video recording exceeding 60 seconds? (Edit to the critical segment or split into multiple clips within the time limit)
- What happens when the stand fan serial number is not visible or documented? (Contact manufacturer or use model-specific identifiers; document the investigative process)

## Requirements *(mandatory)*

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
- **FR-013**: Report MUST declare the stand fan's brand, model, year, and serial number (with serial masked for privacy)
- **FR-014**: Every AI-generated artifact MUST include a complete AI Audit Report following the 5-section template (Prompt+tool, AI output, Verdict, Reasoning, Student fix)
- **FR-015**: Report MUST include a 200-300 word AI critique paragraph for each major AI usage
- **FR-016**: Report MUST include a mandatory AI disclosure statement
- **FR-017**: Student MUST ask AI for an ISTQB mindmap and identify exactly 3 mistakes in the AI output (CLO G9.1)
- **FR-018**: Student MUST find at least 3 edge cases for the stand fan that AI missed, with proof (CLO G9.3)
- **FR-019**: Report MUST summarize AI accuracy ratio at the end (VALID/INVALID/INCOMPLETE percentages)
- **FR-020**: Report MUST be authored in Markdown format with PDF export
- **FR-021**: Report MUST be Git-versioned with clear commits per logical step

### Key Entities

- **Job Posting**: A real QA/QC job advertisement with URL, screenshot, description, skills, salary, and AI impact analysis. Constrained to 60-day recency window.
- **Software Defect**: A publicized software bug/failure from 2022-2026 with source evidence, severity classification, and documented AI evaluation bias.
- **Test Case**: An ISTQB-structured verification activity for the stand fan with objective, inputs, steps, expected/actual results, and verdict.
- **AI Audit Report**: A 5-section evaluation document applied to every AI-generated artifact, demonstrating critical judgment.
- **Physical Device (Stand Fan)**: The specific device under test, identified by brand/model/serial, with photo evidence linking it to the student.
- **Defect Report**: A documented issue found during physical test execution of the stand fan.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 10 job postings are verifiable via working URLs and dated screenshots within the required recency window
- **SC-002**: At least 30% of job postings (3/10) demonstrate AI/LLM skill requirements in the QA/QC market
- **SC-003**: All 20 defects are traceable to public sources published between 2022-2026
- **SC-004**: 100% of AI-generated artifacts have accompanying AI Audit Reports with clear VALID/INVALID/INCOMPLETE verdicts
- **SC-005**: At least 3 test cases demonstrably prove AI limitations by showing AI conversation failures alongside student-discovered edge cases
- **SC-006**: Physical test execution produces at least 5 documented defects with video evidence under 60 seconds each
- **SC-007**: AI accuracy summary quantifies the ratio of VALID vs INVALID vs INCOMPLETE AI outputs across the entire report
- **SC-008**: All AI critique sections are within the 200-300 word range and substantively evaluate AI performance
- **SC-009**: Git history demonstrates incremental progress with descriptive commit messages per logical step
- **SC-010**: The ISTQB mindmap audit correctly identifies 3 verifiable AI mistakes with citations to course materials

## Assumptions

- The student has access to common job posting platforms (LinkedIn, Indeed, Glassdoor, or equivalent Vietnamese/international platforms)
- The student has a personal account on job platforms that can be shown in screenshots for verification
- The student has physical access to a functioning stand fan for the duration of the testing period
- A smartphone or camera capable of recording video (≤60s) is available for test execution evidence
- The student has access to at least one AI tool (ChatGPT, Gemini, Copilot, etc.) for the AI audit sections
- "Published within 60 days" is measured from the homework submission deadline
- Severity classification for defects follows standard categories (Critical, Major, Minor, Trivial) or equivalent
- The stand fan is a common household appliance with standard features (speed settings, oscillation, height adjustment, timer)
- Internet access is available for job market research and defect database searches
- The submission deadline and course materials (slides, ISTQB references) are accessible to the student
