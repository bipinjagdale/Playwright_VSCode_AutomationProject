
exports.LoginPage=
class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page - Playwright page fixture
     */
    constructor(page) {
        this.page = page;
        this.loginLink = "#login2";
        this.userNameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = "//button[normalize-space()='Log in']";                   
    }
    async gotoLoginPage() {
        await this.page.goto('https://demoblaze.com');   
    }

    async login(username, password) {
        await this.page.click(this.loginLink);
        await this.page.fill(this.userNameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);   
    }
        
}