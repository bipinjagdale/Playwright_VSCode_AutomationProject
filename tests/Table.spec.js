const {test, expect} =require('@playwright/test');

test('Tahandling table', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=await page.locator('#productTable')

//*******total rows and columns*******

    const columns=await table.locator('thead tr th')
    console.log('Total columns: ' + await columns.count());
    expect(await columns.count()).toBe(4);

    const rows=await table.locator('tbody tr')
    console.log('Total rows: ' + await rows.count());
    expect(await rows.count()).toBe(5);

    // await selectProduct(rows, page, 'Laptop');
    // await selectProduct(rows, page, 'Smartphone');
    // await selectProduct(rows, page, 'Tablet');

//*******select checkbox for forduct 4*******

    // const matchedRow=rows.filter({
    //     has: page.locator('td'), hasText: 'Smartwatch'
    // })
    // await matchedRow.locator('input').check();
    // await page.waitForTimeout(5000);

//*******Select multiple checkboxes by reusable function:*******

    async function selectProduct(rows, page, name)
    {
        const matchedRow=rows.filter({has: page.locator('td'), hasText: name})
        await matchedRow.locator('input').check();
        await page.waitForTimeout(5000);
    }

//*******print all product details using loop*******

    // for (let i=0;i<await rows.count();i++)
    // {   
    //     const row=rows.nth(i);
    //     const tds=row.locator('td')

    //     for(let j=0;j<await tds.count()-1;j++)
    //     {
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }


//*******read data from all the pages in the multiple tables*******

    const pages=await page.locator('.pagination li a')
    console.log('Total pages: ' + await pages.count());

    for (let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
            await page.waitForTimeout(2000);
        }

        for (let i=0;i<await rows.count();i++)
        {   
            const row=rows.nth(i);
            const tds=row.locator('td')

            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent());
            }
        }

    }



})