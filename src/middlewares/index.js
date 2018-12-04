import { applyMiddleware } from 'redux';

import userMiddleware from './user';

const customMiddlewares = {
  ...userMiddleware
};

export default applyMiddleware(store => next => action => {
  next(action);
  
  if (customMiddlewares[action.type]) {
    customMiddlewares[action.type](action.payload, next);
  }
});
