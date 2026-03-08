const {test, expect}=require('@playwright/test')
const { clear } = require('node:console')

test('Locators', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.click('id=login2')
    await page.fill('#loginusername','bipin11')
    await page.fill("input[id='loginpassword']",'Qwerty@13524')
    await page.click("//button[normalize-space()='Log in']")    
    const logoutlink= await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();
    await page.close()

})