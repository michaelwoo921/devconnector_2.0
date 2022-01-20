import { GET_PROFILES, PROFILE_ERROR } from '../actions/types';

const initialState = {
  profiles: [],
  profile: null,
  loading: true,
  error: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default profile;
