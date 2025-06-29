import { BasePage } from './BasePage.js';

class OrderPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.orderPageUrl = '/#/store';
    this.placeOrderUrl ='/placeOrder';
    this.deleteOrderUrl = '/deleteOrder';
    this.orderIdInput = page.getByPlaceholder('orderId');

  }


  async Storepage() {
    await this.navigateTo(this.orderPageUrl)
  }

  async goToOrderpage(){
    await this.navigateTo(this.orderPageUrl + this.placeOrderUrl)
  }


  async placeOrder(orderData) {
    await this.navigateTo(this.orderPageUrl + this.placeOrderUrl);
    await this.clickTryItOut();
    await this.fillJsonTextarea(orderData);
    await this.clickExecuteButton();
  }

  async goToDeleteOrder(){
    await this.navigateTo(this.orderPageUrl + this.deleteOrderUrl)
  }
  

  
  async deleteOrder(orderid) {
    await this.navigateTo(this.orderPageUrl + this.deleteOrderUrl);
    await this.clickTryItOut();
    await this.orderIdInput.fill(orderid.toString());
    await this.ButtonClick('Execute');
  }

}

export { OrderPage };