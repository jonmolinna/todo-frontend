import React from "react";
import { Box, Typography } from "@mui/material";

const SidebarRow = ({ Icon, title, tasks }) => {
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
      <Typography
        sx={{
          marginLeft: "1ch",
          maxWidth: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        variant="body2"
        component="p"
      >
        {title}
      </Typography>
      {tasks && tasks.length > 0 && (
        <Typography sx={{ marginLeft: "auto" }} variant="body2" component="p">
          {tasks.length}
        </Typography>
      )}
    </Box>
  );
};

export default SidebarRow;
