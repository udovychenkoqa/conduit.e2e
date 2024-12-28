import { expect } from "@playwright/test";
import  { BasePage } from '../../base/basePage';
import { Header } from "../../components/header";
import { Form } from "./form";
import { step } from "../../../helpers/step";

export class Editor extends BasePage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public form  = new Form(this.page);

    //Locators
    private nickname = this.page.locator("[data-qa-id='profile-username']")

    //Actions
    @step()
    async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
        await expect(this.nickname, message).toBeVisible();
    }

}