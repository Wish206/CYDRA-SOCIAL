const { expect } = require('@playwright/test');

class ActivationEmailPage {

    constructor(page) {
        this.page = page;
        this.goToSignIn = page.locator("//a[text()='Go to Sign In']");
    }

    async clickOnGoToSignInButton() {
        await expect(this.goToSignIn).toBeVisible();
        
        await this.goToSignIn.click();
    }
}

module.exports = ActivationEmailPage;