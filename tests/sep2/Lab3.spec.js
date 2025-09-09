import { test, expect } from '@playwright/test';

test('Lab 3: Verify Google homepage URL', async ({ page }) => {
 await page.goto('https://www.google.com/ncr', { waitUntil: 'load', timeout: 60000 });
  await expect(page).toHaveURL(/google\.com/);
  console.log(' Success: Correct URL');
});