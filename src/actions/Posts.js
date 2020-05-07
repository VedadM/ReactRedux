class Posts {
  static ALL_POSTS = "ALL_POSTS";

  static GET_POSTS_ERROR = 'GET_POSTS_ERROR';

  static GET_USER_POSTS = 'GET_USER_POSTS';

  static GET_USER_POSTS_ERROR = 'GET_USER_POSTS_ERROR';

  static getAllPosts = () => async (
    dispatch,
    getState,
    axios,
  ) => {
    let res = {};

    try {
      res = await axios({
        method: 'get',
        url: '/posts'
      })
    } catch (e) {
      dispatch({
        type: Posts.GET_POSTS_ERROR,
      });
      return;
    }

    dispatch({
      type: Posts.ALL_POSTS,
      payload: res.data
    });
  };

  static getUserPosts = (id) => async (
    dispatch,
    getState,
    axios,
  ) => {
    let res = {};

    try {
      res = await axios({
        method: 'get',
        url: '/posts?userId=' + id
      })
    } catch (e) {
      dispatch({
        type: Posts.GET_USER_POSTS_ERROR,
      });
      return;
    }

    dispatch({
      type: Posts.GET_USER_POSTS,
      payload: res.data
    });
  }
}
  
export default Posts;