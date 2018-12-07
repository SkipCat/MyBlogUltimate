import { postRequest, deleteRequest } from '../utils/requests';

export const CREATE_COMMENT_OK = 'CREATE_COMMENT_OK';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';
export const DELETE_COMMENT_OK = 'DELETE_COMMENT_OK';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

export default {
  MIDDLEWARE_CREATE_COMMENT: (payload, dispatch) => {
    postRequest('/comment/create', payload).then(
      response => {
        if (response.error) {
          return dispatch({
            type: CREATE_COMMENT_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: CREATE_COMMENT_OK,
          payload: response
        });
      },
      error => dispatch({
        type: CREATE_COMMENT_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: CREATE_COMMENT_ERROR,
      payload: err
    }));
  },
  MIDDLEWARE_DELETE_COMMENT: (payload, dispatch) => {
    deleteRequest(`/comment/delete/${payload}`).then(
      response => {
        if (response.error) {
          return dispatch({
            type: DELETE_COMMENT_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: DELETE_COMMENT_OK,
          payload: response
        });
      },
      error => dispatch({
        type: DELETE_COMMENT_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: DELETE_COMMENT_ERROR,
      payload: err
    }));
  }
};
