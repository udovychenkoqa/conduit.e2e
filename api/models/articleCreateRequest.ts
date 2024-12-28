export interface articleCreateRequest {
    article: {
      author: {};
      body: string;
      description: string;
      tagList: [];
      title: string
    }
  }