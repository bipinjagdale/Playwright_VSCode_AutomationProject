const {test, expect} = require('@playwright/test');

test.beforeAll(async () => {
    console.log('Before all Hook...');
})

test.afterAll(async () => {
    console.log('After all Hook...');
}) 

test.beforeEach(async () => {
    console.log('Before each Hook...');
})

test.afterEach(async () => {
    console.log('After each Hook...');
})  

test.describe('Group1', () => {
    test('Test1', async ({page}) => {

    console.log('Test1 is running');
})

test('Test2', async ({page}) => {

    console.log('Test2 is running');
})
})


test.describe('Group2', () => { 
    test('Test3', async ({page}) => {

    console.log('Test3 is running');
})

test('Test4', async ({page}) => {

    console.log('Test4 is running');
})

})


