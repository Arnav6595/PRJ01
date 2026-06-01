# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13-visual-regression.spec.js >> Service — Visual Regression / UI Checkpoints >> VIS_05 — Page footer renders with valid layout
- Location: tests/13-visual-regression.spec.js:54:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('footer').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('footer').first()

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
    - menuitem "Sign in":
      - link "Sign in":
        - /url: /auth/login
  - button "Select language": EN
- paragraph:
  - img "Banner"
- separator
- heading "Sort" [level=4]
- separator
- combobox "sort":
  - option [selected]
  - option "Name (A - Z)"
  - option "Name (Z - A)"
  - option "Price (High - Low)"
  - option "Price (Low - High)"
  - option "CO₂ Rating (A - E)"
  - option "CO₂ Rating (E - A)"
- heading "Price Range" [level=4]
- separator
- slider "ngx-slider"
- slider "ngx-slider-max"
- text: 0 200 1 100
- heading "Search" [level=4]
- separator
- text: Search
- textbox "Search"
- button "X"
- button "Search"
- heading "Filters" [level=4]
- separator
- heading "By category:" [level=4]
- group "Categories":
  - text: Categories
  - checkbox "Hand Tools"
  - text: Hand Tools
  - list:
    - group "Categories":
      - text: Categories
      - checkbox "Hammer"
      - text: Hammer
      - checkbox "Hand Saw"
      - text: Hand Saw
      - checkbox "Wrench"
      - text: Wrench
      - checkbox "Screwdriver"
      - text: Screwdriver
      - checkbox "Pliers"
      - text: Pliers
      - checkbox "Chisels"
      - text: Chisels
      - checkbox "Measures"
      - text: Measures
  - checkbox "Power Tools"
  - text: Power Tools
  - list:
    - group "Categories":
      - text: Categories
      - checkbox "Grinder"
      - text: Grinder
      - checkbox "Sander"
      - text: Sander
      - checkbox "Saw"
      - text: Saw
      - checkbox "Drill"
      - text: Drill
  - checkbox "Other"
  - text: Other
  - list:
    - group "Categories":
      - text: Categories
      - checkbox "Tool Belts"
      - text: Tool Belts
      - checkbox "Storage Solutions"
      - text: Storage Solutions
      - checkbox "Workbench"
      - text: Workbench
      - checkbox "Safety Gear"
      - text: Safety Gear
      - checkbox "Fasteners"
      - text: Fasteners
- heading "By brand:" [level=4]
- group "Brands":
  - text: Brands
  - checkbox "ForgeFlex Tools"
  - text: ForgeFlex Tools
  - checkbox "MightyCraft Hardware"
  - text: MightyCraft Hardware
  - checkbox "2448479629917558editado"
  - text: 2448479629917558editado
  - checkbox "4021530582550981editado"
  - text: 4021530582550981editado
  - checkbox "2128175963189410editado"
  - text: 2128175963189410editado
  - checkbox "2855764367191927editado"
  - text: 2855764367191927editado
  - checkbox "173183328226168editado"
  - text: 173183328226168editado
  - checkbox "1890414800818329editado"
  - text: 1890414800818329editado
- heading "Sustainability:" [level=4]
- group "Eco-Friendly Products":
  - text: Eco-Friendly Products
  - checkbox "Show only eco-friendly products"
  - text: Show only eco-friendly products
- 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15"':
  - /url: /product/01KT22243PNDTANTZE62HXV8BV
  - img "Combination Pliers"
  - button "Compare"
  - heading "Combination Pliers" [level=5]
  - text: "CO₂: A B C D E $14.15"
- 'link "Pliers Compare Pliers CO₂: A B C D E $12.01"':
  - /url: /product/01KT22243S97N80BZRWN515CXM
  - img "Pliers"
  - button "Compare"
  - heading "Pliers" [level=5]
  - text: "CO₂: A B C D E $12.01"
- 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41"':
  - /url: /product/01KT22243V7QS4YHCTH1RZHHJ7
  - img "Bolt Cutters"
  - button "Compare"
  - heading "Bolt Cutters" [level=5]
  - text: "CO₂: A B C D E $48.41"
- 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24"':
  - /url: /product/01KT22243X8ANQM7C20ABDD58A
  - img "Long Nose Pliers"
  - button "Compare"
  - heading "Long Nose Pliers" [level=5]
  - text: "CO₂: A B C D E Out of stock $14.24"
- 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17"':
  - /url: /product/01KT22243Z16548H9J5PPX082Y
  - img "Slip Joint Pliers"
  - button "Compare"
  - heading "Slip Joint Pliers" [level=5]
  - text: "CO₂: A B C D E $9.17"
