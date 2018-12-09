import { LOGOUT, CLEAR_REGISTER, CLEAR_LOGIN } from '../actions/user';
import {
  REGISTER_OK,
  REGISTER_ERROR,
  LOGIN_OK,
  LOGIN_ERROR,
  GET_PROFILE_OK,
  GET_PROFILE_ERROR,
  EDIT_PROFILE_OK,
  EDIT_PROFILE_ERROR,
  GET_USERS_OK,
  GET_USERS_ERROR,
  DELETE_USER_OK,
  DELETE_USER_ERROR
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
      const { token, username, _id, role } = action.payload.response;
      localStorage.setItem('user', JSON.stringify({ token, username, _id, role }));
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
      return { ...state, profile: action.payload.error };
    case EDIT_PROFILE_OK:
      const updatedUser = action.payload.response;
      const oldUser = JSON.parse(localStorage.getItem('user'));

      if (updatedUser._id === oldUser._id) {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify({
          token: oldUser.token,
          username: updatedUser.username,
          _id: oldUser._id
        }));

        return {
          ...state,
          user: { ...state.user, username: updatedUser.username },
          profile: {
            ...state.profile,
            username: updatedUser.username,
            role: updatedUser.role
          },
        };
      }

      return {
        ...state,
        profile: {
          ...state.profile,
          username: updatedUser.username,
          role: updatedUser.role
        }
      };
    case EDIT_PROFILE_ERROR:
      return { ...state, editError: action.payload.error };
    case GET_USERS_OK:
      return { ...state, users: action.payload.response };
    case GET_USERS_ERROR:
      return { ...state, data: action.payload.error };
    case DELETE_USER_OK:
      return { ...state, data: action.payload.response };
    case DELETE_USER_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
