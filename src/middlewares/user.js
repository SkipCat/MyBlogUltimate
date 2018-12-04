import { postRequest } from '../utils/requests';

export const REGISTER_OK = 'REGISTER_OK';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export default {
  MDW_REGISTER: (payload, dispatch) => {
    postRequest('/register', payload).then(
      response => dispatch({
        type: REGISTER_OK,
        payload: response
      }),
      error => dispatch({
        type: REGISTER_ERROR,
        payload: error
      })
    );
  }
};
