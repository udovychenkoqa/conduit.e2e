import { AuthController } from "./controllers/auth";
import { UserController } from "./controllers/user";
import { RequestHolder } from "./requestHolder";

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
  public readonly user = new UserController(this.request);
}