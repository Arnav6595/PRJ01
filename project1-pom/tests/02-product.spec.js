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
        await page.waitForLoadState('networkidle');

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

});