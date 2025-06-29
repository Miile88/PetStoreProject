import { test } from '@playwright/test';
import { UserPage } from '../pages/UserPage.js';
import { LogInPage } from '../pages/LogInPage.js';
import { generateUser } from '../utils/test_data.js';
const { expect } = require('@playwright/test');

const uservalue = process.env.user;
const passwordvalue = process.env.password;

test.describe('User Flow', () => {
    let testUser;

test.beforeAll(async () => {
   testUser = generateUser();
});

test('Create User', async ({ page }) => {
  const userPage = new UserPage(page);
  await userPage.create_User(testUser);
  await page.waitForTimeout(1000);
});

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LogInPage(page);
  await loginPage.login(uservalue, passwordvalue);
  const statusCode = await page.getByRole('cell', { name: '200' }).first().innerText();
  expect(statusCode).toBe('200');
  
});


test('Get User By Valid username', async ({ page }) => {
  const userPage = new UserPage(page);
  await userPage.get_User(uservalue);
  
});


test('Delete User By Valid Username', async ({ page }) => {
    const userPage = new UserPage(page);
    const user = testUser.username;
    await userPage.delete_User(user);
    
});

});






