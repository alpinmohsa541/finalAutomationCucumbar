class DashboardPage {
    get dashboardPageUrl() {
        return 'https://kasirdemo.vercel.app/dashboard';
    }

    async assertDashboardPageUrl() {
        await expect(browser).toHaveUrl(this.dashboardPageUrl); // Pastikan memanggil getter yang benar
    }
}

module.exports = new DashboardPage();

