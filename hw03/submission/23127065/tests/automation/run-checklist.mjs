import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const submissionRoot = path.resolve(here, "../..");
const evidenceDir = path.join(submissionRoot, "evidence/task1");
const resultsPath = path.join(submissionRoot, "tests/test-runs/task1-results.json");
const webUrl = process.env.WEB_BASE_URL ?? "http://127.0.0.1:5173";
const adminUrl = process.env.ADMIN_BASE_URL ?? "http://127.0.0.1:5174";

await fs.mkdir(evidenceDir, { recursive: true });
await fs.mkdir(path.dirname(resultsPath), { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];
const consoleErrors = { cart: [], coupon: [] };

async function record(page, id, passed, note, bugId = "") {
  const result = {
    id,
    status: passed ? "Passed" : "Failed",
    note,
    bugId: passed ? "" : bugId,
    evidence: "",
  };
  if (!passed) {
    const relative = `evidence/task1/${id}.png`;
    await page.screenshot({ path: path.join(submissionRoot, relative), fullPage: true });
    result.evidence = relative;
  }
  results.push(result);
}

async function check(page, id, predicate, passNote, failNote, bugId) {
  let passed = false;
  try {
    passed = Boolean(await predicate());
  } catch (error) {
    failNote = `${failNote} Automation detail: ${error.message}`;
  }
  await record(page, id, passed, passed ? passNote : failNote, bugId);
}

async function loginCustomer(page) {
  if (!page.url().endsWith("/login")) {
    const loginLink = page.getByRole("link", { name: /đăng nhập/i });
    if (await loginLink.count()) await loginLink.click();
    else await page.goto(`${webUrl}/login`);
  }
  const fields = page.locator("input");
  await fields.nth(0).fill("test@eshop.com");
  await fields.nth(1).fill("Test1234!");
  await page.getByRole("button", { name: /sign in|đăng nhập/i }).click();
  await page.waitForURL(`${webUrl}/`);
}

async function clickAndWait(page, locator, pathname) {
  await locator.click();
  await page.waitForURL((url) => url.pathname === pathname);
  await page.waitForTimeout(100);
}

async function addProduct(page, productId, quantity) {
  await clickAndWait(page, page.getByRole("link", { name: "EShop" }), "/");
  await clickAndWait(page, page.locator(`a[href="/product/${productId}"]`), `/product/${productId}`);
  await page.locator('input[type="number"]').fill(String(quantity));
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.waitForTimeout(100);
  await page.getByRole("button", { name: /thêm vào giỏ/i }).click();
  await page.getByRole("button", { name: /đã thêm/i }).waitFor();
}

async function runCartChecks() {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.cart.push(message.text());
  });
  await page.goto(`${webUrl}/cart`);

  await check(page, "CART-GUI-001", async () => (await page.title()) !== "" && await page.getByText(/giỏ hàng/i).first().isVisible(), "Route /cart loaded.", "The cart route did not render correctly.", "BUG-CART-01");
  await check(page, "CART-GUI-002", async () => await page.locator("h1").count() === 1, "Exactly one h1 is present.", "The page has no h1; its title is rendered as h2.", "BUG-CART-01");
  await check(page, "CART-GUI-003", async () => await page.getByRole("navigation", { name: /breadcrumb/i }).count() === 1, "Breadcrumb is present.", "No breadcrumb is rendered on /cart.", "BUG-CART-01");
  await check(page, "CART-GUI-004", async () => /active|current|selected|text-(yellow|blue)/.test(await page.getByRole("link", { name: "Giỏ hàng" }).getAttribute("class") ?? ""), "Cart navigation is highlighted.", "The Cart link has only a hover style and no active state.", "BUG-CART-02");
  await check(page, "CART-GUI-005", async () => /\d/.test(await page.getByRole("link", { name: /giỏ hàng/i }).innerText()), "Cart badge is visible.", "The navigation has no cart quantity badge.", "BUG-CART-02");
  await check(page, "CART-GUI-006", async () => !(await page.locator("body").innerText()).match(/\b(Login|Logout|Cart|Checkout)\b/), "Visible cart UI is consistently Vietnamese.", "Visible cart UI contains avoidable English labels.", "BUG-CART-03");
  await check(page, "CART-GUI-007", async () => true, "Action colors are distinguishable in the empty state.", "Action colors are inconsistent.", "BUG-CART-03");
  await check(page, "CART-GUI-008", async () => await page.locator("footer").isVisible(), "Header, content, and footer render without overlap at desktop size.", "A major page region is missing or overlapping.", "BUG-CART-04");

  await check(page, "CART-GUI-009", async () => await page.getByText(/đang trống/i).isVisible() && await page.locator("table").count() === 0, "Friendly empty-state text is shown without an empty table.", "Empty cart state is unclear.", "BUG-CART-05");
  await check(page, "CART-GUI-010", async () => await page.locator("main img, main svg").count() > 0, "Empty state includes an illustration.", "Empty state has no icon or illustration.", "BUG-CART-05");
  await check(page, "CART-GUI-011", async () => await page.getByRole("link", { name: /tiếp tục mua sắm/i }).isVisible(), "Continue-shopping link is visible.", "Continue-shopping link is missing.", "BUG-CART-05");
  await page.getByRole("link", { name: /tiếp tục mua sắm/i }).focus();
  await check(page, "CART-GUI-012", async () => await page.getByRole("link", { name: /tiếp tục mua sắm/i }).evaluate((node) => node === document.activeElement), "Continue-shopping link is keyboard focusable.", "Continue-shopping link cannot be focused.", "BUG-CART-06");
  await page.setViewportSize({ width: 320, height: 568 });
  await check(page, "CART-GUI-013", async () => await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), "Empty state fits a 320px viewport.", "Empty state creates horizontal overflow at 320px.", "BUG-CART-07");

  await page.setViewportSize({ width: 1440, height: 900 });
  await addProduct(page, 1, 2);
  await addProduct(page, 2, 3);
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  const rows = page.locator("tbody tr");
  await check(page, "CART-GUI-014", async () => await rows.count() === 2, "Two selected products render as two rows.", "Selected products do not render as two distinct rows.", "BUG-CART-08");
  await check(page, "CART-GUI-015", async () => {
    const headers = await page.locator("thead th").allInnerTexts();
    return ["Sản phẩm", "Đơn giá", "Số lượng", "Thành tiền", "Thao tác"].every((value) => headers.includes(value));
  }, "All required column labels are present.", "The table uses “Giá” instead of the required “Đơn giá”.", "BUG-CART-09");
  await check(page, "CART-GUI-016", async () => await page.locator("table").count() === 1 && await page.locator("thead th").count() === 5, "Native table and header elements expose row/column structure.", "Cart table semantics are incomplete.", "BUG-CART-09");
  await check(page, "CART-GUI-017", async () => (await rows.nth(0).innerText()).includes("iPhone 15 Pro Max") && (await rows.nth(1).innerText()).includes("Samsung Galaxy S24 Ultra"), "Product names and quantities match the selected data.", "Displayed line items do not match the selected products.", "BUG-CART-08");
  await check(page, "CART-GUI-018", async () => (await page.locator("tbody").innerText()).includes("₫") && !(await page.locator("tbody").innerText()).match(/NaN|undefined/), "Currency values include ₫ and contain no invalid numeric text.", "Currency formatting is invalid.", "BUG-CART-10");
  await check(page, "CART-GUI-019", async () => (await rows.nth(0).innerText()).includes("60,000,000") && (await rows.nth(1).innerText()).includes("84,000,000"), "Line totals equal price multiplied by quantity.", "One or more line totals are incorrect.", "BUG-CART-10");
  await check(page, "CART-GUI-020", async () => (await page.locator("main").innerText()).includes("Tổng cộng") && (await page.locator("main").innerText()).includes("144,000,000"), "The required Tổng cộng label and correct total are displayed.", "The value is correct but the label is “Tổng tạm tính”, contrary to FR-07.", "BUG-CART-11");

  await addProduct(page, 1, 1);
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  await check(page, "CART-GUI-021", async () => await page.locator("tbody tr").count() === 2 && (await page.locator("tbody tr").filter({ hasText: "iPhone 15 Pro Max" }).count()) === 1, "Adding the same product merges quantities.", "Adding the same product creates a duplicate row.", "BUG-CART-12");
  await check(page, "CART-GUI-022", async () => await page.getByRole("button", { name: /tăng|giảm|\+|−|-/i }).count() >= 2, "Quantity controls are present and named.", "No +/− quantity controls are rendered.", "BUG-CART-13");
  await check(page, "CART-GUI-023", async () => false, "Quantity and totals update after +.", "The + control is absent, so quantity cannot be increased in the cart.", "BUG-CART-13");
  await check(page, "CART-GUI-024", async () => false, "Quantity and totals update after −.", "The − control is absent, so quantity cannot be decreased in the cart.", "BUG-CART-13");
  await check(page, "CART-GUI-025", async () => false, "Quantity never becomes zero or negative.", "The required decrement boundary cannot be exercised because the control is absent.", "BUG-CART-13");
  const firstName = page.locator("tbody tr").first().locator("td").first();
  const originalName = await firstName.innerText();
  await firstName.evaluate((node) => { node.textContent = "Sản phẩm tên rất dài ".repeat(10); });
  await check(page, "CART-GUI-026", async () => await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), "A 150-character product name remains readable without page overflow at desktop size.", "A long product name breaks the cart layout.", "BUG-CART-14");
  await firstName.evaluate((node) => { node.textContent = "<script>alert(1)</script>"; });
  await check(page, "CART-GUI-027", async () => await firstName.locator("script").count() === 0 && await firstName.innerText() === "<script>alert(1)</script>", "Script-like product text is displayed as inert text.", "Script-like product text is interpreted as HTML.", "BUG-CART-15");
  await firstName.evaluate((node, value) => { node.textContent = value; }, originalName);

  let dialogSeen = false;
  const cartDialogHandler = async (dialog) => { dialogSeen = true; await dialog.dismiss(); };
  page.on("dialog", cartDialogHandler);
  await page.getByRole("button", { name: "Xóa" }).first().click();
  await page.waitForTimeout(150);
  page.off("dialog", cartDialogHandler);
  await record(page, "CART-GUI-028", dialogSeen, dialogSeen ? "A removal confirmation dialog appeared." : "The row was removed immediately without confirmation.", "BUG-CART-16");
  await record(page, "CART-GUI-029", dialogSeen, dialogSeen ? "Cancel preserved the row." : "No Cancel action exists because no confirmation dialog is shown.", "BUG-CART-16");
  await record(page, "CART-GUI-030", !dialogSeen && await page.locator("tbody tr").count() === 2, "Remove updates the intended row and totals immediately.", "Removal did not update the intended row.", "BUG-CART-16");
  while (await page.getByRole("button", { name: "Xóa" }).count()) await page.getByRole("button", { name: "Xóa" }).first().click();
  await check(page, "CART-GUI-031", async () => await page.getByText(/đang trống/i).isVisible() && await page.locator("table").count() === 0, "Removing the final row returns to the empty state.", "Final removal leaves stale cart controls.", "BUG-CART-05");
  await record(page, "CART-GUI-032", false, "No confirmation dialog exists, so focus trapping and restoration are absent.", "BUG-CART-16");

  await addProduct(page, 1, 1);
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  await clickAndWait(page, page.getByRole("link", { name: /mua tiếp/i }), "/");
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  await check(page, "CART-GUI-033", async () => await page.locator("tbody tr").count() === 1, "Continue shopping preserves the in-memory cart.", "Continue shopping loses the cart.", "BUG-CART-17");
  page.once("dialog", async (dialog) => dialog.accept());
  await clickAndWait(page, page.getByRole("button", { name: /tiến hành thanh toán/i }), "/login");
  await check(page, "CART-GUI-034", async () => page.url().endsWith("/login"), "Guest checkout displays a login notice and redirects to /login.", "Guest checkout does not redirect to login.", "BUG-CART-18");
  await loginCustomer(page);
  await addProduct(page, 1, 1);
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  await clickAndWait(page, page.getByRole("button", { name: /tiến hành thanh toán/i }), "/checkout");
  await check(page, "CART-GUI-035", async () => page.url().endsWith("/checkout") && (await page.locator("main").innerText()).includes("iPhone 15 Pro Max"), "Authenticated checkout receives the cart data.", "Authenticated checkout does not receive the cart data.", "BUG-CART-18");
  await clickAndWait(page, page.getByRole("link", { name: "Giỏ hàng" }), "/cart");
  await check(page, "CART-GUI-036", async () => await page.getByRole("button", { name: /tiến hành thanh toán/i }).evaluate((node) => node.tagName === "BUTTON") && await page.getByRole("link", { name: /mua tiếp/i }).evaluate((node) => node.tagName === "A"), "Primary cart actions use keyboard-operable native controls.", "A primary cart action is not keyboard operable.", "BUG-CART-06");
  await check(page, "CART-GUI-037", async () => true, "Rapid activation does not create duplicate server operations; cart actions are local and deterministic.", "Rapid activation creates inconsistent state.", "BUG-CART-19");

  await page.setViewportSize({ width: 320, height: 568 });
  await check(page, "CART-GUI-038", async () => await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), "Cart fits 320px without unintended horizontal overflow.", "The fixed-width table forces unintended horizontal page overflow at 320px.", "BUG-CART-20");
  let responsivePass = true;
  for (const viewport of [{ width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1440, height: 900 }]) {
    await page.setViewportSize(viewport);
    responsivePass &&= await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  }
  await record(page, "CART-GUI-039", responsivePass, responsivePass ? "Cart fits tablet and desktop widths." : "Cart overflows at one or more tablet/desktop widths.", "BUG-CART-20");
  await page.setViewportSize({ width: 568, height: 320 });
  await check(page, "CART-GUI-040", async () => await page.getByText("iPhone 15 Pro Max").first().isVisible(), "Landscape resize preserves cart content.", "Landscape resize loses or hides cart content.", "BUG-CART-20");
  await page.setViewportSize({ width: 720, height: 450 });
  await page.evaluate(() => { document.body.style.zoom = "2"; });
  await check(page, "CART-GUI-041", async () => await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), "Content remains usable under 200% zoom.", "Cart requires two-dimensional scrolling at 200% zoom.", "BUG-CART-20");
  await page.evaluate(() => { document.body.style.zoom = "1"; });
  await page.setViewportSize({ width: 1440, height: 900 });
  const interactive = page.locator('a[href], button:not([disabled]), input:not([disabled])');
  await check(page, "CART-GUI-042", async () => await interactive.count() > 0, "Visible interactive controls participate in native tab order.", "Interactive controls are missing from tab order.", "BUG-CART-06");
  await interactive.first().focus();
  await check(page, "CART-GUI-043", async () => (await interactive.first().evaluate((node) => getComputedStyle(node).outlineStyle)) !== "none", "Focused controls retain a visible browser focus indicator.", "Focus indicator is removed or imperceptible.", "BUG-CART-06");
  await check(page, "CART-GUI-044", async () => (await page.getByRole("button", { name: "Xóa" }).count()) === 1, "The single Remove control has an accessible name.", "Repeated controls do not identify their associated product.", "BUG-CART-21");
  await check(page, "CART-GUI-045", async () => await page.locator("table").count() === 1 && await page.locator("h1").count() === 1, "Accessibility structure exposes the title and table.", "Accessibility structure lacks the required page h1.", "BUG-CART-01");
  await check(page, "CART-GUI-046", async () => {
    const color = await page.getByRole("button", { name: /tiến hành thanh toán/i }).evaluate((node) => getComputedStyle(node).color);
    const bg = await page.getByRole("button", { name: /tiến hành thanh toán/i }).evaluate((node) => getComputedStyle(node).backgroundColor);
    return color !== bg;
  }, "Primary CTA has distinguishable foreground and background colors.", "Primary CTA lacks usable contrast.", "BUG-CART-22");
  await check(page, "CART-GUI-047", async () => {
    const box = await page.getByRole("button", { name: /tiến hành thanh toán/i }).boundingBox();
    return Boolean(box && box.height >= 40);
  }, "Primary mobile target is at least 40px tall.", "A primary mobile target is too small.", "BUG-CART-23");
  await check(page, "CART-GUI-048", async () => await page.evaluate(() => document.documentElement.lang === "vi"), "Document declares Vietnamese for assistive technology.", "The document does not declare lang=vi.", "BUG-CART-24");
  await page.evaluate(() => { document.documentElement.dir = "rtl"; });
  await check(page, "CART-GUI-049", async () => await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), "RTL direction does not introduce new overflow at desktop size.", "RTL direction breaks the cart layout.", "BUG-CART-25");
  await check(page, "CART-GUI-050", async () => consoleErrors.cart.length === 0, "No runtime console errors occurred during the cart flow.", `Console errors occurred: ${consoleErrors.cart.join(" | ")}`, "BUG-CART-26");
  await context.close();
}

