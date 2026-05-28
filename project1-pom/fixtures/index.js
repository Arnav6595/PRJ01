import { test as baseTest, expect } from '@playwright/test';
import { LoginPage }    from '../pages/LoginPage.js';
import { RegisterPage } from '../pages/RegisterPage.js';
import { HomePage }     from '../pages/HomePage.js';
import { ProductPage }  from '../pages/ProductPage.js';
import { ProfilePage }  from '../pages/ProfilePage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { AccountPage }  from '../pages/AccountPage.js';
import { ContactPage }  from '../pages/ContactPage.js';

/**
 * @typedef {object} MyFixtures
 * @property {LoginPage}    loginPage
 * @property {RegisterPage} registerPage
 * @property {HomePage}     homePage
 * @property {ProductPage}  productPage
 * @property {ProfilePage}  profilePage
 * @property {CheckoutPage} checkoutPage
 * @property {AccountPage}  accountPage
 * @property {ContactPage}  contactPage
 */
export const test = baseTest.extend({
    // Just instantiate the classes — let each test file handle its own navigation.
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    profilePage: async ({ page }, use) => {
        await use(new ProfilePage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },
});

export { expect };