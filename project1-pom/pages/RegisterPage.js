import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test'; // <-- ADDED THIS

export class RegisterPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        
        // 1. Elements using data-test (No fallbacks needed, thanks to your catch!)
        this.firstNameInput = page.getByTestId('first-name');
        this.lastNameInput = page.getByTestId('last-name');
        this.dobInput = page.getByTestId('dob');
        this.addressInput = page.getByTestId('street'); 
        this.houseNumberInput = page.getByTestId('house_number');
        this.postCodeInput = page.getByTestId('postal_code');
        this.cityInput = page.getByTestId('city');
        this.stateInput = page.getByTestId('state');
        this.countryDropdown = page.getByTestId('country');
        this.phoneInput = page.getByTestId('phone');
        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.registerButton = page.getByTestId('register-submit');

        // 3. Error Locator
        this.errorMessage = page.locator('[data-test$="-error"]'); 
    }

    async goTo() {
        await this.navigate('/auth/register');
    }

    /**
     * Fills out the entire registration form dynamically
     * @param {Object} userData - An object containing all the user details
     */
    async registerUser(userData) {
        await this.fillInput(this.firstNameInput, userData.firstName);
        await this.fillInput(this.lastNameInput, userData.lastName);
        
        // Handling Date input: Playwright can type directly into standard HTML5 date fields
        // Format MUST be YYYY-MM-DD
        await this.fillInput(this.dobInput, userData.dob); 
        
        await this.fillInput(this.addressInput, userData.address);
        await this.fillInput(this.houseNumberInput, userData.houseNumber);
        await this.fillInput(this.postCodeInput, userData.postCode);
        await this.fillInput(this.cityInput, userData.city);
        await this.fillInput(this.stateInput, userData.state);
        
        // Handling native <select> Dropdown: Use .selectOption() by value or label
        await this.countryDropdown.waitFor({ state: 'visible' });
        await this.countryDropdown.selectOption(userData.country);

        await this.fillInput(this.phoneInput, userData.phone);
        await this.fillInput(this.emailInput, userData.email);
        await this.fillInput(this.passwordInput, userData.password);

        await this.clickElement(this.registerButton);
    }

    /**
     * @param {string} expectedText
     */
    async expectErrorToBeVisible(expectedText) {
        const errorElement = this.page.getByText(expectedText);
        await expect(errorElement).toBeVisible(); // <-- FIXED SYNTAX
    }
}