const { expect } = require("allure-playwright");

exports.LoginPage=
class LoginPage
{
    constructor(page)
    {
      this.page=page;
      this.loginLink='#login2';
      this.usernameInput='#loginusername';
      this.passwordInput='#loginpassword';
      this.loginbutton="//button[normalize-space()='Log in']";
      this.logoutbutton="#logout2"
    }


    async gotoLoginPage()
    {
      await this.page.goto('https://www.demoblaze.com/');
    }

    async login(username,password)
    {
      await this.page.locator(this.loginLink).click();
      await this.page.locator(this.usernameInput).fill(username);
      await this.page.locator(this.passwordInput).fill(password);
      await this.page.locator(this.loginbutton).click();
    }

    async validation()
    {
      await expect(this.page.locator(this.logoutbutton)).toBeVisible();
    }

    async logout()
    {
      await this.page.locator(this.logoutbutton).click();
    }

}