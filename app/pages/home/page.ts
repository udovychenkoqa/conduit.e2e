import { expect } from "@playwright/test";
import  { BasePage } from '../../base/basePage';
import { Header } from "../../components/header";
import { Article } from "../../components/article";
import { step } from "../../../helpers/step";

export class Home extends BasePage {
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