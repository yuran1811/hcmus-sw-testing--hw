# CI/CD report

Workflow: repository root `.github/workflows/hw06-api-tests.yml`.

The manual workflow checks out this submission and the exact public SUT revision, installs Node 22 and pinned Newman dependencies, seeds SQLite, starts the backend, waits for `/api/products`, and runs Postman data through Newman. JUnit results are uploaded even when an assertion fails.

Two modes are provided:

- `pass`: runs one known-good case for each of the three API folders. Expected result: green workflow.
- `intentional-failure`: runs `CI-DEMO-FAIL-001`, which deliberately expects HTTP `418` from valid login. Expected result: red workflow with exactly one intentional assertion failure.

Local pre-publication verification on 2026-08-08 confirmed that `pass` produces three green samples (three assertions each) and `intentional-failure` exits `1` with exactly one failed assertion out of three. GitHub-hosted evidence is still required below.

## Required published runs

| Evidence | Commit | Run URL | Screenshot |
|---|---|---|---|
| All-pass sample | `TODO(HUMAN): commit SHA after push` | `TODO(HUMAN): workflow run URL` | `TODO(HUMAN): add ci/evidence/pass-run.png` |
| One-failure sample | `TODO(HUMAN): commit SHA after push` | `TODO(HUMAN): workflow run URL` | `TODO(HUMAN): add ci/evidence/intentional-fail-run.png` |

Human execution: push the repository, open **Actions → HW06 API tests – 23127065 → Run workflow**, run once with each mode, then fill the table. A local run cannot substitute for GitHub-hosted links/screenshots.
