import { RequestHolder } from "../abstract.ts";
import type { ArticleCreateRequest } from "../models/articleCreateRequest.model.ts";

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
    const jsonResponse = await response.json();
    return jsonResponse.article.slug;
  }

  async getArticleDetails(slug: string) {
    const response = await this.request.get(
      `https://conduit-api.learnwebdriverio.com/api/articles/${slug}`,
      {
        headers: {
          Authorization: `Token ${process.env.TOKEN}`,
        },
      }
    );
    return response.status()
  }
}
