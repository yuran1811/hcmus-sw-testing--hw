# Test Summary & Traceability Matrix (HW02 – HW05)

| Metric | HW02 (Domain/BVA) | HW03 (GUI/Usability) | HW04 (Playwright Matrix) | HW05 (JMeter Performance) | Total |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Total Test Cases** | 83 | 85 | 36 (×3 browsers = 108 runs) | 17 (57,212 executions) | **221** |
| **Passed Cases** | 56 | 52 | 18 (54 runs) | 16 (57,212 runs) | **142** |
| **Failed Cases** | 27 | 33 | 18 (54 runs) | 1 | **79** |
| **Pass Rate** | 67.47% | 61.18% | 50.00% | 94.12% | **64.25%** |
| **Discovered Bugs** | 23 | 20 | 9 (GitHub #22–#30) | 1 (GitHub #31) | **53** |

---

## 1. HW02 — Domain Testing & Boundary Value Analysis (83 Test Cases)

| Requirement | Test Case | Result | Bug Issue | Status |
| ----------- | --------------------- | ------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| FR-06 | TC-PRODUCT-DETAIL-001 | Fail | [[BUG][Product Detail] - Missing Category Name](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/62) | Run |
| FR-06 | TC-PRODUCT-DETAIL-002 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-003 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-004 | Fail | [[BUG][Product Detail] - Must double-click to 'add to cart'; No badge/toast indicates the 'add to cart' action](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/63) | Run |
| FR-06 | TC-PRODUCT-DETAIL-005 | Fail | [[BUG][Product Detail] - Product with invalid quantity still be added to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64) | Run |
| FR-06 | TC-PRODUCT-DETAIL-006 | Fail | [[BUG][Product Detail] - Product with invalid quantity still be added to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64) | Run |
| FR-06 | TC-PRODUCT-DETAIL-007 | Fail | [[BUG][Product Detail] - Product with invalid quantity still be added to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64) | Run |
| FR-06 | TC-PRODUCT-DETAIL-008 | Fail | [[BUG][Product Detail] - Product with invalid quantity still be added to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64) | Run |
| FR-06 | TC-PRODUCT-DETAIL-009 | Fail | [[BUG][Product Detail] - Product with invalid quantity still be added to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/64) | Run |
| FR-06 | TC-PRODUCT-DETAIL-010 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-011 | Pass | | Run |
| FR-08 | TC-PRODUCT-DETAIL-012 | Fail | [[BUG][Product Detail] - Un-auth user can add to cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/65) | Run |
| FR-23 | TC-PRODUCT-DETAIL-013 | Fail | [[BUG][Product Detail] - Missing breadcrumb](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/66) | Run |
| FR-24 | TC-PRODUCT-DETAIL-014 | Pass | | Run |
| FR-21 | TC-PRODUCT-DETAIL-015 | Pass | | Run |
| FR-09 | TC-COUPON-001 | Fail | [[BUG][Coupon] - SAVE10 make the final price too high (wrong calculation)](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/67) | Run |
| FR-09 | TC-COUPON-002 | Fail | [[BUG][Coupon] - BIGBUY be rejected at its threshold](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/69) | Run |
| FR-09 | TC-COUPON-003 | Pass | | Run |
| FR-09 | TC-COUPON-004 | Pass | | Run |
| FR-09 | TC-COUPON-005 | Pass | | Run |
| FR-09 | TC-COUPON-006 | Pass | | Run |
| FR-09 | TC-COUPON-007 | Pass | | Run |
| FR-09 | TC-COUPON-008 | Fail | [[BUG][Coupon] - Un-auth user can apply the coupon](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/97) | Run |
| FR-09 | TC-COUPON-009 | Pass | | Run |
| FR-09 | TC-COUPON-010 | Pass | | Run |
| FR-09 | TC-COUPON-011 | Pass | | Run |
| FR-09 | TC-COUPON-012 | Fail | [[BUG][Coupon] - BIGBUY be rejected at its threshold](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/69) | Run |
| FR-09 | TC-COUPON-013 | Fail | [[BUG][Coupon] - SAVE10 make the final price too high (wrong calculation)](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/67) | Run |
| FR-09 | TC-COUPON-014 | Pass | | Run |
| FR-09 | TC-COUPON-015 | Pass | | Run |
| FR-21 | TC-COUPON-016 | Pass | | Run |
| FR-21 | TC-COUPON-017 | Pass | | Run |
| FR-21 | TC-COUPON-018 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-001 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-002 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-003 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-004 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-005 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with type="invalid"](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/98) | Run |
| FR-17 | TC-COUPON-ADMIN-006 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with discount_value=0](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/99) | Run |
| FR-17 | TC-COUPON-ADMIN-007 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with discount_value<0](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/100) | Run |
| FR-17 | TC-COUPON-ADMIN-008 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-009 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with invalid expired_at](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/101) | Run |
| FR-17 | TC-COUPON-ADMIN-010 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with min_order_amount<0](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/102) | Run |
| FR-17 | TC-COUPON-ADMIN-011 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with max_uses_per_user=0](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/103) | Run |
| FR-17 | TC-COUPON-ADMIN-012 | Fail | [[BUG][Coupon Admin] - Allow to create coupon with max_uses_per_user<0](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/104) | Run |
| FR-17 | TC-COUPON-ADMIN-013 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-014 | Fail | [[BUG][Coupon Admin] - Delete non-exist coupon still get status 200](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/105) | Run |
| FR-17 | TC-COUPON-ADMIN-015 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-016 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-017 | Fail | [[BUG][Coupon Admin] - Non-admin user can create coupon](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/106) | Run |
| FR-17 | TC-COUPON-ADMIN-018 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-019 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-020 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-021 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-022 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-023 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-024 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-025 | Fail | [[BUG][Coupon Admin] - Allow to create coupon without code field](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/109) | Run |
| FR-17 | TC-COUPON-ADMIN-026 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-001 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-002 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-003 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-004 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-005 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-006 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-007 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-008 | Pass | [[BUG][Cart Mobile] - Edit quantity directly in cart cause bad quantity counting](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/114) | Run |
| FR-20 | TC-CART-MOBILE-009 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-010 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-011 | Pass | [[BUG][Cart Mobile] - Edit quantity directly in cart cause bad quantity counting](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/114) | Run |
| FR-20 | TC-CART-MOBILE-012 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-013 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-014 | Pass | [[BUG][Cart Mobile] - No confirm dialog on removing item from cart](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/115) | Run |
| FR-20 | TC-CART-MOBILE-015 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-016 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-017 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-018 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-019 | Pass | | Run |
| FR-20 | TC-CART-MOBILE-020 | Pass | [[BUG][Cart Mobile] - Edit quantity directly in cart cause bad quantity counting](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/114) | Run |
| FR-20 | TC-CART-MOBILE-021 | Pass | [[BUG][Cart Mobile] - Edit quantity directly in cart cause bad quantity counting](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/114) | Run |
| FR-20 | TC-CART-MOBILE-022 | Fail | [[BUG][Cart Mobile] - Total label not display correctly](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/116) | Run |
| FR-20 | TC-CART-MOBILE-023 | Fail | [[BUG][Cart Mobile] - Cart Badge count the number of different items, not the total quantity](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/117) | Run |
| FR-20 | TC-CART-MOBILE-024 | Fail | [[BUG][Cart Mobile] - No illustration on empty state](https://github.com/yuran1811/hcmus-sw-testing--eshop-sut/issues/118) | Run |

---

## 2. HW03 — GUI Checklist & Usability Testing (85 Items)

| Requirement | Test Case | Result | Bug Issue | Status |
| ----------- | --------- | ------ | --------- | ------ |
| FR-23 | CART-GUI-001 | Pass | | Run |
| FR-23 | CART-GUI-002 | Fail | [[BUG-CART-01] Cart page lacks the required page heading and breadcrumb](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) | Run |
| FR-23 | CART-GUI-003 | Fail | [[BUG-CART-01] Cart page lacks the required page heading and breadcrumb](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) | Run |
| FR-23 | CART-GUI-004 | Fail | [[BUG-CART-02] Cart navigation has no active state or quantity badge](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/3) | Run |
| FR-23 | CART-GUI-005 | Fail | [[BUG-CART-02] Cart navigation has no active state or quantity badge](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/3) | Run |
| FR-21 | CART-GUI-006 | Pass | | Run |
| FR-21 | CART-GUI-007 | Pass | | Run |
| FR-21 | CART-GUI-008 | Pass | | Run |
| FR-07 | CART-GUI-009 | Pass | | Run |
| FR-07 | CART-GUI-010 | Fail | [[BUG-CART-05] Empty cart state has no icon or illustration](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/4) | Run |
| FR-07 | CART-GUI-011 | Pass | | Run |
| FR-07 | CART-GUI-012 | Pass | | Run |
| FR-21 | CART-GUI-013 | Pass | | Run |
| FR-07 | CART-GUI-014 | Pass | | Run |
| FR-07 | CART-GUI-015 | Fail | [[BUG-CART-09] Cart table uses the wrong unit-price column label](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/6) | Run |
| IA-01 | CART-GUI-016 | Pass | | Run |
| FR-07 | CART-GUI-017 | Pass | | Run |
| FR-07 | CART-GUI-018 | Pass | | Run |
| FR-07 | CART-GUI-019 | Pass | | Run |
| FR-07 | CART-GUI-020 | Fail | [[BUG-CART-11] Cart total is labeled Tổng tạm tính instead of Tổng cộng](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/7) | Run |
| FR-07 | CART-GUI-021 | Fail | [[BUG-CART-12] Adding the same product creates duplicate cart rows](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/8) | Run |
| FR-07 | CART-GUI-022 | Fail | [[BUG-CART-13] Cart provides no controls for changing item quantity](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) | Run |
| FR-07 | CART-GUI-023 | Fail | [[BUG-CART-13] Cart provides no controls for changing item quantity](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) | Run |
| FR-07 | CART-GUI-024 | Fail | [[BUG-CART-13] Cart provides no controls for changing item quantity](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) | Run |
| FR-07 | CART-GUI-025 | Fail | [[BUG-CART-13] Cart provides no controls for changing item quantity](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/9) | Run |
| IA-01 | CART-GUI-026 | Pass | | Run |
| SEC-04 | CART-GUI-027 | Pass | | Run |
| FR-24 | CART-GUI-028 | Fail | [[BUG-CART-16] Removing a cart item bypasses the required confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) | Run |
| FR-24 | CART-GUI-029 | Fail | [[BUG-CART-16] Removing a cart item bypasses the required confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) | Run |
| FR-24 | CART-GUI-030 | Pass | | Run |
| FR-24 | CART-GUI-031 | Pass | | Run |
| FR-24 | CART-GUI-032 | Fail | [[BUG-CART-16] Removing a cart item bypasses the required confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/10) | Run |
| FR-23 | CART-GUI-033 | Pass | | Run |
| FR-08 | CART-GUI-034 | Pass | | Run |
| FR-08 | CART-GUI-035 | Pass | | Run |
| IA-02 | CART-GUI-036 | Pass | | Run |
| IA-04 | CART-GUI-037 | Pass | | Run |
| IA-01 | CART-GUI-038 | Fail | [[BUG-CART-20] Cart table overflows the 320px mobile viewport](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/11) | Run |
| IA-01 | CART-GUI-039 | Pass | | Run |
| IA-01 | CART-GUI-040 | Pass | | Run |
| IA-01 | CART-GUI-041 | Pass | | Run |
| IA-03 | CART-GUI-042 | Pass | | Run |
| IA-02 | CART-GUI-043 | Fail | [[BUG-CART-06] Cart focus indicator is not visibly exposed](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/5) | Run |
| IA-02 | CART-GUI-044 | Fail | [[BUG-CART-21] Repeated cart action controls do not identify their product](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/12) | Run |
| IA-01 | CART-GUI-045 | Fail | [[BUG-CART-01] Cart page lacks the required page heading and breadcrumb](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/2) | Run |
| IA-01 | CART-GUI-046 | Pass | | Run |
| IA-01 | CART-GUI-047 | Pass | | Run |
| IA-01 | CART-GUI-048 | Fail | [[BUG-CART-24] Customer frontend declares English instead of Vietnamese document language](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/13) | Run |
| IA-01 | CART-GUI-049 | Pass | | Run |
| IA-04 | CART-GUI-050 | Pass | | Run |
| FR-12 | COUPON-GUI-001 | Pass | | Run |
| FR-12 | COUPON-GUI-002 | Pass | | Run |
| FR-12 | COUPON-GUI-003 | Pass | | Run |
| FR-17 | COUPON-GUI-004 | Pass | | Run |
| IA-01 | COUPON-GUI-005 | Fail | [[BUG-COUPON-03] Coupon screen title uses the wrong heading level](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/14) | Run |
| IA-01 | COUPON-GUI-006 | Fail | [[BUG-COUPON-04] Admin navigation mixes English and Vietnamese labels](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/15) | Run |
| FR-21 | COUPON-GUI-007 | Pass | | Run |
| FR-17 | COUPON-GUI-008 | Pass | | Run |
| FR-17 | COUPON-GUI-009 | Pass | | Run |
| FR-17 | COUPON-GUI-010 | Pass | | Run |
| FR-17 | COUPON-GUI-011 | Pass | | Run |
| FR-17 | COUPON-GUI-012 | Pass | | Run |
| FR-17 | COUPON-GUI-013 | Pass | | Run |
| FR-17 | COUPON-GUI-014 | Pass | | Run |
| IA-04 | COUPON-GUI-015 | Fail | [[BUG-COUPON-08] Empty coupon table has no explanatory state](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/16) | Run |
| FR-22 | COUPON-GUI-016 | Fail | [[BUG-COUPON-09] Coupon form lacks visible labels and required markers](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/17) | Run |
| FR-17 | COUPON-GUI-017 | Pass | | Run |
| FR-17 | COUPON-GUI-018 | Pass | | Run |
| FR-17 | COUPON-GUI-019 | Fail | [[BUG-COUPON-11] Coupon form omits discount and expiry boundary validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) | Run |
| FR-17 | COUPON-GUI-020 | Fail | [[BUG-COUPON-11] Coupon form omits discount and expiry boundary validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) | Run |
| FR-17 | COUPON-GUI-021 | Pass | | Run |
| FR-17 | COUPON-GUI-022 | Fail | [[BUG-COUPON-11] Coupon form omits discount and expiry boundary validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/18) | Run |
| FR-17 | COUPON-GUI-023 | Pass | | Run |
| FR-22 | COUPON-GUI-024 | Fail | [[BUG-COUPON-12] Duplicate coupon exposes a SQLite error in a browser alert](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/19) | Run |
| FR-22 | COUPON-GUI-025 | Fail | [[BUG-COUPON-12] Duplicate coupon exposes a SQLite error in a browser alert](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/19) | Run |
| SEC-04 | COUPON-GUI-026 | Pass | | Run |
| FR-24 | COUPON-GUI-027 | Fail | [[BUG-COUPON-14] Coupon deletion has no confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) | Run |
| FR-24 | COUPON-GUI-028 | Fail | [[BUG-COUPON-14] Coupon deletion has no confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) | Run |
| FR-24 | COUPON-GUI-029 | Pass | | Run |
| FR-24 | COUPON-GUI-030 | Fail | [[BUG-COUPON-14] Coupon deletion has no confirmation dialog](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/20) | Run |
| IA-01 | COUPON-GUI-031 | Pass | | Run |
| IA-02 | COUPON-GUI-032 | Pass | | Run |
| IA-02 | COUPON-GUI-033 | Pass | | Run |
| IA-02 | COUPON-GUI-034 | Fail | [[BUG-COUPON-17] Coupon delete buttons have ambiguous accessible names](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/21) | Run |
| IA-04 | COUPON-GUI-035 | Pass | | Run |

---

## 3. HW04 — Playwright Automated E2E Regression Matrix (36 Cases × 3 Browsers)

| Requirement | Test Case | Result | Bug Issue | Status |
| ----------- | --------------------- | ------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| FR-06 | TC-PRODUCT-DETAIL-001 | Fail | [[BUG][Issue #22] Product category is missing](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/22) | Run |
| FR-06 | TC-PRODUCT-DETAIL-002 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-003 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-004 | Fail | [[BUG][Issue #23] First add-to-cart click is ignored](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/23) | Run |
| FR-06 | TC-PRODUCT-DETAIL-005 | Fail | [[BUG][Issue #24] Invalid quantities have no validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | Run |
| FR-06 | TC-PRODUCT-DETAIL-006 | Fail | [[BUG][Issue #24] Invalid quantities have no validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | Run |
| FR-06 | TC-PRODUCT-DETAIL-007 | Fail | [[BUG][Issue #24] Invalid quantities have no validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | Run |
| FR-06 | TC-PRODUCT-DETAIL-008 | Fail | [[BUG][Issue #24] Invalid quantities have no validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | Run |
| FR-06 | TC-PRODUCT-DETAIL-009 | Fail | [[BUG][Issue #24] Invalid quantities have no validation](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/24) | Run |
| FR-06 | TC-PRODUCT-DETAIL-010 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-011 | Pass | | Run |
| FR-06 | TC-PRODUCT-DETAIL-012 | Fail | [[BUG][Issue #25] Guest add-to-cart has no authentication gate](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/25) | Run |
| FR-09 | TC-COUPON-001 | Fail | [[BUG][Issue #27] Percentage calculation returns impossible totals](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/27) | Run |
| FR-09 | TC-COUPON-002 | Fail | [[BUG][Issue #28] Exact minimum threshold is rejected](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/28) | Run |
| FR-09 | TC-COUPON-003 | Pass | | Run |
| FR-09 | TC-COUPON-004 | Pass | | Run |
| FR-09 | TC-COUPON-005 | Pass | | Run |
| FR-09 | TC-COUPON-006 | Pass | | Run |
| FR-09 | TC-COUPON-007 | Pass | | Run |
| FR-09 | TC-COUPON-008 | Fail | [[BUG][Issue #26] Guest can apply a coupon](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/26) | Run |
| FR-09 | TC-COUPON-012 | Fail | [[BUG][Issue #28] Exact minimum threshold is rejected](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/28) | Run |
| FR-09 | TC-COUPON-013 | Fail | [[BUG][Issue #27] Percentage calculation returns impossible totals](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/27) | Run |
| FR-09 | TC-COUPON-014 | Pass | | Run |
| FR-09 | TC-COUPON-015 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-001 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-002 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-003 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-006 | Fail | [[BUG][Issue #30] Zero and negative discounts are accepted](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/30) | Run |
| FR-17 | TC-COUPON-ADMIN-007 | Fail | [[BUG][Issue #30] Zero and negative discounts are accepted](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/30) | Run |
| FR-17 | TC-COUPON-ADMIN-008 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-010 | Fail | [[BUG][Issue #29] Negative minimum order amount is accepted](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/29) | Run |
| FR-17 | TC-COUPON-ADMIN-011 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-012 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-020 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-022 | Pass | | Run |
| FR-17 | TC-COUPON-ADMIN-024 | Pass | | Run |

---

## 4. HW05 — Apache JMeter Performance & Resilience Testing (17 Scenarios & Samplers)

| Requirement | Test Case | Result | Bug Issue | Status |
| ----------- | --------------------- | ------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| PERF-LOAD | TC-PERF-LOAD-WORKFLOW | Pass | | Run |
| PERF-LOAD | TC-PERF-LOAD-AUTH | Pass | | Run |
| PERF-LOAD | TC-PERF-LOAD-SEARCH | Pass | | Run |
| PERF-LOAD | TC-PERF-LOAD-CHECKOUT | Pass | | Run |
| PERF-STRESS | TC-PERF-STRESS-WORKFLOW | Pass | | Run |
| PERF-STRESS | TC-PERF-STRESS-AUTH | Pass | | Run |
| PERF-STRESS | TC-PERF-STRESS-SEARCH | Pass | | Run |
| PERF-STRESS | TC-PERF-STRESS-CHECKOUT | Pass | | Run |
| PERF-SPIKE | TC-PERF-SPIKE-WORKFLOW | Pass | | Run |
| PERF-SPIKE | TC-PERF-SPIKE-AUTH | Pass | | Run |
| PERF-SPIKE | TC-PERF-SPIKE-SEARCH | Pass | | Run |
| PERF-SPIKE | TC-PERF-SPIKE-CHECKOUT | Pass | | Run |
| PERF-SOAK | TC-PERF-SOAK-WORKFLOW | Pass | | Run |
| PERF-SOAK | TC-PERF-SOAK-RESOURCE | Pass | | Run |
| AUTH-SEC | TC-PERF-AUTH-LOCKOUT | Fail | [[BUG-HW05-01][Issue #31] Login locks after 2 failures instead of 3](https://github.com/yuran1811/hcmus-sw-testing--hw/issues/31) | Run |
| CI-CPT | TC-CPT-SMOKE-GATE | Pass | | Run |
| CI-CPT | TC-CPT-DRIFT-GATE | Pass | | Run |
