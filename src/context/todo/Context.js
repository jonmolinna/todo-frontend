import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  todo: null,
  isLoading: false,
  error: null,
};

export const ContextTodo = createContext(INITIAL_STATE);

export const ContextProviderTodo = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <ContextTodo.Provider
      value={{
        todo: state.todo,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextTodo.Provider>
  );
};
