const initialState = {
  posts: null,
  error: null,
  specificUserPosts: null,
  specificUserPostsError: false,
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
    case 'GET_USER_POSTS':
      return {
        ...state,
        specificUserPosts: { ...action.payload },
      }
    case 'GET_USER_POSTS_ERROR':
      return {
        ...state,
        specificUserPostsError: true,
      }
    default:
      return state;
  }
}

export default posts;