import { test as base } from "@playwright/test";
import { Application } from "../app";

export let deletionIds: Array<string> = [];

export const test = base.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await page.context().setExtraHTTPHeaders({
      Authorization: `Token ${process.env.TOKEN}`,
    });
    await use(app);
    if (deletionIds.length > 0) {
      for (const slug of deletionIds) {
        await app.api.user.deleteFavoriteArticle(slug);
        await app.api.user.deleteArticle(slug);
      }
    }
  },
});
