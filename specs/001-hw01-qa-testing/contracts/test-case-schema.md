# Contract: ISTQB Test Case (R3)

**File**: `specs/001-hw01-qa-testing/contracts/test-case-schema.md`  
**Used in**: `hw01/report.md` Section 3.2  
**Count required**: Exactly 15

## Required Fields (ISTQB standard structure)

| Field | Type | Constraint |
|-------|------|------------|
| `ID` | string | TC-NN (zero-padded, 01–15) |
| `Test Case Title` | string | Verb phrase: "Verify X when Y" |
| `Requirement Traced` | string | Manufacturer spec / safety standard / user expectation |
| `Design Technique` | enum | Equivalence Partitioning \| Boundary Value Analysis \| Error Guessing \| Exploratory |
| `AI-Missed Edge Case` | boolean | Yes \| No |
| `Executed` | boolean | Yes \| No |
| `Video` | URL or "N/A" | YouTube Unlisted link if Executed=Yes |
| `Objective` | string | One sentence: what this test verifies |
| `Preconditions / Input` | list | Fan state, environment, any special setup |
| `Test Steps` | numbered list | ≥2 numbered, reproducible steps |
| `Expected Result` | string | What SHOULD happen per specification |
| `Actual Result` | string | What DID happen (or "Not executed") |
| `Verdict` | enum | PASS \| FAIL \| BLOCKED \| Not executed |
| `Defect Reference` | issue link or "N/A" | GitHub Issue link if Verdict=FAIL |

## Acceptance Criteria

- AC-1: All 7 ISTQB fields present: Objective, Input/Preconditions, Steps, Expected, Actual, Verdict — plus ID and Traced Requirement
- AC-2: `Design Technique` explicitly stated for each test case
- AC-3: At least 3 entries have `AI-Missed Edge Case: Yes`; those 3 must have: (a) screenshot of AI conversation where AI did NOT generate this case, (b) 2–3 sentence explanation of why AI missed it
- AC-4: At least 5 entries have `Executed: Yes` with a YouTube Unlisted link
- AC-5: `Actual Result` and `Verdict` must be "Not executed" ONLY for non-executed test cases (not for executed ones)
- AC-6: `Verdict: FAIL` entries must reference a GitHub Issue

## Required Coverage Distribution

| Category | Count | Technique |
|----------|-------|-----------|
| Speed settings (1/2/3) | ≥2 | Equivalence Partitioning |
| Oscillation control | ≥1 | Equivalence Partitioning |
| Timer function | ≥1 | Boundary Value Analysis |
| Height/tilt adjustment | ≥1 | Equivalence Partitioning |
| Power on/off | ≥1 | Equivalence Partitioning |
| Boundary conditions | ≥2 | Boundary Value Analysis |
| Safety/hazard testing | ≥2 | Error Guessing |
| Environmental/stress | ≥1 | Exploratory |
| Simultaneous inputs | ≥1 | Error Guessing |

## Example (compliant)

```markdown
### TC-01: Verify fan starts correctly at Speed 1

| Field | Value |
|-------|-------|
| **ID** | TC-01 |
| **Requirement Traced** | Manufacturer manual: "Press speed button once to activate Speed 1 (low)" |
| **Design Technique** | Equivalence Partitioning |
| **AI-Missed Edge Case** | No |
| **Executed** | Yes |
| **Video** | [▶ Watch](https://youtu.be/abc123) |

**Objective**: Verify that pressing the speed button once from the OFF state activates Speed 1 (low speed rotation).

**Preconditions / Input**:
- Fan state: powered OFF, plugged into standard 220V outlet
- Environment: indoor room, no obstructions within 1m of fan
- Speed control: all buttons in default state

**Test Steps**:
1. Confirm fan is in OFF state (no rotation, power LED off)
2. Press the power/speed button once
3. Observe fan rotation and LED indicator
4. Measure noise level (qualitative: low/medium/high)

**Expected Result**:
Fan blade rotates at low speed (Speed 1). Power LED illuminates. Audible noise is at low level consistent with Speed 1 operation.

**Actual Result**:
Fan blade started rotating at low speed within 2 seconds of button press. Power LED lit up green. Noise level was low.

**Verdict**: PASS

**Defect Reference**: N/A
```

## Example — AI-Missed Edge Case (compliant)

```markdown
### TC-11: Verify fan stability when guard grill is contacted during operation

| Field | Value |
|-------|-------|
| **ID** | TC-11 |
| **Requirement Traced** | IEC 60335-2-80 safety standard: "Moving parts must not be accessible during operation" |
| **Design Technique** | Error Guessing |
| **AI-Missed Edge Case** | Yes |
| **Executed** | Yes |
| **Video** | [▶ Watch](https://youtu.be/def456) |

**Why AI Missed This** (with proof):  
Screenshot: [AI conversation](../evidence/ai-tc-probe.png) (AI generated 15 test cases but none included contact with the grill during operation)  
Explanation: AI test case generators are trained on documented functional behaviors. Physical safety testing scenarios — especially those involving potential user injury risk — require human judgment grounded in safety standards (IEC 60335) and real-world use patterns that AI cannot reason about from documentation alone.

**Objective**: Verify that the fan guard grill prevents finger contact with moving blades per IEC 60335-2-80 requirements.

**Preconditions / Input**:
- Fan operating at Speed 2 (medium)
- Tester wearing a glove (for safety; test verifies grill integrity, not manual skin contact)
- No obstructions, fan on stable surface

**Test Steps**:
1. Start fan at Speed 2
2. Slowly press a gloved finger against the front face of the grill
3. Observe whether the finger can pass through grill gaps to contact the blade
4. Observe blade response and mechanical sound

**Expected Result**:
Finger contact with the grill face should NOT allow penetration to the blade. Grill gap size should be below 12mm (IEC 60335-2-80 §22.4). No blade stoppage or unusual mechanical sound from grill pressure.

**Actual Result**:
Grill gaps measured approximately 10mm — finger could not penetrate. Fan continued operating normally. Grill slightly flexed under moderate pressure but remained intact.

**Verdict**: PASS

**Defect Reference**: N/A
```
