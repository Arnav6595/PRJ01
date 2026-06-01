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
  retries:       process.env.CI ? 2 : 0,
  workers:       process.env.CI ? 1 : undefined,

  reporter: [
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['html',  { outputFolder: 'playwright-report' }],
    ['list'],
  ],

  use: {
    baseURL:           process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    headless:          !!process.env.CI,
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
        channel:      'chrome', 
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
  ],
});