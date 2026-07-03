# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup.spec.js >> Signup using Yopmail
- Location: tests\signup.spec.js:14:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | // const {expect} = require('@playwright/test')
  2  | class YopmailPage {
  3  | 
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.loginBox = page.locator('#login');
  7  |         this.checkInbox = page.locator('#refreshbut');
  8  |     }
  9  |     async openInbox(email) {
  10 |         await this.page.goto('https://yopmail.com');
  11 |         await this.loginBox.fill(email);
  12 |         await this.page.keyboard.press('Enter');
  13 |     }
  14 |     async openActivationMail() {
> 15 |         await this.page.waitForTimeout(10000);
     |                         ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  16 |         await this.page.reload();
  17 |         const mailFrame = this.page.frameLocator('#ifinbox');
  18 |         await mailFrame
  19 |             .locator('text=Cydra Social')
  20 |             .first()
  21 |             .click();
  22 |     }
  23 |     async clickActivationLink() {
  24 |         const messageFrame = this.page.frameLocator('#ifmail');
  25 |         const [activationPage] = await Promise.all([
  26 |             this.page.context().waitForEvent('page'),
  27 |             messageFrame.locator('a:has-text("Verify Email Address")').click()
  28 |         ]);
  29 |         await activationPage.waitForLoadState();
  30 |         return activationPage;
  31 |     }
  32 | }
  33 | 
  34 | module.exports = YopmailPage;
```