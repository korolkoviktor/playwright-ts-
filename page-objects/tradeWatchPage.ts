import { Locator, Page } from "playwright";
import { BasePage } from "./basePage";

export default class TradeWatchPage extends BasePage {
    page: Page;
    readonly ordersCount: Locator;
    readonly newOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.ordersCount = page.locator(`//div[text()='Positions']/child::div`);
        this.newOrderButton = page.locator(`//span[contains(text(), 'New Order')]/parent::button`);
    }

    async getOrdersCountForCheck(): Promise<string> {
        let position: string = await this.ordersCount.innerText();
        return String(Number(position) + 1);
    }
}