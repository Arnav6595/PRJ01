# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09-admin-actions.spec.js >> Service 09 — Admin CRUD Actions & UI Verification >> TC_Action_03 — Admin Category list contains Add and dynamic Edit buttons
- Location: tests/09-admin-actions.spec.js:47:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test^="category-edit-"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test^="category-edit-"]').first()

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. Practice Black Box Testing & Bug Hunting
- button "Testing Guide"
- button "🐛 Bug Hunting"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: /
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contact":
      - link "Contact":
        - /url: /contact
    - menuitem "John Doe":
      - button "John Doe"
  - button "Select language": EN
- heading "Categories" [level=1]
- link "Add Category":
  - /url: /admin/categories/add
- textbox
- button "Search"
- button "Reset"
- table:
  - rowgroup:
    - row "Id Parent_id Name Slug":
      - columnheader "Id"
      - columnheader "Parent_id"
      - columnheader "Name"
      - columnheader "Slug"
      - columnheader
  - rowgroup
- paragraph:
  - text: This is a DEMO application (
  - link "GitHub repo":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - text: ), used for software testing training purpose. |
  - link "Privacy Policy":
    - /url: /privacy
  - text: "| Banner photo by"
  - link "Barn Images":
    - /url: https://unsplash.com/@barnimages
  - text: "on"
  - link "Unsplash":
    - /url: https://unsplash.com/photos/t5YUoHW6zRo
  - text: .
- button "Open chat":
  - img
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | import path from 'path';
  3  | 
  4  | // Lock the file to ONLY use the Admin session
  5  | test.use({ storageState: 'playwright/.auth/admin.json' });
  6  | 
  7  | test.describe('Service 09 — Admin CRUD Actions & UI Verification', () => {
  8  | 
  9  |     test.beforeEach(async ({ homePage, adminPage }) => {
  10 |         await homePage.goTo();
  11 |         await homePage.productCards.first().waitFor({ state: 'visible', timeout: 15000 });
  12 |         await adminPage.openAdminDropdown();
  13 |     });
  14 | 
  15 |     // ── Brands ─────────────────────────────────────────────────────────────
  16 |     
  17 |     test('TC_Action_01 — Admin can add a new Brand successfully', async ({ adminPage }) => {
  18 |         await adminPage.brandsLink.click();
  19 |         
  20 |         // Click add and verify routing
  21 |         await adminPage.addBrandBtn.click();
  22 |         await expect(adminPage.page).toHaveURL(/\/admin\/brands\/add/);
  23 |         
  24 |         // Fill the form
  25 |         const timestamp = Date.now();
  26 |         await adminPage.brandNameInput.fill(`Test Brand ${timestamp}`);
  27 |         await adminPage.brandSlugInput.fill(`test-brand-${timestamp}`);
  28 |         
  29 |         // Submit
  30 |         await adminPage.brandSubmitBtn.click();
  31 |         
  32 |         // Success should route back to the brands list
  33 |         await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
  34 |     });
  35 | 
  36 |     test('TC_Action_02 — Admin Brand list contains dynamic Edit and Delete buttons', async ({ adminPage }) => {
  37 |         await adminPage.brandsLink.click();
  38 |         await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
  39 |         
  40 |         // Verify the dynamic buttons exist on the page
  41 |         await expect(adminPage.editBrandBtn).toBeVisible();
  42 |         await expect(adminPage.deleteBrandBtn).toBeVisible();
  43 |     });
  44 | 
  45 |     // ── Categories ─────────────────────────────────────────────────────────
  46 | 
  47 |     test('TC_Action_03 — Admin Category list contains Add and dynamic Edit buttons', async ({ adminPage }) => {
  48 |         await adminPage.categoriesLink.click();
  49 |         await expect(adminPage.page).toHaveURL(/\/admin\/categories/);
  50 |         
  51 |         // Verify UI elements
  52 |         await expect(adminPage.addCategoryBtn).toBeVisible();
> 53 |         await expect(adminPage.editCategoryBtn).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  54 |     });
  55 | 
  56 |     // ── Orders ─────────────────────────────────────────────────────────────
  57 | 
  58 |     test('TC_Action_04 — Admin Orders page contains Search functionality', async ({ adminPage }) => {
  59 |         await adminPage.ordersLink.click();
  60 |         await expect(adminPage.page).toHaveURL(/\/admin\/orders/);
  61 |         
  62 |         // Verify UI element
  63 |         await expect(adminPage.orderSearchBtn).toBeVisible();
  64 |     });
  65 | 
  66 |     // ── Users ──────────────────────────────────────────────────────────────
  67 | 
  68 |     test('TC_Action_05 — Admin Users list contains Add and dynamic Edit buttons', async ({ adminPage }) => {
  69 |         await adminPage.usersLink.click();
  70 |         await expect(adminPage.page).toHaveURL(/\/admin\/users/);
  71 |         
  72 |         // Verify UI elements
  73 |         await expect(adminPage.addUserBtn).toBeVisible();
  74 |         await expect(adminPage.editUserBtn).toBeVisible();
  75 |     });
  76 | 
  77 | });
```