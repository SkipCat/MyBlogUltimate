import { REGISTER_OK, REGISTER_ERROR } from '../middlewares/user';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_OK:
      return { ...state, isRegistered: true };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload.error };
    default:
      return state;
  }
};
