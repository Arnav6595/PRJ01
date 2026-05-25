
// Notice we import 'test' and 'expect' from our custom fixture, NOT directly from playwright
import { test, expect } from '../fixtures/index.js';

// Import our JSON data files
import loginData from '../data/users.json' with { type: 'json' };
import registerData from '../data/register.json' with { type: 'json' };


// ============================================================================
// SUITE 1: LOGIN
// ============================================================================
test.describe('Service 1 - Authentication', () => {

    // Instructor Concept: Iterating over JSON data
    loginData.forEach((scenario) => {
        
        // Instructor Concept: Custom Fixture injection ({ loginPage })
        test(`TC - Login: ${scenario.testName}`, async ({ loginPage, preparedPage }) => {
            
            await test.step(`Attempt login with email: ${scenario.email}`, async () => {
                await loginPage.login(scenario.email, scenario.password);
            });

            await test.step('Validate outcome', async () => {
                if (scenario.expectSuccess) {
                    await expect.soft(preparedPage).toHaveURL(/.*(account|dashboard)/);
                } else {
                    // Using the logical OR (||) operator as a fallback
                    await loginPage.expectErrorToBeVisible(scenario.errorMsg || '');
                }
            });
            
        });
    });
});


// ============================================================================
// SUITE 2: REGISTRATION
// ============================================================================
test.describe('Service 1 - Registration Flow', () => {

    registerData.forEach((scenario) => {
        
        // Injecting the new registerPage fixture here!
        test(`TC - Register: ${scenario.testName}`, async ({ registerPage, preparedPage }) => {
            
            await test.step('Fill out registration form', async () => {
                await registerPage.registerUser(scenario.userData);
            });

            await test.step('Validate outcome', async () => {
                if (scenario.expectSuccess) {
                    // After successful registration, it should redirect to the login page
                    await expect.soft(preparedPage).toHaveURL(/.*login/);
                }
            });
            
        });
    });
});