- 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41"':
  - /url: /product/01KT222440XR630356XXSP8EBR
  - img "Claw Hammer with Shock Reduction Grip"
  - button "Compare"
  - heading "Claw Hammer with Shock Reduction Grip" [level=5]
  - text: "CO₂: A B C D E $13.41"
- 'link "Hammer Compare Hammer CO₂: A B C D E $12.58"':
  - /url: /product/01KT222442PR756VN0QKTJNG8T
  - img "Hammer"
  - button "Compare"
  - heading "Hammer" [level=5]
  - text: "CO₂: A B C D E $12.58"
- 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48"':
  - /url: /product/01KT222444M711131Y06AKEGK0
  - img "Claw Hammer"
  - button "Compare"
  - heading "Claw Hammer" [level=5]
  - text: "CO₂: A B C D E $11.48"
- 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14"':
  - /url: /product/01KT222445FMAGZVV6YK9T4F1P
  - img "Thor Hammer"
  - button "Compare"
  - heading "Thor Hammer" [level=5]
  - text: "CO₂: A B C D E $11.14"
- navigation:
  - list:
    - listitem:
      - button "Previous"
    - listitem:
      - button "Page-1": "1"
    - listitem:
      - button "Page-2": "2"
    - listitem:
      - button "Page-3": "3"
    - listitem:
      - button "Page-4": "4"
    - listitem:
      - button "Page-5": "5"
    - listitem:
      - button "Page-6": "6"
    - listitem:
      - button "Next"
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
  2  | 
  3  | // ============================================================================
  4  | // Visual Regression / UI Checkpoints  (Guidelines §3 — Advanced Verification)
  5  | //
  6  | // Captures the critical UI widgets as image attachments in the report and asserts
  7  | // each renders with a real, non-zero bounding box (catching gross layout breakage
  8  | // / collapsed widgets). This keeps the checkpoint deterministic on a live,
  9  | // data-changing site without committed pixel baselines.
  10 | //
  11 | // For pixel-diff regression, baselines can be seeded once with:
  12 | //   npx playwright test 13-visual-regression --update-snapshots
  13 | // then swapping the capture below for `expect(locator).toHaveScreenshot(name)`.
  14 | // ============================================================================
  15 | 
  16 | test.describe('Service — Visual Regression / UI Checkpoints', () => {
  17 | 
  18 |     test.use({ storageState: { cookies: [], origins: [] } });
  19 | 
  20 |     /** Assert the widget is rendered with real dimensions, then attach its image. */
  21 |     async function checkpoint(locator, testInfo, name) {
> 22 |         await expect(locator).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  23 |         const box = await locator.boundingBox();
  24 |         expect(box, `${name} has no bounding box`).not.toBeNull();
  25 |         expect(box.width).toBeGreaterThan(0);
  26 |         expect(box.height).toBeGreaterThan(0);
  27 |         await testInfo.attach(name, { body: await locator.screenshot(), contentType: 'image/png' });
  28 |     }
  29 | 
  30 |     test('VIS_01 — Top navigation bar renders with valid layout', async ({ homePage, page }, testInfo) => {
  31 |         await homePage.goTo();
  32 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  33 |         await checkpoint(page.locator('nav').first(), testInfo, 'home-navigation.png');
  34 |     });
  35 | 
  36 |     test('VIS_02 — Search widget renders with valid layout', async ({ homePage }, testInfo) => {
  37 |         await homePage.goTo();
  38 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  39 |         await checkpoint(homePage.searchInput, testInfo, 'search-input.png');
  40 |     });
  41 | 
  42 |     test('VIS_03 — Login form renders with valid layout', async ({ loginPage, page }, testInfo) => {
  43 |         await loginPage.goTo();
  44 |         await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
  45 |         await checkpoint(page.locator('app-sign-in, form').first(), testInfo, 'login-form.png');
  46 |     });
  47 | 
  48 |     test('VIS_04 — First product card renders with valid layout', async ({ homePage }, testInfo) => {
  49 |         await homePage.goTo();
  50 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  51 |         await checkpoint(homePage.productCards.first(), testInfo, 'product-card.png');
  52 |     });
  53 | 
  54 |     test('VIS_05 — Page footer renders with valid layout', async ({ homePage, page }, testInfo) => {
  55 |         await homePage.goTo();
  56 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  57 |         await checkpoint(page.locator('footer').first(), testInfo, 'footer.png');
  58 |     });
  59 | });
  60 | 
```