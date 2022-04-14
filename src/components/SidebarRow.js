import React from "react";
import { Box, Typography } from "@mui/material";

const SidebarRow = ({ Icon, title, cantTasks }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingY: "10px",
        paddingX: "1rem",
        "&:hover": {
          backgroundColor: "#eeeeee",
          cursor: "pointer",
        },
      }}
    >
      <Icon />
      <Typography sx={{ marginLeft: "1ch" }} variant="body2" component="p">
        {title}
      </Typography>
      <Typography sx={{ marginLeft: "auto" }} variant="body2" component="p">
        {cantTasks}
      </Typography>
    </Box>
  );
};

export default SidebarRow;
