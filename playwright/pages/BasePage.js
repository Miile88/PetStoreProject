const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }


    async navigateTo(url){
        await this.page.goto(url);
    }


    async fillJsonTextarea(data) {
        const jsonData = JSON.stringify(data, null, 2);
        await this.page.locator('textarea').fill(jsonData);
    }

    async clickTryItOut() {
        await this.ButtonClick('Try it out'); 
    }

    async clickExecuteButton() {
        await this.ButtonClick('Execute'); 
    }

    async ButtonClick(text){
        // Added waitFor to ensure button is visible and enabled before clicking
        const button = this.page.locator('button', { hasText: text });
        await button.waitFor({ state: 'visible', timeout: 10000 });
        await button.click();
    }
    

}
export { BasePage };