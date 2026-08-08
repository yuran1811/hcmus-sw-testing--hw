# HW06 – API Testing – 23127065

This submission tests three distinct EShop APIs: `POST /api/login` (Pool A), `POST /api/checkout` (Pool B), and `PUT /api/admin/orders/:id/status` (Pool C). It contains 120 reviewed cases: 105 AI-origin candidates and 15 student-extension candidates.

## Submission map

| Deliverable | Location |
|---|---|
| Main API-testing report | `Main_Report.md`, `Main_Report.pdf` |
| Reviewed Excel test cases | `test-cases/23127065_HW06_Test_Cases.xlsx` |
| Postman collection/environment | `postman/` |
| External data | `test-data/` |
| Newman CLI/JSON/JUnit/HTML evidence | `newman/` |
| Genuine defect report | `Bug_Report.md` |
| CI/CD design and workflow | `ci/CI_CD_Report.md`, repository `.github/workflows/hw06-api-tests.yml` |
| AI declaration/audit | `AI_Audit_Report.md`, `AI_Audit_Report.pdf` |
| Student critique template | `AI_Critique.md`, `AI_Critique.pdf` |
| Reusable Agent Skill | `agent-skill/generate-api-tests/` |
| Human-only completion list | `HUMAN_ACTION_REQUIRED.md` |

## Reproduce

Start the EShop backend on `http://127.0.0.1:3000`, then:

```bash
npm ci
npm run test:login
npm run test:checkout
npm run test:order
```

The test scripts intentionally fail when the SUT violates a requirement. Do not change expected results merely to make Newman green.

## Verified summary

| API | Cases | Assertions | Passed assertions | Failed assertions | Bugs mapped |
|---|---:|---:|---:|---:|---:|
| Login | 40 | 90 | 70 | 20 | 3 |
| Checkout | 40 | 91 | 65 | 26 | 2 |
| Admin order status | 40 | 86 | 82 | 4 | 2 |
| **Total** | **120** | **267** | **217** | **50** | **7** |

## Self-assessment

| No. | Criterion | Maximum | Self-assessed grade |
|---:|---|---:|---:|
| 1 | API 1 full pipeline | 30 | `TODO(HUMAN)` |
| 2 | API 2 full pipeline | 30 | `TODO(HUMAN)` |
| 3 | API 3 full pipeline | 30 | `TODO(HUMAN)` |
| 4 | Agent Skill / AI-driven generator | 10 | `TODO(HUMAN)` |
| | **Total** | **100** | **`TODO(HUMAN)`** |

The repository is public at <https://github.com/yuran1811/hcmus-sw-testing--hw>. The final branch path and all GitHub Actions/Issue URLs remain human publication tasks.
