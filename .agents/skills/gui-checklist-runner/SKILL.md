---
name: gui-checklist-runner
description: Design, execute, and report reusable GUI checklists and usability technical rehearsals for EShop screens or complete flows. Use when a task asks for GUI checklist coverage, Playwright execution, failure evidence, usability preparation, Agent Skill demonstrations, or repeatable testing of Cart, Coupon, Checkout, or another EShop surface.
---

# GUI Checklist Runner

Apply this workflow to one named screen or complete user flow. Read the assignment requirements and SUT behavior before generating checks. Keep the checklist reusable; keep submission-specific IDs and paths in the submission, not in this skill.

## Inputs

Collect or discover:

- Requirement source and target FR/IA/SEC identifiers.
- SUT root, target routes, service commands, and test credentials.
- Submission root and required artifact formats.
- Whether the request covers checklist testing, usability preparation, or both.
- Whether GitHub issue publication is explicitly authorized.

Use [EShop delivery contract](references/eshop-delivery-contract.md) for the local service, evidence, integrity, and demonstration rules. Use [checklist template](assets/checklist-template.md) when no assignment template exists.

## Workflow

1. Inspect requirements and the target UI. Convert each requirement into an observable procedure and expected result. Cover general UI, forms, navigation, feedback/state, responsive behavior, keyboard access, accessibility structure, input boundaries, access control, and inert rendering of script-like text where applicable.
2. Review the draft. Add high-value checks the first pass missed and record why they were added. Do not invent requirements or pad the checklist with duplicates.
3. Back up mutable SUT state, start only the required services, and wait for their URLs to respond. Keep SUT source unchanged.
4. Execute checks with resilient role, label, or route locators. Record `Passed`, `Failed`, or `Blocked`; never turn harness failures into product defects. Capture screenshots only for failed checklist items unless the assignment requests more evidence.
5. Group reproducible failures into defects with severity, affected checks, steps, expected behavior, actual behavior, and evidence. Publish issues only after explicit authorization.
6. For usability Phase 1, prepare the participant criteria, screener, consent, script, tasks, observation form, pilot plan, and analysis framework. An automated walkthrough is a **technical rehearsal**, never a human pilot or participant result.
7. Generate reports and machine-readable results, validate counts and links, restore SUT state, and stop only processes started by this run.
8. When demonstrating the skill, record a complete screen or flow from an invocation card through live interaction to an artifact summary. Save the local video and trace before inserting a YouTube URL or placeholder in the report.

## Playwright Rules

- Prefer web-first waiting and user-facing locators; use timeouts only for short stabilization where the SUT exposes no observable state.
- Isolate screens or flows in browser contexts when their state can interfere.
- For library-mode video recording, set `recordVideo` on `browser.newContext`, retain `page.video()`, await `context.close()`, then call `video.saveAs()` for the stable artifact.
- Start tracing before navigation and stop it with screenshots and snapshots enabled before closing the context.
- Preserve non-zero exit codes and surface automation exceptions.

## Completion Gate

Finish only when checklist totals reconcile, every failure has evidence and a bug mapping, generated documents agree with machine results, participant placeholders remain visibly incomplete, demo artifacts are non-empty, mutable SUT state is restored, and the SUT worktree is clean.
