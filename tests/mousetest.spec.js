import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/newtours/');
  await page.locator('input[name="userName"]').click();
  await page.locator('input[name="userName"]').fill('hhhhh');
  await page.locator('input[name="password"]').click({
    button: 'right'
  });
  await page.locator('input[name="password"]').click();
  await page.getByRole('link', { name: 'Bank Project' }).click();
  await page.getByRole('link', { name: 'Bank Project' }).click();
  await page.locator('input[name="uid"]').click({
    button: 'right'
  });
  await page.locator('input[name="uid"]').click();
  await page.locator('input[name="uid"]').press('ArrowDown');
  await page.locator('input[name="uid"]').press('ArrowDown');
  await page.locator('input[name="uid"]').press('ArrowDown');
  await page.mouse.move(200, 100);
  await page.mouse.move(100, 100);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(2000);
});