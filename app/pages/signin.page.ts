import { expect } from "@playwright/test";
import { AbstractPage } from "../abstracts/abstract.page";
import { Header } from "../components/header.component";
import { step } from "../../helpers/step";

export class SignIn extends AbstractPage{
    public header = new Header(this.page);
    public pagePath = '/login'

    private signInButton = this.page.locator("form button", { hasText: "Sign in" })
    private emailInput = this.page.locator("form input[type='email']")
    private passwordInput = this.page.locator("form input[type='password']")

    @step()
    async expectLoaded() {
        await expect(this.signInButton).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
    }

    @step()
    async signIn(user: { email: string, password: string }) {
        await this.expectLoaded();
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password)
        await this.signInButton.click()
    }
}