import { Locator, Page } from "playwright";
import { BasePage } from "./basePage";

export default class MarketOrderPage extends BasePage {
    page: Page;
    readonly placeOrderButton: Locator;
    readonly submitNewOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.placeOrderButton = page.locator(`//button[text()='Place Order']`);
        this.submitNewOrderButton = page.locator(`//div[text()='OK']`);
    }

    async createNewOrder() {
        await this.placeOrderButton.click();
        await this.submitNewOrderButton.click();
    }
}