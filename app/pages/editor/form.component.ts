import { expect } from "@playwright/test";
import { AbstractComponent } from "../../abstracts/abstract.component";
import { step } from "../../../helpers/step";

export class Form extends AbstractComponent {
  private root = this.page.locator("form ");
  private titleInput = this.root.locator("[data-qa-id='editor-title']");
  private descriptionInput = this.root.locator(
    "[data-qa-id='editor-description']"
  );
  private bodyInput = this.root.locator("[data-qa-id='editor-body'] [placeholder='Write your article (in markdown)']");
  private tagsInput = this.root.locator("[data-qa-id='editor-tags']");
  private buttonPublish = this.root.locator(
    "button[data-qa-id='editor-publish']"
  );

  @step()
  async expectLoaded(message = "Expected form to be loaded"): Promise<void> {
    await expect(this.root, message).toBeVisible();
  }

  @step()
  async fillForm(data: {
    titleInput: string;
    descriptionInput: string;
    bodyInput: string;
    tagsInput: string;
  }) {
    await this.expectLoaded();
    await this.titleInput.fill(data.titleInput);
    await this.descriptionInput.fill(data.descriptionInput);
    await this.bodyInput.fill(data.bodyInput);
    await this.tagsInput.fill(data.tagsInput);
  }

  @step()
  async getSlugFromResponseAfterClickButtonPublish() {
    await this.expectLoaded();
    const responsePromise = this.page.waitForResponse((response) =>
      response.url().includes("/api/articles")
    );
    await this.buttonPublish.click();
    const response = await responsePromise;
    const parseBody = await response.json();
    return parseBody.article.slug;
  }
}
