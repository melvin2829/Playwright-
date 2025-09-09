import { test, expect } from '@playwright/test';
test.setTimeout(90000);
test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('#container > div > div.q8WwEU > div > div > div > div > div > div > div > div > div > div._2nl6Ch.k2FAh4 > div > div > header > div._3ZqtNW > div._3NorZ0._3jeYYh > form > div > div > input').fill('mobiles');
  await page.getByRole('textbox').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[4]/div/div/div/a/div[1]/div[1]/div/div/img').click();
  const page1 = await page1Promise;
});