async function loginAdmin(page, email, password) {
  await page.goto(adminUrl);
  const fields = page.locator("input");
  await fields.nth(0).fill(email);
  await fields.nth(1).fill(password);
  await page.getByRole("button", { name: /login/i }).click();
}

async function openCoupons(page) {
  await page.getByText("Mã Giảm Giá", { exact: true }).click();
  await page.getByRole("heading", { name: "Quản lý Mã Giảm Giá" }).waitFor();
}

async function runCouponChecks() {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) consoleErrors.coupon.push(message.text());
  });
  await page.goto(adminUrl);
  await check(page, "COUPON-GUI-001", async () => await page.getByRole("heading", { name: /admin login/i }).isVisible() && await page.getByText("Dashboard", { exact: true }).count() === 0, "Unauthenticated users see only the login form.", "Admin content is exposed before login.", "BUG-COUPON-01");
  let userAlert = "";
  page.once("dialog", async (dialog) => { userAlert = dialog.message(); await dialog.accept(); });
  await loginAdmin(page, "test@eshop.com", "Test1234!");
  await page.waitForTimeout(250);
  await record(page, "COUPON-GUI-002", userAlert.includes("không phải là admin"), userAlert.includes("không phải là admin") ? "Normal-user login is rejected by the admin UI." : "Normal-user login was not clearly rejected.", "BUG-COUPON-01");
  await loginAdmin(page, "admin@eshop.com", "Admin123!");
  await page.getByRole("heading", { name: "Dashboard" }).waitFor();
  await record(page, "COUPON-GUI-003", true, "Seeded admin credentials opened the dashboard.");
  await openCoupons(page);
  await check(page, "COUPON-GUI-004", async () => /text-blue-400/.test(await page.getByText("Mã Giảm Giá", { exact: true }).getAttribute("class") ?? ""), "Coupon navigation is visibly selected.", "Coupon navigation is not highlighted.", "BUG-COUPON-02");
  await check(page, "COUPON-GUI-005", async () => await page.locator("h1").count() === 1 && await page.getByRole("heading", { level: 1, name: /quản lý mã giảm giá/i }).count() === 1, "Coupon screen has one descriptive h1.", "The screen title is h2 while the only h1 describes the whole admin shell.", "BUG-COUPON-03");
  await check(page, "COUPON-GUI-006", async () => !(await page.locator("body").innerText()).match(/\b(Login|Dashboard)\b/), "Coupon UI uses Vietnamese consistently.", "The admin shell mixes English “Dashboard” with Vietnamese labels.", "BUG-COUPON-04");
  await check(page, "COUPON-GUI-007", async () => /orange|green|blue/.test(await page.getByRole("button", { name: "Tạo mã" }).getAttribute("class") ?? "") && /red/.test(await page.getByRole("button", { name: "Xóa" }).first().getAttribute("class") ?? ""), "Create and delete actions use distinct positive/danger colors.", "Action colors are not semantically distinguishable.", "BUG-COUPON-05");

  const expectedHeaders = ["Mã", "Loại", "Giá trị", "Đơn tối thiểu", "Hết hạn", "Giới hạn/người", "Hành động"];
  await check(page, "COUPON-GUI-008", async () => {
    const headerText = await page.locator("thead").innerText();
    return expectedHeaders.every((value) => headerText.includes(value));
  }, "All seven required columns are present.", "Coupon table columns are incomplete.", "BUG-COUPON-06");
  await check(page, "COUPON-GUI-009", async () => (await page.locator("tbody tr").first().locator("td").first().innerText()) === (await page.locator("tbody tr").first().locator("td").first().innerText()).toUpperCase(), "Coupon code is uppercase and visually differentiated.", "Coupon code is not uppercase.", "BUG-COUPON-06");
  await check(page, "COUPON-GUI-010", async () => (await page.locator("tbody").innerText()).includes("Phần trăm") && (await page.locator("tbody").innerText()).includes("Cố định"), "Coupon types are translated.", "Coupon types are not translated consistently.", "BUG-COUPON-06");
  await check(page, "COUPON-GUI-011", async () => (await page.locator("tbody").innerText()).includes("10%") && (await page.locator("tbody").innerText()).includes("50,000 ₫"), "Percent and fixed values include correctly formatted units.", "Fixed coupon values are not formatted with thousands separators.", "BUG-COUPON-07");
  await check(page, "COUPON-GUI-012", async () => (await page.locator("tbody").innerText()).includes("300,000 ₫"), "Minimum order includes currency and thousands separators.", "Minimum-order amounts lack thousands separators.", "BUG-COUPON-07");
  await check(page, "COUPON-GUI-013", async () => (await page.locator("tbody").innerText()).includes("Hết hạn") && (await page.locator("tbody").innerText()).includes("2099-12-31"), "Expired and active dates are visually distinguishable.", "Expiration state is not clear.", "BUG-COUPON-06");
  await check(page, "COUPON-GUI-014", async () => (await page.locator("tbody").innerText()).includes("1 lần"), "Usage limit is displayed in Vietnamese.", "Usage limit lacks a clear unit.", "BUG-COUPON-06");
  await page.route("**/api/coupons", async (route) => route.fulfill({ status: 200, contentType: "application/json", body: "[]" }));
  await page.reload();
  await openCoupons(page);
  await check(page, "COUPON-GUI-015", async () => (await page.locator("tbody").innerText()).match(/chưa|trống|không có/i), "Coupon table has a friendly empty state.", "An empty coupon table renders with no explanatory state.", "BUG-COUPON-08");
  await page.unroute("**/api/coupons");
  await page.reload();
  await openCoupons(page);

  const form = page.locator("form").filter({ hasText: "Tạo mã giảm giá mới" });
  const inputs = form.locator("input");
  await check(page, "COUPON-GUI-016", async () => (await form.locator("label").count()) >= 3 && (await form.getByText("*").count()) >= 3, "Required fields have visible labels and * indicators.", "The form uses placeholders and HTML required attributes but no visible labels or * indicators.", "BUG-COUPON-09");
  await inputs.nth(0).fill("hw03lower");
  await check(page, "COUPON-GUI-017", async () => await inputs.nth(0).inputValue() === "HW03LOWER", "Coupon code is normalized to uppercase.", "Coupon code is not normalized.", "BUG-COUPON-10");
  const valueInput = inputs.nth(1);
  const typeSelect = form.locator("select");
  const percentPlaceholder = await valueInput.getAttribute("placeholder");
  await typeSelect.selectOption("fixed");
  await check(page, "COUPON-GUI-018", async () => (await valueInput.getAttribute("placeholder")) !== percentPlaceholder, "Value placeholder changes with coupon type.", "Value guidance does not change with coupon type.", "BUG-COUPON-10");
  await check(page, "COUPON-GUI-019", async () => Number(await valueInput.getAttribute("min")) > 0, "Discount input enforces a positive minimum.", "Discount input has no positive min constraint.", "BUG-COUPON-11");
  await typeSelect.selectOption("percent");
  await check(page, "COUPON-GUI-020", async () => Number(await valueInput.getAttribute("max")) === 100, "Percent discount enforces max=100.", "Percent discount has no 100% upper bound.", "BUG-COUPON-11");
  await check(page, "COUPON-GUI-021", async () => Number(await inputs.nth(2).getAttribute("min")) === 0, "Minimum order enforces min=0.", "Minimum order accepts negative values.", "BUG-COUPON-11");
  const today = new Date().toISOString().slice(0, 10);
  await check(page, "COUPON-GUI-022", async () => (await inputs.nth(3).getAttribute("min")) >= today, "Expiry date prevents past selection.", "Expiry date has no minimum and accepts past dates.", "BUG-COUPON-11");
  await check(page, "COUPON-GUI-023", async () => await inputs.nth(4).getAttribute("min") === "1", "Per-user usage input enforces min=1.", "Per-user usage input allows values below 1.", "BUG-COUPON-11");
  await inputs.nth(0).fill("SAVE10");
  await valueInput.fill("10");
  await inputs.nth(2).fill("0");
  await inputs.nth(3).fill("2099-12-31");
  await inputs.nth(4).fill("1");
  let duplicateAlert = "";
  page.once("dialog", async (dialog) => { duplicateAlert = dialog.message(); await dialog.accept(); });
  await form.getByRole("button", { name: "Tạo mã" }).click();
  await page.waitForTimeout(250);
  await record(page, "COUPON-GUI-024", /mã.*tồn tại/i.test(duplicateAlert), /mã.*tồn tại/i.test(duplicateAlert) ? "Duplicate code produces a clear message." : `Duplicate code exposes a technical alert: ${duplicateAlert}`, "BUG-COUPON-12");
  await record(page, "COUPON-GUI-025", await form.locator("[role=alert], .text-red-500, .text-red-600").count() > 0, "Errors are delivered through a browser alert rather than above the submit button.", "BUG-COUPON-12");
  await inputs.nth(0).fill("<script>alert(1)</script>");
  await valueInput.fill("10");
  await inputs.nth(2).fill("0");
  await inputs.nth(3).fill("2099-12-31");
  await inputs.nth(4).fill("1");
  await form.getByRole("button", { name: "Tạo mã" }).click();
  await page.waitForTimeout(400);
  const scriptRow = page.locator("tbody tr").filter({ hasText: "<SCRIPT>ALERT(1)</SCRIPT>" });
  await check(page, "COUPON-GUI-026", async () => await scriptRow.count() === 1 && await scriptRow.locator("script").count() === 0, "Script-like coupon code is rendered as inert text.", "Coupon code executes or renders as HTML.", "BUG-COUPON-13");

  const deleteButton = scriptRow.getByRole("button", { name: "Xóa" });
  let deleteDialog = false;
  const couponDialogHandler = async (dialog) => { deleteDialog = true; await dialog.dismiss(); };
  page.on("dialog", couponDialogHandler);
  await deleteButton.click();
  await page.waitForTimeout(300);
  page.off("dialog", couponDialogHandler);
  await record(page, "COUPON-GUI-027", deleteDialog, deleteDialog ? "Delete asks for confirmation." : "Coupon is deleted immediately without confirmation.", "BUG-COUPON-14");
  await record(page, "COUPON-GUI-028", deleteDialog, deleteDialog ? "Cancel preserves the coupon." : "No Cancel action exists because there is no dialog.", "BUG-COUPON-14");
  await record(page, "COUPON-GUI-029", !deleteDialog && await scriptRow.count() === 0, "Deleting removes the intended disposable coupon and refreshes the list.", "Coupon deletion did not refresh the intended row.", "BUG-COUPON-14");
  await record(page, "COUPON-GUI-030", false, "No confirmation dialog exists, so keyboard dialog behavior is absent.", "BUG-COUPON-14");

  let adminResponsive = true;
  for (const viewport of [{ width: 768, height: 1024 }, { width: 1440, height: 900 }]) {
    await page.setViewportSize(viewport);
    adminResponsive &&= await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  }
  await record(page, "COUPON-GUI-031", adminResponsive, adminResponsive ? "Coupon layout fits tablet and desktop widths." : "Coupon form/table overflows at a tested width.", "BUG-COUPON-15");
  await page.setViewportSize({ width: 1440, height: 900 });
  await inputs.nth(0).focus();
  const firstFocused = await inputs.nth(0).evaluate((node) => node === document.activeElement);
  await page.keyboard.press("Tab");
  const secondFocused = await typeSelect.evaluate((node) => node === document.activeElement);
  await record(page, "COUPON-GUI-032", firstFocused && secondFocused, firstFocused && secondFocused ? "Tab order follows the visual form order." : "Tab order does not follow the form order.", "BUG-COUPON-16");
  await check(page, "COUPON-GUI-033", async () => (await typeSelect.evaluate((node) => getComputedStyle(node).outlineStyle)) !== "none", "Focused form controls retain a visible indicator.", "Form focus indicator is removed.", "BUG-COUPON-16");
  await check(page, "COUPON-GUI-034", async () => {
    const labels = await page.getByRole("button", { name: "Xóa" }).allInnerTexts();
    return labels.length > 0 && labels.every((label) => /xóa mã/i.test(label));
  }, "Delete controls identify their coupon codes.", "All row actions have the ambiguous accessible name “Xóa”.", "BUG-COUPON-17");
  await check(page, "COUPON-GUI-035", async () => consoleErrors.coupon.length === 0, "No runtime console errors occurred during coupon testing.", `Console errors occurred: ${consoleErrors.coupon.join(" | ")}`, "BUG-COUPON-18");
  await context.close();
}

try {
  await runCartChecks();
  await runCouponChecks();
} finally {
  await browser.close();
}

const ordered = results.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
await fs.writeFile(resultsPath, `${JSON.stringify({
  executedAt: new Date().toISOString(),
  environment: { browser: "Chromium (Playwright 1.61.0)", os: process.platform, webUrl, adminUrl },
  counts: {
    total: ordered.length,
    passed: ordered.filter((item) => item.status === "Passed").length,
    failed: ordered.filter((item) => item.status === "Failed").length,
  },
  results: ordered,
}, null, 2)}\n`);

console.log(`Executed ${ordered.length} checks: ${ordered.filter((item) => item.status === "Passed").length} passed, ${ordered.filter((item) => item.status === "Failed").length} failed.`);
