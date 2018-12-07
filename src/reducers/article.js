import {
  CREATE_ARTICLE_OK,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES_OK,
  GET_ARTICLES_ERROR
} from '../middlewares/article';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_OK:
      return { ...state, data: action.payload.response };
    case CREATE_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    case GET_ARTICLES_OK:
      return { ...state, articles: action.payload.response };
    case GET_ARTICLES_ERROR:
      return { ...state, articles: action.payload.error };
    default:
      return state;
  }
};
