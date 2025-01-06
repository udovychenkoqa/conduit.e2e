import { test as setup } from "../fixtures/index.js";
import { faker } from "@faker-js/faker";
import { getRandomEmail } from "../helpers/random.js";

const path = "./data/auth/authFile.json";
const email: string = getRandomEmail({ domain: "@domain.com", length: 15 });
process.env.USERNAME = faker.person.firstName();
const password: string = faker.internet.password();

setup.skip("Get authorization token", async ({ app }) => {
  //Action
  process.env.TOKEN = await app.api.auth.getAuthToken({
    user: {
      email: "test@test.com",
      password: "2075Qwerty!1",
    },
  });
});

// setup.describe.configure({ mode: "serial" });

setup.skip("Create account", async ({ app }) => {
  //Action
  process.env.TOKEN = await app.api.auth.createNewUser({
    user: {
      email: email,
      password: password,
      username: process.env.USERNAME
    },
  });
});

setup.skip("Login to site", async ({ app }) => {
  //Action
  await app.home.open();
  await app.home.header.openSignIn();
  await app.signIn.signIn({
    email: email,
    password: password
  });

  //Assert
  await app.signIn.header.expectNicknameIsLoaded();
  await app.saveStorageState(path);
});
