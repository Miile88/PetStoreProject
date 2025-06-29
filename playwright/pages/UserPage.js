import { BasePage } from './BasePage.js';

class UserPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page; 
    this.usernameInput = page.getByPlaceholder('username');
    this.url = '/#/user';
    this.createUserUrl = '/createUser';
    this.getUserUrl = '/getUserByName';
    this.deleteUserUrl = '/deleteUser';
  }

  async create_User(userData){
    await this.navigateTo(this.url + this.createUserUrl);
    await this.clickTryItOut();
    await this.fillJsonTextarea(userData);
    await this.clickExecuteButton();
    console.log(userData);
  }

 
  async get_User(Username) {
    await this.navigateTo(this.url+this.getUserUrl);
    await this.clickTryItOut();
    await this.usernameInput.fill(String(Username));
    await this.clickExecuteButton();
  }

  async delete_User(Username){
    await this.navigateTo(this.url+this.deleteUserUrl);
    await this.clickTryItOut();
    console.log(Username);
    await this.usernameInput.fill(String(Username));
    await this.clickExecuteButton();
  }

}

export { UserPage };