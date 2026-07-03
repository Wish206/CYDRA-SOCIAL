class SignupPage {

    constructor(page) {
        this.page = page;
        this.fullName = page.locator('#signup-fullname');
        this.email = page.locator('#signup-email');
        this.password = page.locator('#signup-password');
        this.checkbox = page.locator('#signup-tos');
        this.signupBtn = page.locator('button:has-text("Sign Up")');
    }
    async signup(name, email, password) {
        await this.fullName.fill(name);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.checkbox.check();
        await this.signupBtn.click();
    }
}

module.exports = SignupPage;