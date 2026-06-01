import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // ESM-safe __dirname — works reliably on Windows self-hosted AND Linux
// const __filename = fileURLToPath(import.meta.url);
// const __dirname  = path.dirname(__filename);

dotenv.config();

export const STORAGE_STATE = 'playwright/.auth/user.json';

export default defineConfig({
  timeout:       60000,
  testDir:       './tests',
  fullyParallel: true,
  forbidOnly:    !!process.env.CI,
  // Keep total wall-clock short: the practicesoftwaretesting.com demo issues short-lived
  // auth tokens and periodically resets its DB, so a long serial run (47 min) outlives the
  // session captured at setup → later login-dependent specs fail. Parallelism finishes the
  // suite inside the session window; 1 retry stops failing tests from tripling the runtime.
  retries:       process.env.CI ? 1 : 0,
  workers:       process.env.CI ? 4 : undefined,

  reporter: [
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['html',  { outputFolder: 'playwright-report' }],
    ['list'],
  ],

  use: {
    baseURL:           process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    // Headed by default. Cloudflare aggressively challenges HEADLESS Chrome, so we run
    // real headed Chrome on the self-hosted runner and let its JS challenge auto-solve.
    // Set HEADLESS=true only if you explicitly need headless (expect Cloudflare blocks).
    headless:          process.env.HEADLESS === 'true',
    // Use real installed Chrome (not bundled Chromium) — applied to the `setup` project too,
    // which is where the Cloudflare-protected login must be cleared.
    channel:           'chrome',
    // Remove the navigator.webdriver=true automation flag that Cloudflare checks.
    launchOptions: {
      args: ['--disable-blink-features=AutomationControlled'],
    },
    actionTimeout:     15000,
    navigationTimeout: 20000,
    testIdAttribute:   'data-test',
    trace:             'on-first-retry',
    screenshot:        'only-on-failure',
    video:             'retain-on-failure',
  },

  projects: [
    {
      name:      'setup',
      testMatch: /.*\.setup\.js/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // channel + launchOptions inherited from top-level `use`.
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
  ],
});