const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page.js");
const LoginPage = require("../pages/login.page.js");
const DashboardPage = require("../pages/dashboard.page.js");
const DashboardOutPage = require("../pages/dashboardOut.page.js");
const RegisterPage = require ("../pages/register.page.js");


Given(/^I open kasiraja website$/, async () => {
    await Page.open('/');
})

When(/^I Register with valid credentials$/, async ()=>{
    await RegisterPage.register('Toko Baru','alpinmohsaa@gmail.com', '1234567');
})

Then(/^I should be on the register page$/, async ()=>{
    await DashboardPage.assertRegisterPageUrl();
    // await DashboardOutPage.logout();
})

When(/^I Login with valid credentials$/, async ()=>{
    await LoginPage.login('alpinmohsa@gmail.com', '1234567');
})

Then(/^I should be on the dashboard page$/, async ()=>{
    await DashboardPage.assertDashboardPageUrl();
    await DashboardOutPage.logout();
})

When(/^I Login with invalid username$/, async ()=>{
    await LoginPage.login('asdasda@gmail.com', 'f1234567');
})

Then(/^I should see an error message$/, async ()=>{
    await LoginPage.assertErrorMessage("Kredensial yang Anda berikan salah");
    
})
When(/^I Login with invalid password$/, async ()=>{
    await LoginPage.login('alpinmohsa@gmail.com', 'fasdz123');

})


