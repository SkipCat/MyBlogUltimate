import { LOGOUT, CLEAR_REGISTER, CLEAR_LOGIN } from '../actions/user';
import {
  REGISTER_OK,
  REGISTER_ERROR,
  LOGIN_OK,
  LOGIN_ERROR,
  GET_PROFILE_OK,
  GET_PROFILE_ERROR,
  EDIT_PROFILE_OK,
  EDIT_PROFILE_ERROR
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
      localStorage.setItem('user', JSON.stringify({ token, username, _id }));
      return { ...state, user: action.payload.response };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload.error };
    case CLEAR_LOGIN:
      return { ...state, loginError: undefined };
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: undefined }
    case GET_PROFILE_OK:
      return { ...state, profile: action.payload.response };
    case GET_PROFILE_ERROR:
      return { ...state, profile: action.payload.response };
    case EDIT_PROFILE_OK:
      const oldUser = JSON.parse(localStorage.getItem('user'));
      const newUsername = action.payload.response.username

      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify({
        token: oldUser.token,
        username: newUsername,
        _id: oldUser._id })
      );

      return {
        ...state,
        user: { ...state.user, username: newUsername }
      };
    case EDIT_PROFILE_ERROR:
      return { ...state, editError: action.payload.error };
    default:
      return state;
  }
};
