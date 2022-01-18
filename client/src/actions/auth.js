import api from '../utils/api';
import { setAlert } from './alert';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from './types';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/auth', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const { errors } = error.response.data;

    errors.forEach((err) => {
      console.log(err.msg);
      dispatch(setAlert(err.msg));
    });

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => ({ type: LOGOUT });
