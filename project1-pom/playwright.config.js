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
  // Sharding (3 machines in CI) already keeps wall-clock short and beats the demo's
  // short-lived auth session. Within each shard, 2 workers is enough parallelism without
  // hammering the shared public demo — 4 caused list/alert render timeouts on admin and
  // contact tests. 2 retries absorbs the demo's transient flakiness under load.
  retries:       process.env.CI ? 2 : 0,
  workers:       process.env.CI ? 2 : undefined,

  // Visual regression: seed missing baselines on first run, compare thereafter.
  updateSnapshots: 'missing',

  expect: {
    // Absorb sub-pixel rendering noise so only real layout shifts fail.
    toHaveScreenshot: { maxDiffPixelRatio: 0.1, animations: 'disabled' },
  },

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