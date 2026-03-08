exports.HomePage=
class HomePage {
    /**
     * @param {import('@playwright/test').Page} page - Playwright page fixture
     */
    constructor(page) {
        this.page = page;
        this.productlist = "//*/div[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartbtn = "//a[normalize-space()='Add to cart']";
    }

    async addProductToCart(productName) {
        const products = await this.page.$$(this.productlist);
        for (const product of products) {
            const name = await product.textContent();
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async dialog => {
            if(dialog.message().includes('Product added.')) {
                await dialog.accept();
            }
   
        
        })
        await this.page.click(this.addToCartbtn);
    }

    async gotoCart() {
        await this.page.click('#cartur');
    }
}

                