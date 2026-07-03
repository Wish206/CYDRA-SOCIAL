const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboardHeading = page.locator('h1');
    }

    async verifyDashboard() {
        await expect(this.dashboardHeading).toContainText('Dashboard');
        await expect(this.page).toHaveURL(/dashboard/);
    }
}

module.exports = DashboardPage;