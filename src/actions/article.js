export const createArticle = (payload) => ({
  type: 'MIDDLEWARE_CREATE_ARTICLE',
  payload: payload
});

export const getArticles = () => ({
  type: 'MIDDLEWARE_GET_ARTICLES'
});
