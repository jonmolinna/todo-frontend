import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: false,
  isLoading: false,
  error: null,
};

export const ContextRegister = createContext(INITIAL_STATE);

export const ContextProviderRegister = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <ContextRegister.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextRegister.Provider>
  );
};
