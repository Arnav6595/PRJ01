
import { test, expect } from '../fixtures/index.js';

test.describe('Service 3 - Cart State & Management', () => {

    // Can be run as guest or logged in, default (logged-in) is fine!
    
    // FIX: Must navigate to home page first
    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    test('TC01 - Add product to cart and verify dynamic badge update', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        await productPage.clickAddToCart();
        
        const badgeCount = await productPage.getCartBadgeCount();
        expect(badgeCount).toBe(1);
    });

    // ── NEW: Quantity Adjustment Test ──
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