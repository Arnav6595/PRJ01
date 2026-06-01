import { test, expect } from '../fixtures/index.js';
import productData from '../data/products.json' with { type: 'json' };

test.describe('Service 2 - Product Catalog (Guest Mode)', () => {

    // Run as an unauthenticated guest
    test.use({ storageState: { cookies: [], origins: [] } });

    // ── The Golden Rule: Wait for Angular to settle! ──
    test.beforeEach(async ({ homePage, page }) => {
        // 1. Trigger the navigation
        await homePage.goTo();

        // 2. Give the Angular frontend a moment to settle background network calls
       

        // 3. Force Playwright to wait until the first product physically appears.
        // This is the ultimate proof that the catalog has successfully loaded.
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
    });

    // ── Original Data-Driven Search Test ──
    productData.forEach((scenario) => {
        test(`TC01 - Search product by name: ${scenario.testName}`, async ({ homePage }) => {
            await homePage.searchForProduct(scenario.searchQuery);
            
            const productCount = await homePage.getProductCount();
            expect(productCount).toBeGreaterThan(0);

            const firstResultName = await homePage.getFirstProductName();
            expect(firstResultName).toContain(scenario.expectedProductName); 
        });
    });

    // ── Category Filter Test ──
    test('TC02 - Filter products by "Hand Tools" category', async ({ homePage, page }) => {
        
        // Listen for the product grid to update after clicking the checkbox
        const filterPromise = page.waitForResponse(
            (response) => response.url().includes('/products') && response.status() === 200,
            { timeout: 10000 }
        ).catch(() => console.log('Filter API loaded instantly.'));

        await homePage.handToolsCheckbox.check();
        
        // Wait for Angular to filter the grid using the API instead of a blind pause
        await filterPromise; 
        
        const productCount = await homePage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    // ── Negative Search Test ──
    test('TC03 - Search for non-existent product returns 0 results', async ({ homePage }) => {
        await homePage.searchForProduct('InvalidItemXYZ999');

        const productCount = await homePage.getProductCount();
        expect(productCount).toBe(0); // Ensure grid is empty
    });

    // =====================================================================
    // NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 2: Product)
    // =====================================================================
    test('TC02_Ext_01 — Catalog displays multiple product cards', async ({ homePage }) => {
        expect(await homePage.getProductCount()).toBeGreaterThan(1);
    });

    test('TC02_Ext_02 — First product card shows a non-empty name', async ({ homePage }) => {
        const name = await homePage.getFirstProductName();
        expect(name?.trim().length).toBeGreaterThan(0);
    });

    test('TC02_Ext_03 — Searching "Pliers" returns matching products', async ({ homePage }) => {
        await homePage.searchForProduct('Pliers');
        expect(await homePage.getProductCount()).toBeGreaterThan(0);
        expect(await homePage.getFirstProductName()).toContain('Pliers');
    });

    test('TC02_Ext_04 — Filtering by "Power Tools" returns products', async ({ homePage, page }) => {
        const filterReady = page.waitForResponse(
            (r) => r.url().includes('/products') && r.status() === 200,
            { timeout: 10000 }
        ).catch(() => {});
        await homePage.powerToolsCheckbox.check();
        await filterReady;
        expect(await homePage.getProductCount()).toBeGreaterThan(0);
    });

    test('TC02_Ext_05 — Opening a product shows its detail page with Add to cart', async ({ homePage, productPage, page }) => {
        await homePage.productNames.first().click();
        await expect(page).toHaveURL(/\/product\//, { timeout: 15000 });
        await expect(productPage.addToCartButton).toBeVisible();
    });

});