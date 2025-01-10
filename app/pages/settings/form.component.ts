import { expect } from "@playwright/test";
import { AbstractComponent } from "../../abstracts/abstract.component";
import { step } from "../../../helpers/step";

export class Form extends AbstractComponent {

    //Locators
    private root = this.page.locator("form")
    private inputUrlPicture = this.root.locator('input[placeholder="URL of profile picture"]')
    private inputUsername = this.root.locator('input[placeholder="Your username"]')
    private inputAbout = this.root.locator('input[placeholder="Short bio about you"]')
    private inputEmail = this.root.locator('input[placeholder="Email"]')
    private inputPassword = this.root.locator('input[placeholder="Password"]')
    private updateButton = this.root.locator("button", {hasText: "Update Settings"})

  @step()
  async expectLoaded(message = 'Expected page to be loaded'): Promise<void> {
      await expect(this.inputPassword, message).toBeVisible();
      await expect(this.inputUsername, message).toBeVisible();
      await expect(this.inputEmail, message).toBeVisible();
      await expect(this.inputAbout, message).toBeVisible();
      await expect(this.inputUrlPicture, message).toBeVisible();
  }

  @step()
  async fillForm(data: {
    inputUrlPicture: string;
    inputUsername: string;
    inputAbout: string;
    inputEmail: string;
    inputPassword: string
  }) {
    await this.expectLoaded();
    await this.inputUrlPicture.fill(data.inputUrlPicture);
    await this.inputUsername.fill(data.inputUsername);
    await this.inputAbout.fill(data.inputAbout);
    await this.inputEmail.fill(data.inputEmail);
    await this.inputPassword.fill(data.inputPassword);
  }

  @step()
  async clickUpdateButton() {
    await this.updateButton.click();
  }
}
