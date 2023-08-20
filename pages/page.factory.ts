import { Page } from "@playwright/test";
import MainPage from "./main";
import Article from "./article.page";
import PhonesPage from "./phones.page";

export default class PageFactory {
    static GetPage(page: Page, NamePage: string) {
        switch (NamePage) {
            case "phonePage":
                return new PhonesPage(page);
            case "mainPage":
                return new MainPage(page);
            case "articlePage":
                return new Article(page);
        }
    }
}
