import { Locator, Page } from "playwright-core";
import BasePage from "./base.page";

export default class PhonesPage extends BasePage {
    readonly Phones: Locator;
    readonly TopPhone: Locator;
    readonly TitleArticle: Locator;

    constructor(page: Page) {
        super(page);
        this.Phones = page.locator('//a[@title="смартфоны"]');
        this.TitleArticle = page.locator('//h1[@itemprop="headline"]');
        this.TopPhone = page.locator(
            '//div[@class="header"]//a[@href="/1085138/top10-smartfonov-deshevle-10-tisyach-rubley-2023/page-1.html"]'
        );
    }

    async openPhones() {
        await this.Phones.click();
    }

    async openTopPhone() {
        await this.TopPhone.click();
    }
}
