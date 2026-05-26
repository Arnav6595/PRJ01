# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-checkout.spec.js >> Service 5 & 6 - Checkout Suite >> TC15_Pos - Logged-in user sees correct message at Step 2
- Location: tests\05-checkout.spec.js:131:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('nav-menu')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('nav-menu')
    - waiting for" https://practicesoftwaretesting.com/account" navigation to finish...
    - navigated to "https://practicesoftwaretesting.com/account"

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
  - button "Select language": EN
- heading "My account" [level=1]
- paragraph: Here you can manage your profile, favorites and orders.
- button "Favorites"
- button "Profile"
- button "Invoices"
- button "Messages"
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

```
Tearing down "context" exceeded the test timeout of 30000ms.
```