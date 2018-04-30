

export default (state = {}, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      return { A:action.playload };
    default:
      return state;
  }
};
