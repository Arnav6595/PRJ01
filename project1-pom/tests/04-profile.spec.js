import { test, expect } from '../fixtures/index.js';
import profileData from '../data/profile.json' with { type: 'json' };

test.describe('Service 4 - User Profile & Navigation (Logged-In)', () => {
    
    const newProfile = profileData[0];

    test.beforeEach(async ({ homePage, page }) => {
        // 1. Navigate to the page
        await homePage.goTo(); 

        // 2. Give the Angular frontend a moment to settle
      

        // 3. Force Playwright to wait until the User Menu physically appears.
        await page.getByTestId('nav-menu').waitFor({ state: 'visible', timeout: 15000 });
    });

    // 🧪 TEST 1: Navigate to Profile
    test('TC_Nav_01 - Navigate to Profile successfully', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        // Using /Profile/i finds the text even if there are weird HTML spaces
        await page.getByText(/Profile/i).click();
        await expect(page).toHaveURL(/.*profile/);
    });

    // 🧪 TEST 2: Navigate to Favorites
    test('TC_Nav_02 - Navigate to Favorites successfully', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Favorites/i).click();
        await expect(page).toHaveURL(/.*favorites/);
    });

    // 🧪 TEST 3: Navigate to Invoices
    test('TC_Nav_03 - Navigate to Invoices successfully', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Invoices/i).click();
        await expect(page).toHaveURL(/.*invoices/);
    });

    // 🧪 TEST 4: Navigate to Messages
    test('TC_Nav_04 - Navigate to Messages successfully', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Messages/i).click();
        await expect(page).toHaveURL(/.*messages/);
    });

    // 🧪 TEST 5: The Profile Update 
    // 🧪 TEST 5: The Profile Update 
    test('TC_05 - Update first name and last name successfully', async ({ profilePage, page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Profile/i).click(); 
        
        // 🛡️ THE FIX: Wait for Angular to load the default data from the DB first!
        // We wait for the input to NOT be empty before we try typing over it.
        await expect(profilePage.firstNameInput).not.toBeEmpty({ timeout: 10000 });
        
        // Now it is safe to type!
        await profilePage.updateProfile(newProfile.firstName, newProfile.lastName, newProfile.phone);
        
        // Assert the inputs actually hold the new data
        await expect(profilePage.firstNameInput).toHaveValue(newProfile.firstName);
        await expect(profilePage.lastNameInput).toHaveValue(newProfile.lastName);
    });

    // =====================================================================
    // NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 4: Profile)
    // =====================================================================
    test('TC_Nav_Ext_01 — User menu reveals the "My account" link', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await expect(page.getByTestId('nav-my-account')).toBeVisible();
    });

    test('TC_Nav_Ext_02 — Profile navigation lands on the profile page', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Profile/i).click();
        await expect(page).toHaveURL(/.*profile/, { timeout: 15000 });
    });

    test('TC_Nav_Ext_03 — Profile first-name field is pre-populated from the account', async ({ profilePage, page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Profile/i).click();
        await expect(profilePage.firstNameInput).not.toBeEmpty({ timeout: 10000 });
    });

    test('TC_Nav_Ext_04 — Profile email field is pre-populated from the account', async ({ profilePage, page }) => {
        await page.getByTestId('nav-menu').click();
        await page.getByText(/Profile/i).click();
        await expect(profilePage.emailInput).not.toBeEmpty({ timeout: 10000 });
    });

    test('TC_Nav_Ext_05 — User menu exposes a Sign out option', async ({ page }) => {
        await page.getByTestId('nav-menu').click();
        await expect(page.getByTestId('nav-sign-out')).toBeVisible();
    });

});