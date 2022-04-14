import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TodoPage from "../components/TodoPage";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            paddingY: "1rem",
            minHeight: "100vh",
            backgroundColor: "#dddddd",
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          sx={{
            padding: "1rem",
            minHeight: "100vh",
          }}
        >
          <TodoPage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
