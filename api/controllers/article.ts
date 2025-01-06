import { RequestHolder } from "../requestHolder.ts";
import type { ArticleCreateRequest } from "../models/ArticleCreateRequest.ts";


export class ArticleController extends RequestHolder {
  async createArticle(data: ArticleCreateRequest) {
    const response = await this.request.post(
      `https://conduit-api.learnwebdriverio.com/api/articles`,
      {
        data: data,
        headers: {
          Authorization: `Token ${process.env.TOKEN}`,
        },
      }
    );
    const jsonResponse = await response.json()
    return jsonResponse.article.slug
    
}
}
