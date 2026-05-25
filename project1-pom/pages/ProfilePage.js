// @ts-check
import { BasePage } from './BasePage.js';

export class ProfilePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // We use the same data-test IDs that we discovered during Registration!
        this.firstNameInput = page.getByTestId('first-name');
        this.lastNameInput = page.getByTestId('last-name');
        this.phoneInput = page.getByTestId('phone');
        this.emailInput = page.getByTestId('email');
        
        // The submit button for updating the profile
        this.updateButton = page.getByTestId('profile-submit'); 
        
        // Success message locator (crucial for TC09)
        this.successMessage = page.locator('.alert-success');
    }

    /**
     * Updates the user's profile information
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} phone 
     */
    async updateProfile(firstName, lastName, phone) {
        await this.fillInput(this.firstNameInput, firstName);
        await this.fillInput(this.lastNameInput, lastName);
        await this.fillInput(this.phoneInput, phone);
        await this.clickElement(this.updateButton);
        
        // Wait for the success banner to appear so the test doesn't move on too fast
        await this.successMessage.waitFor({ state: 'visible' });
    }
}