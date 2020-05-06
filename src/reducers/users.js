const initialState = {
  users: null,
  userIds: [],
  errorUsers: false,
  selectedUser: null,
  errorUser: false,
};

function users(state = initialState, action) {
  switch (action.type) {
    case 'ALL_USERS':
      return {
        ...state,
        users:  { ...action.payload },
        userIds: [...action.payload.map(item => (item.id))]
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        errorUsers: true,
      }
    case 'GET_ONE_USER':
      return {
        ...state,
        selectedUser: { ...action.payload },
      }
    case 'GET_ONE_USER_ERROR':
      return {
        ...state,
        errorUser: true,
      }
    default:
      return state;
  }
}

export default users;