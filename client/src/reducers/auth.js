import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      localStorage.token = action.payload.token;
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.token = null;
      return {
        ...state,
        loading: false,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
