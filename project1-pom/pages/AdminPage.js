import { BasePage } from './BasePage.js';

export class AdminPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // ── Top Navigation ───────────────────────────────────────────────────
        this.navMenu = page.getByTestId('nav-menu');
        this.pageTitle = page.getByTestId('page-title');

        // ── Admin Dropdown Links ─────────────────────────────────────────────
        this.dashboardLink  = page.getByTestId('nav-admin-dashboard');
        this.brandsLink     = page.getByTestId('nav-admin-brands');
        this.categoriesLink = page.getByTestId('nav-admin-categories');
        this.productsLink   = page.getByTestId('nav-admin-products');
        this.ordersLink     = page.getByTestId('nav-admin-orders');
        this.usersLink      = page.getByTestId('nav-admin-users');
        this.messagesLink   = page.getByTestId('nav-admin-messages');
        this.settingsLink   = page.getByTestId('nav-admin-settings');

        // ── Reports Dropdown Links ───────────────────────────────────────────
        this.reportsDropdown  = page.locator('#reportsDropdown');
        this.statisticsLink   = page.getByTestId('nav-admin-statistics');
        this.averageMonthLink = page.getByTestId('nav-average-month-sales');
        this.averageWeekLink  = page.getByTestId('nav-average-week-sales');

        // ── Action Buttons (Brands) ──────────────────────────────────────────
        this.addBrandBtn    = page.getByTestId('brand-add');
        this.brandNameInput = page.getByTestId('name');
        this.brandSlugInput = page.getByTestId('slug');
        this.brandSubmitBtn = page.getByTestId('brand-submit');
        // Dynamic Locators: Starts with "brand-" and ends with "-edit"
        this.editBrandBtn   = page.locator('[data-test^="brand-"][data-test$="-edit"]').first();
        this.deleteBrandBtn = page.getByText('Delete').first();

        // ── Action Buttons (Categories) ──────────────────────────────────────
        this.addCategoryBtn  = page.getByTestId('category-add');
        // Dynamic Locator: Starts with "category-edit-"
        this.editCategoryBtn = page.locator('[data-test^="category-edit-"]').first();

        // ── Action Buttons (Orders) ──────────────────────────────────────────
        this.orderSearchBtn = page.getByTestId('order-search-submit');

        // ── Action Buttons (Users) ───────────────────────────────────────────
        this.addUserBtn  = page.getByTestId('user-add');
        // Dynamic Locator: Starts with "user-edit-"
        this.editUserBtn = page.locator('[data-test^="user-edit-"]').first();
    }

    async openAdminDropdown() {
        await this.clickElement(this.navMenu);
    }

    async openReportsDropdown() {
        await this.reportsDropdown.hover();;
    }
}