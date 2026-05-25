
import { test, expect } from '../fixtures/index.js';
import profileData from '../data/profile.json' with { type: 'json' };

// We also import the users.json you made in Milestone 2 so we have valid login credentials!
import userData from '../data/users.json' with { type: 'json' }; 

test.describe('Service 4 - User Profile', () => {

    test('TC02 & TC09 - Update first name and last name successfully', async ({ loginPage, profilePage }) => {
        
        // Grab our test data from the JSON files
        const user = userData[0]; // Assuming your first user in users.json is the valid one
        const newProfile = profileData[0];

        await test.step('1. Log into the application', async () => {
            // We use the LoginPage map you built in Milestone 2
            // Note: If your login method is named differently, adjust this line!
            await loginPage.login(user.email, user.password); 
        });

        await test.step('2. Navigate to Profile Dashboard', async () => {
            // Here we use the exact locator you successfully found using CodeGen!
            const profileLink = profilePage.page.getByTestId('nav-profile');
            await profilePage.clickElement(profileLink);
        });

        await test.step('3. Update Profile Data', async () => {
            // We hand the JSON data over to the method we just wrote in ProfilePage.js
            await profilePage.updateProfile(
                newProfile.firstName, 
                newProfile.lastName, 
                newProfile.phone
            );
        });

        await test.step('4. Verify Success Message', async () => {
            // Assert that the green success banner physically appears on the screen
            await expect(profilePage.successMessage).toBeVisible();
        });
        
    });
});