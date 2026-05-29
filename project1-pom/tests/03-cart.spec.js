import { test, expect } from '../fixtures/index.js';

test.describe('Service 3 - Cart State & Management', () => {

    // ── The Golden Rule: Wait for Angular to settle! ──
    test.beforeEach(async ({ homePage, page }) => {
        // 1. Navigate to the home page
        await homePage.goTo();

        // 2. Give the Angular frontend a moment to settle background network calls
        

        // 3. Force Playwright to wait until the first product is physically visible.
        // This guarantees the frontend hasn't crashed and is fully interactive.
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
    });

    test('TC01 - Add product to cart and verify dynamic badge update', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        await productPage.clickAddToCart();
        
        const badgeCount = await productPage.getCartBadgeCount();
        expect(badgeCount).toBe(1);
    });

    // ── Quantity Adjustment Test ──
    test('TC02 - Increase quantity before adding to cart updates badge correctly', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        
        // Click the + button twice (Total quantity = 3)
        await productPage.increaseQtyButton.click();
        await productPage.increaseQtyButton.click();
        
        await productPage.clickAddToCart();
        
        const badgeCount = await productPage.getCartBadgeCount();
        expect(badgeCount).toBe(3);
    });

});