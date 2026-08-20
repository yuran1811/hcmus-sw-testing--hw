# Postman GUI Operations & Evidence Guide — HW06

**Student ID:** 23127065  
**Assignment:** HW06 – API Testing  
**Collection:** `postman/23127065_HW06.postman_collection.json`  
**Environment:** `postman/localhost.postman_environment.json`  

---

## 1. Overview of Required Postman Features

Per Section 6 & 11 in `requirement.pdf`, the submission exercises key Postman features:
- **Workspaces & Collections**: Hierarchical folder structure across 3 API pools (`Pool A - Login`, `Pool B - Checkout`, `Pool C - Admin Order Status`).
- **Environments & Variables**: Reusable parameters (`baseUrl`, `studentId`, request-scoped `order_id`).
- **Pre-request Scripts (Mandatory Anti-Cheat)**: Automatic injection and logging of `X-Student-Id: 23127065`.
- **Postman Console**: Inspection of live network payloads and `X-Student-Id` request header.
- **Collection Runner & Data Files**: 40-iteration data-driven execution with `login-cases.json`, `checkout-cases.json`, `orderstatus-cases.json`.

---

## 2. Step-by-Step Execution in Postman Desktop App

### Step 1: Import Collection and Environment
1. In Postman, click **Import** (top-left).
2. Drag and drop or select:
   - `postman/23127065_HW06.postman_collection.json`
   - `postman/localhost.postman_environment.json`
3. Select **`Localhost - 23127065`** in the top-right environment selector.
4. **Capture screenshot:** Save to `evidence/postman/01-workspace-collection.png`.

### Step 2: Environment Variables Inspection
1. Click **Environments** on the left navigation bar → **Localhost - 23127065**.
2. Verify initial and current values:
   - `baseUrl` = `http://127.0.0.1:3000`
   - `studentId` = `23127065`
3. **Capture screenshot:** Save to `evidence/postman/02-environment-variables.png`.

### Step 3: Collection Pre-request Script (Anti-Cheat Requirement)
1. Click on the root collection **23127065_HW06** in the left sidebar.
2. Select the **Pre-request Scripts** tab.
3. Observe the script:
   ```javascript
   pm.request.headers.upsert({
       key: "X-Student-Id",
       value: pm.environment.get("studentId") || "23127065"
   });
   console.log("X-Student-Id: " + (pm.environment.get("studentId") || "23127065"));
   ```
4. **Capture screenshot:** Save to `evidence/postman/03-prerequest-script.png`.

### Step 4: Execute Request and Inspect Postman Console (Header Evidence)
1. Ensure the SUT backend is running on `http://127.0.0.1:3000`.
2. Open **Postman Console** (click **Console** in the bottom-left footer or press `Cmd + Option + C`).
3. Click on `Pool A - Login` → select `Execute Login Case` → click **Send**.
4. In the Console log, expand the `POST http://127.0.0.1:3000/api/login` request.
5. Under **Request Headers**, verify `X-Student-Id: 23127065` is clearly displayed.
6. **Capture screenshot:** Save to `evidence/postman/04-console-student-header.png`.

### Step 5: Data-driven Run with Collection Runner
1. Right-click collection **23127065_HW06** or folder **Pool A - Login** → select **Run collection** (or click **Run**).
2. Under **Run configuration**:
   - In **Data**: Click **Select File** and pick `test-data/login-cases.json`.
   - Data file type: `application/json` (40 iterations).
   - Click **Preview** to inspect test case variables (`LOGIN-001` to `LOGIN-040`).
3. **Capture screenshot:** Save to `evidence/postman/05-collection-runner-data.png`.
4. Click **Run 23127065_HW06**.
5. Wait for the 40 iterations to complete.
6. **Capture screenshot:** Save to `evidence/postman/06-runner-execution-results.png`.

---

## 3. Evidence Checklist

| File | Feature / Requirement |
|---|---|
| `evidence/postman/01-workspace-collection.png` | Workspace, 3-pool collection hierarchy, and active environment |
| `evidence/postman/02-environment-variables.png` | Environment variables (`baseUrl`, `studentId`) |
| `evidence/postman/03-prerequest-script.png` | Collection-level pre-request script setting `X-Student-Id` |
| `evidence/postman/04-console-student-header.png` | Postman Console showing `X-Student-Id: 23127065` in request headers |
| `evidence/postman/05-collection-runner-data.png` | Collection Runner setup with external 40-iteration JSON data |
| `evidence/postman/06-runner-execution-results.png` | Collection Runner execution results & assertion summary |
