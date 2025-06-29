import{BasePage} from './BasePage';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });


class LogInPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = page.getByPlaceholder('username');
    this.password = page.getByPlaceholder('password');

  }


  async goToUserPage(){
    await this.navigateTo('/#/user/loginUser');
  }


  async inputUsername(username) {
    await this.username.fill(username);
  }

  async inputPassword(password) {
    await this.password.fill(password);
  }


  async login(username, password) {
    await this.navigateTo('/#/user/loginUser');
    await this.clickTryItOut();
    await this.inputUsername(String(username));
    await this.inputPassword(String(password));
    await this.clickExecuteButton();
  }

}
export { LogInPage };