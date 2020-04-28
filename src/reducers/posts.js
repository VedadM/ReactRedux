const initialState = {
  posts: null,
  error: null,
};

function posts(state = initialState, action) {
  switch (action.type) {
    case 'ALL_POSTS':
      return {
        ...state,
        posts:  { ...action.payload }
      };
    case 'GET_POSTS_ERROR':
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default posts;