import { test, expect } from '../fixtures/index.js';
import addressData from '../data/address.json' with { type: 'json' };

const address = addressData[0];

// ─────────────────────────────────────────────────────────────────────────
// LOCAL HELPER
// ─────────────────────────────────────────────────────────────────────────
async function addToCartAndProceedStep1(homePage, productPage, checkoutPage) {
    await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
    await homePage.productNames.first().click();
    await productPage.clickAddToCart();
    
    const cartBadge = productPage.page.locator('[data-test="cart-quantity"]');
    await expect(cartBadge).toHaveText(/^[1-9]\d*$/, { timeout: 10000 }); 
    
    await checkoutPage.goToCart();
    await checkoutPage.clickElement(checkoutPage.proceedStep1);
}

// ============================================================================
// SUITE: GUEST CHECKOUT FLOWS (6 Test Cases)
// ============================================================================
test.describe('Service 5A - Checkout Suite (Guest)', () => {
    
    // CRITICAL: Wipes global login cookie to ensure guest status
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    test('TC10_Guest - Complete E2E Checkout as Guest User', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.continueAsGuest();
        await expect(checkoutPage.guestConfirmText).toBeVisible();
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.selectPaymentAndConfirm('cash-on-delivery');
        await expect(checkoutPage.paymentSuccessMessage).toBeVisible();
    });

    test('TC13_Pos - Checkout with Bank Transfer payment method', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.continueAsGuest();
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);

        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');
        await checkoutPage.fillBankDetails('Global Test Bank', 'John Doe', '1234567890');
        
        await expect(checkoutPage.finishButton).toBeEnabled({ timeout: 10_000 });
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.paymentSuccessMessage).toBeVisible();
    });

    test('TC20_Neg - Bank transfer requires numeric account number', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.continueAsGuest();
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);

        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');
        await checkoutPage.fillBankDetails('Global Test Bank', 'John Doe', 'ABCDEFGHIJ');
        await checkoutPage.accountNumberInput.blur();

        await expect(checkoutPage.accountNumberError).toBeVisible();
        await expect(checkoutPage.finishButton).toBeDisabled();
    });

    test('TC11_Neg - Confirm button is disabled when no payment method selected', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.continueAsGuest();
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);

        await expect(checkoutPage.finishButton).toBeDisabled();
    });

    test('TC12_Neg - Guest form shows all required field errors when empty', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.guestTab);
        await checkoutPage.clickElement(checkoutPage.guestSubmitButton);

        await expect(checkoutPage.emailRequiredError).toBeVisible();
        await expect(checkoutPage.firstNameRequiredError).toBeVisible();
        await expect(checkoutPage.lastNameRequiredError).toBeVisible();
    });

    test('TC17_Neg - Guest form requires names when only email is provided', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.guestTab);
        await checkoutPage.fillInput(checkoutPage.guestEmailInput, 'guest@test.com');
        await checkoutPage.clickElement(checkoutPage.guestSubmitButton);

        await expect(checkoutPage.firstNameRequiredError).toBeVisible();
        await expect(checkoutPage.lastNameRequiredError).toBeVisible();
    });
});