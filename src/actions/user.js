export const LOGOUT = 'LOGOUT';
export const CLEAR_REGISTER = 'CLEAR_REGISTER';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';

export const registerUser = (payload) => ({
  type: 'MIDDLEWARE_REGISTER',
  payload: payload
});

export const clearRegisterData = () => ({
  type: CLEAR_REGISTER
});

export const loginUser = (payload) => ({
  type: 'MIDDLEWARE_LOGIN',
  payload: payload
});

export const logoutUser = () => ({
  type: LOGOUT
});

export const clearLoginData = () => ({
  type: CLEAR_LOGIN
});
