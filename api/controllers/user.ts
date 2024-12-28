import { RequestHolder } from "../requestHolder.ts";
import { request , expect } from "@playwright/test";


export class UserController extends RequestHolder {
  
  async deleteFavoriteArticle(id: string){
    const context = await request.newContext()
    await context.delete(
      `https://conduit-api.learnwebdriverio.com/api/articles/${id}/favorite`, { 
        headers: {
          Authorization: `Token ${process.env.TOKEN}` 
        }
    });
  }

  async deleteArticle(id: string){
    const context = await request.newContext()
    await context.delete(
      `https://conduit-api.learnwebdriverio.com/api/articles/${id}`, { 
        headers: {
          Authorization: `Token ${process.env.TOKEN}` 
        }
    });
  }
}