const { test, expect } = require('@playwright/test')


test('AssertionTest', async ({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()
    const searchstore=await page.locator('#small-searchterms')
    await expect(searchstore).toBeEnabled()
    const mailRadieoButton=await page.locator('#gender-male')
    await mailRadieoButton.click()
    await expect(mailRadieoButton).toBeChecked()
    const newLetterCheckbox=await page.locator('#NewsLetterSubscriptions_0__IsActive')    
    await expect(newLetterCheckbox).toBeChecked()
    const register=await page.locator('#register-button')
    await expect(register).toHaveAttribute('type','submit')
    const haveText=await page.locator('.page-title h1')
    expect(haveText).toHaveText('Register')
    const haveText1=await page.locator('.page-title h1')
    await expect(haveText1).toContainText('Reg')


    const emailInput=await page.locator('#Email')
    emailInput.fill('text@gmail.com')
    await expect(emailInput).toHaveValue('text@gmail.com')

})