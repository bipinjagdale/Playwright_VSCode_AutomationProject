const {test, expect} = require('@playwright/test');

//Only annotation
test('test1', async ({page})=> {
    console.log('Test1 is running');
})

//Skip Annotation
test.skip('test2', async ({page})=> {
    console.log('Test2 is running');    
})

//Conditional skip
test('test3', async ({page, browserName})=> {
    if(browserName === 'chromium')
    {
        test.skip();
    }
    console.log('Test3 is running');
})
