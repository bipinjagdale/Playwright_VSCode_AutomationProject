const {test, expect} = require('@playwright/test');

let page;

test.beforeAll(async ({browser}) => {
  page=await browser.newPage();
  await page.goto('https://demoblaze.com/') 
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavalol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('button:has-text("Log in")').click()
  console.log('Login successful')
})

test.afterAll(async () => {
  //Logout
  await page.locator('#logout2').click()
  console.log('Logout successful')
})



test('Home Page Test', async ({}) => {

  //HomePage
  const products=await page.$$('.hrefch')
  expect(products.length).toBe(9)
  console.log('Total products on homepage: ' + products.length)


})

test('Add to cart Test', async ({}) => {

  //Add to cart
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()

  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Product added.');
    console.log(dialog.message());
    await dialog.accept();
  })

  await page.waitForTimeout(2000)

})