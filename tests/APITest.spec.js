const {test, expect} = require('@playwright/test');

test('API GET test', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('API POST test', async ({request}) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
})

test('API PUT test', async ({request}) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('API DELETE test', async ({request}) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.text());
    expect(response.status()).toBe(200);
})  