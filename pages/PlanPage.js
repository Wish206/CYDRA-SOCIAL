//Choose the plan that fits your growth
const {expect} = require('@playwright/test');

class PlanPage
{
    constructor(page)
    {
        this.page = page;
        this.clickOnSoloPlan = page.locator("(//button[text()='Start 7-Day Trial'])[1]");
        this.soloPlanText = page.locator("h1");
        this.extraAiCreditsCheckbox = page.locator("//input[@class='checkout-checkbox']");
        this.clickOnStratTrial = page.locator("//button[@type='submit']");
    }
    async soloPlan(){
        await this.clickOnSoloPlan.click();
        //expect pending
        await this.extraAiCreditsCheckbox.click();
        await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.clickOnStratTrial.click()
    ]);
        
    }
}
module.exports = PlanPage;