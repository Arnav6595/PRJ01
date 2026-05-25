# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-profile.spec.js >> Service 4 - User Profile >> TC02 & TC09 - Update first name and last name successfully
- Location: tests\04-profile.spec.js:10:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('profile-submit') to be visible

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
            - menuitem "Krishna Test" [ref=e40]:
              - button "Krishna Test" [ref=e41] [cursor=pointer]
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - generic [ref=e50]:
        - heading "Profile" [level=1] [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - generic [ref=e56]: First name
              - textbox "First name" [ref=e58]: Krishna
            - generic [ref=e59]:
              - generic [ref=e60]: Last name
              - textbox "Last name" [ref=e62]: Test
            - generic [ref=e63]:
              - generic [ref=e64]: Email address
              - textbox "Email address" [ref=e66]: krishna.capstone.test@practicesoftwaretesting.com
            - generic [ref=e67]:
              - generic [ref=e68]: Phone
              - textbox "Phone" [active] [ref=e70]: "9876543210"
          - generic [ref=e71]:
            - generic [ref=e72]:
              - generic [ref=e73]: Street
              - textbox "Street" [ref=e75]: Klocko Heights
            - generic [ref=e76]:
              - generic [ref=e77]: Postal code
              - textbox "Postal code" [ref=e79]: "211001"
            - generic [ref=e80]:
              - generic [ref=e81]: City
              - textbox "City" [ref=e83]: New German
            - generic [ref=e84]:
              - generic [ref=e85]: State
              - textbox "State" [ref=e87]: Utah
            - generic [ref=e88]:
              - generic [ref=e89]: Country
              - textbox "Country" [ref=e91]: IN
        - button "Update Profile" [ref=e94] [cursor=pointer]
      - generic [ref=e95]:
        - heading "Password" [level=2] [ref=e97]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]: Current Password
            - textbox "Current Password" [ref=e103]
          - generic [ref=e104]:
            - generic [ref=e105]: New Password
            - generic [ref=e106]:
              - generic [ref=e108]:
                - textbox "New Password" [ref=e109]:
                  - /placeholder: Your password
                - button [ref=e111] [cursor=pointer]:
                  - img [ref=e113]
              - generic [ref=e115]:
                - text: "Your password must:"
                - list [ref=e116]:
                  - list [ref=e117]:
                    - listitem [ref=e118]: Be at least 8 characters long
                    - listitem [ref=e119]: Contain both uppercase and lowercase letters
                    - listitem [ref=e120]: Include at least one number
                    - listitem [ref=e121]: "Have at least one special symbol (e.g., @, #, $, etc.)"
              - generic [ref=e122]:
                - text: "Password strength:"
                - generic [ref=e123]:
                  - generic [ref=e124]: Weak
                  - generic [ref=e125]: Moderate
                  - generic [ref=e126]: Strong
                  - generic [ref=e127]: Very Strong
                  - generic [ref=e128]: Excellent
          - generic [ref=e130]:
            - generic [ref=e131]: Confirm New Password
            - generic [ref=e134]:
              - textbox "Confirm New Password" [ref=e135]:
                - /placeholder: Your password
              - button [ref=e137] [cursor=pointer]:
                - img [ref=e139]
        - button "Change Password" [ref=e143] [cursor=pointer]
    - generic [ref=e145]:
      - heading "Set up Two-Factor Authentication" [level=2] [ref=e146]
      - paragraph [ref=e147]: "Scan the QR code below with your authenticator app (e.g., Google Authenticator, Authy):"
      - paragraph [ref=e151]: "Or manually enter this key in your app:"
      - paragraph [ref=e152]:
        - strong [ref=e153]: O32F2RWNT4GKTETU
      - generic [ref=e158]:
        - textbox "Enter TOTP code" [ref=e159]
        - button "Verify TOTP" [ref=e160] [cursor=pointer]
  - paragraph [ref=e163]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e164] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e165] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e166] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e167] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e169] [cursor=pointer]:
    - img [ref=e170]
```

# Test source

```ts
  1  | 
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
  13 |      * @param {string} path
  14 |      */
  15 |     async navigate(path) {
  16 |         await this.page.goto(path);
  17 |     }
  18 | 
  19 |     /**
  20 |      * A reusable method to wait for an element and click it
  21 |      * @param {import('@playwright/test').Locator} locator
  22 |      */
  23 |     async clickElement(locator) {
> 24 |         await locator.waitFor({ state: 'visible' });
     |                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  25 |         await locator.click();
  26 |     }
  27 | 
  28 |     /**
  29 |      * A reusable method to fill inputs cleanly
  30 |      * @param {import('@playwright/test').Locator} locator
  31 |      * @param {string} text
  32 |      */
  33 |     async fillInput(locator, text) {
  34 |         await locator.waitFor({ state: 'visible' });
  35 |         await locator.fill(text);
  36 |     }
  37 | }
```