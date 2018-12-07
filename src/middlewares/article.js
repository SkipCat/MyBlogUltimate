import { postRequest } from '../utils/requests';

export const CREATE_ARTICLE_OK = 'CREATE_ARTICLE_OK';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';

export default {
  MIDDLEWARE_CREATE_ARTICLE: (payload, dispatch) => {
    postRequest('/article/create', payload).then(
      response => {
        if (response.error) {
          return dispatch({
            type: CREATE_ARTICLE_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: CREATE_ARTICLE_OK,
          payload: response
        });
      },
      error => dispatch({
        type: CREATE_ARTICLE_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: err
    }));
  }
};
