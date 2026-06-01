import { test, expect } from '../fixtures/index.js';
import path from 'path';

// Lock the file to ONLY use the Admin session
test.use({ storageState: 'playwright/.auth/admin.json' });

test.describe('Service 08 — Admin Dashboard & Navigation', () => {

    test.beforeEach(async ({ homePage, adminPage }) => {
        // Hydrate the app safely
        await homePage.goTo();
        await homePage.productCards.first().waitFor({ state: 'visible', timeout: 15000 });
        
        // Open the admin dropdown
        await adminPage.openAdminDropdown();
    });

    test('TC_Admin_01 — Admin dashboard redirects correctly and displays Sales title', async ({ adminPage }) => {
        await adminPage.dashboardLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/dashboard/);
        await expect(adminPage.pageTitle).toContainText('Sales over the years');
    });

    test('TC_Admin_02 — Admin can navigate to Brands', async ({ adminPage }) => {
        await adminPage.brandsLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/brands/);
    });

    test('TC_Admin_03 — Admin can navigate to Categories', async ({ adminPage }) => {
        await adminPage.categoriesLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/categories/);
    });

    test('TC_Admin_04 — Admin can navigate to Products', async ({ adminPage }) => {
        await adminPage.productsLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/products/);
    });

    test('TC_Admin_05 — Admin can navigate to Orders', async ({ adminPage }) => {
        await adminPage.ordersLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/orders/);
    });

    test('TC_Admin_06 — Admin can navigate to Users', async ({ adminPage }) => {
        await adminPage.usersLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/users/);
    });

    test('TC_Admin_07 — Admin can navigate to Messages', async ({ adminPage }) => {
        await adminPage.messagesLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/messages/);
    });

    test('TC_Admin_08 — Admin can navigate to Settings', async ({ adminPage }) => {
        await adminPage.settingsLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/settings/);
    });

    test('TC_Admin_09 — Admin can navigate to Reports > Statistics', async ({ adminPage }) => {
        await adminPage.openReportsDropdown();
        await adminPage.statisticsLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/reports\/statistics/);
    });

    test('TC_Admin_10 — Admin can navigate to Reports > Average sales per week', async ({ adminPage }) => {
        await adminPage.openReportsDropdown();
        await adminPage.averageWeekLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/reports\/average-sales-per-week/);
    });
   test('TC_Admin_11 — Admin can navigate to Reports > Average sales per month', async ({ adminPage }) => {
    await adminPage.openReportsDropdown();


    await adminPage.averageMonthLink.click();

    await expect(adminPage.page).toHaveURL(/\/admin\/reports\/average-sales-per-month/);
});

    // =====================================================================
    // NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 8: Admin)
    // =====================================================================
    test('TC_Admin_Ext_01 — Admin menu exposes Brands, Products, and Users links', async ({ adminPage }) => {
        await expect(adminPage.brandsLink).toBeVisible();
        await expect(adminPage.productsLink).toBeVisible();
        await expect(adminPage.usersLink).toBeVisible();
    });

    test('TC_Admin_Ext_02 — Reports dropdown reveals Statistics and weekly-sales links', async ({ adminPage }) => {
        await adminPage.openReportsDropdown();
        await expect(adminPage.statisticsLink).toBeVisible();
        await expect(adminPage.averageWeekLink).toBeVisible();
    });

    test('TC_Admin_Ext_03 — Products admin page shows a populated data table', async ({ adminPage, page }) => {
        await adminPage.productsLink.click();
        await expect(page).toHaveURL(/\/admin\/products/, { timeout: 15000 });
        await expect(page.locator('table tbody tr').first()).toBeVisible({ timeout: 15000 });
    });

    test('TC_Admin_Ext_04 — Categories admin page shows the Add control', async ({ adminPage }) => {
        await adminPage.categoriesLink.click();
        await expect(adminPage.page).toHaveURL(/\/admin\/categories/, { timeout: 15000 });
        await expect(adminPage.addCategoryBtn).toBeVisible();
    });

    test('TC_Admin_Ext_05 — Admin dashboard displays the "Sales over the years" title', async ({ adminPage }) => {
        await adminPage.dashboardLink.click();
        await expect(adminPage.pageTitle).toContainText('Sales over the years', { timeout: 15000 });
    });

});