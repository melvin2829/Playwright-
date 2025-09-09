// specs/dashboard.spec.js
import { test } from '@playwright/test';
import { AssertionsandWaits } from '../pages/assertionsandwaits';

test.describe('Module 3: Assertions & Waits', () => {
  test('Login, waits, and assertions using POM', async ({ page }) => {
    const dashboardPage = new AssertionsandWaits(page);

    // Step 1: Go to site
    await dashboardPage.goto();

    // Step 2: Login (auto-wait works here)
    await dashboardPage.login('anshika@gmail.com', 'Iamking@000');

    // Step 3: Soft assert on URL change
    await dashboardPage.verifyNavigation();

    // Step 4: Explicit wait for products
    await dashboardPage.waitForProducts();

    // Step 5: Assertion suite (visible, text, count)
    await dashboardPage.verifyAssertions();
  });
});
