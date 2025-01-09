import { expect } from "@playwright/test";
import { AbstractComponent } from "../../abstracts/abstract.component";
import { step } from "../../../helpers/step";

export class Banner extends AbstractComponent{
  private root = this.page.locator(".banner")
  private title = this.root.locator("[data-qa-id='article-title']");
  private metaData = this.root.locator(".article-meta");
  private linkEdit = this.metaData.locator("a[data-qa-id='article-edit']");
  private buttonDelete = this.metaData.locator("button[data-qa-id='article-delete']");

  @step()
  async expectLoaded(message = "Expected article list to be loaded"): Promise<void> {
    await expect(this.root, message).toBeVisible();
  }

  @step()
  async clickDeleteButton() {
    await this.expectLoaded();
    await this.buttonDelete.click();
  }

  @step()
  async clickEditLink() {
    await this.expectLoaded();
    await this.linkEdit.click();
  }


  //Assert

  @step()
  async expectArticleToHaveTitle( data: string ) {
    await this.expectLoaded();
    await expect(this.title).toHaveText(data);
  }
  
  @step()
  async expectBannerToBeHidden() {
    await expect(this.root).toBeHidden()
  }
}
