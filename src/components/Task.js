import React from "react";
import { Box, IconButton, Typography, Checkbox } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const Task = () => {
  return (
    <Box sx={{ marginTop: "7px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "&:hover": {
            backgroundColor: "#dddddd",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Checkbox size="small" />
            <Typography>Ir al cine</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              size="small"
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon sx={{ color: "#ffc400" }} />}
            />
            <IconButton>
              <SaveIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginLeft: "auto", fontSize: "10px" }}
        >
          20-04-2022
        </Typography>
      </Box>
    </Box>
  );
};

export default Task;
