import React from "react";
import { Box, Typography } from "@mui/material";

const Error404 = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">404 | Not Found</Typography>
    </Box>
  );
};

export default Error404;
