import { expect } from "@playwright/test";
import { AbstractComponent } from "../../abstracts/abstract.component";
import { step } from "../../../helpers/step";

export class Tabs extends AbstractComponent {
    private root = this.page.locator("[data-qa-id='feed-tabs']")
    private yourFeedTab = this.root.locator("[data-qa-id='feed-tab'] a", { hasText: "Your Feed" })
    private globalFeedTab = this.root.locator("[data-qa-id='feed-tab'] a", { hasText: "Global Feed" })


    @step()
    async expectLoaded(message = 'Expected feed tabs to be loaded'): Promise<void> {
        await expect(this.root, message).toBeVisible();
    }

    @step()
    async clickYourFeedTab() {
        await this.expectLoaded()
        await this.yourFeedTab.click();
    }

    @step()
    async  clickGlobalFeedTab() {
        await this.expectLoaded()
        await this.globalFeedTab.click()
    }
}