import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const Layout = ({ children }) => {
  let { idList } = useParams();

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            height: "100vh",
            backgroundColor: "#dddddd",
            display: { xs: `${idList ? "none" : "block"}`, sm: "block" },
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
            paddingX: "1rem",
            height: "100vh",
            display: { xs: `${idList ? "block" : "none"}`, sm: "block" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
