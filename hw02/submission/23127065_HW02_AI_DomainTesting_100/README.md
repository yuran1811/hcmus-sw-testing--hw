# 23127065 - Ngô Nguyễn Thế Khoa

## Self-Assessment

| No. | Criteria                      | Grade   | Self-Assessed Grade |
| --- | ----------------------------- | ------- | ------------------- |
| 1   | Feature A (Domain + Boundary) | 25      | 25                  |
| 2   | Feature B (Domain + Boundary) | 25      | 25                  |
| 3   | Feature C (Domain + Boundary) | 25      | 25                  |
| 4   | Feature D (Domain + Boundary) | 15      | 15                  |
| 5   | Agent Skill                   | 10      | 10                  |
|     | **Total**                     | **100** | 100                 |

## Test Summary Report

### 1. Scope of Testing

The testing process evaluated the following features of the EShop system using **Domain Testing (Equivalent Partitioning)** and **Boundary Value Analysis (BVA)** techniques:

- **Feature A (Coupon Admin / FR-17)**: Creating, listing, and deleting coupons with validation checks.
- **Feature B (Mobile Cart / FR-20)**: Cart operations on mobile devices including adding, updating quantities, and empty states.
- **Feature C (Coupon / FR-09, FR-21)**: Applying percent/fixed coupons to orders with boundary limits.
- **Feature D (Product Detail / FR-06, FR-08, FR-21, FR-23, FR-24)**: Product detailed view, quantity selection, and breadcrumbs.

---

### 2. Overall Execution Statistics

Across all features, a total of **83 test cases** were designed and executed.

| Metric                | Count / Percentage |
| :-------------------- | :----------------- |
| **Total Test Cases**  | 83                 |
| **Passed**            | 56                 |
| **Failed**            | 27                 |
| **Blocked / Skipped** | 0                  |
| **Overall Pass Rate** | **67.47%**         |

---

### 3. Detailed Statistics by Feature

The table below details the performance of each individual feature:

| Feature ID    | Feature Name                                       | Total TCs | Passed | Failed | Pass Rate  |
| :------------ | :------------------------------------------------- | :-------: | :----: | :----: | :--------: |
| **Feature A** | Coupon Admin (FR-17)                               |    26     |   16   |   10   |   61.54%   |
| **Feature B** | Mobile Cart (FR-20)                                |    24     |   21   |   3    |   87.50%   |
| **Feature C** | Coupon (FR-09, FR-21)                              |    18     |   13   |   5    |   72.22%   |
| **Feature D** | Product Detail (FR-06, FR-08, FR-21, FR-23, FR-24) |    15     |   6    |   9    |   40.00%   |
| **Total**     |                                                    |  **83**   | **56** | **27** | **67.47%** |

---

### 4. Key Findings & Bug Summary

A total of **23 bugs** were identified during execution (classified by severity):

- **Major / P1 (18 Bugs)**:
  - Major logic errors in coupon calculations (e.g., percent discount increasing the final price by 10x).
  - Lack of backend input validations in Coupon Admin, allowing invalid types, negative discounts, and negative minimum order amounts.
  - Cart quantity editing bug where quantity increments unexpectedly by 1 on direct input.
  - Lack of authorization checks on coupon application and cart adding.
- **Minor / P2 (5 Bugs)**:
  - Missing breadcrumbs, category name, and empty state illustrations.
  - UI labels showing "Tổng tạm tính" instead of "Tổng cộng".
  - Missing confirmation dialog on removing items from the cart.

For the full detailed list of bugs, refer to the [Bug Report](file:///Users/ngok14/yuran1811/hcmus/hcmus-sw-testing--hw/hw02/submission/23127065_HW02_AI_DomainTesting_100/bug-report.md).
For the traceability matrix mapping requirements to test cases, refer to the [Traceability Matrix](file:///Users/ngok14/yuran1811/hcmus/hcmus-sw-testing--hw/hw02/submission/23127065_HW02_AI_DomainTesting_100/tests/test-summary/traceability-matrix.md).
For the detailed run logs, refer to the [Sprint 1 Test Run Logs](file:///Users/ngok14/yuran1811/hcmus/hcmus-sw-testing--hw/hw02/submission/23127065_HW02_AI_DomainTesting_100/tests/test-runs/sprint-1-test-run.md).

## Agent Skill

See `.agents/skills` for the list of skills used in this report.
[Demo Video](https://youtu.be/z7q5Kd5TrgU)
