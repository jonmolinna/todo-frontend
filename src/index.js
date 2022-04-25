import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Normalize
import { CssBaseline } from "@mui/material";

// Context
import { ContextProvider } from "./context/auth/Context";
import { ContextProviderRegister } from "./context/register/Context";
import { ContextProviderList } from "./context/lists/Context";
import { ContextProviderTodo } from "./context/todo/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CssBaseline />
    <ContextProvider>
      <ContextProviderRegister>
        <ContextProviderList>
          <ContextProviderTodo>
            <App />
          </ContextProviderTodo>
        </ContextProviderList>
      </ContextProviderRegister>
    </ContextProvider>
  </>
);
