class Users {
  static ALL_USERS = "ALL_USERS";

  static GET_USERS_ERROR = 'GET_USERS_ERROR';

  static GET_ONE_USER = 'GET_ONE_USER';

  static GET_ONE_USER_ERROR = 'GET_ONE_USER_ERROR';

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

  static getOneUser = (id) => async (
    dispatch,
    getState,
    axios,
  ) => {
    let res = {};

    try {
      res = await axios({
        method: 'get',
        url: '/users/' + id
      })
    } catch (e) {
      dispatch({
        type: Users.GET_ONE_USER_ERROR,
      });
      return;
    }

    dispatch({
      type: Users.GET_ONE_USER,
      payload: res.data
    });
  }
}

export default Users;