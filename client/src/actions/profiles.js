import { GET_PROFILES, PROFILE_ERROR } from './types';
import api from '../utils/api';

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await api.get('/profile');
    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
