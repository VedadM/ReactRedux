const initialState = {
  users: null,
  userIds: [],
  error: null,
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
        error: true,
      }
    default:
      return state;
  }
}

export default users;