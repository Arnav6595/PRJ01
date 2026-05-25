// @ts-check
import { BasePage } from './BasePage.js';

export class ProductPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // Core Cart Elements
        this.addToCartButton = page.getByTestId('add-to-cart');
        this.decreaseQtyButton = page.getByTestId('decrease-quantity');
        this.increaseQtyButton = page.getByTestId('increase-quantity');
        
        // The State Indicator
        this.cartBadge = page.getByTestId('cart-quantity');
    }

    /**
     * Clicks add to cart and waits for the UI state to update
     */
    async clickAddToCart() {
        await this.clickElement(this.addToCartButton);
        // CRITICAL: We must wait for the badge to physically appear on the DOM 
        // after the backend API processes the cart addition.
        await this.cartBadge.waitFor({ state: 'visible' });
    }

    /**
     * Extracts the red cart badge number and converts it to an integer
     * @returns {Promise<number>}
     */
    async getCartBadgeCount() {
        const countText = await this.cartBadge.textContent();
        return parseInt(countText || '0', 10);
    }
}