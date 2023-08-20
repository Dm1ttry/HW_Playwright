import { Locator, Page } from "playwright-core";
import BasePage from "./base.page";

export default class Article extends BasePage {
    readonly Title: Locator;
    readonly MailingEmail: Locator;
    readonly Article: Locator;
    readonly Rules: Locator;
    readonly CommentRulesButton: Locator;
    readonly MailingEmailButton: Locator;
    readonly ErrorEmail: Locator;
    readonly OfficaleSiteArt: Locator;
    readonly OfficaleSiteTitl: Locator;


    constructor(page: Page) {
        super(page);
        this.Article = page.locator(
            '//div[@class="article-entry article-infeed-ref marker_allfeed nIref nIaft nIcat10 "]//h1[contains(text(),"Новая статья: Gord — суровый славянский быт. Рецензия ")]'
        );
        this.CommentRulesButton = page.locator(
            '//a[@href="javascript:openRules();"]'
        );
        this.OfficaleSiteTitl = page.locator('//head//title');
        this.Rules = page.locator('//span[@id="ui-id-3"]');
        this.Title = page.locator('//h1[@itemprop="headline"]');
        this.MailingEmailButton = page.locator(
            '//div[@class="sp-field sp-button-container "]//button'
        );
        this.ErrorEmail = page.locator('//div[@class="sp-tip sp-invalid"]');
        this.MailingEmail = page.locator(
            '//input[@placeholder="username@gmail.com"]'
        );
        this.OfficaleSiteArt = page.locator(
            '//a[@href="https://www.gord.game"]'
        );
    }
    async OpenArticle() {
        await this.Article.click();
    }

    async AddMailingEmail(email: string) {
        await this.MailingEmail.type(email);
        await this.MailingEmailButton.click();
    }

    async openOfficaleSiteArt() {
        await this.OfficaleSiteArt.click();
        // await this.page.close()
        // await this.page.goForward()
    }

    async OpenCommentRules() {
        await this.CommentRulesButton.click();
    }
}
