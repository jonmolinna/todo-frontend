import React, { useContext, useEffect } from "react";
import Layout from "../layouts/Layout";
import { Box, Typography, Input, Button, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import TodoPage from "../components/TodoPage";

import { ContextTodo } from "../context/todo/Context.js";
import axios from "../util/axios";

const TaskPage = () => {
  const { idList } = useParams();
  const { dispatch, todo } = useContext(ContextTodo);
  const token = window.localStorage.getItem("token-todo");

  useEffect(() => {
    const getAllTodoByUserAndList = async (token, idList) => {
      if (!idList) return null;

      dispatch({
        type: "ADD_ALL_TODO_START",
      });

      try {
        let options = {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=utf-8",
            authorization: token ? `Bearer ${token}` : null,
          },
        };

        const res = await axios(`/list/${+idList}`, options);

        dispatch({
          type: "ADD_ALL_TODO_SUCCESS",
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: "ADD_ALL_TODO_FAILURE",
          payload: err.response.data,
        });
      }
    };

    getAllTodoByUserAndList(token, idList);
  }, [dispatch, token, idList]);

  return (
    <Layout>
      <Box component="div" sx={{ height: "100vh" }}>
        <Box
          sx={{
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "3rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            {todo && (
              <Typography
                variant="h6"
                component="h2"
                sx={{ marginRight: "1ch" }}
              >
                {todo?.nameList}
              </Typography>
            )}
          </Box>
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteOutlinedIcon />}
            size="small"
          >
            Eliminar
          </Button>
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
          {todo && todo?.tasks?.length > 0 ? (
            <TodoPage todos={todo.tasks} />
          ) : (
            <Typography
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", marginTop: "10px" }}
            >
              No tienes Tareas
            </Typography>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default TaskPage;
