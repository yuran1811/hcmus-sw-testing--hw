# Spec-vs-Requirements Validation Checklist: HW01 – QA/QC Jobs · 20 Defects · Test a Physical Product

**Purpose**: Validate that spec.md completely and accurately captures all requirements from hw01/requirements.md, with no gaps, discrepancies, or ambiguities
**Created**: 2026-05-31
**Feature**: [spec.md](../spec.md)
**Source**: [hw01/requirements.md](../../hw01/requirements.md)

## Quantitative Requirements Completeness

- [x] CHK001 - Are all 8 quantitative thresholds from requirements.md explicitly specified with exact numbers in the spec? (10 postings, 3 AI-skill postings, 20 defects, 5 AI defects, 15 test cases, 3 AI-missed edge cases, 5 executed tests, 5 defects found) [Completeness, Spec §FR-001–FR-011]
- [x] CHK002 - Is the "3 ISTQB mistakes" requirement for the AI-generated mindmap explicitly quantified in the spec? [Completeness, Spec §FR-017]
- [x] CHK003 - Is the "20 bias instances" requirement (1 per defect × 20 defects) unambiguously stated as a mandatory count? [Clarity, Spec §FR-007]
- [x] CHK004 - Is the 60-day recency window for job postings defined with a clear reference point (submission deadline vs. collection date)? [Clarity, Spec §FR-001]
- [x] CHK005 - Is the 200–300 word count range for the AI critique explicitly bounded with both minimum and maximum? [Completeness, Spec §FR-015]
- [x] CHK006 - Is the ≤60 seconds video duration limit specified as a hard constraint with handling for exceeded duration? [Completeness, Spec §FR-010]
- [x] CHK007 - Are the grading point allocations (40/20/25/8/4/3=100) documented and reconciled between the requirements heading "40 pts" for R3 and the rubric's "25 pts"? [Consistency, Spec §Grading Breakdown]

## Deliverable Format Requirements

- [x] CHK008 - Is the Markdown-first authoring requirement explicitly stated with PDF export as secondary format? [Completeness, Spec §FR-020]
- [x] CHK009 - Is the Git versioning requirement specified with "clear commits per logical step" criterion? [Clarity, Spec §FR-021]
- [x] CHK010 - Does the spec define the required submission filename pattern `StudentID_HW01_AI_<grade>.zip`? [Completeness, Spec §FR-027]
- [x] CHK011 - Does the spec require the prompt log (.md or .txt) with timestamps for every AI prompt sent? [Completeness, Spec §FR-023]
- [x] CHK012 - Does the spec address the Excel deliverable requirement (Test Cases / Checklist / Test Summary Report) from requirements.md? [Completeness, Spec §FR-028]
- [x] CHK013 - Are screenshot format requirements specified (dated, showing account name) consistently for all screenshot types? [Consistency, Spec §FR-003]
- [x] CHK014 - Does the spec define the QA/QC role mindmap deliverable format (PNG / Markdown) as required by requirements.md? [Completeness, Spec §FR-031]
- [x] CHK015 - Does the spec capture the self-assessment section requirement at end of report? [Completeness, Spec §FR-026]
- [x] CHK016 - Is the YouTube Unlisted requirement for video hosting specified, including the fallback policy for copyright-blocked videos? [Completeness, Spec §FR-029]

## AI Audit Report Compliance

- [x] CHK017 - Is the 5-section template (Prompt+tool, AI output, Verdict, Reasoning, Student fix) fully enumerated in the spec? [Completeness, Spec §FR-014]
- [x] CHK018 - Is the "one batch = one artifact" clarification explicitly documented to prevent over-reporting? [Clarity, Spec §FR-034]
- [x] CHK019 - Is the timestamp format requirement (HH:MM dd/mm/yyyy) for AI prompts specified? [Clarity, Spec §FR-035]
- [x] CHK020 - Is the "red-bordered screenshot with annotations" alternative to full text output defined? [Completeness, Spec §FR-036]
- [x] CHK021 - Are the three verdict options (VALID/INVALID/INCOMPLETE) defined with criteria for selecting each? [Clarity, Spec §FR-014]
- [x] CHK022 - Does the spec require the AI Audit Report to ground reasoning in "ISTQB or course materials" specifically? [Completeness, Spec §FR-014]
- [x] CHK023 - Are the required AI templates ([AI-02], [AI-03], [AI-05]) from the "/AI Templates folder" explicitly listed as deliverables in the spec? [Completeness, Spec §FR-024]
- [x] CHK024 - Does the spec mention [AI-06] Student Acknowledgement (signed in Week 1) as a prerequisite for grading? [Completeness, Spec §FR-030]

