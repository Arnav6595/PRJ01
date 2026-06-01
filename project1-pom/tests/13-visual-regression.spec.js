import { test, expect } from '../fixtures/index.js';

// ============================================================================
// Visual Regression  (Guidelines §3 — Advanced Verification Layers)
//
// toHaveScreenshot checkpoints on critical, mostly-static UI widgets. Baselines
// are seeded on first run (config: updateSnapshots: 'missing') and compared on
// subsequent runs. A generous maxDiffPixelRatio and animations:'disabled' (set
// globally in playwright.config.js) absorb sub-pixel rendering noise so only
// real layout shifts fail.
// ============================================================================

test.describe('Service — Visual Regression', () => {

    test.use({ storageState: { cookies: [], origins: [] } });

    test('VIS_01 — Top navigation bar matches its baseline', async ({ homePage, page }) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await expect(page.locator('nav').first()).toHaveScreenshot('home-navigation.png');
    });

    test('VIS_02 — Search widget matches its baseline', async ({ homePage }) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await expect(homePage.searchInput).toHaveScreenshot('search-input.png');
    });

    test('VIS_03 — Login form matches its baseline', async ({ loginPage, page }) => {
        await loginPage.goTo();
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
        await expect(page.locator('app-sign-in, form').first()).toHaveScreenshot('login-form.png');
    });

    test('VIS_04 — First product card matches its baseline', async ({ homePage }) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await expect(homePage.productCards.first()).toHaveScreenshot('product-card.png', { maxDiffPixelRatio: 0.2 });
    });

    test('VIS_05 — Page footer matches its baseline', async ({ homePage, page }) => {
        await homePage.goTo();
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        await expect(page.locator('footer').first()).toHaveScreenshot('footer.png');
    });
});
