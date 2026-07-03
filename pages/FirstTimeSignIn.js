const { th } = require("@faker-js/faker");

class FirstTimeSingIn
{
constructor(page)
{
    this.page = page;
    this.workspaceName = page.locator("#workspace-name");
    this.industryNiche = page.locator('#industry-niche');
    this.dropdown1 = page.locator("//span[text()='Marketing & Advertising']");
    this.companySize = page.locator('#company-size');
    this.dropdown2 = page.locator("//span[text()='1-10 employees']");
    this.continueToNextStep = page.locator("//button[text()='Continue to Next Step']");

    this.individualBusinessDescription = page.locator('#workspace-description');
    this.targetAudience = page.locator('#workspace-audience');
    this.brandTone = page.locator('#workspace-brand-tone');
    this.dropdown3 = page.locator("//span[text()='Professional']");
    this.whatBringsYouToCydraSocial = page.locator('#workspace-goal');
    this.dropdown4 = page.locator("//span[text()='Grow my audience']");
    // this.continueToNextStep = page.locator('text=Continue to Next Step');    //same button name is present above
    // this.continueToNextStep = page.locator('button:has-text("Continue to Next Step")');

    this.workspaceLogo = page.locator('[class="workspace-upload-zone"]');
    this.continueToPlanSelection = page.locator('button:has-text("Continue to Plan Selection")');

}

async fillTheBasics(workspace)
{
    await this.workspaceName.fill(workspace);  
    await this.industryNiche.click();
    await this.dropdown1.click();
    await this.companySize.click();
    await this.dropdown2.click(); 
    await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.continueToNextStep.click()
    ]);
    
}
async fillTheDetails(description, targetaudience)
{
    await this.individualBusinessDescription.fill(description);
    await this.targetAudience.fill(targetaudience);
    await this.brandTone.click();
    await this.dropdown3.click();
    await this.whatBringsYouToCydraSocial.click();
    await this.dropdown4.click();
     await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.continueToNextStep.click()
    ]);
    
}
async fillTheBranding()
{
    //image upload PNG, JPEG, JPG, WebP
     await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.continueToPlanSelection.click()
    ]);
    
}
}
module.exports = FirstTimeSingIn;