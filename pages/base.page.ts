import { expect } from "@playwright/test";
import { Page } from "playwright-core";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage() {
        await this.page.goto("https://3dnews.ru");
        await expect(this.page.url()).toContain("https://3dnews.ru");
    }
}
