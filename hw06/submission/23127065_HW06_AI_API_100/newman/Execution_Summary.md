# Newman execution summary

- Execution date: 2026-08-08 (Asia/Ho_Chi_Minh)
- SUT revision: `d97f995247a4a31ac91e8c6664da6fbf58b5fbd5`
- SUT isolation: copied backend and freshly seeded SQLite database in `/private/tmp`
- Run URL: `http://127.0.0.1:31065` (command-line override; committed default is port 3000)
- Newman: 6.2.2
- HTML reporter: newman-reporter-htmlextra 1.23.1

| Folder | Iterations | Requests including setup | Assertions | Failed | HTML |
|---|---:|---:|---:|---:|---|
| Pool A – Login | 40 | 91 | 90 | 20 | `reports/login/index.html` |
| Pool B – Checkout | 40 | 78 | 91 | 26 | `reports/checkout/index.html` |
| Pool C – Admin Order Status | 40 | 197 | 86 | 4 | `reports/orderstatus/index.html` |

The setup-request counts are higher than the case counts because cases create isolated users/orders and advance prerequisite states. Exactly 40 primary cases were run per API. All 120 primary requests carried `X-Student-Id: 23127065`; the Postman tests also asserted the header value in every iteration.

Failures were retained because they expose requirement defects. See `../Bug_Report.md` for consolidation from 50 failed assertions into seven genuine bugs.
