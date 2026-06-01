import { test, expect } from '../fixtures/index.js';
import path from 'path';

// Lock the file to ONLY use the Admin session
test.use({ storageState: 'playwright/.auth/admin.json' });

test.describe('Service 09 — Admin CRUD Actions & UI Verification', () => {

    test.beforeEach(async ({ homePage, adminPage }) => {
        await homePage.goTo();
        await homePage.productCards.first().waitFor({ state: 'visible', timeout: 15000 });
        await adminPage.openAdminDropdown();
    });

    // ── Brands ─────────────────────────────────────────────────────────────
    
    test('TC_Action_01 — Admin can add a new Brand successfully', async ({ adminPage }) => {
        await adminPage.brandsLink.click();
        
        // Click add and verify routing
        await adminPage.addBrandBtn.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/brands\/add/);
        
        // Fill the form
        const timestamp = Date.now();
        await adminPage.brandNameInput.fill(`Test Brand ${timestamp}`);
        await adminPage.brandSlugInput.fill(`test-brand-${timestamp}`);
        
        // Submit
        await adminPage.brandSubmitBtn.click();
        
        // Success should route back to the brands list
        await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
    });

    test('TC_Action_02 — Admin Brand list contains dynamic Edit and Delete buttons', async ({ adminPage }) => {
        await adminPage.brandsLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
        
        // Verify the dynamic buttons exist on the page
        await expect(adminPage.editBrandBtn).toBeVisible();
        await expect(adminPage.deleteBrandBtn).toBeVisible();
    });

    // ── Categories ─────────────────────────────────────────────────────────

    test('TC_Action_03 — Admin Category list contains Add and dynamic Edit buttons', async ({ adminPage }) => {
        await adminPage.categoriesLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/categories/);
        
        // Verify UI elements
        await expect(adminPage.addCategoryBtn).toBeVisible();
        await expect(adminPage.editCategoryBtn).toBeVisible();
    });

    // ── Orders ─────────────────────────────────────────────────────────────

    test('TC_Action_04 — Admin Orders page contains Search functionality', async ({ adminPage }) => {
        await adminPage.ordersLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/orders/);
        
        // Verify UI element
        await expect(adminPage.orderSearchBtn).toBeVisible();
    });

    // ── Users ──────────────────────────────────────────────────────────────

    test('TC_Action_05 — Admin Users list contains Add and dynamic Edit buttons', async ({ adminPage }) => {
        await adminPage.usersLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/users/);
        
        // Verify UI elements
        await expect(adminPage.addUserBtn).toBeVisible();
        await expect(adminPage.editUserBtn).toBeVisible();
    });

});