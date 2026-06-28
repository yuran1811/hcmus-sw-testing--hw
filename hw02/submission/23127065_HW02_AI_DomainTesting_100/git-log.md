* commit 2a4aeeba10cf9426a82d2046a110cd2700aebf96
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sun Jun 28 21:06:52 2026 +0700
| 
|     fix: correct gh issue environment section
|     
|     Date:      Sun Jun 28 21:06:52 2026 +0700
| 
|  tests/github-issues/BUG-01.md             |   3 +-
|  tests/github-issues/BUG-02.md             |   3 +-
|  tests/github-issues/BUG-03.md             |   3 +-
|  tests/github-issues/BUG-04.md             |   3 +-
|  tests/github-issues/BUG-05.md             |   3 +-
|  tests/github-issues/BUG-06.md             |   3 +-
|  tests/github-issues/BUG-07.md             |   3 +-
|  tests/github-issues/BUG-08.md             |   3 +-
|  tests/github-issues/BUG-09.md             |   3 +-
|  tests/github-issues/BUG-10.md             |   3 +-
|  tests/github-issues/BUG-11.md             |   3 +-
|  tests/github-issues/BUG-12.md             |   3 +-
|  tests/github-issues/BUG-13.md             |   3 +-
|  tests/github-issues/BUG-14.md             |   3 +-
|  tests/github-issues/BUG-15.md             |   3 +-
|  tests/github-issues/BUG-16.md             |   3 +-
|  tests/github-issues/BUG-17.md             |   3 +-
|  tests/github-issues/BUG-18.md             |   3 +-
|  tests/github-issues/BUG-19.md             |   3 +-
|  tests/github-issues/BUG-20.md             |   3 +-
|  tests/github-issues/BUG-21.md             |   3 +-
|  tests/github-issues/BUG-22.md             |   3 +-
|  tests/github-issues/BUG-23.md             |   3 +-
|  tests/github-issues/BUG-24.md             |   3 +-
|  tests/github-issues/BUG-25.md             |   3 +-
|  tests/github-issues/BUG-26.md             |   3 +-
|  tests/test-summary/traceability-matrix.md | 170 ++++++++++++++--------------
|  27 files changed, 111 insertions(+), 137 deletions(-)
| 
* commit c1c63c3bea11c28b96bf3d5ecdf85f2967190d35
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sun Jun 28 21:05:46 2026 +0700
| 
|     fix: correct FR-09 tests
| 
|  tests/github-issues/BUG-08.md             |   8 +-
|  tests/github-issues/BUG-22.md             |   6 +-
|  tests/test-runs/sprint-1-test-run.md      | 172 ++++++++++++++--------------
|  tests/test-summary/traceability-matrix.md | 170 +++++++++++++--------------
|  4 files changed, 178 insertions(+), 178 deletions(-)
| 
* commit c980e01d2ec26201c8f2e4832e9a9547da056106
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sun Jun 28 17:56:31 2026 +0700
| 
|     fix: correct FR-06 tests
| 
|  tests/github-issues/BUG-01.md                            |  8 ++++----
|  tests/github-issues/BUG-03.md                            | 10 +++++-----
|  tests/test-cases/product-detail/TC-PRODUCT-DETAIL-001.md |  2 +-
|  tests/test-cases/product-detail/TC-PRODUCT-DETAIL-008.md |  2 +-
|  tests/test-runs/sprint-1-test-run.md                     | 14 +++++++-------
|  tests/test-summary/traceability-matrix.md                | 12 ++++++------
|  6 files changed, 24 insertions(+), 24 deletions(-)
| 
* commit cf0c68a0b7a2b5b8b75b9f9728bf9ad47e9bf557
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 22:40:01 2026 +0700
| 
|     test: create gh-issue drafts
| 
|  .serena/memories/eshop-sut/issue-reporting.md |   4 +
|  .serena/memories/memory_maintenance.md        |  33 +++++
|  tests/github-issues/BUG-01.md                 |  48 +++++++
|  tests/github-issues/BUG-02.md                 |  49 +++++++
|  tests/github-issues/BUG-03.md                 |  49 +++++++
|  tests/github-issues/BUG-04.md                 |  49 +++++++
|  tests/github-issues/BUG-05.md                 |  48 +++++++
|  tests/github-issues/BUG-06.md                 |  48 +++++++
|  tests/github-issues/BUG-07.md                 |  48 +++++++
|  tests/github-issues/BUG-08.md                 |  48 +++++++
|  tests/github-issues/BUG-09.md                 |  48 +++++++
|  tests/github-issues/BUG-10.md                 |  48 +++++++
|  tests/github-issues/BUG-11.md                 |  48 +++++++
|  tests/github-issues/BUG-12.md                 |  48 +++++++
|  tests/github-issues/BUG-13.md                 |  48 +++++++
|  tests/github-issues/BUG-14.md                 |  48 +++++++
|  tests/github-issues/BUG-15.md                 |  48 +++++++
|  tests/github-issues/BUG-16.md                 |  48 +++++++
|  tests/github-issues/BUG-17.md                 |  48 +++++++
|  tests/github-issues/BUG-18.md                 |  48 +++++++
|  tests/github-issues/BUG-19.md                 |  48 +++++++
|  tests/github-issues/BUG-20.md                 |  49 +++++++
|  tests/github-issues/BUG-21.md                 |  48 +++++++
|  tests/github-issues/BUG-22.md                 |  48 +++++++
|  tests/github-issues/BUG-23.md                 |  49 +++++++
|  tests/github-issues/BUG-24.md                 |  48 +++++++
|  tests/github-issues/BUG-25.md                 |  48 +++++++
|  tests/github-issues/BUG-26.md                 |  48 +++++++
|  tests/test-summary/traceability-matrix.md     | 170 ++++++++++++------------
|  29 files changed, 1375 insertions(+), 85 deletions(-)
| 
* commit d92b189a6f067d59b6fb302ee23152782e4123b1
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 22:10:20 2026 +0700
| 
|     chore: move spec script to test-scripts
| 
|  tests/{ => test-scripts}/cart-mobile.spec.js    | 2 +-
|  tests/{ => test-scripts}/coupon-admin.spec.js   | 2 +-
|  tests/{ => test-scripts}/coupon.spec.js         | 2 +-
|  tests/{ => test-scripts}/product-detail.spec.js | 0
|  4 files changed, 3 insertions(+), 3 deletions(-)
| 
* commit 5f5cf76608dbdc651329f28f2e03ac2ce76a1823
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 22:00:11 2026 +0700
| 
|     test: run cart mobile test (FR-20)
| 
|  tests/cart-mobile.spec.js                         | 523 ++++++++++++++++++++
|  .../error-context.md"                             | 141 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 23635 bytes
|  .../video.webm"                                   | Bin 0 -> 48565 bytes
|  .../error-context.md"                             | 164 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 30076 bytes
|  .../video.webm"                                   | Bin 0 -> 95242 bytes
|  .../error-context.md"                             | 186 +++++++
|  .../test-failed-1.png"                            | Bin 0 -> 33199 bytes
|  .../video.webm"                                   | Bin 0 -> 103007 bytes
|  tests/test-runs/sprint-1-test-run.md              | 148 +++---
|  tests/test-summary/traceability-matrix.md         | 170 +++----
|  12 files changed, 1185 insertions(+), 147 deletions(-)
| 
* commit 2dc0986ed0050b2777ccebfd5003d2d5a52ed620
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 21:46:55 2026 +0700
| 
|     test: run coupon-admin test cases (FR-17)
| 
|  tests/coupon-admin.spec.js                        | 764 ++++++++++++++++++++
|  .../error-context.md"                             | 226 ++++++
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 226 ++++++
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 159 ++++
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  .../error-context.md"                             | 226 ++++++
|  .../test-failed-1.png"                            | Bin 0 -> 4254 bytes
|  .../video.webm"                                   | Bin 0 -> 1924 bytes
|  tests/test-runs/sprint-1-test-run.md              |  28 +-
|  tests/test-summary/traceability-matrix.md         |  52 +-
|  27 files changed, 3010 insertions(+), 27 deletions(-)
| 
* commit 5e86e8dc09610af3d1fe792bc4c0628da47cf899
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 21:20:40 2026 +0700
| 
|     test: run coupon test cases (FR-09)
|     
|     Date:      Sat Jun 27 21:20:40 2026 +0700
| 
|  tests/coupon.spec.js                              | 329 ++++++++++++++++++++
|  tests/test-results/.last-run.json                 |  16 +-
|  .../error-context.md"                             | 189 +++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 50224 bytes
|  .../video.webm"                                   | Bin 0 -> 79393 bytes
|  .../error-context.md"                             | 222 +++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 50894 bytes
|  .../video.webm"                                   | Bin 0 -> 76630 bytes
|  .../error-context.md"                             | 258 +++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 44964 bytes
|  .../video.webm"                                   | Bin 0 -> 67451 bytes
|  .../error-context.md"                             | 225 +++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 47210 bytes
|  .../video.webm"                                   | Bin 0 -> 114627 bytes
|  .../error-context.md"                             | 245 +++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 49184 bytes
|  .../video.webm"                                   | Bin 0 -> 76195 bytes
|  .../error-context.md"                             | 258 +++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 47232 bytes
|  .../video.webm"                                   | Bin 0 -> 111922 bytes
|  .../error-context.md"                             | 254 +++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 47071 bytes
|  .../video.webm"                                   | Bin 0 -> 71333 bytes
|  .../error-context.md"                             | 248 +++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 46765 bytes
|  .../video.webm"                                   | Bin 0 -> 109704 bytes
|  .../error-context.md"                             | 264 ++++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 50224 bytes
|  .../video.webm"                                   | Bin 0 -> 112819 bytes
|  .../error-context.md"                             | 227 ++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 50535 bytes
|  .../video.webm"                                   | Bin 0 -> 80621 bytes
|  .../error-context.md"                             | 222 +++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 50209 bytes
|  .../video.webm"                                   | Bin 0 -> 74678 bytes
|  tests/test-runs/sprint-1-test-run.md              |  54 ++--
|  tests/test-summary/traceability-matrix.md         |  36 +--
|  37 files changed, 3006 insertions(+), 41 deletions(-)
| 
* commit becbd3f9c4166755323f58184580986d10fa53b8
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 21:13:13 2026 +0700
| 
|     test: run product-detail test cases (FR-06)
|     
|     Date:      Sat Jun 27 21:13:13 2026 +0700
| 
|  frontend-mobile/package-lock.json                 | 205 +++++++++++-
|  frontend-mobile/package.json                      |   4 +-
|  tests/package.json                                |  11 +
|  tests/playwright.config.js                        |  22 ++
|  tests/product-detail.spec.js                      | 330 ++++++++++++++++++++
|  tests/test-results/.last-run.json                 |  10 +
|  .../error-context.md"                             | 195 ++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 38688 bytes
|  .../video.webm"                                   | Bin 0 -> 95936 bytes
|  .../error-context.md"                             | 239 ++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 40617 bytes
|  .../video.webm"                                   | Bin 0 -> 75870 bytes
|  .../error-context.md"                             | 221 +++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 37359 bytes
|  .../video.webm"                                   | Bin 0 -> 60244 bytes
|  .../error-context.md"                             | 227 ++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 36175 bytes
|  .../video.webm"                                   | Bin 0 -> 70364 bytes
|  .../error-context.md"                             | 243 ++++++++++++++
|  .../test-failed-1.png"                            | Bin 0 -> 38845 bytes
|  .../video.webm"                                   | Bin 0 -> 68159 bytes
|  tests/test-runs/sprint-1-test-run.md              |  30 +-
|  tests/test-summary/traceability-matrix.md         |  30 +-
|  23 files changed, 1747 insertions(+), 20 deletions(-)
| 
* commit f522bb119108851804bbfd1497f2fdee2f2122f6
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 18:40:22 2026 +0700
| 
|     feat: add sprint-1-test-run documentation and update database schema
| 
|  tests/test-runs/sprint-1-test-run.md | 3 +++
|  1 file changed, 3 insertions(+)
| 
* commit 9fe8a73ba72a888600d3bc9ae10d61b29289090c
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 18:40:09 2026 +0700
| 
|     test: add test cases for FR-20 (cart)
| 
|  .../test-cases/cart-mobile/TC-CART-MOBILE-001.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-002.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-003.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-004.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-005.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-006.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-007.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-008.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-009.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-010.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-011.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-012.md  | 37 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-013.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-014.md  | 35 ++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-015.md  | 39 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-016.md  | 37 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-017.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-018.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-019.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-020.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-021.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-022.md  | 38 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-023.md  | 41 ++++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-024.md  | 39 +++++++++
|  .../test-cases/cart-mobile/TC-CART-MOBILE-BVA.md  | 57 +++++++++++++
|  tests/test-cases/cart-mobile/TC-CART-MOBILE-DT.md | 69 ++++++++++++++++
|  .../cart-mobile/TEST-PLAN-CART-MOBILE.md          | 91 +++++++++++++++++++++
|  tests/test-summary/traceability-matrix.md         | 24 ++++++
|  28 files changed, 1177 insertions(+)
| 
* commit f359171f29a9751475f46af26d3b2f98d0cce91f
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 17:04:36 2026 +0700
| 
|     test: add test cases for FR-17
| 
|  .../coupon-admin/TC-COUPON-ADMIN-001.md           | 55 ++++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-002.md           | 55 ++++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-003.md           | 49 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-004.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-005.md           | 46 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-006.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-007.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-008.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-009.md           | 46 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-010.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-011.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-012.md           | 49 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-013.md           | 38 ++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-014.md           | 33 +++++++
|  .../coupon-admin/TC-COUPON-ADMIN-015.md           | 36 ++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-016.md           | 46 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-017.md           | 47 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-018.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-019.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-020.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-021.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-022.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-023.md           | 50 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-024.md           | 52 +++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-025.md           | 45 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-026.md           | 47 ++++++++++
|  .../coupon-admin/TC-COUPON-ADMIN-BVA.md           | 81 +++++++++++++++++
|  .../test-cases/coupon-admin/TC-COUPON-ADMIN-DT.md | 99 +++++++++++++++++++++
|  .../coupon-admin/TEST-PLAN-COUPON-ADMIN.md        |  3 +-
|  29 files changed, 1426 insertions(+), 1 deletion(-)
| 
* commit 718ebefd05158eb2b6f7222fd1161f87a697e923
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 16:58:47 2026 +0700
| 
|     test: add test cases for FR-09
| 
|  tests/test-cases/coupon/TC-COUPON-001.md    | 42 ++++++++++++
|  tests/test-cases/coupon/TC-COUPON-002.md    | 42 ++++++++++++
|  tests/test-cases/coupon/TC-COUPON-003.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-004.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-005.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-006.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-007.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-008.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-009.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-010.md    | 42 ++++++++++++
|  tests/test-cases/coupon/TC-COUPON-011.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-012.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-013.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-014.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-015.md    | 41 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-016.md    | 42 ++++++++++++
|  tests/test-cases/coupon/TC-COUPON-017.md    | 40 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-018.md    | 39 +++++++++++
|  tests/test-cases/coupon/TC-COUPON-BVA.md    | 99 +++++++++++++++++++++++++++
|  tests/test-cases/coupon/TC-COUPON-DT.md     | 72 +++++++++++++++++++
|  tests/test-cases/coupon/TEST-PLAN-COUPON.md |  3 +
|  tests/test-summary/traceability-matrix.md   |  6 +-
|  22 files changed, 911 insertions(+), 3 deletions(-)
| 
* commit 37cdbecaf887066d89b2d47604479a0928717621
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 16:44:50 2026 +0700
| 
|     test: add test cases for FR-06
| 
|  .../product-detail/TC-PRODUCT-DETAIL-001.md       | 41 ++++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-002.md       | 36 ++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-003.md       | 35 +++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-004.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-005.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-006.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-007.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-008.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-009.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-010.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-011.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-012.md       | 40 +++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-013.md       | 37 ++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-014.md       | 37 ++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-015.md       | 41 ++++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-BVA.md       | 37 ++++++++++++++++
|  .../product-detail/TC-PRODUCT-DETAIL-DT.md        | 48 +++++++++++++++++++++
|  tests/test-summary/traceability-matrix.md         |  4 ++
|  18 files changed, 676 insertions(+)
| 
* commit 1c36ab2706407a709ac699996ae0faaebd1eb280
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 16:32:19 2026 +0700
| 
|     chore: correct the skills
|     
|     Date:      Sat Jun 27 16:32:19 2026 +0700
| 
|  .agents/skills/bva/SKILL.md            | 59 +++++++++++++++++++++++---------
|  .agents/skills/domain-testing/SKILL.md | 25 +++++++++-----
|  2 files changed, 59 insertions(+), 25 deletions(-)
| 
* commit 34169ad80b7da46c75b5d5505fea90dfecda497e
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 16:04:49 2026 +0700
| 
|     test: enhance test plans
| 
|  .../coupon-admin/TEST-PLAN-COUPON-ADMIN.md        | 92 ++++++++++-----------
|  tests/test-cases/coupon/TEST-PLAN-COUPON.md       | 85 ++++++++++---------
|  .../product-detail/TEST-PLAN-PRODUCT-DETAIL.md    | 64 +++++++-------
|  3 files changed, 126 insertions(+), 115 deletions(-)
| 
* commit 372084b3c55dafa44db6eaac06dbc97b7966c66f
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Sat Jun 27 15:11:52 2026 +0700
| 
|     feat: add test plan for coupon; coupon-admin; product-detail
| 
|  .../coupon-admin/TEST-PLAN-COUPON-ADMIN.md        | 120 ++++++++++++++++++++
|  tests/test-cases/coupon/TEST-PLAN-COUPON.md       | 103 +++++++++++++++++
|  .../product-detail/TEST-PLAN-PRODUCT-DETAIL.md    |  67 +++++++++++
|  tests/test-summary/traceability-matrix.md         |  60 +++++++++-
|  4 files changed, 347 insertions(+), 3 deletions(-)
| 
* commit 99c5a60ea95f59aa01ca1dd88cade2039f7ff605
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Fri Jun 26 21:41:53 2026 +0700
| 
|     feat: init skills and agents
| 
|  .agents/skills/bva/SKILL.md                  | 226 +++++++++++++++++++++
|  .agents/skills/domain-testing/SKILL.md       | 261 +++++++++++++++++++++++++
|  .claude/skills/bva                           |   1 +
|  .claude/skills/domain-testing                |   1 +
|  .claude/skills/test-runner                   |   1 +
|  .claude/skills/test-writer                   |   1 +
|  .github/ISSUE_TEMPLATE/bug_report.md         |   6 +-
|  .github/agents/qa.agent.md                   |  38 ++++
|  .github/prompts/test-plan.prompt.md          |  66 +++++++
|  .github/prompts/test-run.prompt.md           |  60 ++++++
|  .github/prompts/test-write.prompt.md         |  44 +++++
|  .github/skills/bva                           |   1 +
|  .github/skills/domain-testing                |   1 +
|  .gitignore                                   |   3 +-
|  .oxfmtrc.json                                |  21 ++
|  .serena/.gitignore                           |   2 +
|  .serena/project.yml                          | 132 +++++++++++++
|  .vscode/mcp.json                             |  49 +++++
|  .vscode/settings.json                        |  26 +++
|  api_specification.md                         |  34 +++-
|  scripts/sync-skills.sh                       |   2 +-
|  setup_guide.md                               |  21 +-
|  tests/test-cases/login/TC-LOGIN-001.md       |  33 ----
|  tests/test-cases/register/TC-REGISTER-001.md |   0
|  24 files changed, 976 insertions(+), 54 deletions(-)
| 
* commit 3bc3b7c2b68afb3ba4da251c58c75ced05e798cd
| Author: Yuran <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 17:15:53 2026 +0700
| 
|     chore: create bug issue templates
| 
|  .github/ISSUE_TEMPLATE/bug-report.yaml | 89 --------------------------------
|  .github/ISSUE_TEMPLATE/bug_report.md   | 42 +++++++++++++++
|  .github/ISSUE_TEMPLATE/config.yml      |  1 +
|  .github/ISSUE_TEMPLATE/test-run.yaml   |  0
|  .github/ISSUE_TEMPLATE/test-task.yaml  |  0
|  .github/workflows/ci.yaml              | 15 ++++++
|  6 files changed, 58 insertions(+), 89 deletions(-)
| 
* commit 3741bd9aeeebfb2ffab24f8714a1d4a360c9bb07
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 17:12:12 2026 +0700
| 
|     chore: update templates
| 
|  .github/ISSUE_TEMPLATE/bug-report.yaml    | 89 +++++++++++++++++++++++++++++
|  tests/test-cases/login/TC-LOGIN-001.md    | 33 +++++++++++
|  tests/test-summary/traceability-matrix.md |  3 +
|  3 files changed, 125 insertions(+)
| 
* commit b2dd8abf0021257cad1d63ef4dbe38338f178803
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 17:06:15 2026 +0700
| 
|     chore: prepare template
| 
|  .agents/skills/test-runner/SKILL.md          |    0
|  .agents/skills/test-writer/SKILL.md          |    0
|  .github/ISSUE_TEMPLATE/bug-report.yaml       |    0
|  .github/ISSUE_TEMPLATE/test-run.yaml         |    0
|  .github/ISSUE_TEMPLATE/test-task.yaml        |    0
|  .github/agents/qa.agent.md                   |    0
|  .github/prompts/test-plan.prompt.md          |    0
|  .github/prompts/test-run.prompt.md           |    0
|  .github/prompts/test-write.prompt.md         |    0
|  .github/skills/test-runner                   |    1 +
|  .github/skills/test-writer                   |    1 +
|  frontend-mobile/pnpm-lock.yaml               | 5625 ++++++++++++++++++++++++
|  run_servers.sh                               |    5 -
|  scripts/clean.sh                             |   26 +
|  scripts/install.sh                           |    5 +
|  scripts/run.sh                               |    5 +
|  scripts/sync-skills.sh                       |   13 +
|  tests/test-cases/login/TC-LOGIN-001.md       |    0
|  tests/test-cases/register/TC-REGISTER-001.md |    0
|  tests/test-runs/sprint-1-test-run.md         |    0
|  tests/test-summary/traceability-matrix.md    |    0
|  21 files changed, 5676 insertions(+), 5 deletions(-)
| 
* commit 8498ae513eb195e9db4b1a1be0c14729e3edc248
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 16:43:45 2026 +0700
| 
|     chore: add sqlite3 as built deps
| 
|  backend/pnpm-workspace.yaml | 2 ++
|  1 file changed, 2 insertions(+)
| 
* commit 7b2739cb2aa1b0245211097c0612849f5c99f534
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 16:29:07 2026 +0700
| 
|     chore: add install in run server script
| 
|  run_servers.sh | 6 +++---
|  1 file changed, 3 insertions(+), 3 deletions(-)
| 
* commit 31eb8f205b2fa4653df7ad8379d4ea40a412b48a
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 16:23:58 2026 +0700
| 
|     chore: add .gitignore and pnpm-lock.json
| 
|  .gitignore                    |    2 +
|  backend/pnpm-lock.yaml        | 1103 +++++++++++++++++++
|  frontend-admin/pnpm-lock.yaml | 2233 +++++++++++++++++++++++++++++++++++++++
|  frontend-web/pnpm-lock.yaml   | 2233 +++++++++++++++++++++++++++++++++++++++
|  4 files changed, 5571 insertions(+)
| 
* commit e00dcc84b9d312b14680e3d16e3ee5a804734451
| Author: yuran1811 <trieuvanbd123@gmail.com>
| Date:   Mon Jun 8 16:20:43 2026 +0700
| 
|     fix: correct
| 
|  backend/package.json | 2 +-
|  run_servers.sh       | 6 +++---
|  2 files changed, 4 insertions(+), 4 deletions(-)
| 
* commit 85af3ba875c88283615e22cb108f13e2fccaf0e9
| Author: ttbhanh-hcmus <ttbhanh@hcmus.edu.vn>
| Date:   Fri May 15 08:30:35 2026 +0700
| 
|     first upload
| 
|  README.md                                 |  290 +-
|  api_specification.md                      |  214 +
|  backend/database.js                       |  119 +
|  backend/database.sqlite                   |  Bin 0 -> 36864 bytes
|  backend/package-lock.json                 | 1663 +++++
|  backend/package.json                      |   20 +
|  backend/server.js                         |  572 ++
|  backend/test_profile.js                   |    8 +
|  frontend-admin/.gitignore                 |   24 +
|  frontend-admin/README.md                  |   16 +
|  frontend-admin/eslint.config.js           |   21 +
|  frontend-admin/index.html                 |   13 +
|  frontend-admin/package-lock.json          | 3681 +++++++++++
|  frontend-admin/package.json               |   32 +
|  frontend-admin/postcss.config.js          |    6 +
|  frontend-admin/public/favicon.svg         |    1 +
|  frontend-admin/public/icons.svg           |   24 +
|  frontend-admin/src/App.css                |  184 +
|  frontend-admin/src/App.jsx                |  922 +++
|  frontend-admin/src/assets/hero.png        |  Bin 0 -> 13057 bytes
|  frontend-admin/src/assets/react.svg       |    1 +
|  frontend-admin/src/assets/vite.svg        |    1 +
|  frontend-admin/src/index.css              |    8 +
|  frontend-admin/src/main.jsx               |   10 +
|  frontend-admin/tailwind.config.js         |   11 +
|  frontend-admin/vite.config.js             |   11 +
|  frontend-mobile/.gitignore                |   41 +
|  frontend-mobile/App.js                    | 1300 ++++
|  frontend-mobile/app.json                  |   29 +
|  frontend-mobile/assets/adaptive-icon.png  |  Bin 0 -> 17547 bytes
|  frontend-mobile/assets/favicon.png        |  Bin 0 -> 1466 bytes
|  frontend-mobile/assets/icon.png           |  Bin 0 -> 22380 bytes
|  frontend-mobile/assets/splash-icon.png    |  Bin 0 -> 17547 bytes
|  frontend-mobile/index.js                  |    8 +
|  frontend-mobile/package-lock.json         | 8773 +++++++++++++++++++++++++++
|  frontend-mobile/package.json              |   18 +
|  frontend-web/.gitignore                   |   24 +
|  frontend-web/README.md                    |   16 +
|  frontend-web/eslint.config.js             |   21 +
|  frontend-web/index.html                   |   13 +
|  frontend-web/package-lock.json            | 3681 +++++++++++
|  frontend-web/package.json                 |   32 +
|  frontend-web/postcss.config.js            |    6 +
|  frontend-web/public/favicon.svg           |    1 +
|  frontend-web/public/icons.svg             |   24 +
|  frontend-web/src/App.css                  |  184 +
|  frontend-web/src/App.jsx                  |   71 +
|  frontend-web/src/assets/hero.png          |  Bin 0 -> 13057 bytes
|  frontend-web/src/assets/react.svg         |    1 +
|  frontend-web/src/assets/vite.svg          |    1 +
|  frontend-web/src/context/AuthContext.jsx  |   50 +
|  frontend-web/src/context/CartContext.jsx  |   36 +
|  frontend-web/src/index.css                |   14 +
|  frontend-web/src/main.jsx                 |   10 +
|  frontend-web/src/pages/Cart.jsx           |   79 +
|  frontend-web/src/pages/Checkout.jsx       |  151 +
|  frontend-web/src/pages/ForgotPassword.jsx |  100 +
|  frontend-web/src/pages/Home.jsx           |  116 +
|  frontend-web/src/pages/Login.jsx          |   69 +
|  frontend-web/src/pages/ProductDetail.jsx  |   73 +
|  frontend-web/src/pages/Profile.jsx        |  217 +
|  frontend-web/src/pages/Register.jsx       |   83 +
|  frontend-web/tailwind.config.js           |   11 +
|  frontend-web/vite.config.js               |    7 +
|  run_servers.sh                            |    5 +
|  setup_guide.md                            |  117 +
|  66 files changed, 23232 insertions(+), 2 deletions(-)
| 
* commit 2f9bf2bab45855abf211377a5d5eba10031649e3
  Author: Hanh Tran <ttbhanh@fit.hcmus.edu.vn>
  Date:   Fri May 15 08:27:44 2026 +0700
  
      Initial commit
  
   README.md | 2 ++
   1 file changed, 2 insertions(+)
