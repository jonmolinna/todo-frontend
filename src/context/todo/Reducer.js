const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL_TODO_START":
      return {
        todo: null,
        isLoading: true,
        error: null,
      };
    case "ADD_ALL_TODO_SUCCESS":
      return {
        todo: action.payload,
        isLoading: false,
        error: null,
      };
    case "ADD_ALL_TODO_FAILURE":
      return {
        todo: null,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_ONE_TODO_START":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_ONE_TODO_SUCCESS":
      return {
        ...state,
        todo: {
          ...state.todo,
          tasks: state.todo.tasks.filter((task) => task.id !== action.payload),
        },
        isLoading: false,
      };
    case "DELETE_ONE_TODO_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATED_ONE_TODO_START":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATED_ONE_TODO_SUCCESS":
      const { id: idTask, important, completed } = action.payload;
      return {
        ...state,
        isLoading: false,
        todo: {
          ...state.todo,
          tasks: state.todo.tasks.map((item) =>
            item.id === idTask ? { ...item, important, completed } : item
          ),
        },
      };
    case "UPDATED_ONE_TODO_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "RESET_TODO":
      return {
        todo: null,
        isLoading: false,
        error: null,
      };
    case "ADD_ONE_TODO_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_ONE_TODO_SUCCESS":
      const task = action.payload;
      const { list, ...rest } = task;
      return {
        ...state,
        todo: {
          ...state.todo,
          tasks: [rest, ...state.todo.tasks],
        },
        isLoading: false,
      };
    case "ADD_ONE_TODO_FAILURE":
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
