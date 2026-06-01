# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07b-invoices-details.spec.js >> Service 08B — Invoices & Account Management (Details & PDF) >> TC_08_11 — Invoice detail page URL contains a non-empty invoice ID segment
- Location: tests/07b-invoices-details.spec.js:32:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByTestId('nav-menu') to be visible

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
  - generic [ref=e48]:
    - generic [ref=e49]:
      - paragraph [ref=e50]:
        - img "Banner" [ref=e51]
      - separator [ref=e52]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "Sort" [level=4] [ref=e55]:
          - img [ref=e57]
          - text: Sort
        - separator [ref=e59]
        - combobox "sort" [ref=e62]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading "Price Range" [level=4] [ref=e63]:
          - img [ref=e65]
          - text: Price Range
        - separator [ref=e67]
        - generic "ngx-slider" [ref=e69]:
          - slider "ngx-slider" [ref=e74] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e75] [cursor=pointer]
          - generic [ref=e76]: "0"
          - generic [ref=e77]: "200"
          - generic [ref=e78]: "1"
          - generic [ref=e79]: "100"
        - heading "Search" [level=4] [ref=e81]:
          - img [ref=e83]
          - text: Search
        - separator [ref=e85]
        - generic [ref=e87]:
          - generic [ref=e88]: Search
          - textbox "Search" [ref=e89]
          - button "X" [ref=e90] [cursor=pointer]
          - button "Search" [ref=e91] [cursor=pointer]
        - heading "Filters" [level=4] [ref=e92]:
          - img [ref=e94]
          - text: Filters
        - separator [ref=e96]
        - heading "By category:" [level=4] [ref=e97]
        - group "Categories" [ref=e98]:
          - generic [ref=e99]: Categories
          - generic [ref=e100]:
            - generic [ref=e101]:
              - checkbox "Hand Tools" [ref=e102]
              - text: Hand Tools
            - list [ref=e103]:
              - group "Categories" [ref=e104]:
                - generic [ref=e105]: Categories
                - generic [ref=e107]:
                  - checkbox "Hammer" [ref=e108]
                  - text: Hammer
                - generic [ref=e110]:
                  - checkbox "Hand Saw" [ref=e111]
                  - text: Hand Saw
                - generic [ref=e113]:
                  - checkbox "Wrench" [ref=e114]
                  - text: Wrench
                - generic [ref=e116]:
                  - checkbox "Screwdriver" [ref=e117]
                  - text: Screwdriver
                - generic [ref=e119]:
                  - checkbox "Pliers" [ref=e120]
                  - text: Pliers
                - generic [ref=e122]:
                  - checkbox "Chisels" [ref=e123]
                  - text: Chisels
                - generic [ref=e125]:
                  - checkbox "Measures" [ref=e126]
                  - text: Measures
          - generic [ref=e127]:
            - generic [ref=e128]:
              - checkbox "Power Tools" [ref=e129]
              - text: Power Tools
            - list [ref=e130]:
              - group "Categories" [ref=e131]:
                - generic [ref=e132]: Categories
                - generic [ref=e134]:
                  - checkbox "Grinder" [ref=e135]
                  - text: Grinder
                - generic [ref=e137]:
                  - checkbox "Sander" [ref=e138]
                  - text: Sander
                - generic [ref=e140]:
                  - checkbox "Saw" [ref=e141]
                  - text: Saw
                - generic [ref=e143]:
                  - checkbox "Drill" [ref=e144]
                  - text: Drill
          - generic [ref=e145]:
            - generic [ref=e146]:
              - checkbox "Other" [ref=e147]
              - text: Other
            - list [ref=e148]:
              - group "Categories" [ref=e149]:
                - generic [ref=e150]: Categories
                - generic [ref=e152]:
                  - checkbox "Tool Belts" [ref=e153]
                  - text: Tool Belts
                - generic [ref=e155]:
                  - checkbox "Storage Solutions" [ref=e156]
                  - text: Storage Solutions
                - generic [ref=e158]:
                  - checkbox "Workbench" [ref=e159]
                  - text: Workbench
                - generic [ref=e161]:
                  - checkbox "Safety Gear" [ref=e162]
                  - text: Safety Gear
                - generic [ref=e164]:
                  - checkbox "Fasteners" [ref=e165]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e167]
        - group "Brands" [ref=e168]:
          - generic [ref=e169]: Brands
          - generic [ref=e171]:
            - checkbox "ForgeFlex Tools" [ref=e172]
            - text: ForgeFlex Tools
          - generic [ref=e174]:
            - checkbox "MightyCraft Hardware" [ref=e175]
            - text: MightyCraft Hardware
          - generic [ref=e177]:
            - checkbox "keileuk" [ref=e178]
            - text: keileuk
          - generic [ref=e180]:
            - checkbox "Fantastic Concrete Shirt" [ref=e181]
            - text: Fantastic Concrete Shirt
          - generic [ref=e183]:
            - checkbox "Gorgeous Rubber Cheese" [ref=e184]
            - text: Gorgeous Rubber Cheese
          - generic [ref=e186]:
            - checkbox "meer kek" [ref=e187]
            - text: meer kek
        - heading "Sustainability:" [level=4] [ref=e189]
        - group "Eco-Friendly Products" [ref=e190]:
          - generic [ref=e191]: Eco-Friendly Products
          - generic [ref=e193]:
            - checkbox "Show only eco-friendly products" [ref=e194]
            - text: Show only eco-friendly products
      - generic [ref=e195]:
        - generic [ref=e196]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e197] [cursor=pointer]':
            - /url: /product/01KT16KAPNYPWFYSW9TTBDPZ3J
            - generic [ref=e198]:
              - img "Combination Pliers" [ref=e199]
              - button "Compare" [ref=e200]:
                - img [ref=e202]
            - generic [ref=e204]:
              - heading "Combination Pliers" [level=5] [ref=e205]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e206]:
                - text: "CO₂:"
                - generic [ref=e207]: A
                - generic [ref=e208]: B
                - generic [ref=e209]: C
                - generic [ref=e210]: D
                - generic [ref=e211]: E
            - generic [ref=e213]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e214] [cursor=pointer]':
            - /url: /product/01KT16KAPRA613XBK1M783V0ZP
            - generic [ref=e215]:
              - img "Pliers" [ref=e216]
              - button "Compare" [ref=e217]:
                - img [ref=e219]
            - generic [ref=e221]:
              - heading "Pliers" [level=5] [ref=e222]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e223]:
                - text: "CO₂:"
                - generic [ref=e224]: A
                - generic [ref=e225]: B
                - generic [ref=e226]: C
                - generic [ref=e227]: D
                - generic [ref=e228]: E
            - generic [ref=e230]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e231] [cursor=pointer]':
            - /url: /product/01KT16KAQ0SP0E5AGS0CZYP8QY
            - generic [ref=e232]:
              - img "Bolt Cutters" [ref=e233]
              - button "Compare" [ref=e234]:
                - img [ref=e236]
            - generic [ref=e238]:
              - heading "Bolt Cutters" [level=5] [ref=e239]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e240]:
                - text: "CO₂:"
                - generic [ref=e241]: A
                - generic [ref=e242]: B
                - generic [ref=e243]: C
                - generic [ref=e244]: D
                - generic [ref=e245]: E
            - generic [ref=e247]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e248] [cursor=pointer]':
            - /url: /product/01KT16KAQ39BSP3HCFNVZWG1P7
            - generic [ref=e249]:
              - img "Long Nose Pliers" [ref=e250]
              - button "Compare" [ref=e251]:
                - img [ref=e253]
            - generic [ref=e255]:
              - heading "Long Nose Pliers" [level=5] [ref=e256]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e257]:
                - text: "CO₂:"
                - generic [ref=e258]: A
                - generic [ref=e259]: B
                - generic [ref=e260]: C
                - generic [ref=e261]: D
                - generic [ref=e262]: E
            - generic [ref=e263]:
              - generic [ref=e264]: Out of stock
              - generic [ref=e265]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e266] [cursor=pointer]':
            - /url: /product/01KT16KAQ6XHM2RHPQZ3MGM49Y
            - generic [ref=e267]:
              - img "Slip Joint Pliers" [ref=e268]
              - button "Compare" [ref=e269]:
                - img [ref=e271]
            - generic [ref=e273]:
              - heading "Slip Joint Pliers" [level=5] [ref=e274]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e275]:
                - text: "CO₂:"
                - generic [ref=e276]: A
                - generic [ref=e277]: B
                - generic [ref=e278]: C
                - generic [ref=e279]: D
                - generic [ref=e280]: E
            - generic [ref=e282]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e283] [cursor=pointer]':
            - /url: /product/01KT16KAQ8DFJR7PXHNBEWAPQV
            - generic [ref=e284]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e285]
              - button "Compare" [ref=e286]:
                - img [ref=e288]
            - generic [ref=e290]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e291]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e292]:
                - text: "CO₂:"
                - generic [ref=e293]: A
                - generic [ref=e294]: B
                - generic [ref=e295]: C
                - generic [ref=e296]: D
                - generic [ref=e297]: E
            - generic [ref=e299]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e300] [cursor=pointer]':
            - /url: /product/01KT16KAQAVFA19146APQ22HS8
            - generic [ref=e301]:
              - img "Hammer" [ref=e302]
              - button "Compare" [ref=e303]:
                - img [ref=e305]
            - generic [ref=e307]:
              - heading "Hammer" [level=5] [ref=e308]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e309]:
                - text: "CO₂:"
                - generic [ref=e310]: A
                - generic [ref=e311]: B
                - generic [ref=e312]: C
                - generic [ref=e313]: D
                - generic [ref=e314]: E
            - generic [ref=e316]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e317] [cursor=pointer]':
            - /url: /product/01KT16KAQBJ0CJK6XBQHZG04D3
            - generic [ref=e318]:
              - img "Claw Hammer" [ref=e319]
              - button "Compare" [ref=e320]:
                - img [ref=e322]
            - generic [ref=e324]:
              - heading "Claw Hammer" [level=5] [ref=e325]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e326]:
                - text: "CO₂:"
                - generic [ref=e327]: A
                - generic [ref=e328]: B
                - generic [ref=e329]: C
                - generic [ref=e330]: D
                - generic [ref=e331]: E
            - generic [ref=e333]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e334] [cursor=pointer]':
            - /url: /product/01KT16KAQDFJ2CSBMXZ2BPTGEF
            - generic [ref=e335]:
              - img "Thor Hammer" [ref=e336]
              - button "Compare" [ref=e337]:
                - img [ref=e339]
            - generic [ref=e341]:
              - heading "Thor Hammer" [level=5] [ref=e342]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e343]:
                - text: "CO₂:"
                - generic [ref=e344]: A
                - generic [ref=e345]: B
                - generic [ref=e346]: C
                - generic [ref=e347]: D
                - generic [ref=e348]: E
            - generic [ref=e350]: $11.14
        - navigation [ref=e353]:
          - list [ref=e354]:
            - listitem [ref=e355]:
              - button "Previous": «
            - listitem [ref=e356]:
              - button "Page-1" [ref=e357] [cursor=pointer]: "1"
            - listitem [ref=e358]:
              - button "Page-2" [ref=e359] [cursor=pointer]: "2"
            - listitem [ref=e360]:
              - button "Page-3" [ref=e361] [cursor=pointer]: "3"
            - listitem [ref=e362]:
              - button "Page-4" [ref=e363] [cursor=pointer]: "4"
            - listitem [ref=e364]:
              - button "Page-5" [ref=e365] [cursor=pointer]: "5"
            - listitem [ref=e366]:
              - button "Next" [ref=e367] [cursor=pointer]: »
  - paragraph [ref=e370]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e371] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e372] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e373] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e374] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e376] [cursor=pointer]:
    - img [ref=e377]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | 
  3  | test.describe('Service 08B — Invoices & Account Management (Details & PDF)', () => {
  4  | 
  5  |     test.beforeEach(async ({ accountPage }) => {
  6  |         // Trap the cart API before navigating to prevent Angular crash
  7  |         const cartPromise = accountPage.page.waitForResponse(
  8  |             (res) => res.url().includes('cart'),
  9  |             { timeout: 5000 }
  10 |         ).catch(() => console.log('Cart API safely bypassed.'));
  11 | 
  12 |         await accountPage.navigate('/');
  13 |         await cartPromise;
  14 | 
  15 |         // Proof of logged-in state
> 16 |         await accountPage.navMenu.waitFor({ state: 'visible', timeout: 15000 });
     |                                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  17 |     });
  18 | 
  19 |     test('TC_08_09 — Every invoice row has a visible "Details" button', async ({ accountPage }) => {
  20 |         await accountPage.navigateToInvoices();
  21 |         const rowCount    = await accountPage.getInvoiceCount();
  22 |         const buttonCount = await accountPage.allDetailsButtons.count();
  23 |         expect(buttonCount).toBe(rowCount);
  24 |     });
  25 | 
  26 |     test('TC_08_10 — Clicking "Details" on the first invoice navigates to its detail page', async ({ accountPage }) => {
  27 |         await accountPage.navigateToInvoices();
  28 |         await accountPage.openFirstInvoiceDetails();
  29 |         await expect(accountPage.page).toHaveURL(/\/account\/invoices\/.+/);
  30 |     });
  31 | 
  32 |     test('TC_08_11 — Invoice detail page URL contains a non-empty invoice ID segment', async ({ accountPage }) => {
  33 |         await accountPage.navigateToInvoices();
  34 |         await accountPage.openFirstInvoiceDetails();
  35 |         const segments = accountPage.page.url().split('/');
  36 |         expect(segments[segments.length - 1].length).toBeGreaterThan(0);
  37 |     });
  38 | 
  39 |     test('TC_08_12 — Invoice detail page displays an INV- prefixed reference', async ({ accountPage }) => {
  40 |         await accountPage.navigateToInvoices();
  41 |         await accountPage.openFirstInvoiceDetails();
  42 |         await expect(accountPage.invoiceIdCell).toBeVisible({ timeout: 8000 });
  43 |         const id = await accountPage.invoiceIdCell.textContent();
  44 |         expect(id?.trim()).toMatch(/INV-/);
  45 |     });
  46 | 
  47 |     test('TC_08_13 — "Download PDF" button is visible on the invoice detail page', async ({ accountPage }) => {
  48 |         await accountPage.navigateToInvoices();
  49 |         await accountPage.openFirstInvoiceDetails();
  50 |         await expect(accountPage.downloadPdfButton).toBeVisible({ timeout: 8000 });
  51 |     });
  52 | 
  53 |     test('TC_08_14 — "Download PDF" button displays the correct label text', async ({ accountPage }) => {
  54 |         await accountPage.navigateToInvoices();
  55 |         await accountPage.openFirstInvoiceDetails();
  56 |         await expect(accountPage.downloadPdfButton).toContainText('Download', { timeout: 8000 });
  57 |     });
  58 | 
  59 |     test('TC_08_15 — Clicking "Download PDF" initiates a PDF file download', async ({ accountPage }) => {
  60 |         await accountPage.navigateToInvoices();
  61 |         await accountPage.openFirstInvoiceDetails();
  62 | 
  63 |         const [download] = await Promise.all([
  64 |             accountPage.page.waitForEvent('download', { timeout: 15000 }),
  65 |             accountPage.downloadPdfButton.click(),
  66 |         ]);
  67 | 
  68 |         expect(download).toBeTruthy();
  69 |     });
  70 | 
  71 | });
```