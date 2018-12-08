export const createArticle = (payload) => ({
  type: 'MIDDLEWARE_CREATE_ARTICLE',
  payload: payload
});

export const getArticles = () => ({
  type: 'MIDDLEWARE_GET_ARTICLES'
});

export const getArticle = (payload) => ({
  type: 'MIDDLEWARE_GET_ARTICLE',
  payload
});

export const editArticle = (payload) => ({
  type: 'MIDDLEWARE_EDIT_ARTICLE',
  payload
});

export const deleteArticle = (payload) => ({
  type: 'MIDDLEWARE_DELETE_ARTICLE',
  payload
});
