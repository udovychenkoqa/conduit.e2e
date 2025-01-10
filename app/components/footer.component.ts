import { expect } from "@playwright/test";
import { AbstractComponent } from "../abstracts/abstract.component";
import { step } from "../../helpers/step";

export class Footer extends AbstractComponent {
    private root = this.page.locator('footer [data-qa-id="site-footer"]')


    @step()
    async expectLoaded(message = 'Expected Footer to be loaded'): Promise<void> {
        await expect(this.root, message).toBeVisible();
    }

}