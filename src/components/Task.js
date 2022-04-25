import React, { useContext, useState } from "react";
import { Box, IconButton, Typography, Checkbox } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useParams } from "react-router-dom";
import ModalDeleteTask from "./modal/ModalDeleteTask";
import { useModal } from "../hooks/useModal";
import moment from "moment";
import "moment/locale/es";

import axios from "../util/axios";
import { ContextTodo } from "../context/todo/Context";
import { ContextList } from "../context/lists/Context";

const Task = ({ task }) => {
  const { idList } = useParams();
  const idTask = task?.id;
  const [isOpen, openModal, closeModal] = useModal(false);
  const [completedTask, setCompletedTask] = useState(task?.completed);
  const [importadTask, setImportadTask] = useState(task?.important);
  const token = window.localStorage.getItem("token-todo");
  const { dispatch: dispatchTodo } = useContext(ContextTodo);
  const { dispatch: dispatchList } = useContext(ContextList);

  const handleUpdatedTask = async () => {
    dispatchTodo({
      type: "UPDATED_ONE_TODO_START",
    });

    try {
      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          authorization: token ? `Bearer ${token}` : null,
        },
        data: JSON.stringify({
          important: importadTask,
          completed: completedTask,
          idTask: task?.id,
          idList: parseInt(idList),
        }),
      };

      const res = await axios("/task/", options);

      dispatchTodo({
        type: "UPDATED_ONE_TODO_SUCCESS",
        payload: res.data.task,
      });
      dispatchList({
        type: "UPDATED_ONE_TASK_BY_LIST",
        payload: {
          ...res.data.task,
          idList: parseInt(idList),
        },
      });
    } catch (err) {
      dispatchTodo({
        type: "UPDATED_ONE_TODO_FAILURE",
        payload: err.response.data.msg,
      });
    }
  };

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
            <Checkbox
              value={completedTask}
              onChange={(e) => setCompletedTask(e.target.checked)}
              checked={completedTask}
              size="small"
            />
            <Typography
              sx={{
                textDecoration: `${completedTask && "line-through"}`,
                color: `${completedTask && "#797775"}`,
              }}
            >
              {task?.task}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              value={importadTask}
              onChange={(e) => setImportadTask(e.target.checked)}
              checked={importadTask}
              size="small"
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon sx={{ color: "#ffc400" }} />}
            />
            <IconButton onClick={handleUpdatedTask}>
              <SaveIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => openModal()}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginLeft: "auto", fontSize: "10px" }}
        >
          {moment(task?.date).format("LLL")}
        </Typography>
      </Box>
      {/* Modal Delete */}
      <ModalDeleteTask
        isOpen={isOpen}
        closeModal={closeModal}
        idList={idList}
        idTask={idTask}
      />
    </Box>
  );
};

export default Task;
