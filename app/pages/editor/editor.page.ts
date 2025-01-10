import { expect } from "@playwright/test";
import  { AbstractPage} from '../../abstracts/abstract.page';
import { Header } from "../../components/header.component";
import { Form } from "./form.component";
import { Footer } from "../../components/footer.component"
import { step } from "../../../helpers/step";

export class Editor extends AbstractPage {
    public pagePath = '/';
    
    public header = new Header(this.page);
    public form  = new Form(this.page);
    public footer = new Footer(this.page)
    //Locators
    private nickname = this.page.locator("[data-qa-id='profile-username']")

    //Actions
    @step()
    async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
        await expect(this.nickname, message).toBeVisible();
    }

}