import React from "react";
import { Box } from "@mui/system";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <Box sx={{ backgroundColor: "#eeeeee" }} component="div">
      <Router>
        <AppRouter />
      </Router>
    </Box>
  );
}

export default App;
