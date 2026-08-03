# GUI Checklist — FR-04 Personal Profile Management

## 1. Scope and requirement basis

| Item | Definition |
| --- | --- |
| Requirement | **FR-04: Personal profile management** |
| Source | `hw03/docs/requirement.pdf`, section 4, Pool A |
| SUT surface | Authenticated customer web profile/personal-information screen; use the SUT's actual route and labels during execution |
| Execution state | Not run — this checklist is designed from the available requirement source; no SUT execution is claimed |
| Important limitation | The PDF names FR-04 but does not specify exact fields, route, validation rules, or save semantics. Checks marked **Derived** are testable interpretations to confirm against the SUT before execution. |

## 2. Preconditions and test data

- Customer account exists and can sign in.
- A separate disposable account is available for destructive or persistence checks.
- Baseline profile values are recorded before editing; do not use real personal information.
- Use a unique valid name, phone number, and address from the test-data set if those fields exist.
- Use invalid, boundary, long, Unicode, and script-like values only in the disposable account.
- Run the desktop checks at 1440×900, then repeat responsive checks at 768×1024 and 320×568.

## 3. Checklist

| ID | Priority | IA/Requirement | Procedure | Expected result | Status | Bug | Evidence/notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PROFILE-GUI-001 | High | FR-04 | Sign in with a valid customer account and navigate to the profile/personal-information screen using the visible UI. | The profile screen opens successfully and identifies itself with a clear page title. | Not run |  | Confirm the actual route and title. |
| PROFILE-GUI-002 | High | FR-04 — access control; Derived | Open the profile route directly in a fresh unauthenticated browser context. | The user is redirected to login or shown an equivalent access-control message; private profile data is not exposed. | Not run |  |  |
| PROFILE-GUI-003 | High | FR-04 | Inspect the initial profile view after login. | Each supported profile field displays the authenticated account's current value, with no values from another account. | Not run |  | Record the actual supported field set. |
| PROFILE-GUI-004 | Medium | FR-04 — General UI; Derived | Inspect page title, headings, labels, navigation, and primary actions. | Labels are understandable, consistent with the site's language, and the current profile section is visually identifiable. | Not run |  |  |
| PROFILE-GUI-005 | High | FR-04 — edit flow; Derived | Enter edit mode, if the UI provides one. | Edit controls are discoverable and only the intended profile fields become editable. | Not run |  |  |
| PROFILE-GUI-006 | High | FR-04 — edit flow; Derived | Change one valid editable field and activate Save/Update. | A clear success state appears; the changed value is shown in the profile view. | Not run |  | Capture the exact success feedback. |
| PROFILE-GUI-007 | High | FR-04 — persistence; Derived | Reload the page after a successful save, then sign out and sign back in. | The saved value persists and remains associated with the same account. | Not run |  |  |
| PROFILE-GUI-008 | High | FR-04 — cancel/recovery; Derived | Change a field, then use Cancel/back navigation without saving. | Unsaved changes are discarded or the user receives a clear confirmation before leaving; saved data is unchanged. | Not run |  |  |
| PROFILE-GUI-009 | High | FR-04 — validation; Derived | Submit the form with each required supported field empty. | Submission is blocked and each invalid field has a clear, local error message. | Not run |  | Do not assume which fields are required; verify against the SUT. |
| PROFILE-GUI-010 | High | FR-04 — validation; Derived | Enter malformed values for supported constrained fields, such as an invalid email or phone number. | Invalid values are rejected with actionable feedback; valid existing values are not overwritten. | Not run |  | Apply only to fields the SUT actually exposes. |
| PROFILE-GUI-011 | Medium | FR-04 — boundaries; Derived | Enter leading/trailing whitespace and values at the documented minimum and maximum lengths. | Input is normalized or rejected consistently; the UI does not silently truncate valid data or break its layout. | Not run |  | Record the SUT's actual limits. |
| PROFILE-GUI-012 | Medium | FR-04 — international input; Derived | Enter Vietnamese diacritics and other supported Unicode characters in text fields. | Accepted characters remain readable and persist without corruption; invalid characters receive clear feedback if restricted. | Not run |  |  |
| PROFILE-GUI-013 | High | FR-04 — security; Derived | Enter `<script>alert(1)</script>` and HTML-like text into every user-editable text field, then save if accepted. | The value is rendered as inert text or safely rejected; no script executes, popup appears, or markup changes the page. | Not run |  | Use disposable account/data only. |
| PROFILE-GUI-014 | High | FR-04 — account isolation; Derived | In account A, save a distinctive profile value; sign in as account B. | Account B never displays account A's profile data. | Not run |  | Requires two disposable accounts. |
| PROFILE-GUI-015 | High | FR-04 — error recovery; Derived | Disconnect or block the update request, submit a valid change, and observe the result. | The UI reports failure clearly, preserves the user's entered values where possible, and does not show false success. | Not run |  | Harness/network fault is not itself a product defect. |
| PROFILE-GUI-016 | Medium | FR-04 — feedback/state; Derived | Submit Save repeatedly or activate it rapidly. | Duplicate submissions do not create inconsistent state; progress/disabled feedback is clear while saving. | Not run |  |  |
| PROFILE-GUI-017 | Medium | FR-04 — keyboard access; Derived | Use Tab/Shift+Tab through the profile screen and activate controls with Enter/Space. | Focus order follows the visual order, every control is reachable, and save/cancel actions work without a mouse. | Not run |  |  |
| PROFILE-GUI-018 | Medium | FR-04 — accessibility; Derived | Inspect the accessibility tree or use a screen reader for the page title, labels, errors, and success feedback. | Inputs have associated accessible names; validation and save results are announced or programmatically associated. | Not run |  |  |
| PROFILE-GUI-019 | Medium | FR-04 — focus; Derived | Focus an input, trigger validation, save, and cancel. | Focus remains predictable and visible, and returns to a logical control after the UI state changes. | Not run |  |  |
| PROFILE-GUI-020 | Medium | FR-04 — responsive UI; Derived | Inspect the profile screen at 320×568 and 768×1024, including the edit form. | Labels, inputs, feedback, and actions remain visible and usable without unintended horizontal scrolling or overlap. | Not run |  |  |
| PROFILE-GUI-021 | Low | FR-04 — zoom/reflow; Derived | Set browser zoom to 200% on a supported desktop viewport and complete a profile edit. | Content reflows without clipped controls or loss of task functionality. | Not run |  |  |
| PROFILE-GUI-022 | Medium | FR-04 — visual feedback; Derived | Compare default, hover, focus, disabled, saving, success, and error states for profile actions. | State changes are visible and are not conveyed by color alone. | Not run |  |  |
| PROFILE-GUI-023 | Medium | FR-04 — runtime stability; Derived | Complete the profile view and edit flow while monitoring the browser console. | No runtime error prevents viewing, editing, validation, or saving the profile. | Not run |  | Classify harness/network errors separately. |

