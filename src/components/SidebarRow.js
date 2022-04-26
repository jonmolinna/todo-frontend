import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarRow = ({ Icon, title, tasks, idList }) => {
  const numberTaskNoCompleted = tasks?.reduce((acc, task) => {
    if (task.completed === false) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <Link
      to={`/list/${idList}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
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
        {tasks && numberTaskNoCompleted > 0 && (
          <Typography sx={{ marginLeft: "auto" }} variant="body2" component="p">
            {numberTaskNoCompleted}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default SidebarRow;
