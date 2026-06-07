<!--
  Sync Impact Report
  ==================
  Version change: N/A → 1.0.0
  Modified principles: None (initial creation)
  Added sections: Core Principles (5), Additional Constraints, Workflow & Quality Gates, Governance
  Removed sections: None
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ compatible (Constitution Check section is dynamic)
    - .specify/templates/spec-template.md — ✅ compatible (generic structure)
    - .specify/templates/tasks-template.md — ✅ compatible (generic structure)
  Follow-up TODOs: None
-->

# HCMUS Software Testing HW01 Constitution

## Core Principles

### I. Evidence-Based Documentation

Every claim MUST be backed by verifiable sources. Non-negotiable rules:

- All references MUST include working links, access dates, and publication dates
- Screenshots MUST visibly show the student's account name for authenticity
- All evidence MUST be timestamped (date + time where applicable)
- Job postings, defect reports, and test results MUST include source URLs
- No unsourced assertions permitted in the final deliverable

**Rationale**: A software testing course demands rigor in evidence handling.
Unverifiable claims undermine the credibility of any QA/QC analysis.

### II. AI-Augmented with Critical Evaluation (NON-NEGOTIABLE)

AI tools are permitted as assistants but MUST NOT be trusted blindly.
Every AI-generated artifact MUST include a full AI Audit Report:

- **(1) Prompt + tool**: Full prompt + tool name with timestamp HH:MM dd/mm/yyyy
- **(2) AI output**: Full AI output (or red-bordered screenshot with annotations)
- **(3) Verdict**: VALID / INVALID / INCOMPLETE — with reasoning grounded in ISTQB or course materials
- **(4) Reasoning**: 2–5 sentences citing the matching slide / ISTQB section
- **(5) Student fix**: The corrected artifact — highlight what changed

Additional mandatory requirements:
- Each defect entry MUST identify potential AI bias or hallucination
- ONE 200–300 word AI critique paragraph MUST appear at the end of the report (covering overall AI performance)
- Students MUST identify ≥3 mistakes in AI-generated ISTQB mindmap
- Students MUST find ≥3 edge cases that AI missed
- A mandatory AI disclosure statement MUST appear at the end of the report

**Rationale**: The goal is demonstrating human judgment over AI output, not
outsourcing thinking to AI. Critical evaluation IS the learning objective.

### III. ISTQB-Aligned Testing Methodology

All test cases MUST follow ISTQB standard structure:

- **Objective**: What the test verifies
- **Input / Preconditions**: Initial state and data
- **Steps**: Numbered, reproducible actions
- **Expected Result**: What SHOULD happen per specification
- **Actual Result**: What DID happen during execution
- **Verdict**: PASS / FAIL / BLOCKED

Additional requirements:
- Testing methodology MUST reference course materials and ISTQB standards
- Test design techniques (equivalence partitioning, boundary value analysis)
  MUST be explicitly identified where applied
- Traceability between requirements and test cases MUST be maintained

**Rationale**: ISTQB is the industry standard. Aligning with it ensures
the student learns transferable, professional testing practices.

### IV. Markdown-First, Git-Versioned

All deliverables MUST be authored in Markdown format:

- One commit per logical step or requirement completion
- Commit messages MUST be clear and descriptive (e.g., "req1: add QA job analysis for 5 postings")
- Final submission MUST include PDF exports alongside source Markdown
- No proprietary document formats (Word, Google Docs) for primary authoring
- Repository history MUST demonstrate incremental progress

**Rationale**: Markdown + Git provides transparent version history,
enables diff-based review, and demonstrates professional documentation workflow.

### V. Physical Product Testing Focus

Requirement 3 targets a real stand fan as the device under test:

- Test cases MUST include edge cases that AI cannot generate
- At least 5 test cases MUST be physically executed on the real device
- Video evidence MUST accompany each executed test case
- At least 5 defects MUST be discovered from physical test execution
- Environmental conditions and device state MUST be documented per test
- Tests MUST go beyond basic functionality into safety, durability,
  and edge-case scenarios

**Rationale**: Physical testing cannot be faked or AI-generated. It proves
the student can apply testing methodology to tangible, real-world products.

## Additional Constraints

- **Individual work only** — no collaboration or shared submissions permitted
- **English language** — all artifacts, reports, and documentation in English
- **Three requirements structure**:
  1. QA/QC job market analysis (job postings, skill mapping)
  2. 20 software defects research (real-world bugs with evidence)
  3. Stand fan test cases (design, execution, defect reporting)
- **AI mindmap audit**: Identify exactly 3 mistakes in AI-generated ISTQB mindmap
- **Edge case discovery**: Find ≥3 edge cases AI missed for the stand fan
- **Physical defects**: Find ≥5 defects from actual stand fan execution
- **AI critique**: 200–300 word critical evaluation mandatory per major AI usage
- **Disclosure**: Mandatory AI usage disclosure statement at end of report

## Workflow & Quality Gates

### Documentation Workflow

1. **Research** → Gather sources, take dated screenshots, collect URLs
2. **Draft** → Write Markdown with inline citations and evidence
3. **AI Audit** → For each AI interaction, complete the Audit Report template
4. **Execute** → For Req 3, physically test the device and record video
5. **Review** → Verify all constraints are met (checklist pass)
6. **Export** → Generate PDF from finalized Markdown
7. **Commit** → Final git commit with complete deliverable

### Quality Gates (per requirement)

- [ ] All claims have verifiable sources with dates
- [ ] Screenshots show student account name
- [ ] AI Audit Reports complete for every AI usage
- [ ] ISTQB structure followed for all test cases
- [ ] Edge cases identified beyond AI suggestions
- [ ] Git history shows incremental progress
- [ ] PDF export generated and committed

## Governance

This constitution governs all work on HW01. It supersedes informal practices:

- **Compliance**: Every deliverable section MUST pass its Quality Gate checklist
- **Amendments**: Changes to this constitution require a version bump and
  documented rationale in the Sync Impact Report
- **Versioning**: MAJOR.MINOR.PATCH semantic versioning. MAJOR for principle
  removal/redefinition, MINOR for additions, PATCH for clarifications
- **Review**: Before final submission, re-verify all 5 principles are satisfied
  across all 3 requirements

**Version**: 1.0.0 | **Ratified**: 2026-05-31 | **Last Amended**: 2026-05-31
