# Task 1 Bug Report

Execution: 2026-07-30T02:02:12.546Z. All findings below were reproduced against the local EShop SUT.

## BUG-CART-01 — Cart page lacks the required page heading and breadcrumb

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) |
| Affected checks | CART-GUI-002, CART-GUI-003, CART-GUI-045 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-002, CART-GUI-003, CART-GUI-045.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The page has no h1; its title is rendered as h2. No breadcrumb is rendered on /cart. Accessibility structure lacks the required page h1.

**Evidence:** [CART-GUI-002](evidence/task1/CART-GUI-002.png), [CART-GUI-003](evidence/task1/CART-GUI-003.png), [CART-GUI-045](evidence/task1/CART-GUI-045.png)

![GitHub issue BUG-CART-01](evidence/task1/gh-issues/BUG-CART-01.png)

## BUG-CART-02 — Cart navigation has no active state or quantity badge

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web header and /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/3) |
| Affected checks | CART-GUI-004, CART-GUI-005 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web header and /cart.
3. Perform the actions described by CART-GUI-004, CART-GUI-005.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The Cart link has only a hover style and no active state. The navigation has no cart quantity badge.

**Evidence:** [CART-GUI-004](evidence/task1/CART-GUI-004.png), [CART-GUI-005](evidence/task1/CART-GUI-005.png)

![GitHub issue BUG-CART-02](evidence/task1/gh-issues/BUG-CART-02.png)

## BUG-CART-05 — Empty cart state has no icon or illustration

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/4) |
| Affected checks | CART-GUI-010 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-010.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Empty state has no icon or illustration.

**Evidence:** [CART-GUI-010](evidence/task1/CART-GUI-010.png)

![GitHub issue BUG-CART-05](evidence/task1/gh-issues/BUG-CART-05.png)

## BUG-CART-06 — Cart focus indicator is not visibly exposed

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/5) |
| Affected checks | CART-GUI-043 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-043.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Focus indicator is removed or imperceptible.

**Evidence:** [CART-GUI-043](evidence/task1/CART-GUI-043.png)

![GitHub issue BUG-CART-06](evidence/task1/gh-issues/BUG-CART-06.png)

## BUG-CART-09 — Cart table uses the wrong unit-price column label

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/6) |
| Affected checks | CART-GUI-015 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-015.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The table uses “Giá” instead of the required “Đơn giá”.

**Evidence:** [CART-GUI-015](evidence/task1/CART-GUI-015.png)

![GitHub issue BUG-CART-09](evidence/task1/gh-issues/BUG-CART-09.png)

## BUG-CART-11 — Cart total is labeled Tổng tạm tính instead of Tổng cộng

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/7) |
| Affected checks | CART-GUI-020 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-020.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The value is correct but the label is “Tổng tạm tính”, contrary to FR-07.

**Evidence:** [CART-GUI-020](evidence/task1/CART-GUI-020.png)

![GitHub issue BUG-CART-11](evidence/task1/gh-issues/BUG-CART-11.png)

## BUG-CART-12 — Adding the same product creates duplicate cart rows

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web product detail and /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/8) |
| Affected checks | CART-GUI-021 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web product detail and /cart.
3. Perform the actions described by CART-GUI-021.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Adding the same product creates a duplicate row.

**Evidence:** [CART-GUI-021](evidence/task1/CART-GUI-021.png)

![GitHub issue BUG-CART-12](evidence/task1/gh-issues/BUG-CART-12.png)

## BUG-CART-13 — Cart provides no controls for changing item quantity

| Field | Value |
| --- | --- |
| Severity | **Blocker** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) |
| Affected checks | CART-GUI-022, CART-GUI-023, CART-GUI-024, CART-GUI-025 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-022, CART-GUI-023, CART-GUI-024, CART-GUI-025.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** No +/− quantity controls are rendered. The + control is absent, so quantity cannot be increased in the cart. The − control is absent, so quantity cannot be decreased in the cart. The required decrement boundary cannot be exercised because the control is absent.

