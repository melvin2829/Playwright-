import { test, expect } from '@playwright/test';
test.setTimeout(90000);
test('Zepto biscuits test', async ({ page }) => {
  await page.goto('https://www.zeptonow.com/');

  // Open search bar
  const searchIcon = page.getByTestId('search-bar-icon');
  await searchIcon.waitFor(); // wait until visible
  await searchIcon.click();

  // Fill search box
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.waitFor(); 
  await searchBox.fill('biscuits');
  await searchBox.press('Enter');

  // Wait for results to load
  await page.waitForSelector('a:has-text("Sugar Free D\'Lite Yummy Berry")', { timeout: 15000 });

  // Click "Add" button for the product
  const productButton = page.locator('a:has-text("Sugar Free D\'Lite Yummy Berry") button');
  await productButton.click();

  // Go to cart
  const cartButton = page.getByRole('button', { name: 'Go to Cart' });
  await cartButton.waitFor();
  await cartButton.click();

  // Assertion just to confirm navigation worked
  await expect(page).toHaveURL(/cart/);
});
