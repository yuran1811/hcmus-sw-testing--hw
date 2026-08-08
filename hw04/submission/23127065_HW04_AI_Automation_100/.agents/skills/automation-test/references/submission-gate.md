# Submission gate

Apply this gate after automation repair and before reporting completion.

- Exactly three features are selected.
- Every feature has at least 12 documented cases, matching external data IDs and Playwright titles.
- Test discovery contains every logical case in Chromium, Firefox, and WebKit.
- Every discovered case is attempted; failures do not abort later matrix cells.
- Nine separate HTML reports show `Run by: <StudentID>` and an ISO timestamp.
- A JSON result records every case and its failure attachments.
- Every confirmed defect has fresh run evidence and one deduplicated GitHub issue.
- Automation, data, and environment failures are not counted as product defects.
- Audit, critique, main report, README summary, and honest git log agree with the generated results.

Run:

```sh
node .agents/skills/automation-test/scripts/audit-assignment.mjs \
  --root hw04/submission/<submission-folder> \
  --student-id <StudentID>
```
