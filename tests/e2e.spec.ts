import { test } from "../fixtures/index";
import { faker } from "@faker-js/faker";
import { deletionIds } from "../fixtures/index";

test("Check favorited article is displayed in the user profile", async ({ app}) => {
  //Actions
  await app.home.open();
  const slug = await app.home.article.getSlugFromResponseAfterClickArticleAt({ number: 1})
  let title = await app.home.article.getArticleTitleAt({ number: 1})
  await app.home.header.openProfile()
  await app.userInfo.tabs.clickFavoritedArticlesTab()
  deletionIds.push(slug)

  //Assert
  await app.userInfo.article.expectNewArticleToHaveTitle(title)
  await app.userInfo.article.expectArticleListToHaveCount({ number: 1 })
});

test("Check new article creation and its display in the global article list ", async ({ app }) => {
  let title: string = faker.word.words();

  //Actions
  await app.home.open();
  await app.home.header.openNewArticle()
  await app.editor.form.fillForm({
    titleInput: title,
    descriptionInput: faker.word.words(),
    bodyInput: faker.word.words({ count: { min: 5, max: 10 } }),
    tagsInput: faker.word.words()
  })
  const slug = await app.editor.form.getSlugFromResponseAfterClickButtonPublish()
  await app.editor.header.clickBrand()
  deletionIds.push(slug)

  //Assert
  await app.home.article.expectNewArticleToHaveTitle(title)
  await app.home.article.expectArticleListToHaveCount({ number: 3 })
});

test("Check new article creation and its display in the my article list", async ({ app }) => {
  let title: string = faker.word.words();

  //Actions
  await app.home.open();
  await app.home.header.openNewArticle()
  await app.editor.form.fillForm({
    titleInput: title,
    descriptionInput: faker.word.words(),
    bodyInput: faker.word.words({ count: { min: 5, max: 10 } }),
    tagsInput: faker.word.words()
  })
  const slug = await app.editor.form.getSlugFromResponseAfterClickButtonPublish()
  await app.home.header.openProfile()
  deletionIds.push(slug)

  //Assert
  await app.userInfo.article.expectNewArticleToHaveTitle(title)
  await app.userInfo.article.expectArticleListToHaveCount({ number: 1 })
});

test("Check article is deleted", async ({ app }) => {

  //Actions
  await app.home.open();
  await app.home.header.openNewArticle()
  await app.editor.form.fillForm({
    titleInput: faker.word.words(),
    descriptionInput: faker.word.words(),
    bodyInput: faker.word.words({ count: { min: 5, max: 10 } }),
    tagsInput: faker.word.words()
  })
  const slug = await app.editor.form.getSlugFromResponseAfterClickButtonPublish()
  await app.article.banner.clickDeleteButton()
  await app.article.open(`/articles/${slug}`)


  //Assert
  await app.article.banner.expectBannerToBeHidden()
});

