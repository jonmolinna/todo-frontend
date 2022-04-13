import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Normalize
import { CssBaseline } from "@mui/material";

// Context
import { ContextProvider } from "./context/auth/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CssBaseline />
    <ContextProvider>
      <App />
    </ContextProvider>
  </>
);
