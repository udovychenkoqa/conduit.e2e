import { expect } from "@playwright/test";
import { BaseComponent } from "../base/baseComponent";
import { step } from "../../helpers/step";

export class Article extends BaseComponent {
  private root = this.page.locator("[data-qa-type='article-list']")
  private article = this.root.locator("[data-qa-type='article-preview']");
  private title = this.article.locator("[data-qa-type='preview-title']");
  private description = this.article.locator("[data-qa-type='preview-description']");
  private link = this.article.locator("[data-qa-type='preview-link']");
  private tag = this.article.locator("[data-qa-type='article-list'] li")
  private articleButton = this.article.locator("button[data-qa-type='article-favorite']");

  @step()
  async expectLoaded(message = "Expected article list to be loaded"): Promise<void> {
    await expect(this.root, message).toBeVisible();
  }

  @step()
  async clickArticleAt({ number: number }) {
    await this.isLoaded();
    await this.articleButton.nth(number - 1).click();
  }
  @step()
  async getArticleTitleAt({ number: number }) {
    await this.isLoaded();
    return await this.title.nth(number - 1).textContent() as string
  }

  @step()
  async getSlugFromResponseAfterClickArticleAt({ number: number }) {
    const responsePromise = this.page.waitForResponse((response) =>
      response.url().includes("/favorite")
    );
    await this.articleButton.nth(number - 1).click();
    const response = await responsePromise;
    const parseBody = await response.json();
    return parseBody.article.slug;
  }

  //Assert
  @step()
  async expectArticleListToHaveCount({ number: number }) {
    await this.isLoaded();
    await expect(this.article).toHaveCount(number);
  }
  @step()
  async expectNewArticleToHaveTitle( data: string ) {
    await this.isLoaded();
    await expect(this.title.first()).toHaveText(data);
  }
}
