import { expect } from "@playwright/test";
import { AbstractComponent } from "../../abstracts/abstract.component";
import { step } from "../../../helpers/step";

export class Tabs extends AbstractComponent {
    private root = this.page.locator("[data-qa-id='profile-tabs']")
    private tabMyArticles = this.page.locator("[data-qa-id='profile-tabs'] a", { hasText: "My Articles" })
    private tabFavoritedArticles = this.page.locator("[data-qa-id='profile-tabs'] a", { hasText: "Favorited Articles" })


    @step()
    async expectLoaded(message = 'Expected tabs to be loaded'): Promise<void> {
        await expect(this.root, message).toBeVisible();
    }

    @step()
    async clickMyArticlesTab() {
        await this.expectLoaded()
        await this.tabMyArticles .click();
    }

    @step()
    async  clickFavoritedArticlesTab() {
        await this.expectLoaded()
        await this.tabFavoritedArticles.click()
    }
}