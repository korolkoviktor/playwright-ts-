import { Page, Locator } from "playwright";
import { BasePage } from "./basePage";

export default class LoginPage extends BasePage {
    readonly page: Page;
    readonly logInTab: Locator;
    readonly loginField: Locator;
    readonly passwordField: Locator;
    readonly logInSubmitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.logInTab = page.locator(`//div[@class='root_d root_e']/*/*[contains(text(), 'Log In')]`);
        this.loginField = page.locator(`//input[contains(@placeholder, 'email')]`);
        this.passwordField = page.locator(`//input[contains(@placeholder, 'password')]`);
        this.logInSubmitButton = page.locator(`//button[@type='submit']`);
    }

    async logIn(login: string, password: string) {
        await this.logInTab.click();
        await this.loginField.fill(login);
        await this.passwordField.fill(password);
        await this.logInSubmitButton.click();
    }
}