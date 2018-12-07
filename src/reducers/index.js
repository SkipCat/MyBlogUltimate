import { combineReducers } from 'redux';

import userReducer from './user';
import articleReducer from './article';
import commentReducer from './comment';

export default combineReducers({
  userReducer,
  articleReducer,
  commentReducer
});
