# Spec-vs-Requirements Validation Checklist: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Purpose**: Validate that spec.md completely and accurately captures all requirements from hw01/requirements.md, with no gaps, discrepancies, or ambiguities
**Created**: 2026-05-31
**Feature**: [spec.md](../spec.md)
**Source**: [hw01/requirements.md](../../hw01/requirements.md)

## Quantitative Requirements Completeness

- [ ] CHK001 - Are all 8 quantitative thresholds from requirements.md explicitly specified with exact numbers in the spec? (10 postings, 3 AI-skill postings, 20 defects, 5 AI defects, 15 test cases, 3 AI-missed edge cases, 5 executed tests, 5 defects found) [Completeness, Spec §FR-001–FR-011]
- [ ] CHK002 - Is the "3 ISTQB mistakes" requirement for the AI-generated mindmap explicitly quantified in the spec? [Completeness, Spec §FR-017]
- [ ] CHK003 - Is the "20 bias instances" requirement (1 per defect × 20 defects) unambiguously stated as a mandatory count? [Clarity, Spec §FR-007]
- [ ] CHK004 - Is the 60-day recency window for job postings defined with a clear reference point (submission deadline vs. collection date)? [Clarity, Spec §FR-001]
- [ ] CHK005 - Is the 200–300 word count range for the AI critique explicitly bounded with both minimum and maximum? [Completeness, Spec §FR-015]
- [ ] CHK006 - Is the ≤60 seconds video duration limit specified as a hard constraint with handling for exceeded duration? [Completeness, Spec §FR-010]
- [ ] CHK007 - Are the grading point allocations (40/20/25/8/4/3=100) documented and reconciled between the requirements heading "40 pts" for R3 and the rubric's "25 pts"? [Consistency, Gap]

## Deliverable Format Requirements

- [ ] CHK008 - Is the Markdown-first authoring requirement explicitly stated with PDF export as secondary format? [Completeness, Spec §FR-020]
- [ ] CHK009 - Is the Git versioning requirement specified with "clear commits per logical step" criterion? [Clarity, Spec §FR-021]
- [ ] CHK010 - Does the spec define the required submission filename pattern `StudentID_HW01_AI_<grade>.zip`? [Gap]
- [ ] CHK011 - Does the spec require the prompt log (.md or .txt) with timestamps for every AI prompt sent? [Gap]
- [ ] CHK012 - Does the spec address the Excel deliverable requirement (Test Cases / Checklist / Test Summary Report) from requirements.md? [Gap, Conflict]
- [ ] CHK013 - Are screenshot format requirements specified (dated, showing account name) consistently for all screenshot types? [Consistency, Spec §FR-003]
- [ ] CHK014 - Does the spec define the QA/QC role mindmap deliverable format (PNG / Markdown) as required by requirements.md? [Gap]
- [ ] CHK015 - Does the spec capture the self-assessment section requirement at end of report? [Gap]
- [ ] CHK016 - Is the YouTube Unlisted requirement for video hosting specified, including the fallback policy for copyright-blocked videos? [Gap]

## AI Audit Report Compliance

- [ ] CHK017 - Is the 5-section template (Prompt+tool, AI output, Verdict, Reasoning, Student fix) fully enumerated in the spec? [Completeness, Spec §FR-014]
- [ ] CHK018 - Is the "one batch = one artifact" clarification explicitly documented to prevent over-reporting? [Clarity, Spec Clarifications]
- [ ] CHK019 - Is the timestamp format requirement (HH:MM dd/mm/yyyy) for AI prompts specified? [Clarity, Gap]
- [ ] CHK020 - Is the "red-bordered screenshot with annotations" alternative to full text output defined? [Completeness, Gap]
- [ ] CHK021 - Are the three verdict options (VALID/INVALID/INCOMPLETE) defined with criteria for selecting each? [Clarity, Spec §FR-014]
- [ ] CHK022 - Does the spec require the AI Audit Report to ground reasoning in "ISTQB or course materials" specifically? [Completeness, Spec §FR-014]
- [ ] CHK023 - Are the required AI templates ([AI-02], [AI-03], [AI-05]) from the "/AI Templates folder" explicitly listed as deliverables in the spec? [Gap]
- [ ] CHK024 - Does the spec mention [AI-06] Student Acknowledgement (signed in Week 1) as a prerequisite for grading? [Gap]

## Physical Evidence Requirements

- [ ] CHK025 - Is the device photo requirement (stand fan + student ID card in same frame) specified? [Completeness, Spec §FR-012]
- [ ] CHK026 - Is the serial number masking requirement ("mask the middle 4 chars") explicitly defined? [Clarity, Spec §FR-013]
- [ ] CHK027 - Does the spec require voice narration in execution videos as an anti-cheat mechanism? [Gap]
- [ ] CHK028 - Is the video evidence requirement linked to specific test case execution (≥5 out of 15, not all 15)? [Clarity, Spec §FR-010]
- [ ] CHK029 - Are environmental conditions and device state documentation requirements specified per test? [Gap]
- [ ] CHK030 - Does the spec define what constitutes acceptable video quality for grading purposes? [Gap]

## ISTQB Structure Compliance

- [ ] CHK031 - Are all 6 ISTQB test case fields (Objective / Input / Steps / Expected / Actual / Verdict) explicitly required? [Completeness, Spec §FR-008]
- [ ] CHK032 - Is the Verdict field defined with standard values (PASS / FAIL / BLOCKED) per ISTQB? [Clarity, Gap]
- [ ] CHK033 - Are test design techniques (equivalence partitioning, boundary value analysis) mentioned as requirements for test case justification? [Gap]
- [ ] CHK034 - Is the distinction between "design limitation" and "defect" clearly defined for physical product testing? [Clarity, Spec §Key Entities]
- [ ] CHK035 - Does the spec require traceability between test cases and device specifications/manual? [Gap]
- [ ] CHK036 - Are severity classification categories (Critical/Major/Minor/Trivial) specified for defects found during physical testing? [Completeness, Spec §Clarifications]