## Physical Evidence Requirements

- [x] CHK025 - Is the device photo requirement (stand fan + student ID card in same frame) specified? [Completeness, Spec §FR-012]
- [x] CHK026 - Is the serial number masking requirement ("mask the middle 4 chars") explicitly defined? [Clarity, Spec §FR-013]
- [x] CHK027 - Does the spec require voice narration in execution videos as an anti-cheat mechanism? [Completeness, Spec §FR-022]
- [x] CHK028 - Is the video evidence requirement linked to specific test case execution (≥5 out of 15, not all 15)? [Clarity, Spec §FR-010]
- [x] CHK029 - Are environmental conditions and device state documentation requirements specified per test? [Completeness, Spec §FR-032]
- [x] CHK030 - Does the spec define what constitutes acceptable video quality for grading purposes? [Completeness, Spec §Clarifications]

## ISTQB Structure Compliance

- [x] CHK031 - Are all 6 ISTQB test case fields (Objective / Input / Steps / Expected / Actual / Verdict) explicitly required? [Completeness, Spec §FR-008]
- [x] CHK032 - Is the Verdict field defined with standard values (PASS / FAIL / BLOCKED) per ISTQB? [Clarity, Spec §FR-037]
- [x] CHK033 - Are test design techniques (equivalence partitioning, boundary value analysis) mentioned as requirements for test case justification? [Completeness, Spec §FR-038]
- [x] CHK034 - Is the distinction between "design limitation" and "defect" clearly defined for physical product testing? [Clarity, Spec §Key Entities]
- [x] CHK035 - Does the spec require traceability between test cases and device specifications/manual? [Completeness, Spec §FR-033]
- [x] CHK036 - Are severity classification categories (Critical/Major/Minor/Trivial) specified for defects found during physical testing? [Completeness, Spec §Clarifications + Key Entities]

## CLO Mapping Compliance

- [x] CHK037 - Is CLO G9.1 (Understand: ask AI for ISTQB mindmap, find 3 mistakes) explicitly mapped to R1 in the spec? [Completeness, Spec §FR-017]
- [x] CHK038 - Is CLO G9.3 (Analyse: find ≥3 edge cases AI missed on real device) explicitly mapped to R3 in the spec? [Completeness, Spec §FR-018]
- [x] CHK039 - Are the Bloom-AI levels (G9.1 = Understand, G9.3 = Analyse) documented in the spec? [Completeness, Spec §Clarifications]
- [x] CHK040 - Does the spec clearly state that the ISTQB mindmap audit is scored within R1's "AI Impact" sub-component (10 pts), not the cross-cutting AI section? [Clarity, Spec §Grading Breakdown]

## Mandatory Sections Presence

- [x] CHK041 - Is the AI Critique requirement specified as exactly ONE 200–300 word paragraph for the entire report (not per-requirement)? [Clarity, Spec §FR-015]
- [x] CHK042 - Is the Mandatory Disclosure statement specified with the exact template text from requirements.md? [Completeness, Spec §Clarifications]
- [x] CHK043 - Is the accuracy ratio summary (VALID/INVALID/INCOMPLETE percentages) required at end of report? [Completeness, Spec §FR-019]
- [x] CHK044 - Does the spec capture the "WHEN should AI be used / not used for this work?" conclusion requirement from the AI Audit Report section? [Completeness, Spec §FR-019]
- [x] CHK045 - Is the anti-cheat artifacts section (device photo, voice narration, account screenshots, prompt log) fully specified? [Completeness, Spec §FR-012, FR-022, FR-003, FR-023]
- [x] CHK046 - Does the spec address the Oral Defense requirement (random 30%, 5–7 min, scoring impact)? [Completeness, Spec §FR-025]

## Constitution Alignment

