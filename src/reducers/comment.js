import {
  CREATE_COMMENT_OK,
  CREATE_COMMENT_ERROR,
  DELETE_COMMENT_OK,
  DELETE_COMMENT_ERROR
} from '../middlewares/comment';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_OK:
      return { ...state, data: action.payload.response };
    case CREATE_COMMENT_ERROR:
      return { ...state, data: action.payload.error };
    case DELETE_COMMENT_OK:
      return { ...state, data: action.payload.response };
    case DELETE_COMMENT_ERROR:
      return { ...state, data: action.payload.error };
    default:
      return state;
  }
};
