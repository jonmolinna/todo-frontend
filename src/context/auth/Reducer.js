const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default Reducer;
