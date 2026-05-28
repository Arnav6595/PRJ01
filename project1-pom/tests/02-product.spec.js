
import { test, expect } from '../fixtures/index.js';
import productData from '../data/products.json' with { type: 'json' };

test.describe('Service 2 - Product Catalog (Guest Mode)', () => {

    // Run as an unauthenticated guest
    test.use({ storageState: { cookies: [], origins: [] } });

    // FIX: Must navigate to the home page before interacting!
    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
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

    // ── NEW: Category Filter Test ──
    test('TC02 - Filter products by "Hand Tools" category', async ({ homePage }) => {
        await homePage.handToolsCheckbox.check();
        
        // Wait for Angular to filter the grid
        await homePage.page.waitForTimeout(1000); 
        
        const productCount = await homePage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    // ── NEW: Negative Search Test ──
    test('TC03 - Search for non-existent product returns 0 results', async ({ homePage }) => {
        await homePage.searchForProduct('InvalidItemXYZ999');
        
        const productCount = await homePage.getProductCount();
        expect(productCount).toBe(0); // Ensure grid is empty
    });

});