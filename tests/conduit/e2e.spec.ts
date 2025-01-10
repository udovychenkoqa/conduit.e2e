import { test } from "../../fixtures/index";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


test("Check favorited article is displayed in the user profile", async ({
  app,
}) => {
  //Actions
  await app.home.open();
  await app.home.article.addArticleToFavoriteAt({ number: 1 });
  let title = await app.home.article.getArticleTitleAt({ number: 1 });
  await app.home.header.openProfile();
  await app.profile.tabs.clickFavoritedArticlesTab();

  //Assert
  await app.profile.article.expectNewArticleToHaveTitle(title);
  await app.profile.article.expectArticleListToHaveCount({ number: 1 });
});

test("Check new article creation and its display in the global article list ", async ({
  app,
}) => {
  let title: string = faker.word.words();

  //Actions
  await app.home.open();
  await app.home.header.openNewArticle();
  await app.editor.form.fillForm({
    titleInput: title,
    descriptionInput: faker.word.words(),
    bodyInput: faker.word.words({ count: { min: 5, max: 10 } }),
    tagsInput: faker.word.words(),
  });
  await app.editor.form.clickPublishButton();
  await app.editor.header.clickBrand();

  //Assert
  await app.home.article.expectNewArticleToHaveTitle(title);;
});

test("Check new article creation and its display in the my article list", async ({
  app,
}) => {
  let title: string = faker.word.words();

  //Actions
  await app.home.open();
  await app.api.article.createArticle({
    article: {
      author: {},
      title: title,
      description: "",
      body: "",
      tagList: [],
    },
  });
  await app.home.header.openProfile();

  //Assert
  await app.profile.article.expectNewArticleToHaveTitle(title);
  await app.profile.article.expectArticleListToHaveCount({ number: 1 });
});

test("Check article is deleted", async ({ app }) => {
  let title: string = faker.word.words();
  //Actions
  await app.home.open();
  const slug = await app.api.article.createArticle({
    article: {
      author: {},
      title: title,
      description: "",
      body: "",
      tagList: [],
    },
  });
  await app.home.header.openProfile();
  await app.profile.article.clickArticleLinkAt({ number: 1});
  await app.article.banner.clickDeleteButton();
  const statusCode = await app.article.getResponseAfterOpen(`/articles/${slug}`);

  //Assert
  expect(statusCode).toEqual(404);
});
