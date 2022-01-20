import { GET_POSTS, POST_ERROR } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log(action.payload);
      return { ...state, loading: false, posts: action.payload };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default post;
