import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import testUser from '../testdata/testUser.json';
import { Constants } from '../helpers/constants';

test('check creation new order', async ({
  loginPage,
  mainPage,
  tradeWatchPage,
  marketOrderPage }) => {
  await mainPage.navigate(Constants.url.homepage);
  await mainPage.loginButton.click();
  await loginPage.logIn(testUser.validUser.login, testUser.validUser.password);
  let checkvalue: string = await tradeWatchPage.getOrdersCountForCheck();
  await tradeWatchPage.newOrderButton.click();
  await marketOrderPage.createNewOrder();
  await expect(tradeWatchPage.ordersCount).toContainText(checkvalue);
})
