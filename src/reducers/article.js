import {
  CREATE_ARTICLE_OK,
  CREATE_ARTICLE_ERROR
} from '../middlewares/article';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_OK:
      return { ...state, data: action.payload.response };
    case CREATE_ARTICLE_ERROR:
      return { ...state, data: action.payload.error };
    default:
      return state;
  }
};
