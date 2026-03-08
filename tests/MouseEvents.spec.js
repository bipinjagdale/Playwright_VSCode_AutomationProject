const {test, expect} = require('@playwright/test');

test('should trigger mouse events', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropbtn = await page.locator("//button[@class='dropbtn']")
    const nextiTam= await page.locator("//a[normalize-space()='Laptops']")
    
//*****Mouse Hover*******/    
    dropbtn.hover();
    nextiTam.hover();
    await page.waitForTimeout(5000);

//*****Mouse clicks*******/    

  
});