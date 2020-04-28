const initialState = {
  users: null,
  error: null,
};

function users(state = initialState, action) {
  switch (action.type) {
    case 'ALL_USERS':
      return {
        ...state,
        users:  { ...action.payload }
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default users;