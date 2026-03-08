
const {test,expect} = require('@playwright/test');

test('Home Page', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path:'tests/Screenshots/' + Date.now + 'homepage.png'});

    const pageTitle=page.title();
    await console.log("Page Title is: ",pageTitle);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await page.close();

})

