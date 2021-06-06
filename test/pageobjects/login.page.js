const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
      return $("#j_username");
    }
    get inputPassword() {
      return $("#j_password");
    }
    get btnSubmit() {
      return $("#btnLogin");
    }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
      await (await this.inputUsername).setValue(username);
      await (await this.inputPassword).setValue(password);
      await (await this.btnSubmit).click();
    }
  }
  
  module.exports = new LoginPage();
