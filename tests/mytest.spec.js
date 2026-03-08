import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('bipin11');
  await page.locator('#loginpassword').fill('Qwerty@13524');
  await page.locator('#loginpassword').press('Enter');

  await page.getByRole('button', { name: 'Log in' }).click();
});