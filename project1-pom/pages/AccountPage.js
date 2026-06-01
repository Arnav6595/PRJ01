// @ts-check
import { BasePage } from './BasePage.js';

export class AccountPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // ── Top-Nav Menu ──────────────────────────────────────────────────────
        this.navMenu       = page.getByTestId('nav-menu');
        this.myAccountLink = page.getByTestId('nav-my-account');

        // ── Account Sidebar / Navigation ──────────────────────────────────────
        this.invoicesNav   = page.getByTestId('nav-invoices');

        // ── Invoice List Page ─────────────────────────────────────────────────
        // Each <tr> in the table body is one invoice record
        this.invoiceRows        = page.locator('table tbody tr');
        // The "Details" button for the FIRST invoice in the list
        this.detailsButton      = page.locator('a.btn-primary:has-text("Details")').first();
        // All "Details" buttons — used to count or iterate invoices
        this.allDetailsButtons  = page.locator('a.btn-primary:has-text("Details")');

        // ── Invoice Detail Page ───────────────────────────────────────────────
        // The PDF download button — data-test="download-invoice"
        this.downloadPdfButton  = page.getByTestId('download-invoice');
        // The INV- prefixed invoice reference. On the detail page it's a readonly INPUT
        // ("Invoice Number" textbox), so its value isn't matchable via getByText — target
        // the textbox and assert its value instead.
        this.invoiceIdCell = page.getByRole('textbox', { name: 'Invoice Number' });
    }

    // ── Navigation Helpers ────────────────────────────────────────────────────

    /**
     * Full flow: open user menu → My Account → Invoices
     */
    async navigateToInvoices() {
        await this.navMenu.waitFor({ state: 'visible', timeout: 15000 });
        await this.navMenu.click();
        await this.myAccountLink.click();
        await this.invoicesNav.click();
    }

    /**
     * Opens the detail page for the first invoice in the list
     */
    async openFirstInvoiceDetails() {
        await this.detailsButton.click();
    }

    /**
     * Returns the count of invoice rows currently visible in the table
     * @returns {Promise<number>}
     */
    async getInvoiceCount() {
        await this.invoiceRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        return await this.invoiceRows.count();
    }

    /**
     * Returns the invoice reference value from the "Invoice Number" textbox
     * @returns {Promise<string>}
     */
    async getFirstInvoiceId() {
        return await this.invoiceIdCell.inputValue();
    }
}