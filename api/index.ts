import { AuthController } from "./controllers/auth.controller";
import { UserController } from "./controllers/user.controller";
import { ArticleController } from "./controllers/article.controller";
import { RequestHolder } from "./abstract";

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
  public readonly user = new UserController(this.request);
  public readonly article = new  ArticleController(this.request);
}