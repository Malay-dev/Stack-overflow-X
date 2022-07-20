const currentUserReducer = (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;
