import { test, expect } from '../fixtures/index.js';

// ============================================================================
// Network Interception & Backend Mocking  (Guidelines §3 / Deliverable #5.4)
//
// These tests use page.route() to intercept the catalog API and force failure
// states (500 / 401), an empty mocked payload, and an aborted request — proving
// the Angular front-end degrades gracefully instead of crashing. The final test
// verifies that interception observes the real call and lets it continue.
// ============================================================================

// The catalog is fetched from the API host; match any /products request to it.
const PRODUCTS_API = /api\.practicesoftwaretesting\.com\/products/;

test.describe('Service — Network Interception & Backend Mocking', () => {

    // Run as a guest so no auth token is attached to the intercepted calls.
    test.use({ storageState: { cookies: [], origins: [] } });

    test('MOCK_01 — 500 on products API: catalog degrades gracefully (no products, page intact)', async ({ homePage, page }) => {
        await page.route(PRODUCTS_API, (route) =>
            route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ message: 'Server Error' }) })
        );
        await homePage.goTo();
        // The shell still renders (no white-screen crash)…
        await expect(homePage.searchInput).toBeVisible({ timeout: 15000 });
        // …but no product cards load behind a 500.
        expect(await homePage.productNames.count()).toBe(0);
    });

    test('MOCK_02 — 401 on products API: catalog shows no products', async ({ homePage, page }) => {
        await page.route(PRODUCTS_API, (route) =>
            route.fulfill({ status: 401, contentType: 'application/json', body: JSON.stringify({ message: 'Unauthorized' }) })
        );
        await homePage.goTo();
        await expect(homePage.searchInput).toBeVisible({ timeout: 15000 });
        expect(await homePage.productNames.count()).toBe(0);
    });

    test('MOCK_03 — Mocked empty product list renders an empty catalog', async ({ homePage, page }) => {
        await page.route(PRODUCTS_API, (route) =>
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ current_page: 1, data: [], total: 0, per_page: 9 }),
            })
        );
        await homePage.goTo();
        await expect(homePage.searchInput).toBeVisible({ timeout: 15000 });
        expect(await homePage.productNames.count()).toBe(0);
    });

    test('MOCK_04 — Aborted products request is handled without crashing the app', async ({ homePage, page }) => {
        await page.route(PRODUCTS_API, (route) => route.abort());
        await homePage.goTo();
        await expect(homePage.searchInput).toBeVisible({ timeout: 15000 });
        expect(await homePage.productNames.count()).toBe(0);
    });

    test('MOCK_05 — Interception observes the products API call and lets it continue', async ({ homePage, page }) => {
        let intercepted = false;
        await page.route(PRODUCTS_API, (route) => {
            intercepted = true;
            return route.continue();
        });
        await homePage.goTo();
        // Real data still loads because we continued the request…
        await homePage.productNames.first().waitFor({ state: 'visible', timeout: 15000 });
        // …and we confirm the interception fired.
        expect(intercepted).toBe(true);
    });
});
