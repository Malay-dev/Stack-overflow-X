const locationReducer = (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case "FETCH_LOCATION":
      return action.payload;
    default:
      return state;
  }
};
export default locationReducer;
