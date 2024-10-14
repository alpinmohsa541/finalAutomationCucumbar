class DashboardOutPage {
    // Selector untuk tombol profil
    get profileButton() {
        return $('//button[contains(@class, "chakra-menu__menu-button")]'); // Ganti dengan selector yang sesuai
    }

    // Selector untuk tombol logout
    get logoutButton() {
        return $('//*[@id="menu-list-14-menuitem-12"]'); // Ganti dengan selector yang sesuai
    }

    // Metode untuk melakukan logout
    async logout() {
        // Klik tombol profil terlebih dahulu
        await this.profileButton.click(); // Mengklik tombol profil

        // Tunggu sebentar agar menu muncul jika perlu
        await browser.pause(1500); // Tunggu sejenak (jika diperlukan)

        // Klik tombol logout
        await this.logoutButton.click(); // Klik tombol logout

        // Tunggu hingga URL berubah sesuai setelah logout
        await browser.waitUntil(async () => {
            return await browser.getUrl() === 'https://kasirdemo.vercel.app/login'; // Ganti dengan URL setelah logout
        }, { timeout: 15000, timeoutMsg: 'Logout failed or took too long' });
    }
}

module.exports = new DashboardOutPage();
