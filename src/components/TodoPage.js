import React from "react";
import { Box, IconButton, Typography, Input } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";

const TodoPage = () => {
  return (
    <Box component="div">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ marginRight: "1ch" }}
        >
          Empresa
        </Typography>
        <IconButton>
          <DeleteOutlinedIcon sx={{ height: "20px", width: "20px" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          backgroundColor: "#dddddd",
          padding: "10px 1rem",
          display: "flex",
        }}
      >
        <AddIcon />
        <Box sx={{ width: "100%" }}>
          <Input placeholder="Agregar una tarea" fullWidth />
          <Input type="datetime-local" />
        </Box>
      </Box>
      <Box>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </Box>
    </Box>
  );
};

export default TodoPage;
