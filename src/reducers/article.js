import {
  CREATE_ARTICLE_OK,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES_OK,
  GET_ARTICLES_ERROR,
  GET_ARTICLE_OK,
  GET_ARTICLE_ERROR,
  EDIT_ARTICLE_OK,
  EDIT_ARTICLE_ERROR,
  DELETE_ARTICLE_OK,
  DELETE_ARTICLE_ERROR
} from '../middlewares/article';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_OK:
      return { ...state, data: action.payload.response };
    case CREATE_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    case GET_ARTICLES_OK:
    console.log(action.payload.response)
      return { ...state, articles: action.payload.response };
    case GET_ARTICLES_ERROR:
      return { ...state, data: action.payload.error };
    case GET_ARTICLE_OK:
      return { ...state, article: action.payload.response };
    case GET_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    case EDIT_ARTICLE_OK:
      const { response } = action.payload.response
      return {
        ...state,
        data: response.message,
        article: response.article
      };
    case EDIT_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    case DELETE_ARTICLE_OK:
      return { ...state, data: action.payload.response };
    case DELETE_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    default:
      return state;
  }
};
