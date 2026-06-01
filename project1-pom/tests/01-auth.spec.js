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

            // The demo site persists registered users, so a static email only succeeds the
            // first time. Make the email unique per run (and per parallel worker) so a
            // "valid registration" actually registers a NEW user and redirects to login.
            const uniqueUserData = {
                ...scenario.userData,
                email: scenario.userData.email.replace(
                    /@/,
                    `.${Date.now()}${Math.floor(Math.random() * 1000)}@`
                ),
            };

            await test.step('Fill out registration form', async () => {
                await registerPage.registerUser(uniqueUserData);
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

// =====================================================================
// NEW TEST CASES (added 2026-06-01) — 5 functional tests (Service 1: Auth)
// =====================================================================
test.describe('Service 01 — Authentication (Extended)', () => {

    // Always start fully logged out
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ loginPage, page }) => {
        await loginPage.goTo();
        await page.getByTestId('email').waitFor({ state: 'visible', timeout: 15000 });
    });

    test('TC_Login_Ext_01 — Login form renders email, password, and submit controls', async ({ loginPage }) => {
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });

    test('TC_Login_Ext_02 — Invalid credentials show an authentication error', async ({ loginPage, page }) => {
        await loginPage.login('customer@practicesoftwaretesting.com', 'definitelyWrong123');
        await expect(page.getByText(/Invalid email or password/i)).toBeVisible({ timeout: 15000 });
    });

    test('TC_Login_Ext_03 — Password field masks its input', async ({ loginPage }) => {
        await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    });

    test('TC_Login_Ext_04 — Registration page renders first name and email fields', async ({ registerPage, page }) => {
        await registerPage.goTo();
        await expect(page.getByTestId('first-name')).toBeVisible({ timeout: 15000 });
        await expect(page.getByTestId('email')).toBeVisible();
    });

    test('TC_Login_Ext_05 — Valid customer login lands on the account area', async ({ loginPage, page }) => {
        await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(page).toHaveURL(/.*account/, { timeout: 15000 });
        await expect(page.getByTestId('nav-menu')).toBeVisible();
    });
});