**Evidence:** [CART-GUI-022](evidence/task1/CART-GUI-022.png), [CART-GUI-023](evidence/task1/CART-GUI-023.png), [CART-GUI-024](evidence/task1/CART-GUI-024.png), [CART-GUI-025](evidence/task1/CART-GUI-025.png)

![GitHub issue BUG-CART-13](evidence/task1/gh-issues/BUG-CART-13.png)

## BUG-CART-16 — Removing a cart item bypasses the required confirmation dialog

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) |
| Affected checks | CART-GUI-028, CART-GUI-029, CART-GUI-032 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-028, CART-GUI-029, CART-GUI-032.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The row was removed immediately without confirmation. No Cancel action exists because no confirmation dialog is shown. No confirmation dialog exists, so focus trapping and restoration are absent.

**Evidence:** [CART-GUI-028](evidence/task1/CART-GUI-028.png), [CART-GUI-029](evidence/task1/CART-GUI-029.png), [CART-GUI-032](evidence/task1/CART-GUI-032.png)

![GitHub issue BUG-CART-16](evidence/task1/gh-issues/BUG-CART-16.png)

## BUG-CART-20 — Cart table overflows the 320px mobile viewport

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart at 320x568 |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/11) |
| Affected checks | CART-GUI-038 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart at 320x568.
3. Perform the actions described by CART-GUI-038.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The fixed-width table forces unintended horizontal page overflow at 320px.

**Evidence:** [CART-GUI-038](evidence/task1/CART-GUI-038.png)

![GitHub issue BUG-CART-20](evidence/task1/gh-issues/BUG-CART-20.png)

## BUG-CART-21 — Repeated cart action controls do not identify their product

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Customer Web /cart |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/12) |
| Affected checks | CART-GUI-044 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web /cart.
3. Perform the actions described by CART-GUI-044.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Repeated controls do not identify their associated product.

**Evidence:** [CART-GUI-044](evidence/task1/CART-GUI-044.png)

![GitHub issue BUG-CART-21](evidence/task1/gh-issues/BUG-CART-21.png)

## BUG-CART-24 — Customer frontend declares English instead of Vietnamese document language

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Customer Web document |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/13) |
| Affected checks | CART-GUI-048 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Customer Web document.
3. Perform the actions described by CART-GUI-048.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The document does not declare lang=vi.

**Evidence:** [CART-GUI-048](evidence/task1/CART-GUI-048.png)

![GitHub issue BUG-CART-24](evidence/task1/gh-issues/BUG-CART-24.png)

## BUG-COUPON-03 — Coupon screen title uses the wrong heading level

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Admin Coupon |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/14) |
| Affected checks | COUPON-GUI-005 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon.
3. Perform the actions described by COUPON-GUI-005.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The screen title is h2 while the only h1 describes the whole admin shell.

**Evidence:** [COUPON-GUI-005](evidence/task1/COUPON-GUI-005.png)

![GitHub issue BUG-COUPON-03](evidence/task1/gh-issues/BUG-COUPON-03.png)

## BUG-COUPON-04 — Admin navigation mixes English and Vietnamese labels

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Admin shell |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/15) |
| Affected checks | COUPON-GUI-006 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin shell.
3. Perform the actions described by COUPON-GUI-006.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The admin shell mixes English “Dashboard” with Vietnamese labels.

**Evidence:** [COUPON-GUI-006](evidence/task1/COUPON-GUI-006.png)

![GitHub issue BUG-COUPON-04](evidence/task1/gh-issues/BUG-COUPON-04.png)

## BUG-COUPON-08 — Empty coupon table has no explanatory state

| Field | Value |
| --- | --- |
| Severity | **Minor** |
| Screen | Admin Coupon |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/16) |
| Affected checks | COUPON-GUI-015 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon.
3. Perform the actions described by COUPON-GUI-015.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** An empty coupon table renders with no explanatory state.

**Evidence:** [COUPON-GUI-015](evidence/task1/COUPON-GUI-015.png)