- [x] CHK047 - Does the spec satisfy Principle I (Evidence-Based Documentation): all claims backed by verifiable sources with working links, access dates, publication dates? [Constitution §I, Spec §FR-001, FR-003, FR-006]
- [x] CHK048 - Does the spec satisfy Principle II (AI-Augmented with Critical Evaluation): every AI artifact has a 5-section Audit Report? [Constitution §II, Spec §FR-014]
- [x] CHK049 - Does the constitution's statement "200–300 word AI critique section MUST appear per major AI usage" conflict with the spec's "ONE paragraph total"? [Resolved: Spec follows requirements.md — ONE paragraph total. Constitution should be updated to align.]
- [x] CHK050 - Does the spec satisfy Principle III (ISTQB-Aligned Testing Methodology): all 6 ISTQB fields required, test design techniques identified? [Constitution §III, Spec §FR-008, FR-037, FR-038]
- [x] CHK051 - Does the spec satisfy Principle IV (Markdown-First, Git-Versioned): one commit per logical step, descriptive messages, PDF exports? [Constitution §IV, Spec §FR-020, FR-021]
- [x] CHK052 - Does the spec satisfy Principle V (Physical Product Testing Focus): edge cases AI cannot generate, video evidence per executed test, ≥5 defects discovered? [Constitution §V, Spec §FR-009, FR-010, FR-011]
- [x] CHK053 - Does the constitution's requirement for "Environmental conditions and device state MUST be documented per test" have a corresponding spec requirement? [Completeness, Spec §FR-032]

## Discrepancies & Gaps (Spec vs Requirements)

- [x] CHK054 - DISCREPANCY: Requirements.md heading says R3 = "40 pts" but rubric allocates 25 pts to R3 content — is this contradiction resolved in the spec? [Resolved in Spec §Grading Breakdown: "R3's heading says 40 pts but AI-first rubric allocates 25 pts to R3 content and 15 pts to AI compliance"]
- [x] CHK055 - GAP: Requirements.md specifies "Prompt log .md with timestamps for every AI prompt" under anti-cheat — spec has no corresponding FR [Resolved: Spec §FR-023]
- [x] CHK056 - GAP: Requirements.md requires "Excel: Test Cases / Checklist / Test Summary Report" — spec only mentions Markdown/PDF formats [Resolved: Spec §FR-028]
- [x] CHK057 - GAP: Requirements.md lists 3 mandatory AI template forms ([AI-02], [AI-03], [AI-05]) — spec references disclosure but not specific form IDs [Resolved: Spec §FR-024]
- [x] CHK058 - GAP: Requirements.md requires voice narration in videos as anti-cheat — no corresponding spec requirement exists [Resolved: Spec §FR-022]
- [x] CHK059 - GAP: Requirements.md specifies YouTube Unlisted as primary video platform with copyright fallback — spec only says "video recordings" [Resolved: Spec §FR-029]
- [x] CHK060 - GAP: Requirements.md includes "Other regulations" (late submission, copying = 0 grade) — not captured in spec [Resolved: Spec §FR-039]
- [x] CHK061 - GAP: Requirements.md states "[AI-06] Student Acknowledgement must be signed in Week 1" as prerequisite — not in spec [Resolved: Spec §FR-030]
- [x] CHK062 - GAP: Requirements.md includes self-assessment grade column — spec does not reference student self-grading [Resolved: Spec §FR-026]
- [x] CHK063 - DISCREPANCY: Constitution §II says "200–300 word AI critique section MUST appear per major AI usage" but requirements.md and spec say ONE paragraph total — constitution needs update [Acknowledged: Spec follows requirements.md authoritative source. Constitution §II should be updated separately.]

## Notes

- **Focus areas**: Quantitative accuracy, format compliance, AI audit completeness, physical evidence, ISTQB structure, CLO mapping, mandatory sections, constitution alignment
- **Resolution date**: 2026-05-31
- **All 63 items resolved**: Spec updated with FR-027 through FR-039 to address all identified gaps
- **Known constitution conflict** (CHK049/CHK063): Constitution §II requires critique "per major AI usage" but requirements.md authoritatively specifies ONE paragraph total — spec follows requirements.md; constitution should be updated separately
