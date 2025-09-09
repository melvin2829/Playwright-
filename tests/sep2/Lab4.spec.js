import { test, expect } from '@playwright/test';

test('Lab 4: Navigate to multiple websites', async ({ page }) => {
  await page.goto('https://playwright.dev', { waitUntil: 'load', timeout: 60000 });
  console.log('Playwright title:', await page.title());

  await page.goto('https://www.wikipedia.org/');
  console.log('Wikipedia title:', await page.title());

  await page.goto('https://www.google.com');
  console.log('Google title:', await page.title());
});