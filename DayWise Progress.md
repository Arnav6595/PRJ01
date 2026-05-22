Date - 22/05/2026

Playwright Framework Setup
1. Installation
Used manual install instead of npm init playwright@latest for full control over architecture:
bashnpm install -D @playwright/test dotenv allure-playwright

2. Project Structure
textproject/
├── package.json
├── project1-pom/        # Main automation (pages, tests, data, utils, fixtures)
│   └── playwright.config.js
└── project2-svg/        # SVG/graphics testing
POM separates locators from test logic, keeping the framework scalable and maintainable.

3. Playwright Config Highlights
jsfullyParallel: true                        // run all tests concurrently
retries: process.env.CI ? 2 : 0           // retries only in CI
trace: 'on-first-retry'
video: 'retain-on-failure'
Parallel execution speeds up the suite; saved traces and videos make failures easier to debug.

4. Environment Variables
Credentials and URLs live in .env (gitignored), loaded via dotenv.config():
envBASE_URL=https://testsite.com
ADMIN_EMAIL=admin@test.com
PASSWORD=12345
Keeps secrets out of source control and makes environment changes a one-line edit.

5. NPM Scripts
json"test":          "playwright test"
"test:headed":   "playwright test --headed"
"test:parallel": "playwright test --workers=4"
Shorter, standardised commands instead of typing full npx flags each time.

TL;DR: Manual setup → full control. POM → clean separation. Config → parallel + CI-aware. .env → secure + flexible. NPM scripts → simple execution.