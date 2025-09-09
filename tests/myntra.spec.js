import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('tshirts mens');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Lounge Tshirts(1295)' }).locator('div').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DAMENSCH NEO-Cool Pure Cotton Regular Fit Pocket Print Tank T-shirt DAMENSCH' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'L', exact: true }).click();
  await page1.getByText('ADD TO BAG').click();
  await page1.getByText('Myntra Insider New Gift CardTrack OrdersContact UsMenTopwearT-ShirtsCasual').click();
});