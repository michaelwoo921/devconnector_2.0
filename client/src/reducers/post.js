import {
  GET_POSTS,
  POST_ERROR,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: false, posts: action.payload };
    case GET_POST:
      return { ...state, loading: false, post: action.payload };
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: action.payload },
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: action.payload },
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.id
            ? { ...post, likes: action.payload.likes }
            : post
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default post;
