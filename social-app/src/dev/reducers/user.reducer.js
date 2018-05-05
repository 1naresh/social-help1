

export default (state = {logged_in:false}, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      state.logged_in=true
      return state
    default:
      return state;
  }
};
