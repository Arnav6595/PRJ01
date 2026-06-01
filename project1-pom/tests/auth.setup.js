import { test as setup, expect } from '@playwright/test';

// Relative paths — no __dirname, prevents OS-specific path drift
const customerAuthFile = 'playwright/.auth/user.json';
const adminAuthFile    = 'playwright/.auth/admin.json';

setup('Authenticate Customer', async ({ page }) => {
    const email    = process.env.CUSTOMER_EMAIL    || 'customer@practicesoftwaretesting.com';
    const password = process.env.CUSTOMER_PASSWORD || 'welcome01';

    await page.goto('/auth/login');
    
    // Wait for Angular to bind the form before touching it
    await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });

    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();

    // Proof of login before saving
    await expect(page.getByTestId('nav-menu')).toBeVisible({ timeout: 15000 });
    
    await page.context().storageState({ path: customerAuthFile });
});

setup('Authenticate Admin', async ({ page }) => {
    const email    = process.env.ADMIN_EMAIL    || 'admin@practicesoftwaretesting.com';
    const password = process.env.ADMIN_PASSWORD || 'welcome01';

    await page.goto('/auth/login');
    
    // Wait for Angular to bind the form before touching it
    await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });

    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();

    // Admin accounts route directly to the dashboard upon login
    await expect(page.getByTestId('page-title')).toContainText('Sales over the years', { timeout: 15000 });
    
    await page.context().storageState({ path: adminAuthFile });
});