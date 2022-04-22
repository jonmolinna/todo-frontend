import React from "react";
import Layout from "../layouts/Layout";
import { Box, IconButton, Typography, Input } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import Task from "../components/Task";

const TaskPage = () => {
  return (
    <Layout>
      <Box component="div" sx={{ height: "100vh" }}>
        <Box
          sx={{
            height: "3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
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
            backgroundColor: "#dddddd",
            height: "6rem",
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
        <Box
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "calc(100vh - 6rem - 3rem)",
            paddingRight: "7px",
          }}
          className="scroll_body"
        >
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
    </Layout>
  );
};

export default TaskPage;
