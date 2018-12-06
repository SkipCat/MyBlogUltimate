import { LOGOUT, CLEAR_REGISTER, CLEAR_LOGIN } from '../actions/user';
import {
  REGISTER_OK,
  REGISTER_ERROR,
  LOGIN_OK,
  LOGIN_ERROR
} from '../middlewares/user';

const initialState = {
  user: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_OK:
      return { ...state, registerSuccess: action.payload.response };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload.error };
    case CLEAR_REGISTER:
      return {
        ...state,
        registerSuccess: undefined,
        registerError: undefined
      };
    case LOGIN_OK:
      const { token, username, _id } = action.payload.response;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('userId', _id);
      return { ...state, user: action.payload.response };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload.error };
    case CLEAR_LOGIN:
      return { ...state, loginError: undefined };
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: undefined }
    default:
      return state;
  }
};
