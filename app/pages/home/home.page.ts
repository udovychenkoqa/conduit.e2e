import { expect } from "@playwright/test";
import  { AbstractPage } from '../../abstracts/abstract.page';
import { Header } from "../../components/header.component";
import { Article } from "../../components/article.component";
import { Footer } from "../../components/footer.component"
import { Tabs } from "../home/tabs.component"
import { step } from "../../../helpers/step";

export class Home extends AbstractPage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public article = new Article(this.page);
    public footer = new Footer(this.page)
    public tabs = new Tabs(this.page)


    //Locators
    private logo = this.page.locator('.banner .logo-font')

    //Actions
    @step()
    async expectLoaded(message = 'Expected Home page to be loaded') {
        await expect(this.logo, message).toBeVisible();
    }
}