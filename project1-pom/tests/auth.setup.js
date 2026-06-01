import { test as setup, expect } from '@playwright/test';

// Relative paths — no __dirname, prevents OS-specific path drift
const customerAuthFile = 'playwright/.auth/user.json';
const adminAuthFile    = 'playwright/.auth/admin.json';

// Cloudflare protects practicesoftwaretesting.com and serves a "Just a moment..."
// interstitial that runs a JS challenge. In real headed Chrome it auto-clears within
// a few seconds; we just have to wait for the actual app (the login form) instead of
// failing on a short timeout. If it never clears, throw a message that names the cause
// so the failure isn't mistaken for a flaky locator.
async function gotoLogin(page) {
    await page.goto('/auth/login', { waitUntil: 'domcontentloaded' });

    try {
        // Longer timeout: allow the Cloudflare JS challenge to resolve before the form appears.
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 30000 });
    } catch (err) {
        const title = await page.title().catch(() => '');
        if (/just a moment|attention required|cloudflare|checking your browser/i.test(title)) {
            throw new Error(
                `Cloudflare challenge blocked the login page (page title: "${title}"). ` +
                `Ensure tests run HEADED (do not set HEADLESS=true; on Linux CI run via xvfb) ` +
                `so the JS challenge can auto-solve.`
            );
        }
        throw new Error(`Login form did not load within 30s (page title: "${title}"). Original: ${err.message}`);
    }
}

setup('Authenticate Customer', async ({ page }) => {
    const email    = process.env.CUSTOMER_EMAIL    || 'customer@practicesoftwaretesting.com';
    const password = process.env.CUSTOMER_PASSWORD || 'welcome01';

    await gotoLogin(page);

    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();

    // Proof of login before saving. 30s: 3 shards authenticate at once, so the demo's
    // login API can be slow under that burst — a tight timeout caused transient skips.
    await expect(page.getByTestId('nav-menu')).toBeVisible({ timeout: 30000 });

    await page.context().storageState({ path: customerAuthFile });
});

setup('Authenticate Admin', async ({ page }) => {
    const email    = process.env.ADMIN_EMAIL    || 'admin@practicesoftwaretesting.com';
    const password = process.env.ADMIN_PASSWORD || 'welcome01';

    await gotoLogin(page);

    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();

    // Admin accounts route directly to the dashboard upon login (30s — see customer note).
    await expect(page.getByTestId('page-title')).toContainText('Sales over the years', { timeout: 30000 });

    await page.context().storageState({ path: adminAuthFile });
});