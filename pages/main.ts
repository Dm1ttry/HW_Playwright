import { Locator, Page } from "playwright-core";
import BasePage from "./base.page";

export default class MainPage extends BasePage {
    readonly News: Locator;
    readonly DarkOrWhiteMode: Locator;
    readonly CryptocurrencyRate: Locator;

    constructor(page: Page) {
        super(page);
        this.News = page.locator('//a[@title="Новости"]');
        this.DarkOrWhiteMode = page.locator('//span[@class="toggle_darkmode"]');
        this.CryptocurrencyRate = page.locator(
            '//span[@id="toggle_currencyTicker"]'
        );
    }

    async OpenNews() {
        await this.openPage();
        await this.News.click();
    }

    async selectDarkOrWhiteMode() {
        await this.DarkOrWhiteMode.click();
    }
    async HideOrOpenCryptocurrencyRate() {
        await this.CryptocurrencyRate.click();
    }
}
