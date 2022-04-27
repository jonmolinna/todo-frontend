import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Input } from "@mui/material";

import axios from "../util/axios";
import { ContextTodo } from "../context/todo/Context";
import { ContextList } from "../context/lists/Context";
import SnackbarMessage from "./messages/SnackbarMessage";
import { useMessage } from "../hooks/useMessage";

const TaskAdd = ({ idList }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const token = window.localStorage.getItem("token-todo");
  const { dispatch: dispatchTodo } = useContext(ContextTodo);
  const { dispatch: dispatchList } = useContext(ContextList);
  const [isOpenMessage, openMessage, closeMessage] = useMessage(false);

  const handleSubmitTask = async (idList) => {
    const newDate = date.split("-").join(",");
    const isDateCorrect =
      new Date(newDate).toLocaleDateString() >= new Date().toLocaleDateString();

    if (!isDateCorrect) {
      openMessage();
      return null;
    }

    dispatchTodo({
      type: "ADD_ONE_TODO_START",
    });

    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          authorization: token ? `Bearer ${token}` : null,
        },
        data: JSON.stringify({
          task: title,
          date: newDate,
          idList: idList,
        }),
      };

      const res = await axios("/task", options);
      setTitle("");
      setDate("");

      dispatchTodo({
        type: "ADD_ONE_TODO_SUCCESS",
        payload: res.data.task,
      });
      dispatchList({
        type: "ADD_ONE_TASK_BY_LIST",
        payload: res.data.task,
      });
    } catch (err) {
      dispatchTodo({
        type: "ADD_ONE_TODO_FAILURE",
        payload: err.response.data,
      });
    }
  };

  return (
    <>
      <AddIcon />
      <Box sx={{ width: "100%" }}>
        <Input
          placeholder="Agregar una tarea"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button
            onClick={() => handleSubmitTask(idList)}
            disabled={!(title && date)}
          >
            Añadir
          </Button>
        </Box>
      </Box>
      <SnackbarMessage
        message="Ingrese una fecha valida"
        isOpenMessage={isOpenMessage}
        closeMessage={closeMessage}
        severity="error"
      />
    </>
  );
};

export default TaskAdd;
