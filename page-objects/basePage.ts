import { Page } from "playwright";

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async navigate(path: string) {
        await this.page.goto(path);
    }
}