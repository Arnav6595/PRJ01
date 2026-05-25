// @ts-check
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // Search Bar Elements
        this.searchInput = page.getByTestId('search-query');
        this.searchButton = page.getByTestId('search-submit');

        // Dynamic Product Elements
        // Notice we don't use the specific ID, we just target the class that wraps every card
        this.productCards = page.locator('.card'); 
        this.productNames = page.getByTestId('product-name');
        
        // Category Checkboxes (We use getByLabel because the IDs are dynamic/scrambled)
        this.handToolsCheckbox = page.getByLabel('Hand Tools');
        this.powerToolsCheckbox = page.getByLabel('Power Tools');

        // Price Slider
        this.sliderMinHandle = page.locator('.ngx-slider-pointer-min');
    }

    async goTo() {
        await this.navigate('/');
    }

    /**
     * Searches for a product and waits for the results to load
     * @param {string} productName
     */
    async searchForProduct(productName) {
        await this.fillInput(this.searchInput, productName);
        await this.clickElement(this.searchButton);
        
        // CRITICAL ASYNC WAIT: We must wait for the API to return the filtered results
        // before we tell the test to check what is on the screen.
        await this.page.waitForTimeout(1000); // Temporary explicit wait
    }

    /**
     * Returns the name of the first product currently visible on the screen
     */
    async getFirstProductName() {
        // We grab the very first product name element out of the list and return its text
        return await this.productNames.first().textContent();
    }
    
    /**
     * Counts how many product cards are currently displayed
     */
    async getProductCount() {
        return await this.productCards.count();
    }
}