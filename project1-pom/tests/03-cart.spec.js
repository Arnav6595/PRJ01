
import { test, expect } from '../fixtures/index.js';

test.describe('Service 3 - Cart State & Management', () => {

    test('TC01 & TC05 - Add product to cart and verify dynamic badge update', async ({ homePage, productPage }) => {
        
        await test.step('Navigate to the first product in the catalog', async () => {
            // FIX: Click the actual text of the product name, not the empty card wrapper
            await homePage.productNames.first().click();
        });

        await test.step('Add item to cart', async () => {
            // We switch to the ProductPage POM to interact with the cart mechanics
            await productPage.clickAddToCart();
        });

        await test.step('Validate global UI state changes', async () => {
            const badgeCount = await productPage.getCartBadgeCount();
            
            // The badge should now exist and mathematically equal 1
            expect(badgeCount).toBe(1);
        });
        
    });

});