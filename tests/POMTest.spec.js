const { test, expect } = require('@playwright/test');
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('login to demoblaze using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123');

    // verify login succeeded
    await page.waitForSelector('#nameofuser', { state: 'visible' });
    await expect(page.locator('#nameofuser')).toHaveText(/pavanol/);

    //Home Page
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Iphone 6 32gb');
    await homePage.gotoCart();

    //Cart Page
    const cartPage = new CartPage(page);
    await cartPage.verifyProductInCart('Iphone 6 32gb');
    expect(await satus).toBe(false);
    





})