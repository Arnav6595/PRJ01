import { test, expect } from '../fixtures/index.js';

test.describe('Service 08A — Invoices & Account Management (Navigation & List)', () => {

    test.beforeEach(async ({ accountPage }) => {
        // Trap the cart API before navigating to prevent Angular crash
        const cartPromise = accountPage.page.waitForResponse(
            (res) => res.url().includes('cart'),
            { timeout: 5000 }
        ).catch(() => console.log('Cart API safely bypassed.'));

        await accountPage.navigate('/');
        await cartPromise;

        // Proof of logged-in state
        await accountPage.navMenu.waitFor({ state: 'visible', timeout: 15000 });
    });

    test('TC_08_01 — User nav-menu button is visible after successful login', async ({ accountPage }) => {
        await expect(accountPage.navMenu).toBeVisible();
    });

    test('TC_08_02 — Clicking user menu reveals the "My account" dropdown link', async ({ accountPage }) => {
        await accountPage.navMenu.click();
        await expect(accountPage.myAccountLink).toBeVisible();
    });

    test('TC_08_03 — "My account" link navigates to /account', async ({ accountPage }) => {
        await accountPage.navMenu.click();
        await accountPage.myAccountLink.click();
        await expect(accountPage.page).toHaveURL(/\/account/);
    });

    test('TC_08_04 — Invoices navigation link is visible on the account page', async ({ accountPage }) => {
        await accountPage.navMenu.click();
        await accountPage.myAccountLink.click();
        await expect(accountPage.invoicesNav).toBeVisible();
    });

    test('TC_08_05 — Clicking Invoices navigates to /account/invoices', async ({ accountPage }) => {
        await accountPage.navigateToInvoices();
        await expect(accountPage.page).toHaveURL(/\/account\/invoices/);
    });

    test('TC_08_06 — Invoices page URL path matches /account/invoices exactly', async ({ accountPage }) => {
        await accountPage.navigateToInvoices();
        expect(accountPage.page.url()).toMatch(/\/account\/invoices$/);
    });

    test('TC_08_07 — Invoice list displays at least one invoice record', async ({ accountPage }) => {
        await accountPage.navigateToInvoices();
        const count = await accountPage.getInvoiceCount();
        expect(count).toBeGreaterThanOrEqual(1);
    });

    test('TC_08_08 — First invoice record shows an INV- prefixed invoice ID', async ({ accountPage }) => {
        await accountPage.navigateToInvoices();
        const id = await accountPage.getFirstInvoiceId();
        expect(id?.trim()).toMatch(/INV-/);
    });
});