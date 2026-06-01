import { test, expect } from '../fixtures/index.js';
import addressData from '../data/address.json' with { type: 'json' };

const address = addressData[0];

// Helper: Adds first product to cart and navigates to Checkout Step 1
async function addToCartAndProceedStep1(homePage, productPage, checkoutPage) {
    await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
    await homePage.productNames.first().click();
    await productPage.clickAddToCart();

    const cartBadge = productPage.page.locator('[data-test="cart-quantity"]');
    await expect(cartBadge).toHaveText(/^[1-9]\d*$/, { timeout: 10000 });

    await checkoutPage.goToCart();
    await checkoutPage.clickElement(checkoutPage.proceedStep1);
}

test.describe('Pending / Skipped Tests - Checkout Validation', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    test.skip('TC23b_Auth_Pos - Filling all bank fields after validation errors completes checkout', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // 1. Reproduce the same validation-error state as TC23a
        await checkoutPage.bankNameInput.fill('Test Bank');
        await checkoutPage.bankNameInput.fill('');
        await checkoutPage.accountNameInput.click();      // move focus to account name (no typing)
        await checkoutPage.bankNameInput.click();          // blur account name to expose its error

        // 2. Confirm both errors are showing before attempting a fix
        await expect(checkoutPage.page.getByText('Bank name can only contain letters and spaces.')).toBeVisible();
        await expect(checkoutPage.page.getByText('Account name can contain letters, numbers, spaces, periods, apostrophes, and hyphens.')).toBeVisible();

        // 3. Now correctly fill all three required bank-transfer fields
        await checkoutPage.bankNameInput.fill('Global Test Bank');
        await checkoutPage.accountNameInput.fill('John Doe');
        await checkoutPage.accountNumberInput.fill('1234567890');

        // 4. Finish button must now be enabled
        await expect(checkoutPage.finishButton).toBeEnabled({ timeout: 10_000 });

        // 5. Complete the payment and verify success
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.paymentSuccessMessage).toBeVisible();
    });

    // TC21_Auth_Neg: Finish button stays silently disabled when account name is omitted.
    // Bank name and account number are filled, but account name is intentionally left empty.
    // Expected: button is DISABLED with NO error or warning message shown (silent failure).
    // ⚠️  If the button is found ENABLED in this state, that is a BUG — the app should
    //     not allow proceeding without an account name. Change the assertion to toBeEnabled()
    //     and mark the test as a negative pass documenting the bug.
    test.skip('TC21_Auth_Neg - Finish button disabled silently when account name is omitted', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // Fill bank name and account number — intentionally do NOT touch account name
        await checkoutPage.bankNameInput.fill('Global Test Bank');
        await checkoutPage.accountNumberInput.fill('1234567890');

        // The finish button must remain DISABLED with no error message visible.
        // This is a "silent" state — the user gets zero feedback about the missing field.
        await expect(checkoutPage.finishButton).toBeDisabled();
    });

});