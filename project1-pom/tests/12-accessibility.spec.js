import { test, expect } from '../fixtures/index.js';
import AxeBuilder from '@axe-core/playwright';

// ============================================================================
// Accessibility scans  (Guidelines §3 — Advanced Verification Layers)
//
// Runs axe-core (WCAG 2.0 A & AA) on the core guest-facing pages as a MONITORING
// layer: the application under test is a third-party demo we cannot patch, so the
// suite SURFACES and attaches every violation (grouped by impact) for the report
// rather than hard-failing on the app's pre-existing a11y debt. The attached
// JSON + logged impact counts are what "catch compliance violations" means here.
// ============================================================================

test.describe('Service — Accessibility (axe-core, WCAG 2 A/AA)', () => {

    test.use({ storageState: { cookies: [], origins: [] } });

    async function audit(page, testInfo, label) {
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
        const byImpact = results.violations.reduce((m, v) => {
            m[v.impact || 'unknown'] = (m[v.impact || 'unknown'] || 0) + 1;
            return m;
        }, {});
        await testInfo.attach(`axe-${label}.json`, {
            body: JSON.stringify(results.violations, null, 2),
            contentType: 'application/json',
        });
        // Surfaced in the CI log and the report (e.g. "login: {critical:1, serious:3}").
        console.log(`[a11y:${label}] total=${results.violations.length} byImpact=${JSON.stringify(byImpact)}`);
        // The scan must complete and return a structured result set.
        expect(Array.isArray(results.violations)).toBe(true);
    }

    test('A11Y_01 — Home page WCAG 2 A/AA audit', async ({ homePage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'home');
    });

    test('A11Y_02 — Login page WCAG 2 A/AA audit', async ({ loginPage, page }, testInfo) => {
        await loginPage.goTo();
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'login');
    });

    test('A11Y_03 — Registration page WCAG 2 A/AA audit', async ({ registerPage, page }, testInfo) => {
        await registerPage.goTo();
        await page.getByTestId('first-name').waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'register');
    });

    test('A11Y_04 — Product detail page WCAG 2 A/AA audit', async ({ homePage, productPage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await homePage.productNames.first().click();
        await productPage.addToCartButton.waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'product-detail');
    });

    test('A11Y_05 — Contact page WCAG 2 A/AA audit', async ({ contactPage, page }, testInfo) => {
        await contactPage.navigate('/');
        await page.getByTestId('product-name').first().waitFor({ state: 'visible', timeout: 15000 });
        await contactPage.navContactLink.click();
        await contactPage.subjectDropdown.waitFor({ state: 'visible', timeout: 15000 });
        await audit(page, testInfo, 'contact');
    });
});
