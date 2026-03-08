const {test, expect}=require('@playwright/test');

test("inputTextbox",  async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    await expect(page.getByPlaceholder("Username")).toBeEmpty();
    await expect(page.getByPlaceholder("Password")).toBeEmpty();
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();




})