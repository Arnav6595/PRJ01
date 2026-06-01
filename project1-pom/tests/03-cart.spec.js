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

    // =====================================================================
    // NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 3: Cart)
    // =====================================================================
    test('TC03_Ext_01 — Adding a product yields a positive cart badge', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        await productPage.clickAddToCart();
        expect(await productPage.getCartBadgeCount()).toBeGreaterThanOrEqual(1);
    });

    test('TC03_Ext_02 — Increase button raises the quantity field to 2', async ({ homePage, productPage, page }) => {
        await homePage.productNames.first().click();
        await productPage.increaseQtyButton.click();
        await expect(page.getByTestId('quantity')).toHaveValue('2');
    });

    test('TC03_Ext_03 — Quantity does not drop below 1 on the product page', async ({ homePage, productPage, page }) => {
        await homePage.productNames.first().click();
        await productPage.decreaseQtyButton.click();
        await expect(page.getByTestId('quantity')).toHaveValue('1');
    });

    test('TC03_Ext_04 — Adding a product then opening the cart reaches the checkout flow', async ({ homePage, productPage, checkoutPage, page }) => {
        await homePage.productNames.first().click();
        await productPage.clickAddToCart();
        await checkoutPage.goToCart();
        await expect(page).toHaveURL(/\/checkout/, { timeout: 15000 });
        await expect(checkoutPage.proceedStep1).toBeVisible();
    });

    test('TC03_Ext_05 — Product detail page exposes increase and decrease controls', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        await expect(productPage.increaseQtyButton).toBeVisible();
        await expect(productPage.decreaseQtyButton).toBeVisible();
    });

});