import { Page, Locator } from "playwright";
import { BasePage } from "./basePage";

export default class MainPage extends BasePage {
    page: Page;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loginButton = page.locator(`//button[contains(text(), 'Log In')]`);
    }
}