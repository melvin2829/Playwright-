import { test, expect } from '@playwright/test';
test.setTimeout(90000);
test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('checkbox', { name: 'Web Testing' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('option', { name: 'Choose' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('option', { name: 'Well, now I know :-)' }).locator('span').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('hjbjjnjhnjnjn ');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().locator('.Pc9Gce').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('bjbjknjn jnkjnkjnkjn jkbkjnjknkjnkmn bhhjbjnbjn');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('button', { name: 'Submit' }).click();
});