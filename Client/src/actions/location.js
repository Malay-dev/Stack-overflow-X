const setLocation = (data) => {
  return {
    type: "FETCH_LOCATION",
    payload: data,
  };
};

export default setLocation;
