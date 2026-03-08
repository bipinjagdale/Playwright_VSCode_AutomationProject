const {test, expect} =require('@playwright/test')

test('builtin-inLocators', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(5000)
    // await page.waitForSelector('company-branding')
    // const logo=await page.getByAltText('company-branding')
    // await expect(logo).toBeVisible()

    await page.getByPlaceholder("Username").fill("Admin")
    
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole('button', {type:'submit'}).click()

    // await expect(await page.getByText('manda user')).toBeVisible()


})