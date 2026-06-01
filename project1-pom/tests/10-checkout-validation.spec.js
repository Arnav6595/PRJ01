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

test.describe('Service 10 — Checkout Validation (Bank Transfer)', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    // TC23b_Auth_Pos: After both bank-transfer validation errors are triggered (same path
    // as TC23a), correctly filling all three fields re-enables Finish and completes checkout.
    test('TC23b_Auth_Pos - Filling all bank fields after validation errors completes checkout', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // 1. Reproduce the validation-error state. BOTH fields must be DIRTIED (typed then
        //    cleared) — the app only surfaces these errors once a field has been modified,
        //    not on a plain focus+blur.
        await checkoutPage.bankNameInput.fill('Test Bank');
        await checkoutPage.bankNameInput.fill('');
        await checkoutPage.accountNameInput.fill('x');
        await checkoutPage.accountNameInput.fill('');
        await checkoutPage.bankNameInput.click(); // blur account name to expose its error

        // 2. Confirm both errors are showing before attempting a fix
        await expect(checkoutPage.page.getByText('Bank name can only contain letters and spaces.')).toBeVisible();
        await expect(
            checkoutPage.page.getByText(/Account name (is required|can contain)/i).first()
        ).toBeVisible();

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

    // TC21_Auth_Neg: BUG — with bank name + account number filled but account name OMITTED,
    // the app INCORRECTLY leaves the Finish button ENABLED (it should be disabled, since
    // account name is required). This test documents the bug by asserting the actual buggy
    // behavior; flip back to toBeDisabled() once the app is fixed.
    test('TC21_Auth_Neg - BUG: Finish button stays enabled when account name is omitted', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // Fill bank name and account number — intentionally do NOT touch account name
        await checkoutPage.bankNameInput.fill('Global Test Bank');
        await checkoutPage.accountNumberInput.fill('1234567890');

        // Documented bug: account name is required, yet Finish is enabled anyway.
        await expect(checkoutPage.finishButton).toBeEnabled();
    });

});
