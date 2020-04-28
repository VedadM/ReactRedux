class Users {
  static ALL_USERS = "ALL_USERS";

  static GET_USERS_ERROR = 'GET_USERS_ERROR';

  static getAllUsers = () => async (
    dispatch,
    getState,
    axios,
  ) => {
    let res = {};

    try {
      res = await axios({
        method: 'get',
        url: '/users'
      })
    } catch (e) {
      dispatch({
        type: Users.GET_USERS_ERROR,
      });
      return;
    }

    dispatch({
      type: Users.ALL_USERS,
      payload: res.data
    });
  };
}

export default Users;