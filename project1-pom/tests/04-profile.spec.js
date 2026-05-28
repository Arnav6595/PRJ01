
import { test, expect } from '../fixtures/index.js';
import profileData from '../data/profile.json' with { type: 'json' };

test.describe('Service 4 - User Profile & Navigation (Logged-In)', () => {
    
    const newProfile = profileData[0];

    // 🔄 SETUP: Global Setup handles authentication automatically!
   // 🔄 SETUP: Global Setup handles authentication automatically!
    test.beforeEach(async ({ profilePage }) => {
        // Just navigate home — the browser is already authenticated
        await profilePage.navigate('/');
        await profilePage.page.waitForLoadState('load'); // Swapped from networkidle
    });

    // 🧪 TEST 1: Validating the Dropdown
    test('TC_Nav_01 - Verify all user dropdown links are visible', async ({ profilePage }) => {
        await profilePage.page.getByTestId('nav-menu').click();
        
        await expect(profilePage.page.getByTestId('nav-my-account')).toBeVisible();
        await expect(profilePage.page.getByTestId('nav-my-favorites')).toBeVisible();
        await expect(profilePage.page.getByTestId('nav-my-profile')).toBeVisible();
        await expect(profilePage.page.getByTestId('nav-my-invoices')).toBeVisible();
        await expect(profilePage.page.getByTestId('nav-my-messages')).toBeVisible();
        await expect(profilePage.page.getByTestId('nav-sign-out')).toBeVisible();
    });

    // 🧪 TEST 2: Navigation Execution
    test('TC_Nav_02 - Navigate to Favorites successfully', async ({ profilePage }) => {
        await profilePage.page.getByTestId('nav-menu').click();
        await profilePage.page.getByTestId('nav-my-favorites').click();
        
        await expect(profilePage.page).toHaveURL(/.*favorites/);
    });

    // 🧪 TEST 3: The Profile Update 
    test('TC02 - Update first name and last name successfully', async ({ profilePage }) => {
        await test.step('Navigate to Profile', async () => {
            await profilePage.page.getByTestId('nav-menu').click();
            await profilePage.page.getByTestId('nav-my-profile').click();
        });

        await test.step('Update Profile Data', async () => {
            await profilePage.updateProfile(
                newProfile.firstName, 
                newProfile.lastName, 
                newProfile.phone
            );
        });
    });

});