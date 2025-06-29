import { test } from '@playwright/test';
import { OrderPage } from '../pages/OrderPage.js';
const { generateOrder } = require('../utils/test_data');

test.describe('Order Flow', () => {
  let order;

  test.beforeAll(() => {
    order = generateOrder();
});

  test('Place an order', async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.placeOrder(order);
    
});

  test('Delete an order', async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.deleteOrder(order.id);
    
  });
});