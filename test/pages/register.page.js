class RegisterPage {
    //TODO 1: define 'web element locator' here
    get RegisterPageUrl() {
      return '/register';
    }

    get registerPage(){
      return $('/html/body/div/div/div/div/div[2]/div/div[3]/a');
    }
  
    get NameInput() {
        return $('//*[@id="name"]'); //locator field: email
      }

    get emailInput() {
      return $('#email'); //locator field: email
    }
  
    get passwordInput() {
      return $('#password'); //locator field: password
    }
  
    get RegisterButton() {
      return $(
        '/html/body/div[1]/div/div/div/div[2]/div/button'
      ); //locator field: Register Button
    }
  
    get errorMsg() {
      return $('//*[@role="alert"]');
    }
  
    //TODO 2: define 'element actions' here
    async register(name,email, password) {
      await this.NameInput.setValue(name);
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.RegisterButton.click();
    }
  
    async assertRegisterPageUrl() {
      await expect(browser).toHaveUrl(this.RegisterPageUrl);
    }
  
    async assertErrorMessage(expectedErrorMessage) {
      const actualErrorMessage = await this.errorMsg.getText(); // Ambil teks dari elemen
      expect(actualErrorMessage).toContain(expectedErrorMessage); // Gunakan .toContain untuk memeriksa isi teks
  }
  
    async getErrorMessageText() {
      return await this.errorMsg.getText();
    }

    async getPageRegister(){
      await this.registerPage.click();
    }
  }
  
  module.exports = new RegisterPage();