## 4. Human-review additions

| Check ID | Gap found in initial draft | Why it matters |
| --- | --- | --- |
| PROFILE-GUI-002 | Direct unauthenticated access | Profile information is private; a navigation-only check does not verify route protection. |
| PROFILE-GUI-007 | Reload and re-login persistence | A success toast alone does not prove that the saved profile is durable or attached to the correct account. |
| PROFILE-GUI-013 | Script-like input | Profile fields are user-controlled data and must remain inert when rendered. |
| PROFILE-GUI-014 | Cross-account isolation | A profile-management flow must not leak one customer's data to another customer. |
| PROFILE-GUI-015 | Failed-save recovery | Users need to distinguish a server failure from a successful update and avoid losing entered data. |
| PROFILE-GUI-017 | Keyboard-only completion | Profile editing must remain operable without a pointer. |
| PROFILE-GUI-020 | Mobile reflow | Profile forms commonly fail through clipped fields or inaccessible actions on narrow screens. |

## 5. Execution summary

| Metric | Count |
| --- | ---: |
| Designed | 23 |
| Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |

## 6. Execution notes

Before execution, confirm the SUT's actual profile route, field list, required-field rules, and whether profile editing is part of the customer web app or another client. Replace each `Derived` oracle with the SUT-backed behavior where the implementation or fuller requirement specification provides a more precise rule. For any failed item, record one screenshot at `evidence/fr04/<ID>.png`, the observed behavior, and a linked bug identifier.
