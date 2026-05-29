import { test, expect } from '../fixtures/index.js';
import loginData from '../data/users.json' with { type: 'json' };
import registerData from '../data/register.json' with { type: 'json' };

// ============================================================================
// SUITE 1: LOGIN (Runs as Guest)
// ============================================================================
test.describe('Service 01 — Authentication / Login', () => {

    // Wipe any global storageState so every login test starts fully logged out
    test.use({ storageState: { cookies: [], origins: [] } });

    loginData.forEach((scenario) => {
        test(`TC_Login — ${scenario.testName}`, async ({ loginPage, page }) => {

            await loginPage.goTo();
            
            // 🛡️ THE GOLDEN RULE: Wait for Angular to bind the form!
            
            await page.getByTestId('email').waitFor({ state: 'visible', timeout: 10000 });

            await test.step(`Fill credentials: ${scenario.email}`, async () => {
                await loginPage.login(scenario.email, scenario.password);
            });

            await test.step('Validate outcome', async () => {
                if (scenario.expectSuccess !== false) {
                    // Successful login redirects to /account or dashboard
                    await expect.soft(page).toHaveURL(/.*(account|dashboard)/);
                } else {
                    await loginPage.expectErrorToBeVisible(scenario.errorMsg ?? '');
                }
            });
        });
    });
});

// ============================================================================
// SUITE 2: REGISTRATION (Runs as Guest)
// ============================================================================
test.describe('Service 01 — Authentication / Registration', () => {

    // Wipe any global storageState so every register test starts fully logged out
    test.use({ storageState: { cookies: [], origins: [] } });

    registerData.forEach((scenario) => {
        test(`TC_Register — ${scenario.testName}`, async ({ registerPage, page }) => {

            await registerPage.goTo();

            // 🛡️ THE GOLDEN RULE: Wait for Angular to bind the form!
            
            await page.getByTestId('first-name').waitFor({ state: 'visible', timeout: 10000 });

            await test.step('Fill out registration form', async () => {
                await registerPage.registerUser(scenario.userData);
            });

            await test.step('Validate outcome', async () => {
                if (scenario.expectSuccess) {
                    // Successful registration redirects to /auth/login
                    await expect.soft(page).toHaveURL(/.*login/);
                } else {
                    // Validation error should be visible on the page
                    await expect.soft(
                        page.locator('[data-test$="-error"]').first()
                    ).toBeVisible();
                }
            });
        });
    });
});