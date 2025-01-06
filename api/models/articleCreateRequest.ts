export interface ArticleCreateRequest {
    article: {
      author?: {};
      body?: string;
      description?: string;
      tagList?: string[];
      title: string
    }
  }