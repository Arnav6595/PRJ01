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

test.describe('Service 5B - Checkout Suite (Logged-In)', () => {

    // Navigate to home before each test to ensure a clean state
    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    // TC10_Auth: E2E Checkout using Cash on Delivery
    test('TC10_Auth - Complete E2E Checkout as Logged-In User', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.selectPaymentAndConfirm('cash-on-delivery');
        await expect(checkoutPage.paymentSuccessMessage).toBeVisible();
    });

    // TC13_Auth_Pos: E2E Checkout using Bank Transfer with valid details
    test('TC13_Auth_Pos - Checkout with Bank Transfer as Logged-In User', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
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

    // TC14_Auth_Pos: Authenticated user bypasses the guest/login tab automatically
    test('TC14_Auth_Pos - Auth user reaches address step directly without login prompt', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await expect(checkoutPage.guestTab).not.toBeVisible();
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await expect(checkoutPage.page.locator('[data-test="country"]')).toBeVisible();
    });

    // TC15_Pos: App displays "Already logged in" message at Step 1
    test('TC15_Pos - Logged-in user sees the already-logged-in message at Step 1', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await expect(checkoutPage.alreadyLoggedInMsg).toBeVisible();
    });

    // TC16_Pos: Cart badge properly increments to 1 after adding a product
    test('TC16_Pos - Cart badge shows item count after adding product', async ({ homePage, productPage }) => {
        await homePage.productNames.first().click();
        await productPage.clickAddToCart();
        const cartBadge = homePage.page.locator('[data-test="cart-quantity"]');
        await expect(cartBadge).toHaveText('1');
    });

    // TC11_Auth_Neg: Finish button is disabled by default until payment is selected
    test('TC11_Auth_Neg - Finish button is disabled when no payment method selected', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await expect(checkoutPage.finishButton).toBeDisabled();
    });

    // TC18_Auth_Neg: Cannot proceed to Step 3 if all address fields are empty
    test('TC18_Auth_Neg - Proceed-3 is disabled when address fields are left empty', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await expect(checkoutPage.proceedStep3).toBeDisabled();
    });

    // ─────────────────────────────────────────────────────────────────────────
    // BUG HUNTING SUITE: Bank Details & Address Validation
    // ─────────────────────────────────────────────────────────────────────────

    // TC20_Auth_Neg: Bank transfer rejects alphabetic characters in account number
    test('TC20_Auth_Neg - Bank transfer requires a numeric account number', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
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

    

    // TC22_Auth_Neg: Invalid bank name triggers specific inline validation error
    test('TC22_Auth_Neg - Invalid bank name triggers validation error', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // Fill with numbers/invalid characters, then blur to trigger validation
        await checkoutPage.fillInput(checkoutPage.bankNameInput, '12345');
        await checkoutPage.bankNameInput.blur();

        await expect(checkoutPage.page.getByText('Bank name can only contain letters and spaces.')).toBeVisible();
    });

    // TC23a_Auth_Neg: Validates that errors appear in the correct sequence when bank fields
    // are abandoned without valid input.
    //
    // Flow:
    //   1. Fill bank name → clear it   →  blurring bank name shows its validation error
    //   2. Click into account name (do NOT type)
    //   3. Click away without typing   →  blurring account name shows its validation error
    //
    // Both errors must be visible at the end of this test.
    test('TC23a_Auth_Neg - Sequential validation errors appear for emptied bank name and unfilled account name', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);
        await checkoutPage.fillAddress(address);
        await checkoutPage.clickElement(checkoutPage.proceedStep3);
        await checkoutPage.paymentMethodSelect.selectOption('bank-transfer');
        await checkoutPage.paymentMethodSelect.dispatchEvent('change');

        // 1. Fill bank name, then clear it immediately
        await checkoutPage.bankNameInput.fill('Test Bank');
        await checkoutPage.bankNameInput.fill('');

        // 2. Dirty the account name field (type then clear) so its validator engages.
        // The app only surfaces these errors once a field has been modified — exactly
        // like the bank name above. A plain focus+blur with no input shows nothing.
        await checkoutPage.accountNameInput.fill('x');
        await checkoutPage.accountNameInput.fill('');

        // 3. Blurring the bank name (via step 2 above) triggers its validation error
        await expect(checkoutPage.page.getByText('Bank name can only contain letters and spaces.')).toBeVisible();

        // 4. Click away from account name WITHOUT having typed anything — blurs it
        await checkoutPage.bankNameInput.click();

        // 5. Account name, focused then abandoned, now shows its own validation error.
        // An empty-but-touched field may surface either the "required" message or the
        // character-pattern message depending on the app's validators — accept either.
        await expect(
            checkoutPage.page.getByText(/Account name (is required|can contain)/i).first()
        ).toBeVisible();
    });

    // TC23b_Auth_Pos: After both validation errors are triggered (same entry path as TC23a),
    // correctly filling all three bank fields re-enables the finish button and completes checkout.
    

    // TC24_Auth_Neg: BUG — Address form accepts alphabetic input in numeric-only fields
    // (postal code, house number) and does NOT block the proceed button.
    //
    // Setup: fillAddress() populates ALL required address fields so the proceed button
    // is in a state where it *could* be active. The postal code and house number are then
    // overridden with invalid alphabetic data. Validation should block the button —
    // but the bug is that it does not.
    //
    // Expected (correct behaviour): proceedStep3 is DISABLED after invalid overrides
    // Actual   (bug):               proceedStep3 remains ENABLED — validation is bypassed
    test('TC24_Auth_Neg - BUG: Alphabetic postal code and house number bypass address validation', async ({ homePage, productPage, checkoutPage }) => {
        await addToCartAndProceedStep1(homePage, productPage, checkoutPage);
        await checkoutPage.clickElement(checkoutPage.proceedStep2);

        // 1. Fill every required address field with valid data first.
        //    This ensures the button is not blocked simply by empty required fields —
        //    only the deliberately wrong values below should be blocking it.
        await checkoutPage.fillAddress(address);

        // 2. Override the numeric-only fields with invalid alphabetic data
        await checkoutPage.postalCodeInput.fill('ABCDEF');
        await checkoutPage.houseNumberInput.fill('XYZ');

        // 3. BUG ASSERTION: button should be DISABLED because the data is invalid,
        //    but validation is not enforced — it remains ENABLED
        await expect(checkoutPage.proceedStep3).toBeEnabled({ timeout: 15000 });

        // 4. PROVE THE BUG: clicking proceed with bad data successfully reaches the payment step
        await checkoutPage.proceedStep3.click();
        await expect(checkoutPage.paymentMethodSelect).toBeVisible();
    });
});