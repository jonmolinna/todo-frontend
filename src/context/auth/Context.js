import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import jwtDecode from "jwt-decode";

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
};

const token = localStorage.getItem("token-todo");

if (token) {
  const decodedToken = jwtDecode(token);
  const expiresAt = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token-todo");
  } else {
    INITIAL_STATE.user = decodedToken;
  }
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
