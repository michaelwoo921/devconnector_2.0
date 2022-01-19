import api from '../utils/api';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
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

    setAuthToken(res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const { errors } = error.response.data;

    errors.forEach((err) => {
      console.log(err.msg);
      dispatch(setAlert(err.msg, 'danger'));
    });

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    setAuthToken(res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const { errors } = error.response.data;

    errors.forEach((err) => {
      console.log(err.msg);
      dispatch(setAlert(err.msg, 'danger'));
    });

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
