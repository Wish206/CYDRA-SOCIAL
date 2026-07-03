const {expect} = require('@playwright/test');

class WelcomeAboard
{
constructor(page)
{
    this.page = page;
    this.welcomeAboardText = page.locator('');
    this.gotoYourDashboard = page.locator('');
}
async welcomeAboard()
{
    //expect pending

      await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.gotoYourDashboard.click()
    ]);
    
}
}
module.exports = WelcomeAboard;