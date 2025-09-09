import { test, expect } from '@playwright/test';

test('Lab 6: Verify Internet Herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await expect(page).toHaveTitle('The Internet');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
});