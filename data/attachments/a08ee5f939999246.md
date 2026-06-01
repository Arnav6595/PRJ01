# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12-accessibility.spec.js >> Service — Accessibility (axe-core) >> A11Y_03 — Registration page has no critical accessibility violations
- Location: tests/12-accessibility.spec.js:39:9

# Error details

```
Error: critical violations: button-name

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 95

- Array []
+ Array [
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button type=\"button\" class=\"btn btn-outline-secondary\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".btn-outline-secondary",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
+ ]
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
  - generic [ref=e51]:
    - heading "Customer registration" [level=3] [ref=e52]
    - generic [ref=e54]:
      - generic [ref=e56]:
        - generic [ref=e57]: First name
        - textbox "First name" [ref=e58]:
          - /placeholder: First name *
      - generic [ref=e60]:
        - generic [ref=e61]: Last name
        - textbox "Last name" [ref=e62]:
          - /placeholder: Your last name *
      - generic [ref=e63]:
        - generic [ref=e64]: Date of Birth *
        - textbox "Date of Birth *" [ref=e65]:
          - /placeholder: YYYY-MM-DD
      - generic [ref=e67]:
        - generic [ref=e68]: Country
        - combobox "Country" [ref=e69]:
          - option "Albania"
          - option "Åland Islands"
          - option "Algeria"
          - option "American Samoa"
          - option "Andorra"
          - option "Angola"
          - option "Anguilla"
          - option "Antarctica"
          - option "Antigua and Barbuda"
          - option "Argentina"
          - option "Armenia"
          - option "Aruba"
          - option "Australia"
          - option "Austria"
          - option "Azerbaijan"
          - option "Bahamas (the)"
          - option "Bahrain"
          - option "Bangladesh"
          - option "Barbados"
          - option "Belarus"
          - option "Belgium"
          - option "Belize"
          - option "Benin"
          - option "Bermuda"
          - option "Bhutan"
          - option "Bolivia (Plurinational State of)"
          - option "Bonaire, Sint Eustatius and Saba"
          - option "Bosnia and Herzegovina"
          - option "Botswana"
          - option "Bouvet Island"
          - option "Brazil"
          - option "British Indian Ocean Territory (the)"
          - option "Brunei Darussalam"
          - option "Bulgaria"
          - option "Burkina Faso"
          - option "Burundi"
          - option "Cabo Verde"
          - option "Cambodia"
          - option "Cameroon"
          - option "Canada"
          - option "Cayman Islands (the)"
          - option "Central African Republic (the)"
          - option "Chad"
          - option "Chile"
          - option "China"
          - option "Christmas Island"
          - option "Cocos (Keeling) Islands (the)"
          - option "Colombia"
          - option "Comoros (the)"
          - option "Congo (the Democratic Republic of the)"
          - option "Congo (the)"
          - option "Cook Islands (the)"
          - option "Costa Rica"
          - option "Croatia"
          - option "Cuba"
          - option "Curaçao"
          - option "Cyprus"
          - option "Czechia"
          - option "Côte d'Ivoire"
          - option "Denmark"
          - option "Djibouti"
          - option "Dominica"
          - option "Dominican Republic (the)"
          - option "Ecuador"
          - option "Egypt"
          - option "El Salvador"
          - option "Equatorial Guinea"
          - option "Eritrea"
          - option "Estonia"
          - option "Eswatini"
          - option "Ethiopia"
          - option "Falkland Islands (the) [Malvinas]"
          - option "Faroe Islands (the)"
          - option "Fiji"
          - option "Finland"
          - option "France"
          - option "French Guiana"
          - option "French Polynesia"
          - option "French Southern Territories (the)"
          - option "Gabon"
          - option "Gambia (the)"
          - option "Georgia"
          - option "Germany"
          - option "Ghana"
          - option "Gibraltar"
          - option "Greece"
          - option "Greenland"
          - option "Grenada"
          - option "Guadeloupe"
          - option "Guam"
          - option "Guatemala"
          - option "Guernsey"
          - option "Guinea"
          - option "Guinea-Bissau"
          - option "Guyana"
          - option "Haiti"
          - option "Heard Island and McDonald Islands"
          - option "Holy See (the)"
          - option "Honduras"
          - option "Hong Kong"
          - option "Hungary"
          - option "Iceland"
          - option "India"
          - option "Indonesia"
          - option "Iran (Islamic Republic of)"
          - option "Iraq"
          - option "Ireland"
          - option "Isle of Man"
          - option "Israel"
          - option "Italy"
          - option "Jamaica"
          - option "Japan"
          - option "Jersey"
          - option "Jordan"
          - option "Kazakhstan"
          - option "Kenya"
          - option "Kiribati"
          - option "Korea (the Democratic People's Republic of)"
          - option "Korea (the Republic of)"
          - option "Kuwait"
          - option "Kyrgyzstan"
          - option "Lao People's Democratic Republic (the)"
          - option "Latvia"
          - option "Lebanon"
          - option "Lesotho"
          - option "Liberia"
          - option "Libya"
          - option "Liechtenstein"
          - option "Lithuania"
          - option "Luxembourg"
          - option "Macao"
          - option "Madagascar"
          - option "Malawi"
          - option "Malaysia"
          - option "Maldives"
          - option "Mali"
          - option "Malta"
          - option "Marshall Islands (the)"
          - option "Martinique"
          - option "Mauritania"
          - option "Mauritius"
          - option "Mayotte"
          - option "Mexico"
          - option "Micronesia (Federated States of)"
          - option "Moldova (the Republic of)"
          - option "Monaco"
          - option "Mongolia"
          - option "Montenegro"
          - option "Montserrat"
          - option "Morocco"
          - option "Mozambique"
          - option "Myanmar"
          - option "Namibia"
          - option "Nauru"
          - option "Nepal"
          - option "Netherlands (the)"
          - option "New Caledonia"
          - option "New Zealand"
          - option "Nicaragua"
          - option "Niger (the)"
          - option "Nigeria"
          - option "Niue"
          - option "Norfolk Island"
          - option "Northern Mariana Islands (the)"
          - option "Norway"
          - option "Oman"
          - option "Pakistan"
          - option "Palau"
          - option "Palestine, State of"
          - option "Panama"
          - option "Papua New Guinea"
          - option "Paraguay"
          - option "Peru"
          - option "Philippines (the)"
          - option "Pitcairn"
          - option "Poland"
          - option "Portugal"
          - option "Puerto Rico"
          - option "Qatar"
          - option "Republic of North Macedonia"
          - option "Romania"
          - option "Russian Federation (the)"
          - option "Rwanda"
          - option "Réunion"
          - option "Saint Barthélemy"
          - option "Saint Helena, Ascension and Tristan da Cunha"
          - option "Saint Kitts and Nevis"
          - option "Saint Lucia"
          - option "Saint Martin (French part)"
          - option "Saint Pierre and Miquelon"
          - option "Saint Vincent and the Grenadines"
          - option "Samoa"
          - option "San Marino"
          - option "Sao Tome and Principe"
          - option "Saudi Arabia"
          - option "Senegal"
          - option "Serbia"
          - option "Seychelles"
          - option "Sierra Leone"
          - option "Singapore"
          - option "Sint Maarten (Dutch part)"
          - option "Slovakia"
          - option "Slovenia"
          - option "Solomon Islands"
          - option "Somalia"
          - option "South Africa"
          - option "South Georgia and the South Sandwich Islands"
          - option "South Sudan"
          - option "Spain"
          - option "Sri Lanka"
          - option "Sudan (the)"
          - option "Suriname"
          - option "Svalbard and Jan Mayen"
          - option "Sweden"
          - option "Switzerland"
          - option "Syrian Arab Republic"
          - option "Taiwan (Province of China)"
          - option "Tajikistan"
          - option "Tanzania, United Republic of"
          - option "Thailand"
          - option "Timor-Leste"
          - option "Togo"
          - option "Tokelau"
          - option "Tonga"
          - option "Trinidad and Tobago"
          - option "Tunisia"
          - option "Turkey"
          - option "Turkmenistan"
          - option "Turks and Caicos Islands (the)"
          - option "Tuvalu"
          - option "Uganda"
          - option "Ukraine"
          - option "United Arab Emirates (the)"
          - option "United Kingdom of Great Britain and Northern Ireland (the)"
          - option "United States Minor Outlying Islands (the)"
          - option "United States of America (the)"
          - option "Uruguay"
          - option "Uzbekistan"
          - option "Vanuatu"
          - option "Venezuela (Bolivarian Republic of)"
          - option "Viet Nam"
          - option "Virgin Islands (British)"
          - option "Virgin Islands (U.S.)"
          - option "Wallis and Futuna"
          - option "Western Sahara"
          - option "Yemen"
          - option "Zambia"
          - option "Zimbabwe"
      - generic [ref=e70]: Choose your country and enter the postal code and house number. Street, city and state will be filled in automatically.
      - generic [ref=e72]:
        - generic [ref=e73]: Postal code
        - textbox "Postal code" [ref=e74]:
          - /placeholder: Your Postcode *
      - generic [ref=e76]:
        - generic [ref=e77]: House number
        - textbox "House number" [ref=e78]:
          - /placeholder: e.g. 42 *
      - generic [ref=e79]:
        - generic [ref=e80]: Street
        - textbox "Street" [ref=e81]:
          - /placeholder: Your Street *
      - generic [ref=e83]:
        - generic [ref=e84]: City
        - textbox "City" [ref=e85]:
          - /placeholder: Your City *
      - generic [ref=e87]:
        - generic [ref=e88]: State
        - textbox "State" [ref=e89]:
          - /placeholder: Your State *
      - generic [ref=e90]:
        - generic [ref=e91]: Phone
        - textbox "Phone" [ref=e92]:
          - /placeholder: Your phone *
      - generic [ref=e93]:
        - generic [ref=e94]: Email address
        - textbox "Email address" [ref=e95]:
          - /placeholder: Your email *
      - generic [ref=e96]:
        - generic [ref=e97]: Password
        - generic [ref=e99]:
          - textbox "Password" [ref=e100]:
            - /placeholder: Your password
          - button [ref=e102] [cursor=pointer]:
            - img [ref=e104]
        - generic [ref=e106]:
          - text: "Your password must:"
          - list [ref=e107]:
            - list [ref=e108]:
              - listitem [ref=e109]: Be at least 8 characters long
              - listitem [ref=e110]: Contain both uppercase and lowercase letters
              - listitem [ref=e111]: Include at least one number
              - listitem [ref=e112]: "Have at least one special symbol (e.g., @, #, $, etc.)"
        - generic [ref=e113]:
          - text: "Password strength:"
          - generic [ref=e114]:
            - generic [ref=e115]: Weak
            - generic [ref=e116]: Moderate
            - generic [ref=e117]: Strong
            - generic [ref=e118]: Very Strong
            - generic [ref=e119]: Excellent
      - button "Register" [ref=e121] [cursor=pointer]
  - paragraph [ref=e124]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e125] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e126] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e127] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e128] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e130] [cursor=pointer]:
    - img [ref=e131]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | // ============================================================================
  5  | // Accessibility scans  (Guidelines §3 — Advanced Verification Layers)
  6  | //
  7  | // Runs axe-core (WCAG 2.0 A & AA) on the core guest-facing pages. The full
  8  | // violation list is attached to each test for the report, and the test gates on
  9  | // the most severe bucket — zero "critical" violations — so genuine compliance
  10 | // regressions fail the build while less-severe items remain documented.
  11 | // ============================================================================
  12 | 
  13 | test.describe('Service — Accessibility (axe-core)', () => {
  14 | 
  15 |     test.use({ storageState: { cookies: [], origins: [] } });
  16 | 
  17 |     async function audit(page, testInfo, label) {
  18 |         const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  19 |         await testInfo.attach(`axe-${label}.json`, {
  20 |             body: JSON.stringify(results.violations, null, 2),
  21 |             contentType: 'application/json',
  22 |         });
  23 |         const critical = results.violations.filter((v) => v.impact === 'critical');
> 24 |         expect(critical, `critical violations: ${critical.map((v) => v.id).join(', ')}`).toEqual([]);
     |                                                                                          ^ Error: critical violations: button-name
  25 |     }
  26 | 
  27 |     test('A11Y_01 — Home page has no critical accessibility violations', async ({ homePage, page }, testInfo) => {
  28 |         await homePage.goTo();
  29 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  30 |         await audit(page, testInfo, 'home');
  31 |     });
  32 | 
  33 |     test('A11Y_02 — Login page has no critical accessibility violations', async ({ loginPage, page }, testInfo) => {
  34 |         await loginPage.goTo();
  35 |         await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
  36 |         await audit(page, testInfo, 'login');
  37 |     });
  38 | 
  39 |     test('A11Y_03 — Registration page has no critical accessibility violations', async ({ registerPage, page }, testInfo) => {
  40 |         await registerPage.goTo();
  41 |         await page.getByTestId('first-name').waitFor({ state: 'visible', timeout: 15000 });
  42 |         await audit(page, testInfo, 'register');
  43 |     });
  44 | 
  45 |     test('A11Y_04 — Product detail page has no critical accessibility violations', async ({ homePage, productPage, page }, testInfo) => {
  46 |         await homePage.goTo();
  47 |         await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
  48 |         await homePage.productNames.first().click();
  49 |         await productPage.addToCartButton.waitFor({ state: 'visible', timeout: 15000 });
  50 |         await audit(page, testInfo, 'product-detail');
  51 |     });
  52 | 
  53 |     test('A11Y_05 — Contact page has no critical accessibility violations', async ({ contactPage, page }, testInfo) => {
  54 |         await contactPage.navigate('/');
  55 |         await page.getByTestId('product-name').first().waitFor({ state: 'visible', timeout: 15000 });
  56 |         await contactPage.navContactLink.click();
  57 |         await contactPage.subjectDropdown.waitFor({ state: 'visible', timeout: 15000 });
  58 |         await audit(page, testInfo, 'contact');
  59 |     });
  60 | });
  61 | 
```