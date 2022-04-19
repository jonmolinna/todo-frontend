import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  error: null,
};

export const ContextList = createContext(INITIAL_STATE);

export const ContextProviderList = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <ContextList.Provider
      value={{
        list: state.list,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextList.Provider>
  );
};
