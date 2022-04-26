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
    case "DELETE_ONE_TASK_BY_LIST":
      const { idList, idTask } = action.payload;
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === idList
            ? {
                ...item,
                tasks: item.tasks.filter((task) => task.id !== idTask),
              }
            : item
        ),
      };
    case "UPDATED_ONE_TASK_BY_LIST":
      const task = action.payload;
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === task.idList
            ? {
                ...item,
                tasks: item.tasks.map((tarea) =>
                  tarea.id === task.id
                    ? {
                        ...tarea,
                        completed: task.completed,
                        important: task.important,
                      }
                    : tarea
                ),
              }
            : item
        ),
      };
    case "RESET_LISTS":
      return {
        list: [],
        isLoading: false,
        error: null,
      };
    case "ADD_ONE_TASK_BY_LIST": {
      const { list: idList, ...task } = action.payload;
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === parseInt(idList)
            ? {
                ...item,
                tasks: [task, ...item.tasks],
              }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

export default Reducer;
