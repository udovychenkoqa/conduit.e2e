import { PageHolder } from "./abstracts/abstract";
import { API } from "../api/api";
import { Home } from "./pages/home/home.page";
import { SignIn } from "./pages/signin.page";
import { Profile } from "./pages/profile/profile.page"
import { Editor } from "./pages/editor/editor.page";
import { Article } from "./pages/article/article.page";
import { Settings } from "./pages/settings/settings.page"
import { step } from "../helpers/step";


export class Application extends PageHolder {
  readonly api = new API(this.page.request);
  readonly home = new Home(this.page)
  readonly signIn = new SignIn(this.page)
  readonly profile = new Profile(this.page)
  readonly editor = new Editor(this.page)
  readonly article = new Article(this.page)
  readonly settings = new Settings(this.page)

  @step()
  async saveStorageState(path: string){
      await this.page.context().storageState({ path });
  }

  async setTokenToLocalStorage(token: string) {
    await this.page.goto("/", { waitUntil: "commit" });
    await this.page.evaluate(
      (_token) => window.localStorage.setItem("id_token", _token),
      token
    );
  }
 
}