import { postRequest, getRequest } from '../utils/requests';

export const REGISTER_OK = 'REGISTER_OK';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_OK = 'LOGIN_OK';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const GET_PROFILE_OK = 'GET_PROFILE_OK';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const EDIT_PROFILE_OK = 'EDIT_PROFILE_OK';
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR';

export default {
  MIDDLEWARE_REGISTER: (payload, dispatch) => {
    postRequest('/register', payload).then(
      response => {
        if (response.error) {
          return dispatch({
            type: REGISTER_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: REGISTER_OK,
          payload: { response }
        });
      },
      error => dispatch({
        type: REGISTER_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: LOGIN_ERROR,
      payload: err
    }));
  },
  MIDDLEWARE_LOGIN: (payload, dispatch) => {
    postRequest('/login', payload).then(
      response => {
        if (response.error) {
          return dispatch({
            type: LOGIN_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: LOGIN_OK,
          payload: { response }
        });
      },
      error => dispatch({
        type: LOGIN_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: LOGIN_ERROR,
      payload: err
    }));
  },
  MIDDLEWARE_GET_PROFILE: (payload, dispatch) => {
    getRequest(`/profile/${payload}`).then(
      response => {
        if (response.error) {
          return dispatch({
            type: GET_PROFILE_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: GET_PROFILE_OK,
          payload: response
        });
      },
      error => dispatch({
        type: GET_PROFILE_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: GET_PROFILE_ERROR,
      payload: err
    }));
  },
  MIDDLEWARE_EDIT_PROFILE: (payload, dispatch) => {
    postRequest('/profile/edit', payload).then(
      response => {
        if (response.error) {
          return dispatch({
            type: EDIT_PROFILE_ERROR,
            payload: response
          });
        }
        return dispatch({
          type: EDIT_PROFILE_OK,
          payload: response
        });
      },
      error => dispatch({
        type: EDIT_PROFILE_ERROR,
        payload: error
      })
    ).catch(err => dispatch({
      type: EDIT_PROFILE_ERROR,
      payload: err
    }));
  }
};
