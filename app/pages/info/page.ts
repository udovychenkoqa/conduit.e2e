import { expect } from "@playwright/test";
import  { BasePage } from '../../base/basePage';
import { Header } from "../../components/header";
import { Article } from "../../components/article";
import { Tabs } from "./tabs";
import { step } from "../../../helpers/step";

export class UserInfo extends BasePage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public article = new Article(this.page);
    public tabs = new Tabs(this.page);

    //Locators
    private nickname = this.page.locator("[data-qa-id='profile-username']")

    //Actions
    @step()
    async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
        await expect(this.nickname, message).toBeVisible();
    }

}