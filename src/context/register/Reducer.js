const Reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        user: false,
        isLoading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
      return {
        user: true,
        isLoading: false,
        error: null,
      };
    case "REGISTER_FAILURE":
      return {
        user: false,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
