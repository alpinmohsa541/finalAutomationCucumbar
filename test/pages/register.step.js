const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("./page.js");
const RegisterPage = require ("./register.page.js");
const DashboardPage = require("./dashboard.page.js");


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
