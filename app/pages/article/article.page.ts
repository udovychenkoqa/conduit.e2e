import { expect } from "@playwright/test";
import  { AbstractPage } from '../../abstracts/abstract.page';
import { Header } from "../../components/header.component";
import { Banner } from "./banner.component";
import { step } from "../../../helpers/step";

export class Article extends AbstractPage {
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
    @step()
    async getResponseAfterOpen(path?: string) {
        const responsePromise = this.page.waitForResponse(`https://conduit-api.learnwebdriverio.com/api${path}`);
        await this.open(path);
        const response = await responsePromise;
        return response.status()
    }
}