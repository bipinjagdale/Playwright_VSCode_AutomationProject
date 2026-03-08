const {test, expect,chromium} = require('@playwright/test');

test('Context isolation test', async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    const allPages=context.pages();
    console.log("Number of pages: " + allPages.length); // Output: 2

    await page1.goto('https://google.com');
    await expect (page1).toHaveTitle(/Google/);
    await page2.goto('https://facebook.com');
    await expect (page2).toHaveTitle(/Facebook/);

    await browser.close();




    });