import { test, expect } from '../fixtures/index.js';

const MSG_50_CHARS = 'A'.repeat(50);
const MSG_VALID    = 'Hello, I need help with my recent order. Could you please assist me with the invoice details?';
const MSG_SPECIAL  = '!@#$%^&*() Hello <World> "test" \'quoted\' -- edge case for contact form submission test!!';

const SUBJECTS = {
    customerService: 'customer-service',
    webmaster:       'webmaster',
    return:          'return',
};

test.describe('Service 07B — Customer Support (Submissions)', () => {

   // Delete the 4 steps currently in your beforeEach and replace with:
test.beforeEach(async ({ contactPage, homePage }) => {
    await contactPage.navigate('/');
    // Use the specific product name locator from HomePage
    await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
    await contactPage.goTo();
});

    test('TC_07_08 — Message with exactly 50 characters (boundary) submits successfully', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.customerService, MSG_50_CHARS);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_09 — Valid contact form submission displays the success alert', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.customerService, MSG_VALID);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_10 — Success alert contains the expected confirmation message', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.customerService, MSG_VALID);
        await expect(contactPage.successAlert).toContainText('Thanks for your message', { timeout: 10_000 });
    });

    test('TC_07_11 — Subject "customer-service" submits correctly', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.customerService, MSG_VALID);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_12 — Subject "webmaster" submits correctly', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.webmaster, MSG_VALID);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_13 — Subject "return" submits correctly', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.return, MSG_VALID);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_14 — Contact form submits successfully with a 0kb .txt file attachment', async ({ contactPage }) => {
        const filePayload = {
            name:     'support-ticket.txt',
            mimeType: 'text/plain',
            buffer:   Buffer.from(''), 
        };
        await contactPage.submitContactFormWithAttachment(SUBJECTS.webmaster, MSG_VALID, filePayload);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });

    test('TC_07_15 — Message field accepts special characters and form submits successfully', async ({ contactPage }) => {
        await contactPage.submitContactForm(SUBJECTS.webmaster, MSG_SPECIAL);
        await expect(contactPage.successAlert).toBeVisible({ timeout: 10_000 });
    });
});