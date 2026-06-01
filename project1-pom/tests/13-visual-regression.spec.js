import { test, expect } from '../fixtures/index.js';

// ============================================================================
// Visual Regression / UI Checkpoints  (Guidelines §3 — Advanced Verification)
//
// Captures the critical UI widgets as image attachments in the report and asserts
// each renders with a real, non-zero bounding box (catching gross layout breakage
// / collapsed widgets). This keeps the checkpoint deterministic on a live,
// data-changing site without committed pixel baselines.
//
// For pixel-diff regression, baselines can be seeded once with:
//   npx playwright test 13-visual-regression --update-snapshots
// then swapping the capture below for `expect(locator).toHaveScreenshot(name)`.
// ============================================================================

test.describe('Service — Visual Regression / UI Checkpoints', () => {

    test.use({ storageState: { cookies: [], origins: [] } });

    /** Assert the widget is rendered with real dimensions, then attach its image. */
    async function checkpoint(locator, testInfo, name) {
        await expect(locator).toBeVisible();
        const box = await locator.boundingBox();
        expect(box, `${name} has no bounding box`).not.toBeNull();
        expect(box.width).toBeGreaterThan(0);
        expect(box.height).toBeGreaterThan(0);
        await testInfo.attach(name, { body: await locator.screenshot(), contentType: 'image/png' });
    }

    test('VIS_01 — Top navigation bar renders with valid layout', async ({ homePage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await checkpoint(page.locator('nav').first(), testInfo, 'home-navigation.png');
    });

    test('VIS_02 — Search widget renders with valid layout', async ({ homePage }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await checkpoint(homePage.searchInput, testInfo, 'search-input.png');
    });

    test('VIS_03 — Login form renders with valid layout', async ({ loginPage, page }, testInfo) => {
        await loginPage.goTo();
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
        await checkpoint(page.locator('app-sign-in, form').first(), testInfo, 'login-form.png');
    });

    test('VIS_04 — First product card renders with valid layout', async ({ homePage }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await checkpoint(homePage.productCards.first(), testInfo, 'product-card.png');
    });

    test('VIS_05 — Page footer renders with valid layout', async ({ homePage, page }, testInfo) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        // The site has no <footer> element; its footer is the "DEMO application" banner.
        await checkpoint(page.getByText(/This is a DEMO application/i).first(), testInfo, 'footer.png');
    });
});
