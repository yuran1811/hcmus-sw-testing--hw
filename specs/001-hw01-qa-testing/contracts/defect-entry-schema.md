# Contract: Software Defect Entry (R2)

**File**: `specs/001-hw01-qa-testing/contracts/defect-entry-schema.md`  
**Used in**: `hw01/report.md` Section 2  
**Count required**: Exactly 20

## Required Fields

| Field | Type | Constraint |
|-------|------|------------|
| `Defect Name / CVE ID` | string | CVE-YYYY-NNNNN for CVEs; descriptive name for others |
| `Year Publicized` | year | 2022–2026 |
| `Source URL` | URL | Publicly accessible CVE entry, vendor advisory, or news article |
| `Affected System` | string | Software/system name + version if known |
| `Severity` | enum | Critical \| Major \| Minor \| Trivial (ISTQB-aligned) |
| `Type` | enum | AI/LLM \| Security \| Performance \| UI \| Data \| Other |
| `Description` | string | 2–3 sentences — what happened |
| `Consequences` | string | Impact: data loss, breach, financial, safety, etc. |
| `Solution / Fix` | string | Patch version, workaround, or vendor action taken |
| `Prompt sent to AI` | string | Exact prompt used to probe AI |
| `AI Tool` | string | Claude / ChatGPT / other |
| `Bias observed` | string | Describe the hallucination/bias found |
| `Correct information` | string | What the source actually says |

## Acceptance Criteria

- AC-1: `Year Publicized` is between 2022 and 2026 inclusive
- AC-2: `Source URL` is a direct link to a public record (CVE page, advisory, article)
- AC-3: Severity uses exactly one of the four ISTQB labels (no custom terms)
- AC-4: At least 5 of 20 entries have `Type: AI/LLM`
- AC-5: Every entry must have a non-empty `Bias observed` block — "AI was correct" is insufficient; must probe further or document overconfidence
- AC-6: `Correct information` cites the source (URL or document)

## Severity Definitions (ISTQB-aligned)

| Severity | Definition |
|----------|------------|
| Critical | System crash, data loss, security breach, safety hazard — no workaround |
| Major | Major function fails, significant loss of functionality, workaround painful |
| Minor | Non-critical impairment, workaround exists, limited user impact |
| Trivial | Cosmetic, minor inconvenience, documentation error, no functional impact |

## Example (compliant)

```markdown
### Defect-01: CVE-2023-36052 — Azure CLI Secret Exposure in GitHub Actions Logs

| Field | Value |
|-------|-------|
| **Year Publicized** | 2023 |
| **Source URL** | https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36052 |
| **Affected System** | Azure CLI 2.53.0 and earlier |
| **Severity** | Major |
| **Type** | Security |

**Description**:
Azure CLI logged sensitive environment variables (including secrets and credentials) in plain text within GitHub Actions workflow logs. Any user with read access to the repository's Actions tab could view exposed secrets.

**Consequences**:
Unauthorized access to Azure subscriptions and resources if the logs were accessed by malicious actors. Organizations using Azure CLI in CI/CD pipelines were at risk of credential theft.

**Solution / Fix**:
Microsoft released Azure CLI 2.53.1 with a fix that redacts sensitive values from output. Users were advised to rotate any credentials exposed in logs and upgrade immediately.

**AI Bias / Hallucination Identified**:
- **Prompt sent**: "Explain CVE-2023-36052 — what caused it, how severe was it, and what was the fix?"
- **Tool**: Claude
- **Bias observed**: Claude stated the CVSS base score was 9.8 (Critical). The actual CVSS v3.1 score is 8.6 (High/Major), not Critical. Claude also hallucinated that "any unauthenticated user on the internet could access the logs," when in reality it required repository read access.
- **Correct information**: CVSS 8.6 per Microsoft Security Response Center at https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36052
```
