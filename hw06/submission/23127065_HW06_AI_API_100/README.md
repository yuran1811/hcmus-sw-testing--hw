# HW06 – API Testing – 23127065

- **Student ID:** 23127065
- **Student Name:** NGÔ NGUYỄN THẾ KHOA (Ngo Nguyen The Khoa)
- **Class:** 23KTPM3
- **Course:** CS423 / CSC13003 – Software Testing

This submission tests three distinct EShop APIs: `POST /api/login` (Pool A), `POST /api/checkout` (Pool B), and `PUT /api/admin/orders/:id/status` (Pool C). It contains 120 reviewed cases: 105 AI-origin candidates and 15 student-extension candidates.

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
| 1 | API 1 full pipeline | 30 | 30 |
| 2 | API 2 full pipeline | 30 | 30 |
| 3 | API 3 full pipeline | 30 | 30 |
| 4 | Agent Skill / AI-driven generator | 10 | 10 |
| | **Total** | **100** | **100** |

The repository is public at <https://github.com/yuran1811/hcmus-sw-testing--hw>.
