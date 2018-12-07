import { postRequest, getRequest } from '../utils/requests';

export const CREATE_ARTICLE_OK = 'CREATE_ARTICLE_OK';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';
export const GET_ARTICLES_OK = 'GET_ARTICLES_OK';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const GET_ARTICLE_OK = 'GET_ARTICLE_OK';
export const GET_ARTICLE_ERROR = 'GET_ARTICLE_ERROR';

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
  },
  MIDDLEWARE_GET_ARTICLES: (_, dispatch) => {
    getRequest('/article/all').then(
      response => {
        if (response.error) {
          return dispatch({
            type: GET_ARTICLES_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: GET_ARTICLES_OK,
          payload: response
        });
      },
      error => dispatch({
        type: GET_ARTICLES_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: GET_ARTICLES_ERROR,
      payload: err
    }));
  },
  MIDDLEWARE_GET_ARTICLE: (payload, dispatch) => {
    getRequest(`/article/${payload}`).then(
      response => {
        if (response.error) {
          return dispatch({
            type: GET_ARTICLE_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: GET_ARTICLE_OK,
          payload: response
        });
      },
      error => dispatch({
        type: GET_ARTICLE_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: GET_ARTICLE_ERROR,
      payload: err
    }));
  }
};