## CLO Mapping Compliance

- [ ] CHK037 - Is CLO G9.1 (Understand: ask AI for ISTQB mindmap, find 3 mistakes) explicitly mapped to R1 in the spec? [Completeness, Spec §FR-017]
- [ ] CHK038 - Is CLO G9.3 (Analyse: find ≥3 edge cases AI missed on real device) explicitly mapped to R3 in the spec? [Completeness, Spec §FR-018]
- [ ] CHK039 - Are the Bloom-AI levels (G9.1 = Understand, G9.3 = Analyse) documented in the spec? [Gap]
- [ ] CHK040 - Does the spec clearly state that the ISTQB mindmap audit is scored within R1's "AI Impact" sub-component (10 pts), not the cross-cutting AI section? [Clarity, Spec Clarifications]

## Mandatory Sections Presence

- [ ] CHK041 - Is the AI Critique requirement specified as exactly ONE 200–300 word paragraph for the entire report (not per-requirement)? [Clarity, Spec §FR-015]
- [ ] CHK042 - Is the Mandatory Disclosure statement specified with the exact template text from requirements.md? [Completeness, Gap]
- [ ] CHK043 - Is the accuracy ratio summary (VALID/INVALID/INCOMPLETE percentages) required at end of report? [Completeness, Spec §FR-019]
- [ ] CHK044 - Does the spec capture the "WHEN should AI be used / not used for this work?" conclusion requirement from the AI Audit Report section? [Gap]
- [ ] CHK045 - Is the anti-cheat artifacts section (device photo, voice narration, account screenshots, prompt log) fully specified? [Completeness, Gap]
- [ ] CHK046 - Does the spec address the Oral Defense requirement (random 30%, 5–7 min, scoring impact)? [Gap]

## Constitution Alignment

- [ ] CHK047 - Does the spec satisfy Principle I (Evidence-Based Documentation): all claims backed by verifiable sources with working links, access dates, publication dates? [Constitution §I]
- [ ] CHK048 - Does the spec satisfy Principle II (AI-Augmented with Critical Evaluation): every AI artifact has a 5-section Audit Report? [Constitution §II]
- [ ] CHK049 - Does the constitution's statement "200–300 word AI critique section MUST appear per major AI usage" conflict with the spec's "ONE paragraph total"? [Conflict, Constitution §II vs Spec §FR-015]
- [ ] CHK050 - Does the spec satisfy Principle III (ISTQB-Aligned Testing Methodology): all 6 ISTQB fields required, test design techniques identified? [Constitution §III]
- [ ] CHK051 - Does the spec satisfy Principle IV (Markdown-First, Git-Versioned): one commit per logical step, descriptive messages, PDF exports? [Constitution §IV]
- [ ] CHK052 - Does the spec satisfy Principle V (Physical Product Testing Focus): edge cases AI cannot generate, video evidence per executed test, ≥5 defects discovered? [Constitution §V]
- [ ] CHK053 - Does the constitution's requirement for "Environmental conditions and device state MUST be documented per test" have a corresponding spec requirement? [Gap, Constitution §V]

## Discrepancies & Gaps (Spec vs Requirements)

- [ ] CHK054 - DISCREPANCY: Requirements.md heading says R3 = "40 pts" but rubric allocates 25 pts to R3 content — is this contradiction resolved in the spec? [Conflict]
- [ ] CHK055 - GAP: Requirements.md specifies "Prompt log .md with timestamps for every AI prompt" under anti-cheat — spec has no corresponding FR [Gap]
- [ ] CHK056 - GAP: Requirements.md requires "Excel: Test Cases / Checklist / Test Summary Report" — spec only mentions Markdown/PDF formats [Conflict, Spec §FR-020]
- [ ] CHK057 - GAP: Requirements.md lists 3 mandatory AI template forms ([AI-02], [AI-03], [AI-05]) — spec references disclosure but not specific form IDs [Gap]
- [ ] CHK058 - GAP: Requirements.md requires voice narration in videos as anti-cheat — no corresponding spec requirement exists [Gap]
- [ ] CHK059 - GAP: Requirements.md specifies YouTube Unlisted as primary video platform with copyright fallback — spec only says "video recordings" [Gap]
- [ ] CHK060 - GAP: Requirements.md includes "Other regulations" (late submission, copying = 0 grade) — not captured in spec [Gap]
- [ ] CHK061 - GAP: Requirements.md states "[AI-06] Student Acknowledgement must be signed in Week 1" as prerequisite — not in spec [Gap]
- [ ] CHK062 - GAP: Requirements.md includes self-assessment grade column — spec does not reference student self-grading [Gap]
- [ ] CHK063 - DISCREPANCY: Constitution §II says "200–300 word AI critique section MUST appear per major AI usage" but requirements.md and spec say ONE paragraph total — constitution needs update [Conflict]

## Notes

- **Focus areas**: Quantitative accuracy, format compliance, AI audit completeness, physical evidence, ISTQB structure, CLO mapping, mandatory sections, constitution alignment
- **Depth level**: Standard (comprehensive validation against source requirements)
- **Audience**: Author (spec writer) — verifying spec captures all source requirements before planning
- **Must-have items incorporated**: All 8 user-specified validation categories addressed (quantitative, format, AI audit, physical evidence, ISTQB, CLO, mandatory sections, constitution)
- **Key findings**: 10+ gaps identified where spec.md does not capture requirements.md items (prompt log, Excel deliverable, YouTube policy, voice narration, AI template form IDs, oral defense, submission filename)
