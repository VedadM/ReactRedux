function rootReducer(state = [], action) {
    switch (action.type) {
      case 'INITIAL_DATA':
        return {...state};
      default:
        return state;
    }
  }

  export default rootReducer;
  