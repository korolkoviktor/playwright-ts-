import { test as originalTest } from '@playwright/test';
import MainPage from '../page-objects/mainPage';
import LoginPage from '../page-objects/loginPage';
import TradeWatchPage from '../page-objects/tradeWatchPage';
import MarketOrderPage from '../page-objects/marketOrderPage'

type CustomFixtures = {
    mainPage: MainPage
    loginPage: LoginPage;
    tradeWatchPage: TradeWatchPage;
    marketOrderPage: MarketOrderPage;
};

export const test = originalTest.extend<CustomFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    tradeWatchPage: async ({ page }, use) => {
        const tradeWatchPage = new TradeWatchPage(page);
        await use(tradeWatchPage);
    },
    marketOrderPage: async ({ page }, use) => {
        const marketOrderPage = new MarketOrderPage(page);
        await use(marketOrderPage);
    }
})