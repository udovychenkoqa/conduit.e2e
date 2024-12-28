import { expect } from "@playwright/test";
import { BaseComponent } from "../base/baseComponent";
import { step } from "../../helpers/step";

export class Header extends BaseComponent {
    private root = this.page.locator("[data-qa-id='site-header']")
    private homeLink = this.root.locator("[data-qa-id='site-nav'] .nav-item", { hasText: "Home" })
    private signinLink = this.root.locator("[data-qa-id='site-nav'] .nav-item", { hasText: "Sign in" })
    private newArticleLink = this.root.locator("[data-qa-id='site-nav'] .nav-item", { hasText: "New Article" })
    private brandLink = this.root.locator(".navbar-brand")
    private nickname = this.page.locator("[data-qa-id='site-nav'] .nav-item", { hasText: process.env.USERNAME })

    @step()
    async expectLoaded(message = 'Expected Header to be loaded'): Promise<void> {
        await expect(this.homeLink, message).toBeVisible();
    }
    @step()
    async expectNicknameIsLoaded(message = 'Expected nickname to be loaded'): Promise<void> {
        await expect(this.nickname, message).toBeVisible();
    }

    @step()
    async openHome() {
        await this.homeLink.click();
    }

    @step()
    async clickBrand() {
        await this.brandLink.click();
    }

    @step()
    async openSignIn() {
        await this.signinLink.click()
    }
    @step()
    async openNewArticle() {
        await this.newArticleLink.click()
    }

    @step()
    async openProfile() {
        await this.nickname.click()
    }
}