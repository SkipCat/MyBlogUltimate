import { applyMiddleware } from 'redux';

import userMiddleware from './user';
import articleMiddleware from './article';

const customMiddlewares = {
  ...userMiddleware,
  ...articleMiddleware
};

export default applyMiddleware(store => next => action => {
  next(action);
  
  if (customMiddlewares[action.type]) {
    customMiddlewares[action.type](action.payload, next);
  }
});
