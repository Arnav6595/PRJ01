# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08-admin-navigation.spec.js >> Service 08 — Admin Dashboard & Navigation >> TC_Admin_09 — Admin can navigate to Reports > Statistics
- Location: tests/08-admin-navigation.spec.js:59:9

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByTestId('nav-menu')

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
          - generic [ref=e189]:
            - checkbox "Ergonomic Fresh Chicken" [ref=e190]
            - text: Ergonomic Fresh Chicken
          - generic [ref=e192]:
            - checkbox "Licensed Granite Bike" [ref=e193]
            - text: Licensed Granite Bike
          - generic [ref=e195]:
            - checkbox "Awesome Cotton Bacon" [ref=e196]
            - text: Awesome Cotton Bacon
          - generic [ref=e198]:
            - checkbox "Handcrafted Fresh Chicken" [ref=e199]
            - text: Handcrafted Fresh Chicken
        - heading "Sustainability:" [level=4] [ref=e201]
        - group "Eco-Friendly Products" [ref=e202]:
          - generic [ref=e203]: Eco-Friendly Products
          - generic [ref=e205]:
            - checkbox "Show only eco-friendly products" [ref=e206]
            - text: Show only eco-friendly products
      - generic [ref=e207]:
        - generic [ref=e208]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e209] [cursor=pointer]':
            - /url: /product/01KT16KAPNYPWFYSW9TTBDPZ3J
            - generic [ref=e210]:
              - img "Combination Pliers" [ref=e211]
              - button "Compare" [ref=e212]:
                - img [ref=e214]
            - generic [ref=e216]:
              - heading "Combination Pliers" [level=5] [ref=e217]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e218]:
                - text: "CO₂:"
                - generic [ref=e219]: A
                - generic [ref=e220]: B
                - generic [ref=e221]: C
                - generic [ref=e222]: D
                - generic [ref=e223]: E
            - generic [ref=e225]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e226] [cursor=pointer]':
            - /url: /product/01KT16KAPRA613XBK1M783V0ZP
            - generic [ref=e227]:
              - img "Pliers" [ref=e228]
              - button "Compare" [ref=e229]:
                - img [ref=e231]
            - generic [ref=e233]:
              - heading "Pliers" [level=5] [ref=e234]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e235]:
                - text: "CO₂:"
                - generic [ref=e236]: A
                - generic [ref=e237]: B
                - generic [ref=e238]: C
                - generic [ref=e239]: D
                - generic [ref=e240]: E
            - generic [ref=e242]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e243] [cursor=pointer]':
            - /url: /product/01KT16KAQ0SP0E5AGS0CZYP8QY
            - generic [ref=e244]:
              - img "Bolt Cutters" [ref=e245]
              - button "Compare" [ref=e246]:
                - img [ref=e248]
            - generic [ref=e250]:
              - heading "Bolt Cutters" [level=5] [ref=e251]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e252]:
                - text: "CO₂:"
                - generic [ref=e253]: A
                - generic [ref=e254]: B
                - generic [ref=e255]: C
                - generic [ref=e256]: D
                - generic [ref=e257]: E
            - generic [ref=e259]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e260] [cursor=pointer]':
            - /url: /product/01KT16KAQ39BSP3HCFNVZWG1P7
            - generic [ref=e261]:
              - img "Long Nose Pliers" [ref=e262]
              - button "Compare" [ref=e263]:
                - img [ref=e265]
            - generic [ref=e267]:
              - heading "Long Nose Pliers" [level=5] [ref=e268]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e269]:
                - text: "CO₂:"
                - generic [ref=e270]: A
                - generic [ref=e271]: B
                - generic [ref=e272]: C
                - generic [ref=e273]: D
                - generic [ref=e274]: E
            - generic [ref=e275]:
              - generic [ref=e276]: Out of stock
              - generic [ref=e277]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e278] [cursor=pointer]':
            - /url: /product/01KT16KAQ6XHM2RHPQZ3MGM49Y
            - generic [ref=e279]:
              - img "Slip Joint Pliers" [ref=e280]
              - button "Compare" [ref=e281]:
                - img [ref=e283]
            - generic [ref=e285]:
              - heading "Slip Joint Pliers" [level=5] [ref=e286]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e287]:
                - text: "CO₂:"
                - generic [ref=e288]: A
                - generic [ref=e289]: B
                - generic [ref=e290]: C
                - generic [ref=e291]: D
                - generic [ref=e292]: E
            - generic [ref=e294]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e295] [cursor=pointer]':
            - /url: /product/01KT16KAQ8DFJR7PXHNBEWAPQV
            - generic [ref=e296]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e297]
              - button "Compare" [ref=e298]:
                - img [ref=e300]
            - generic [ref=e302]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e303]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e304]:
                - text: "CO₂:"
                - generic [ref=e305]: A
                - generic [ref=e306]: B
                - generic [ref=e307]: C
                - generic [ref=e308]: D
                - generic [ref=e309]: E
            - generic [ref=e311]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e312] [cursor=pointer]':
            - /url: /product/01KT16KAQAVFA19146APQ22HS8
            - generic [ref=e313]:
              - img "Hammer" [ref=e314]
              - button "Compare" [ref=e315]:
                - img [ref=e317]
            - generic [ref=e319]:
              - heading "Hammer" [level=5] [ref=e320]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e321]:
                - text: "CO₂:"
                - generic [ref=e322]: A
                - generic [ref=e323]: B
                - generic [ref=e324]: C
                - generic [ref=e325]: D
                - generic [ref=e326]: E
            - generic [ref=e328]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e329] [cursor=pointer]':
            - /url: /product/01KT16KAQBJ0CJK6XBQHZG04D3
            - generic [ref=e330]:
              - img "Claw Hammer" [ref=e331]
              - button "Compare" [ref=e332]:
                - img [ref=e334]
            - generic [ref=e336]:
              - heading "Claw Hammer" [level=5] [ref=e337]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e338]:
                - text: "CO₂:"
                - generic [ref=e339]: A
                - generic [ref=e340]: B
                - generic [ref=e341]: C
                - generic [ref=e342]: D
                - generic [ref=e343]: E
            - generic [ref=e345]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e346] [cursor=pointer]':
            - /url: /product/01KT16KAQDFJ2CSBMXZ2BPTGEF
            - generic [ref=e347]:
              - img "Thor Hammer" [ref=e348]
              - button "Compare" [ref=e349]:
                - img [ref=e351]
            - generic [ref=e353]:
              - heading "Thor Hammer" [level=5] [ref=e354]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e355]:
                - text: "CO₂:"
                - generic [ref=e356]: A
                - generic [ref=e357]: B
                - generic [ref=e358]: C
                - generic [ref=e359]: D
                - generic [ref=e360]: E
            - generic [ref=e362]: $11.14
        - navigation [ref=e365]:
          - list [ref=e366]:
            - listitem [ref=e367]:
              - button "Previous": «
            - listitem [ref=e368]:
              - button "Page-1" [ref=e369] [cursor=pointer]: "1"
            - listitem [ref=e370]:
              - button "Page-2" [ref=e371] [cursor=pointer]: "2"
            - listitem [ref=e372]:
              - button "Page-3" [ref=e373] [cursor=pointer]: "3"
            - listitem [ref=e374]:
              - button "Page-4" [ref=e375] [cursor=pointer]: "4"
            - listitem [ref=e376]:
              - button "Page-5" [ref=e377] [cursor=pointer]: "5"
            - listitem [ref=e378]:
              - button "Next" [ref=e379] [cursor=pointer]: »
  - paragraph [ref=e382]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e383] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e384] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e385] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e386] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e388] [cursor=pointer]:
    - img [ref=e389]
```

# Test source

```ts
  1  | // @ts-check
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | export class BasePage {
  5  |     /**
  6  |      * @param {import('@playwright/test').Page} page
  7  |      */
  8  |     constructor(page) {
  9  |         this.page = page;
  10 |     }
  11 | 
  12 |     /**
  13 |      * Navigates to a specific relative path using the Base URL
  14 |      * @param {string} path
  15 |      */
  16 |     async navigate(path) {
  17 |         await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  18 |     }
  19 | 
  20 |     /**
  21 |      * A reusable method to click an element cleanly
  22 |      * Playwright automatically waits for the element to be visible and actionable
  23 |      * @param {import('@playwright/test').Locator} locator
  24 |      */
  25 |     async clickElement(locator) {
> 26 |         await locator.click();
     |                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  27 |     }
  28 | 
  29 |     /**
  30 |      * A reusable method to fill inputs cleanly
  31 |      * Playwright automatically waits for the input to be visible and ready
  32 |      * @param {import('@playwright/test').Locator} locator
  33 |      * @param {string} text
  34 |      */
  35 |     async fillInput(locator, text) {
  36 |         await locator.fill(text);
  37 |     }
  38 | }
```