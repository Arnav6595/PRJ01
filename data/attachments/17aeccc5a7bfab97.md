# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12-accessibility.spec.js >> Service — Accessibility (axe-core, WCAG 2 A/AA) >> A11Y_02 — Login page WCAG 2 A/AA audit
- Location: tests/12-accessibility.spec.js:40:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByTestId('email') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
          - img [ref=e14]
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem "Home" [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem "Categories" [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem "Contact" [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem "Sign in" [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - paragraph [ref=e49]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e50] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e51] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e52] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e53] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e55] [cursor=pointer]:
    - img [ref=e56]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | // ============================================================================
  5  | // Accessibility scans  (Guidelines §3 — Advanced Verification Layers)
  6  | //
  7  | // Runs axe-core (WCAG 2.0 A & AA) on the core guest-facing pages as a MONITORING
  8  | // layer: the application under test is a third-party demo we cannot patch, so the
  9  | // suite SURFACES and attaches every violation (grouped by impact) for the report
  10 | // rather than hard-failing on the app's pre-existing a11y debt. The attached
  11 | // JSON + logged impact counts are what "catch compliance violations" means here.
  12 | // ============================================================================
  13 | 
  14 | test.describe('Service — Accessibility (axe-core, WCAG 2 A/AA)', () => {
  15 | 
  16 |     test.use({ storageState: { cookies: [], origins: [] } });
  17 | 
  18 |     async function audit(page, testInfo, label) {
  19 |         const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  20 |         const byImpact = results.violations.reduce((m, v) => {
  21 |             m[v.impact || 'unknown'] = (m[v.impact || 'unknown'] || 0) + 1;
  22 |             return m;
  23 |         }, {});
  24 |         await testInfo.attach(`axe-${label}.json`, {
  25 |             body: JSON.stringify(results.violations, null, 2),
  26 |             contentType: 'application/json',
  27 |         });
  28 |         // Surfaced in the CI log and the report (e.g. "login: {critical:1, serious:3}").
  29 |         console.log(`[a11y:${label}] total=${results.violations.length} byImpact=${JSON.stringify(byImpact)}`);
  30 |         // The scan must complete and return a structured result set.
  31 |         expect(Array.isArray(results.violations)).toBe(true);
  32 |     }
  33 | 
  34 |     test('A11Y_01 — Home page WCAG 2 A/AA audit', async ({ homePage, page }, testInfo) => {
  35 |         await homePage.goTo();
  36 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  37 |         await audit(page, testInfo, 'home');
  38 |     });
  39 | 
  40 |     test('A11Y_02 — Login page WCAG 2 A/AA audit', async ({ loginPage, page }, testInfo) => {
  41 |         await loginPage.goTo();
> 42 |         await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
     |                                         ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  43 |         await audit(page, testInfo, 'login');
  44 |     });
  45 | 
  46 |     test('A11Y_03 — Registration page WCAG 2 A/AA audit', async ({ registerPage, page }, testInfo) => {
  47 |         await registerPage.goTo();
  48 |         await page.getByTestId('first-name').waitFor({ state: 'visible', timeout: 15000 });
  49 |         await audit(page, testInfo, 'register');
  50 |     });
  51 | 
  52 |     test('A11Y_04 — Product detail page WCAG 2 A/AA audit', async ({ homePage, productPage, page }, testInfo) => {
  53 |         await homePage.goTo();
  54 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  55 |         await homePage.productNames.first().click();
  56 |         await productPage.addToCartButton.waitFor({ state: 'visible', timeout: 15000 });
  57 |         await audit(page, testInfo, 'product-detail');
  58 |     });
  59 | 
  60 |     test('A11Y_05 — Contact page WCAG 2 A/AA audit', async ({ contactPage, page }, testInfo) => {
  61 |         await contactPage.navigate('/');
  62 |         await page.getByTestId('product-name').first().waitFor({ state: 'visible', timeout: 15000 });
  63 |         await contactPage.navContactLink.click();
  64 |         await contactPage.subjectDropdown.waitFor({ state: 'visible', timeout: 15000 });
  65 |         await audit(page, testInfo, 'contact');
  66 |     });
  67 | });
  68 | 
```