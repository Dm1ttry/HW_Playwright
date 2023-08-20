import { test, expect } from "@playwright/test";
import MainPage from "../pages/main";
import Article from "../pages/article.page";
import PageFactory from "../pages/page.factory";
import PhonesPage from "../pages/phones.page";

test.describe("Test 3dnews.ru", async () => {
    let main: MainPage;
    let article: Article;
    let phone: PhonesPage;

    test.beforeEach(async ({ page }) => {
        main = PageFactory.GetPage(page, "mainPage") as MainPage;
        article = PageFactory.GetPage(page, "articlePage") as Article;
        phone = PageFactory.GetPage(page, "phonePage") as PhonesPage;
    });
 

    test("Test1 open article and subscribe news error", async () => {
        await main.OpenNews();
        await article.OpenArticle();
        await article.AddMailingEmail("user123@gmail");
        expect(article.ErrorEmail).toBeVisible();
    });

    test("Test2  open main page ,switch dark mode and open currency rate ", async () => {
        await main.openPage();
        await main.selectDarkOrWhiteMode();
        await expect(main.DarkOrWhiteMode).toHaveText("Включить светлый режим");
        await main.HideOrOpenCryptocurrencyRate();
        await expect(main.CryptocurrencyRate).toHaveText(
            "Скрыть курсы криптовалют"
        );
    });

    test("Test3 open Top Phone ", async () => {
        await main.openPage();
        await phone.openPhones();
        await phone.openTopPhone();
        await expect(phone.TitleArticle).toContainText(
            "Топ-10 смартфонов дешевле 10 тысяч "
        );
    });
    test("Test4 open article and check comment rules", async () => {
        await main.OpenNews();
        await article.OpenArticle();
        await article.OpenCommentRules();
        expect(article.Rules).toBeVisible();
    });
       test("Test5 open article and  open officale site", async ({ page }) => {
        await main.OpenNews();
        await article.OpenArticle();
        await article.openOfficaleSiteArt();
        const pagePromise = page.waitForEvent('popup');
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        expect( await newPage.title()).toBe('Gord - Lead the Tribe of Dawn');
    });
});
