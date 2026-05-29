// tests/auth.setup.js
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';
const SITE_BASE = 'https://practicesoftwaretesting.com';

setup('authenticate via UI to satisfy Angular state', async ({ page }) => {

    const email    = process.env.CUSTOMER_EMAIL    || 'customer@practicesoftwaretesting.com';
    const password = process.env.CUSTOMER_PASSWORD || 'welcome01';

    console.log(`Performing native UI Login for: ${email}`);

    // 1. Go directly to the login page
    await page.goto(`${SITE_BASE}/auth/login`);

    // 2. Fill out the form exactly like a real user
    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();

    // 3. Wait for the ultimate proof of login: The User Menu
    const navMenu = page.getByTestId('nav-menu');
    await expect(navMenu).toBeVisible({ timeout: 15000 });

    // 4. Save this flawless, natively generated Angular state!
    await page.context().storageState({ path: authFile });

    console.log(`✅ Native UI Session saved successfully to ${authFile}!`);
});