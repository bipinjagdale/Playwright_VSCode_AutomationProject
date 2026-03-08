exports.CartPage = 
class CartPage {
    /**
     * @param {import('@playwright/test').Page} page - Playwright page fixture
     */
    constructor(page) {
        this.page = page;
        this.cartItems = "//tbody[@id='tbodyid']/tr/td[2]";
    }
    
    async verifyProductInCart(productName) {
        const products = await this.page.$$(this.cartItems);
        for (const product of products) {
            console.log(await product.textContent());
            if (productName === await product.textContent()) {
                return true;
                break; 
            }
        }
        return false;   
        
    }
}