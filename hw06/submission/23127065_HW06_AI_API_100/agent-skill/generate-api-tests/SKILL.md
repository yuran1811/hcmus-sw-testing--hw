---
name: generate-api-tests
description: Generate, audit, and export traceable API test cases from an API specification. Use for Postman/Newman assignments that require domain partitions, state transitions, security checks, schema validation, external data, and a human review trail.
---

# Generate API Tests

## Workflow

1. Read the API specification and the real route implementation. Record any discrepancy instead of silently trusting the document.
2. Select endpoints and map every parameter, authorization rule, response schema, and state transition.
3. Generate at least 35 candidate cases per endpoint across domain, schema, security, and transition partitions.
4. Audit every candidate as `VALID`, `INVALID`, or `INCOMPLETE`. Give a reason and correct every non-valid candidate before execution.
5. Add at least five independently reasoned human cases per endpoint. Keep their origin distinct from AI-generated cases.
6. Run `scripts/generate_submission.py` to export the reviewed matrix, external data, Postman collection, environment, and audit manifest.
7. Execute Newman against an isolated, freshly seeded SUT. Preserve raw CLI, JSON, JUnit, and HTML evidence.
8. Compare actual results with the final expected results. Report genuine defects without weakening the assertions.

## Commands

```bash
python3 scripts/generate_submission.py --student-id 23127065 --output ../..
newman run postman/23127065_HW06.postman_collection.json \
  -e postman/localhost.postman_environment.json \
  -d test-data/login-cases.json --folder "Pool A - Login"
```

## Demonstration Video

- **YouTube Walkthrough:** <https://youtu.be/x8tdexiYHw8>

Read [references/coverage-model.md](references/coverage-model.md) before adding or changing cases. Never fabricate GitHub links, screenshots, student critique, student declarations, group uniqueness, or a self-drawn diagram.
