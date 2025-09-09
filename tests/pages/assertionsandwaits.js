// pages/assertionsandwaits.js
import { expect } from '@playwright/test';

export class AssertionsandWaits {
  constructor(page) {
    this.page = page;
    // Locators
    this.emailInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.loginButton = page.locator('#login');
    this.productCards = page.locator('.card-body');
    this.welcomeMessage = page.getByText('Automation Practice')
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click(); // auto-wait for navigation
  }

  async verifyNavigation() {
    // Soft assertion for URL after login
    await expect.soft(this.page).toHaveURL(/dashboard/);
  }

  async waitForProducts() {
    // Explicit wait for product cards
    await this.page.waitForSelector('.card-body');
  }

  async verifyAssertions() {
    // 1. Product cards are visible
    await expect(this.productCards.first()).toBeVisible();

    // 2. Welcome message text
    await expect(this.welcomeMessage).toHaveText('Automation Practice');

    // 3. Product card count
    await expect(this.productCards).toHaveCount(8);

    //4. Verifying URL
    await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    //5. Verifying Title
    await expect(this.page).toHaveTitle("Let's Shop");


  }
}
