class SignInPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator('#signin-email');
        this.password = page.locator('#signin-password');
        this.signIn = page.locator("//button[text()='Sign In']");
    }
    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signIn.click();
        // await this.page.locator('#workspace-name').waitFor({
        //     state: 'visible'
        // });
          await Promise.all([
        this.page.waitForURL('https://staging-cydrasocial.wishtree.tech/workspace'), // Update this pattern
        this.signIn.click()
    ]);
// await Promise.all([
//         // this.page.waitForNavigation({ waitUntil: 'networkidle' }),
//         this.page.waitForLoadState('domcontentloaded'),
//         this.signIn.click()
//     ]);

        return this.page;
    }
}

module.exports = SignInPage;