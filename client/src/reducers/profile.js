import {
  GET_PROFILES,
  PROFILE_ERROR,
  GET_PROFILE,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  GET_REPOS,
  NO_REPOS,
} from '../actions/types';

const initialState = {
  profiles: [],
  profile: null,
  loading: true,
  error: {},
  repos: [],
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case CLEAR_PROFILE:
      return { ...state, profile: null, repos: [] };
    case PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case NO_REPOS:
      return { ...state, repos: [] };
    default:
      return state;
  }
};

export default profile;
