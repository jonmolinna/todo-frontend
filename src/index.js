import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Normalize
import { CssBaseline } from "@mui/material";

// Context
import { ContextProvider } from "./context/auth/Context";
import { ContextProviderRegister } from "./context/register/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CssBaseline />
    <ContextProvider>
      <ContextProviderRegister>
        <App />
      </ContextProviderRegister>
    </ContextProvider>
  </>
);
