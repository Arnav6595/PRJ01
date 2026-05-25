// @ts-check
import { test, expect } from '../fixtures/index.js';
import productData from '../data/products.json' with { type: 'json' };

test.describe('Service 2 - Product Catalog', () => {

    productData.forEach((scenario) => {
        
        // Notice we are injecting our new homePage fixture here
        test(`TC01 - Search product by name: ${scenario.testName}`, async ({ homePage }) => {
            
            await test.step('Search for the product', async () => {
                await homePage.searchForProduct(scenario.searchQuery);
            });

            await test.step('Validate search results', async () => {
                // 1. Ensure the screen isn't empty
                const productCount = await homePage.getProductCount();
                expect(productCount).toBeGreaterThan(0);

                // 2. Ensure the specific product we searched for actually appeared
                const firstResultName = await homePage.getFirstProductName();
                // We use .toContain() instead of .toBe() because spacing/formatting can sometimes be weird in the DOM
                expect(firstResultName).toContain(scenario.expectedProductName); 
            });
            
        });
    });
});