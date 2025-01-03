import { expect } from "@playwright/test";
import  { BasePage } from '../../base/basePage';
import { Header } from "../../components/header";
import { Banner } from "./banner";
import { step } from "../../../helpers/step";

export class Article extends BasePage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public banner = new Banner(this.page);
 
    //Locators
    private nickname = this.page.locator(".navbar-brand")

    //Actions
    @step()
    async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
        await expect(this.nickname, message).toBeVisible();
    }
}