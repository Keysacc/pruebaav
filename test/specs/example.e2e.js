const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");
const OrderPage = require("../pageobjects/order.page");
const NotePage = require("../pageobjects/note.page");

describe("Scenarios", () => {
  it("Second Test", async () => {
    browser.url("https://staging4.ovationtix.com/trs/mainMenu.html");
    browser.maximizeWindow();

    //Login
    await LoginPage.login("keyrinch@testdini.com", "Vtix1234!");

    //close popup
    DashboardPage.closePopup();

    //Got to search section
    DashboardPage.doSearch();

    //do search
    OrderPage.order("223952");
    //await browser.pause(5000);

    //Create a note
    NotePage.createANote();
    NotePage.getNote("Keyrin Notes Scenario#2");
    await browser.pause(2000);

  });

  it("First Test", async () => {
    browser.url("https://staging4.ovationtix.com/trs/mainMenu.html");
    browser.maximizeWindow();

    //Login
    await LoginPage.login("keyrinch@testdini.com", "Vtix1234!");

    //close popup
    DashboardPage.closePopup();

    //Got to search section
    DashboardPage.doSearch();

    //do search
    OrderPage.order("223942");
    await browser.pause(5000);

    //Refund

  });


});

