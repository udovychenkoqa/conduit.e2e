import { expect } from "@playwright/test";
import  { AbstractPage } from '../../abstracts/abstract.page';
import { Header } from "../../components/header.component";
import { Article } from "../../components/article.component";
import { Form } from "./form.component";
import { step } from "../../../helpers/step";

export class Settings extends AbstractPage {
    public pagePath = '/settings';
    
    public header = new Header(this.page);
    public article = new Article(this.page);
    public form = new Form(this.page);

    //Locators
    private title = this.page.locator("h1", { hasText: "Your Settings"})
    private logoutButton = this.page.locator("button", { hasText: "Or click here to logout."})

    //Actions
    @step()
    async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
        await expect(this.title, message).toBeVisible();
        await expect(this.logoutButton, message).toBeVisible();
    }

    @step()
    async clickLogoutButton(): Promise<void> {
        await expect(this.logoutButton).toBeVisible();
    }

}