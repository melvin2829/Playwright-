import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('twotabsearchtextbox', { name: 'Search Amazon.in' }).click();
});