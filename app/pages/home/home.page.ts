import { expect } from "@playwright/test";
import  { AbstractPage } from '../../abstracts/abstract.page';
import { Header } from "../../components/header.component";
import { Article } from "../../components/article.component";
import { step } from "../../../helpers/step";

export class Home extends AbstractPage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public article = new Article(this.page);

    //Locators
    private logo = this.page.locator('.banner .logo-font')

    //Actions
    @step()
    async expectLoaded(message = 'Expected Home page to be opened') {
        await expect(this.logo, message).toBeVisible();
    }
}