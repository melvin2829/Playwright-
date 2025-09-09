import { test, expect } from '@playwright/test';
 test.setTimeout(90000);
test('Advanced navigation patterns', async ({ page }) => {
  // Navigate to redirector page
  await page.goto('https://the-internet.herokuapp.com/redirector');
 
  // Click redirect and wait for specific URL (modern way)
  await Promise.all([
    page.waitForURL('https://the-internet.herokuapp.com/status_codes'),
    page.click('#redirect')
  ]);
 
  // Verify URL
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');
 
  // Go back
  await page.goBack();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/redirector');
 
  // Navigate to main page with wait
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForURL('https://the-internet.herokuapp.com/');
 
  // Reload with option
  await page.reload({ waitUntil: 'domcontentloaded' });
 
  // Final assertion
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
});