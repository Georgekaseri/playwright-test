exports.HomePage = class HomePage {
  constructor(page, browser) {
    this.page = page;
    this.page.on("pageerror", error => {
      console.log(error.message);
    });
    this.page = page;
    this.title = page.getByLabel("Username");
    this.password_textbox = page.getByLabel("Password");
  }
  async gotoHomePage() {
    await this.page.goto("https://www.zenobe.com/");
  }
};
