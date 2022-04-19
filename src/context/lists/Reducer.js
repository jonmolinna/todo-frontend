const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST_START":
      return {
        list: null,
        isLoading: true,
        error: null,
      };
    case "ADD_LIST_SUCCESS":
      return {
        list: action.payload,
        isLoading: false,
        error: null,
      };
    case "ADD_LIST_FAILURE":
      return {
        list: null,
        isLoading: false,
        error: action.payload,
      };
    case "ADD_ONE_LIST_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_ONE_LIST_SUCCESS":
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false,
      };
    case "ADD_ONE_LIST_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
