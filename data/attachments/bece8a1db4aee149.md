# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08-admin-navigation.spec.js >> Service 08 — Admin Dashboard & Navigation >> TC_Admin_10 — Admin can navigate to Reports > Average sales per week
- Location: tests/08-admin-navigation.spec.js:65:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'click')
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
            - menuitem "John Doe Dashboard Brands Categories Products Orders Users Messages Settings Reports Statistics Average sales per month Average sales per week Sign out" [ref=e40]:
              - button "John Doe" [expanded] [active] [ref=e41] [cursor=pointer]
              - list "John Doe" [ref=e42]:
                - listitem [ref=e43]:
                  - link "Dashboard" [ref=e44] [cursor=pointer]:
                    - /url: /admin/dashboard
                - listitem [ref=e45]:
                  - link "Brands" [ref=e46] [cursor=pointer]:
                    - /url: /admin/brands
                - listitem [ref=e47]:
                  - link "Categories" [ref=e48] [cursor=pointer]:
                    - /url: /admin/categories
                - listitem [ref=e49]:
                  - link "Products" [ref=e50] [cursor=pointer]:
                    - /url: /admin/products
                - listitem [ref=e51]:
                  - link "Orders" [ref=e52] [cursor=pointer]:
                    - /url: /admin/orders
                - listitem [ref=e53]:
                  - link "Users" [ref=e54] [cursor=pointer]:
                    - /url: /admin/users
                - listitem [ref=e55]:
                  - link "Messages" [ref=e56] [cursor=pointer]:
                    - /url: /admin/messages
                - listitem [ref=e57]:
                  - separator [ref=e58]
                - listitem [ref=e59]:
                  - link "Settings" [ref=e60] [cursor=pointer]:
                    - /url: /admin/settings
                - listitem [ref=e61]:
                  - separator [ref=e62]
                - listitem [ref=e63]:
                  - button "Reports" [ref=e64] [cursor=pointer]
                  - list "Reports" [ref=e65]:
                    - listitem [ref=e66]:
                      - link "Statistics" [ref=e67] [cursor=pointer]:
                        - /url: /admin/reports/statistics
                    - listitem [ref=e68]:
                      - link "Average sales per month" [ref=e69] [cursor=pointer]:
                        - /url: /admin/reports/average-sales-per-month
                    - listitem [ref=e70]:
                      - link "Average sales per week" [ref=e71] [cursor=pointer]:
                        - /url: /admin/reports/average-sales-per-week
                - listitem [ref=e72]:
                  - separator [ref=e73]
                - listitem [ref=e74]:
                  - generic [ref=e75]: Sign out
          - button "Select language" [ref=e77] [cursor=pointer]:
            - img [ref=e79]
            - text: EN
  - generic [ref=e82]:
    - generic [ref=e83]:
      - paragraph [ref=e84]:
        - img "Banner" [ref=e85]
      - separator [ref=e86]
    - generic [ref=e87]:
      - generic [ref=e88]:
        - heading "Sort" [level=4] [ref=e89]:
          - img [ref=e91]
          - text: Sort
        - separator [ref=e93]
        - combobox "sort" [ref=e96]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading "Price Range" [level=4] [ref=e97]:
          - img [ref=e99]
          - text: Price Range
        - separator [ref=e101]
        - generic "ngx-slider" [ref=e103]:
          - slider "ngx-slider" [ref=e108] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e109] [cursor=pointer]
          - generic [ref=e110]: "0"
          - generic [ref=e111]: "200"
          - generic [ref=e112]: "1"
          - generic [ref=e113]: "100"
        - heading "Search" [level=4] [ref=e115]:
          - img [ref=e117]
          - text: Search
        - separator [ref=e119]
        - generic [ref=e121]:
          - generic [ref=e122]: Search
          - textbox "Search" [ref=e123]
          - button "X" [ref=e124] [cursor=pointer]
          - button "Search" [ref=e125] [cursor=pointer]
        - heading "Filters" [level=4] [ref=e126]:
          - img [ref=e128]
          - text: Filters
        - separator [ref=e130]
        - heading "By category:" [level=4] [ref=e131]
        - group "Categories" [ref=e132]:
          - generic [ref=e133]: Categories
          - generic [ref=e134]:
            - generic [ref=e135]:
              - checkbox "Hand Tools" [ref=e136]
              - text: Hand Tools
            - list [ref=e137]:
              - group "Categories" [ref=e138]:
                - generic [ref=e139]: Categories
                - generic [ref=e141]:
                  - checkbox "Hammer" [ref=e142]
                  - text: Hammer
                - generic [ref=e144]:
                  - checkbox "Hand Saw" [ref=e145]
                  - text: Hand Saw
                - generic [ref=e147]:
                  - checkbox "Wrench" [ref=e148]
                  - text: Wrench
                - generic [ref=e150]:
                  - checkbox "Screwdriver" [ref=e151]
                  - text: Screwdriver
                - generic [ref=e153]:
                  - checkbox "Pliers" [ref=e154]
                  - text: Pliers
                - generic [ref=e156]:
                  - checkbox "Chisels" [ref=e157]
                  - text: Chisels
                - generic [ref=e159]:
                  - checkbox "Measures" [ref=e160]
                  - text: Measures
          - generic [ref=e161]:
            - generic [ref=e162]:
              - checkbox "Power Tools" [ref=e163]
              - text: Power Tools
            - list [ref=e164]:
              - group "Categories" [ref=e165]:
                - generic [ref=e166]: Categories
                - generic [ref=e168]:
                  - checkbox "Grinder" [ref=e169]
                  - text: Grinder
                - generic [ref=e171]:
                  - checkbox "Sander" [ref=e172]
                  - text: Sander
                - generic [ref=e174]:
                  - checkbox "Saw" [ref=e175]
                  - text: Saw
                - generic [ref=e177]:
                  - checkbox "Drill" [ref=e178]
                  - text: Drill
          - generic [ref=e179]:
            - generic [ref=e180]:
              - checkbox "Other" [ref=e181]
              - text: Other
            - list [ref=e182]:
              - group "Categories" [ref=e183]:
                - generic [ref=e184]: Categories
                - generic [ref=e186]:
                  - checkbox "Tool Belts" [ref=e187]
                  - text: Tool Belts
                - generic [ref=e189]:
                  - checkbox "Storage Solutions" [ref=e190]
                  - text: Storage Solutions
                - generic [ref=e192]:
                  - checkbox "Workbench" [ref=e193]
                  - text: Workbench
                - generic [ref=e195]:
                  - checkbox "Safety Gear" [ref=e196]
                  - text: Safety Gear
                - generic [ref=e198]:
                  - checkbox "Fasteners" [ref=e199]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e201]
        - group "Brands" [ref=e202]:
          - generic [ref=e203]: Brands
          - generic [ref=e205]:
            - checkbox "ForgeFlex Tools" [ref=e206]
            - text: ForgeFlex Tools
          - generic [ref=e208]:
            - checkbox "MightyCraft Hardware" [ref=e209]
            - text: MightyCraft Hardware
          - generic [ref=e211]:
            - checkbox "Test Brand 1780308507955" [ref=e212]
            - text: Test Brand 1780308507955
        - heading "Sustainability:" [level=4] [ref=e214]
        - group "Eco-Friendly Products" [ref=e215]:
          - generic [ref=e216]: Eco-Friendly Products
          - generic [ref=e218]:
            - checkbox "Show only eco-friendly products" [ref=e219]
            - text: Show only eco-friendly products
      - generic [ref=e220]:
        - generic [ref=e221]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e222] [cursor=pointer]':
            - /url: /product/01KT1A1A8T783GREARDVTXKG6N
            - generic [ref=e223]:
              - img "Combination Pliers" [ref=e224]
              - button "Compare" [ref=e225]:
                - img [ref=e227]
            - generic [ref=e229]:
              - heading "Combination Pliers" [level=5] [ref=e230]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e231]:
                - text: "CO₂:"
                - generic [ref=e232]: A
                - generic [ref=e233]: B
                - generic [ref=e234]: C
                - generic [ref=e235]: D
                - generic [ref=e236]: E
            - generic [ref=e238]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e239] [cursor=pointer]':
            - /url: /product/01KT1A1A8Y6WH5229TDAEXP74T
            - generic [ref=e240]:
              - img "Pliers" [ref=e241]
              - button "Compare" [ref=e242]:
                - img [ref=e244]
            - generic [ref=e246]:
              - heading "Pliers" [level=5] [ref=e247]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e248]:
                - text: "CO₂:"
                - generic [ref=e249]: A
                - generic [ref=e250]: B
                - generic [ref=e251]: C
                - generic [ref=e252]: D
                - generic [ref=e253]: E
            - generic [ref=e255]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e256] [cursor=pointer]':
            - /url: /product/01KT1A1A909QT36MY4ECRZAAF2
            - generic [ref=e257]:
              - img "Bolt Cutters" [ref=e258]
              - button "Compare" [ref=e259]:
                - img [ref=e261]
            - generic [ref=e263]:
              - heading "Bolt Cutters" [level=5] [ref=e264]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e265]:
                - text: "CO₂:"
                - generic [ref=e266]: A
                - generic [ref=e267]: B
                - generic [ref=e268]: C
                - generic [ref=e269]: D
                - generic [ref=e270]: E
            - generic [ref=e272]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e273] [cursor=pointer]':
            - /url: /product/01KT1A1A92JD5FHX4V3X311KSD
            - generic [ref=e274]:
              - img "Long Nose Pliers" [ref=e275]
              - button "Compare" [ref=e276]:
                - img [ref=e278]
            - generic [ref=e280]:
              - heading "Long Nose Pliers" [level=5] [ref=e281]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e282]:
                - text: "CO₂:"
                - generic [ref=e283]: A
                - generic [ref=e284]: B
                - generic [ref=e285]: C
                - generic [ref=e286]: D
                - generic [ref=e287]: E
            - generic [ref=e288]:
              - generic [ref=e289]: Out of stock
              - generic [ref=e290]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e291] [cursor=pointer]':
            - /url: /product/01KT1A1A98DMFBKYSPNPQ5P1D7
            - generic [ref=e292]:
              - img "Slip Joint Pliers" [ref=e293]
              - button "Compare" [ref=e294]:
                - img [ref=e296]
            - generic [ref=e298]:
              - heading "Slip Joint Pliers" [level=5] [ref=e299]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e300]:
                - text: "CO₂:"
                - generic [ref=e301]: A
                - generic [ref=e302]: B
                - generic [ref=e303]: C
                - generic [ref=e304]: D
                - generic [ref=e305]: E
            - generic [ref=e307]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e308] [cursor=pointer]':
            - /url: /product/01KT1A1A9A7SDRRA7WDA2KPA6J
            - generic [ref=e309]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e310]
              - button "Compare" [ref=e311]:
                - img [ref=e313]
            - generic [ref=e315]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e316]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e317]:
                - text: "CO₂:"
                - generic [ref=e318]: A
                - generic [ref=e319]: B
                - generic [ref=e320]: C
                - generic [ref=e321]: D
                - generic [ref=e322]: E
            - generic [ref=e324]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e325] [cursor=pointer]':
            - /url: /product/01KT1A1A9DRR1B16QCSA263XD4
            - generic [ref=e326]:
              - img "Hammer" [ref=e327]
              - button "Compare" [ref=e328]:
                - img [ref=e330]
            - generic [ref=e332]:
              - heading "Hammer" [level=5] [ref=e333]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e334]:
                - text: "CO₂:"
                - generic [ref=e335]: A
                - generic [ref=e336]: B
                - generic [ref=e337]: C
                - generic [ref=e338]: D
                - generic [ref=e339]: E
            - generic [ref=e341]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e342] [cursor=pointer]':
            - /url: /product/01KT1A1A9FZM890CR17WQK56N2
            - generic [ref=e343]:
              - img "Claw Hammer" [ref=e344]
              - button "Compare" [ref=e345]:
                - img [ref=e347]
            - generic [ref=e349]:
              - heading "Claw Hammer" [level=5] [ref=e350]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e351]:
                - text: "CO₂:"
                - generic [ref=e352]: A
                - generic [ref=e353]: B
                - generic [ref=e354]: C
                - generic [ref=e355]: D
                - generic [ref=e356]: E
            - generic [ref=e358]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e359] [cursor=pointer]':
            - /url: /product/01KT1A1A9G8V51ZNXZZ53RQN4Q
            - generic [ref=e360]:
              - img "Thor Hammer" [ref=e361]
              - button "Compare" [ref=e362]:
                - img [ref=e364]
            - generic [ref=e366]:
              - heading "Thor Hammer" [level=5] [ref=e367]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e368]:
                - text: "CO₂:"
                - generic [ref=e369]: A
                - generic [ref=e370]: B
                - generic [ref=e371]: C
                - generic [ref=e372]: D
                - generic [ref=e373]: E
            - generic [ref=e375]: $11.14
        - navigation [ref=e378]:
          - list [ref=e379]:
            - listitem [ref=e380]:
              - button "Previous": «
            - listitem [ref=e381]:
              - button "Page-1" [ref=e382] [cursor=pointer]: "1"
            - listitem [ref=e383]:
              - button "Page-2" [ref=e384] [cursor=pointer]: "2"
            - listitem [ref=e385]:
              - button "Page-3" [ref=e386] [cursor=pointer]: "3"
            - listitem [ref=e387]:
              - button "Page-4" [ref=e388] [cursor=pointer]: "4"
            - listitem [ref=e389]:
              - button "Page-5" [ref=e390] [cursor=pointer]: "5"
            - listitem [ref=e391]:
              - button "Next" [ref=e392] [cursor=pointer]: »
  - paragraph [ref=e395]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e396] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e397] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e398] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e399] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e401] [cursor=pointer]:
    - img [ref=e402]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | import path from 'path';
  3  | 
  4  | // Lock the file to ONLY use the Admin session
  5  | test.use({ storageState: 'playwright/.auth/admin.json' });
  6  | 
  7  | test.describe('Service 08 — Admin Dashboard & Navigation', () => {
  8  | 
  9  |     test.beforeEach(async ({ homePage, adminPage }) => {
  10 |         // Hydrate the app safely
  11 |         await homePage.goTo();
  12 |         await homePage.productCards.first().waitFor({ state: 'visible', timeout: 15000 });
  13 |         
  14 |         // Open the admin dropdown
  15 |         await adminPage.openAdminDropdown();
  16 |     });
  17 | 
  18 |     test('TC_Admin_01 — Admin dashboard redirects correctly and displays Sales title', async ({ adminPage }) => {
  19 |         await adminPage.dashboardLink.click();
  20 |         await expect(adminPage.page).toHaveURL(/\/admin\/dashboard/);
  21 |         await expect(adminPage.pageTitle).toContainText('Sales over the years');
  22 |     });
  23 | 
  24 |     test('TC_Admin_02 — Admin can navigate to Brands', async ({ adminPage }) => {
  25 |         await adminPage.brandsLink.click();
  26 |         await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
  27 |     });
  28 | 
  29 |     test('TC_Admin_03 — Admin can navigate to Categories', async ({ adminPage }) => {
  30 |         await adminPage.categoriesLink.click();
  31 |         await expect(adminPage.page).toHaveURL(/\/admin\/categories/);
  32 |     });
  33 | 
  34 |     test('TC_Admin_04 — Admin can navigate to Products', async ({ adminPage }) => {
  35 |         await adminPage.productsLink.click();
  36 |         await expect(adminPage.page).toHaveURL(/\/admin\/products/);
  37 |     });
  38 | 
  39 |     test('TC_Admin_05 — Admin can navigate to Orders', async ({ adminPage }) => {
  40 |         await adminPage.ordersLink.click();
  41 |         await expect(adminPage.page).toHaveURL(/\/admin\/orders/);
  42 |     });
  43 | 
  44 |     test('TC_Admin_06 — Admin can navigate to Users', async ({ adminPage }) => {
  45 |         await adminPage.usersLink.click();
  46 |         await expect(adminPage.page).toHaveURL(/\/admin\/users/);
  47 |     });
  48 | 
  49 |     test('TC_Admin_07 — Admin can navigate to Messages', async ({ adminPage }) => {
  50 |         await adminPage.messagesLink.click();
  51 |         await expect(adminPage.page).toHaveURL(/\/admin\/messages/);
  52 |     });
  53 | 
  54 |     test('TC_Admin_08 — Admin can navigate to Settings', async ({ adminPage }) => {
  55 |         await adminPage.settingsLink.click();
  56 |         await expect(adminPage.page).toHaveURL(/\/admin\/settings/);
  57 |     });
  58 | 
  59 |     test('TC_Admin_09 — Admin can navigate to Reports > Statistics', async ({ adminPage }) => {
  60 |         await adminPage.openReportsDropdown();
  61 |         await adminPage.statisticsLink.click();
  62 |         await expect(adminPage.page).toHaveURL(/\/admin\/reports\/statistics/);
  63 |     });
  64 | 
  65 |     test('TC_Admin_10 — Admin can navigate to Reports > Average sales per week', async ({ adminPage }) => {
  66 |         await adminPage.openReportsDropdown();
> 67 |         await adminPage.averageSalesLink.click();
     |                                          ^ TypeError: Cannot read properties of undefined (reading 'click')
  68 |         await expect(adminPage.page).toHaveURL(/\/admin\/reports\/average-sales-per-week/);
  69 |     });
  70 |    test('TC_Admin_11 — Admin can navigate to Reports > Average sales per month', async ({ adminPage }) => {
  71 |     await adminPage.openReportsDropdown();
  72 | 
  73 |     
  74 |     await adminPage.averageMonthLink.click();
  75 | 
  76 |     await expect(adminPage.page).toHaveURL(/\/admin\/reports\/average-sales-per-month/);
  77 | });
  78 | 
  79 | });
```