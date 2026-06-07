# Contract: Job Posting Entry (R1)

**File**: `specs/001-hw01-qa-testing/contracts/job-posting-schema.md`  
**Used in**: `hw01/report.md` Section 1.1  
**Count required**: Exactly 10

## Required Fields

| Field                     | Type              | Constraint                                                    |
| ------------------------- | ----------------- | ------------------------------------------------------------- |
| `Job Title`               | string            | Non-empty                                                     |
| `Company`                 | string            | Non-empty                                                     |
| `Platform`                | enum              | LinkedIn \| TopCV \| ITviec \| Glassdoor \| Indeed            |
| `URL`                     | URL               | Must be a working link at time of capture                     |
| `Published Date`          | date (YYYY-MM-DD) | Within 60 days of submission deadline                         |
| `Screenshot`              | file link         | `evidence/jobs/job-NN-<platform>.png`; must show account name |
| `Location`                | string            | City/country or "Remote"                                      |
| `Salary`                  | string            | Range, or "Not disclosed" — never blank                       |
| `Required Skills`         | list              | ≥3 bullet points                                              |
| `AI/LLM Skills Required`  | boolean + quote   | Yes (quote) or No                                             |
| `Job Description Summary` | string            | 3–5 sentences                                                 |
| `AI Impact Analysis`      | string            | 1–2 sentences                                                 |

## Acceptance Criteria

- AC-1: Screenshot filename matches `job-NN-<platform>.png` where `NN` is zero-padded (01–10)
- AC-2: Screenshot date visible OR taken on capture date (macOS screenshot timestamp)
- AC-3: Student's account name/username is visible in the screenshot
- AC-4: `Published Date` is within the 60-day recency window
- AC-5: At least 3 of 10 entries have `AI/LLM Skills Required: Yes`
- AC-6: `AI Impact Analysis` is not a copy of the job description — must be the student's own analysis

## Example (compliant)

```markdown
### Job-01: QA Automation Engineer at TechCorp Vietnam

| Field              | Value                                         |
| ------------------ | --------------------------------------------- |
| **Platform**       | LinkedIn                                      |
| **URL**            | https://www.linkedin.com/jobs/view/1234567890 |
| **Published Date** | 2026-05-10                                    |
| **Screenshot**     | [view](../evidence/jobs/job-01-linkedin.png)  |
| **Location**       | Ho Chi Minh City, Vietnam                     |
| **Salary**         | 25,000,000–40,000,000 VND/month               |

**Required Skills**:

- Selenium, Appium, Cypress
- API testing (Postman, REST Assured)
- Prompt engineering for test generation with LLMs
- ISTQB certification preferred

**AI/LLM Skills Required**: Yes  
_"Experience with prompt engineering for LLM-based test generation is a plus"_

**Job Description Summary**:
TechCorp Vietnam is seeking a QA Automation Engineer to work on their mobile banking platform. The role involves designing and maintaining test automation frameworks, performing API testing, and collaborating with the development team in an Agile environment.

**AI Impact Analysis**:
This role explicitly requires LLM prompt engineering skills, signaling a market shift toward AI-assisted test generation in Vietnamese fintech. The mention of "LLM-based automation" indicates that QA engineers are expected to act as AI orchestrators rather than purely manual testers.
```
