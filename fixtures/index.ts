import { test as base } from "@playwright/test";
import { Application } from "../app";
import { faker } from "@faker-js/faker";
import { getRandomEmail } from "../helpers/random.js";

const email: string = getRandomEmail({ domain: "@domain.com", length: 15 });
process.env.USERNAME = faker.person.firstName();
const password: string = faker.internet.password();
export let deletionIds: Array<string> = [];

export const test = base.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    process.env.TOKEN = await app.api.auth.createNewUser({
      user: {
        email: email,
        password: password,
        username: process.env.USERNAME
      },
    });
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
