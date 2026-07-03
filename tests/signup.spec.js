require('dotenv').config();
const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage');
const SignInPage = require('../pages/SignInPage');
const YopmailPage = require('../pages/YopmailPage');
const { generateTestData } = require('../utils/generateTestData');
const ActivationEmailPage = require('../pages/ActivationEmailPage');
const DashboardPage = require('../pages/DashboardPage');
const FirstTimeSingIn = require('../pages/FirstTimeSignIn');
const PlanPage = require('../pages/PlanPage');
const PaymentPage = require('../pages/PaymentPage');
const WelcomeAboard = require('../pages/WelcomeAboard');

test('Signup using Yopmail', async ({ page }) => {
    const signup = new SignupPage(page);
    const yopmail = new YopmailPage(page);
    const testData = generateTestData();
    await page.goto(process.env.SIGNUP_URL);
    await signup.signup(
        testData.user.fullName,
        testData.user.email,
        testData.user.password
    );
    await yopmail.openInbox(testData.user.email);
    await yopmail.openActivationMail();
    const activationEmailPage = await yopmail.clickActivationLink();
    const activation = new ActivationEmailPage(activationEmailPage);
    await activation.clickOnGoToSignInButton();
    const signin = new SignInPage(activationEmailPage);
    await signin.login(
        testData.user.email,
        testData.user.password);
    const firstTimeSingIn = new FirstTimeSingIn(page);
    await firstTimeSingIn.fillTheBasics(
        testData.workspace.name
    );
    await firstTimeSingIn.fillTheDetails(
        testData.workspace.description,
        testData.workspace.targetaudience
    );
    await firstTimeSingIn.fillTheBranding();
    const planPage = new PlanPage(page);
    await planPage.soloPlan();
    const paymentPage = new PaymentPage(page);
    await paymentPage.paymentDetails(testData.user.fullName);
    const welcomeAboard = new WelcomeAboard(page);
    await welcomeAboard.welcomeAboard();
    const dashboard = new DashboardPage(activationEmailPage);
    await dashboard.verifyDashboard();
});