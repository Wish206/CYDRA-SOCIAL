class PaymentPage
{
constructor(page)
{
    this.page = page;
    this.cardNumber = page.locator('#cardNumber');
    this.cardExpiry = page.locator('#cardExpiry');
    this.cardCVC = page.locator('#cardCvc');
    this.cardHolderName = page.locator('#billingName');
    this.startTrialButton = page.locator('[class="SubmitButton-IconContainer"]');
}
async paymentDetails(cardHolderName)
{
    await this.cardNumber.fill(4242424242424242);
    await this.cardExpiry.fill(1250);
    await this.cardCVC.fill(123);
    await this.cardHolderName.fill(cardHolderName);
    await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        this.startTrialButton.click()
    ]);
    
}
}
module.exports = PaymentPage;