// const {expect} = require('@playwright/test')
class YopmailPage {

    constructor(page) {
        this.page = page;
        this.loginBox = page.locator('#login');
        this.checkInbox = page.locator('#refreshbut');
    }
    async openInbox(email) {
        await this.page.goto('https://yopmail.com');
        await this.loginBox.fill(email);
        await this.page.keyboard.press('Enter');
    }
    async openActivationMail() {
        await this.page.waitForTimeout(10000);
        await this.page.reload();
        const mailFrame = this.page.frameLocator('#ifinbox');
        await mailFrame
            .locator('text=Cydra Social')
            .first()
            .click();
    }
    async clickActivationLink() {
        const messageFrame = this.page.frameLocator('#ifmail');
        const [activationPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            messageFrame.locator('a:has-text("Verify Email Address")').click()
        ]);
        await activationPage.waitForLoadState();
        return activationPage;
    }
}

module.exports = YopmailPage;