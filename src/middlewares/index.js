import { applyMiddleware } from 'redux';

import userMiddleware from './user';
import articleMiddleware from './article';
import commentMiddleware from './comment';

const customMiddlewares = {
  ...userMiddleware,
  ...articleMiddleware,
  ...commentMiddleware
};

export default applyMiddleware(store => next => action => {
  next(action);
  
  if (customMiddlewares[action.type]) {
    customMiddlewares[action.type](action.payload, next);
  }
});
