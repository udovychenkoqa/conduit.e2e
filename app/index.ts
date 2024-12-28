import { PageHolder } from "./base/pageHolder";
import { API } from "../api/api";
import { Home } from "./pages/home/page";
import { SignIn } from "./pages/signin";
import { UserInfo } from "./pages/info/page"
import { Editor } from "./pages/editor/page";
import { Article } from "../app/pages/article/page";
import { step } from "../helpers/step";


export class Application extends PageHolder {
  public api = new API(this.page.request);
  public home = new Home(this.page)
  public signIn = new SignIn(this.page)
  public userInfo = new UserInfo(this.page)
  public editor = new Editor(this.page)
  public article = new Article(this.page)

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