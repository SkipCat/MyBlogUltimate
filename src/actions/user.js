export const LOGOUT = 'LOGOUT';
export const CLEAR_REGISTER = 'CLEAR_REGISTER';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';

export const registerUser = (payload) => ({
  type: 'MIDDLEWARE_REGISTER',
  payload
});

export const clearRegisterData = () => ({
  type: CLEAR_REGISTER
});

export const loginUser = (payload) => ({
  type: 'MIDDLEWARE_LOGIN',
  payload
});

export const logoutUser = () => ({
  type: LOGOUT
});

export const clearLoginData = () => ({
  type: CLEAR_LOGIN
});

export const getProfile = (payload) => ({
  type: 'MIDDLEWARE_GET_PROFILE',
  payload
});

export const editProfile = (payload) => ({
  type: 'MIDDLEWARE_EDIT_PROFILE',
  payload
});

export const getUsers = () => ({
  type: 'MIDDLEWARE_GET_USERS'
});

export const deleteUser = (payload) => ({
  type: 'MIDDLEWARE_DELETE_USER',
  payload
});
