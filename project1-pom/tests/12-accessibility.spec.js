import { test, expect } from '../fixtures/index.js';
import AxeBuilder from '@axe-core/playwright';

// ============================================================================
// Accessibility scans  (Guidelines §3 — Advanced Verification Layers)
//
// Runs axe-core (WCAG 2.0 A & AA) on the core guest-facing pages. The full
// violation list is attached to each test for the report, and the test gates on
// the most severe bucket — zero "critical" violations — so genuine compliance
// regressions fail the build while less-severe items remain documented.
// ============================================================================

test.describe('Service — Accessibility (axe-core)', () => {

    test.use({ storageState: { cookies: [], origins: [] } });

    async function audit(page, testInfo, label) {
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
        await testInfo.attach(`axe-${label}.json`, {
            body: JSON.stringify(results.violations, null, 2),
            contentType: 'application/json',
        });
        const critical = results.violations.filter((v) => v.impact === 'critical');
        expect(critical, `critical violations: ${critical.map((v) => v.id).join(', ')}`).toEqual([]);
    }

    test('A11Y_01 — Home page has no critical accessibility violations', async ({ homePage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'home');
    });

    test('A11Y_02 — Login page has no critical accessibility violations', async ({ loginPage, page }, testInfo) => {
        await loginPage.goTo();
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'login');
    });

    test('A11Y_03 — Registration page has no critical accessibility violations', async ({ registerPage, page }, testInfo) => {
        await registerPage.goTo();
        await page.getByTestId('first-name').waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'register');
    });

    test('A11Y_04 — Product detail page has no critical accessibility violations', async ({ homePage, productPage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await homePage.productNames.first().click();
        await productPage.addToCartButton.waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'product-detail');
    });

    test('A11Y_05 — Contact page has no critical accessibility violations', async ({ contactPage, page }, testInfo) => {
        await contactPage.navigate('/');
        await page.getByTestId('product-name').first().waitFor({ state: 'visible', timeout: 15000 });
        await contactPage.navContactLink.click();
        await contactPage.subjectDropdown.waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'contact');
    });
});
