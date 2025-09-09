import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Anand22');
  await page.locator('//*[@id="loginpassword"]').click();
  await page.locator('#loginpassword').fill('Anand@123');
  await page.getByRole('button',{name: 'Log in'}).click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});