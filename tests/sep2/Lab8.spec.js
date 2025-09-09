import { test, expect } from '@playwright/test';

test('Lab 8: Verify GitHub homepage', async ({ page }) => {
  await page.goto('https://github.com/');
  console.log('GitHub Title:', await page.title());
  console.log('GitHub URL:', page.url());
  await expect(page).toHaveTitle("GitHub: Let’s build from here · GitHub");
});