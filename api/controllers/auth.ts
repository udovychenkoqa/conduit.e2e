import { RequestHolder } from "../requestHolder.ts";
import type { UserCreateRequest } from "../models/userCreateRequest.ts";
import type { LoginRequest } from "../models/loginRequest.ts";

export class AuthController extends RequestHolder {
  async getAuthToken(data: LoginRequest) {
    const response = await this.request.post(
      "https://conduit-api.learnwebdriverio.com/api/users/login",
      {
        data,
      }
    );
    const jsonParse = await response.json();
    return jsonParse.user.token;
  }

  async createNewUser(data: UserCreateRequest) {
    const response = await this.request.post(
      "https://conduit-api.learnwebdriverio.com/api/users",
      {
        data,
      }
    );
    const jsonParse = await response.json();
    return jsonParse.user.token;
  }
  
}
