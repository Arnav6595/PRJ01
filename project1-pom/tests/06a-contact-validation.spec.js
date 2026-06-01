import { test, expect } from '../fixtures/index.js';

const MSG_49_CHARS = 'A'.repeat(49);

test.describe('Service 07A — Customer Support (UI & Validation)', () => {

    test.beforeEach(async ({ contactPage }) => {
    // 1. Trap products API BEFORE navigating
    const productsReady = contactPage.page.waitForResponse(
        (res) => res.url().includes('/products') && res.status() === 200,
        { timeout: 20000 }
    ).catch(() => {});

    // 2. Navigate to home
    await contactPage.navigate('/');

    // 3. Wait for API + DOM
    await productsReady;
    await contactPage.page.getByTestId('product-name')
        .first()
        .waitFor({ state: 'visible', timeout: 15000 });

    // 4. Click the nav link
    await contactPage.navContactLink.click();

    // 5. ✅ Poll URL — no navigation events needed for Angular pushState routing
    await expect(contactPage.page).toHaveURL(/\/contact/, { timeout: 15000 });

    // 6. Confirm the form is ready
    await contactPage.subjectDropdown.waitFor({ state: 'visible', timeout: 10000 });
});

    test('TC_07_01 — Contact page loads and URL is correct', async ({ contactPage }) => {
        await expect(contactPage.page).toHaveURL(/\/contact/);
    });

    test('TC_07_02 — All core form fields are visible on the contact page', async ({ contactPage }) => {
        await expect(contactPage.subjectDropdown).toBeVisible();
        await expect(contactPage.messageInput).toBeVisible();
        await expect(contactPage.attachmentInput).toBeVisible();
        await expect(contactPage.submitButton).toBeVisible();
    });

    test('TC_07_03 — Nav menu confirms user is logged in before submitting', async ({ contactPage }) => {
        const navMenu = contactPage.page.getByTestId('nav-menu');
        await expect(navMenu).toBeVisible();
        const menuText = await navMenu.textContent();
        expect(menuText?.trim().length).toBeGreaterThan(0);
    });

    test('TC_07_04 — Subject dropdown exposes at least 2 selectable options', async ({ contactPage }) => {
        const options = await contactPage.getSubjectOptions();
        const filled  = options.filter(o => o.trim().length > 0);
        expect(filled.length).toBeGreaterThanOrEqual(2);
    });

    test('TC_07_05 — Submit button is enabled and ready to click', async ({ contactPage }) => {
        await expect(contactPage.submitButton).toBeEnabled();
    });

    test('TC_07_06 — Submitting with an empty message shows a validation error', async ({ contactPage }) => {
        await contactPage.subjectDropdown.selectOption({ index: 1 });
        await contactPage.submitButton.click();
        await expect(contactPage.page.getByText('Message is required', { exact: false })).toBeVisible();
    });

    test('TC_07_07 — Message with 49 characters (min − 1) triggers min-length error', async ({ contactPage }) => {
        await contactPage.subjectDropdown.selectOption({ index: 1 });
        await contactPage.messageInput.fill(MSG_49_CHARS);
        await contactPage.submitButton.click();
        await expect(contactPage.charError).toBeVisible();
    });

    // =====================================================================
    // NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 6: Contact)
    // =====================================================================
    test('TC_07_Ext_01 — Subject dropdown exposes 3 or more selectable options', async ({ contactPage }) => {
        const filled = (await contactPage.getSubjectOptions()).filter(o => o.trim().length > 0);
        expect(filled.length).toBeGreaterThanOrEqual(3);
    });

    test('TC_07_Ext_02 — First name field is present and accepts input', async ({ contactPage }) => {
        await contactPage.firstNameInput.fill('Krishna');
        await expect(contactPage.firstNameInput).toHaveValue('Krishna');
    });

    test('TC_07_Ext_03 — Email field is present and accepts a valid address', async ({ contactPage }) => {
        await contactPage.emailInput.fill('krishna@example.com');
        await expect(contactPage.emailInput).toHaveValue('krishna@example.com');
    });

    test('TC_07_Ext_04 — Message field retains a 60-character message', async ({ contactPage }) => {
        const msg = 'A'.repeat(60);
        await contactPage.messageInput.fill(msg);
        await expect(contactPage.messageInput).toHaveValue(msg);
    });

    test('TC_07_Ext_05 — Submitting a valid subject and message shows a success confirmation', async ({ contactPage }) => {
        await contactPage.submitContactForm(
            'customer-service',
            'This is a valid automated test message exceeding the fifty character minimum requirement.'
        );
        await expect(contactPage.successAlert).toBeVisible({ timeout: 15000 });
    });
});