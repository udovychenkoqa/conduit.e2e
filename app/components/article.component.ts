import { expect } from "@playwright/test";
import { AbstractComponent } from "../abstracts/abstract.component";
import { step } from "../../helpers/step";

export class Article extends AbstractComponent {
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
  async clickArticleLinkAt({ number: number }) {
    await this.expectLoaded();
    await this.link.nth(number - 1).click();
  }
  @step()
  async getArticleTitleAt({ number: number }) {
    await this.expectLoaded();
    return await this.title.nth(number - 1).textContent() as string
  }

  @step()
  async addArticleToFavoriteAt({ number: number }) {
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
    await this.expectLoaded();
    await expect(this.article).toHaveCount(number);
  }
  @step()
  async expectNewArticleToHaveTitle( data: string ) {
    await this.expectLoaded();
    await expect(this.title.first()).toHaveText(data);
  }
}