![GitHub issue BUG-COUPON-08](evidence/task1/gh-issues/BUG-COUPON-08.png)

## BUG-COUPON-09 — Coupon form lacks visible labels and required markers

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Admin Coupon form |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/17) |
| Affected checks | COUPON-GUI-016 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon form.
3. Perform the actions described by COUPON-GUI-016.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** The form uses placeholders and HTML required attributes but no visible labels or * indicators.

**Evidence:** [COUPON-GUI-016](evidence/task1/COUPON-GUI-016.png)

![GitHub issue BUG-COUPON-09](evidence/task1/gh-issues/BUG-COUPON-09.png)

## BUG-COUPON-11 — Coupon form omits discount and expiry boundary validation

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Admin Coupon form |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) |
| Affected checks | COUPON-GUI-019, COUPON-GUI-020, COUPON-GUI-022 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon form.
3. Perform the actions described by COUPON-GUI-019, COUPON-GUI-020, COUPON-GUI-022.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Discount input has no positive min constraint. Percent discount has no 100% upper bound. Expiry date has no minimum and accepts past dates.

**Evidence:** [COUPON-GUI-019](evidence/task1/COUPON-GUI-019.png), [COUPON-GUI-020](evidence/task1/COUPON-GUI-020.png), [COUPON-GUI-022](evidence/task1/COUPON-GUI-022.png)

![GitHub issue BUG-COUPON-11](evidence/task1/gh-issues/BUG-COUPON-11.png)

## BUG-COUPON-12 — Duplicate coupon exposes a SQLite error in a browser alert

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Admin Coupon form |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/19) |
| Affected checks | COUPON-GUI-024, COUPON-GUI-025 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon form.
3. Perform the actions described by COUPON-GUI-024, COUPON-GUI-025.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Duplicate code exposes a technical alert: Lỗi: SQLITE_CONSTRAINT: UNIQUE constraint failed: coupons.code Errors are delivered through a browser alert rather than above the submit button.

**Evidence:** [COUPON-GUI-024](evidence/task1/COUPON-GUI-024.png), [COUPON-GUI-025](evidence/task1/COUPON-GUI-025.png)

![GitHub issue BUG-COUPON-12](evidence/task1/gh-issues/BUG-COUPON-12.png)

## BUG-COUPON-14 — Coupon deletion has no confirmation dialog

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Admin Coupon table |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) |
| Affected checks | COUPON-GUI-027, COUPON-GUI-028, COUPON-GUI-030 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon table.
3. Perform the actions described by COUPON-GUI-027, COUPON-GUI-028, COUPON-GUI-030.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** Coupon is deleted immediately without confirmation. No Cancel action exists because there is no dialog. No confirmation dialog exists, so keyboard dialog behavior is absent.

**Evidence:** [COUPON-GUI-027](evidence/task1/COUPON-GUI-027.png), [COUPON-GUI-028](evidence/task1/COUPON-GUI-028.png), [COUPON-GUI-030](evidence/task1/COUPON-GUI-030.png)

![GitHub issue BUG-COUPON-14](evidence/task1/gh-issues/BUG-COUPON-14.png)

## BUG-COUPON-17 — Coupon delete buttons have ambiguous accessible names

| Field | Value |
| --- | --- |
| Severity | **Major** |
| Screen | Admin Coupon table |
| GitHub issue | [Open issue](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/21) |
| Affected checks | COUPON-GUI-034 |

**Steps to reproduce**

1. Start the seeded backend and relevant frontend.
2. Open Admin Coupon table.
3. Perform the actions described by COUPON-GUI-034.
4. Observe the actual behavior recorded below.

**Expected:** The interface satisfies the linked checklist expectations and applicable FR/IA requirements.

**Actual:** All row actions have the ambiguous accessible name “Xóa”.

**Evidence:** [COUPON-GUI-034](evidence/task1/COUPON-GUI-034.png)

![GitHub issue BUG-COUPON-17](evidence/task1/gh-issues/BUG-COUPON-17.png)
