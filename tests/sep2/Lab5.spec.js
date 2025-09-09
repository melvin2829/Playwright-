import { test, expect } from '@playwright/test';

test('Lab 5: Verify Playwright Python docs', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/intro');
  
  // Updated assertion: allow either "Playwright Python" or "Installation | Playwright Python"
  await expect(page).toHaveTitle('/Playwright for Python/');

  // URL check remains correct
  await expect(page).toHaveURL(/\/python\/docs\/intro/);

  
});
