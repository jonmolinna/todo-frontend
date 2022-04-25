import React, { useContext } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

import axios from "../../util/axios";
import { ContextTodo } from "../../context/todo/Context";
import { ContextList } from "../../context/lists/Context";

const ModalDeleteTask = ({ isOpen, closeModal, idList, idTask }) => {
  const token = window.localStorage.getItem("token-todo");
  const { dispatch: dispatchTodo } = useContext(ContextTodo);
  const { dispatch: dispatchList } = useContext(ContextList);

  const handleDeleteTask = async (idTask) => {
    dispatchTodo({
      type: "DELETE_ONE_TODO_START",
    });

    try {
      let options = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          authorization: token ? `Bearer ${token}` : null,
        },
        data: JSON.stringify({
          idList,
          idTask,
        }),
      };

      await axios("/task/", options);
      dispatchTodo({
        type: "DELETE_ONE_TODO_SUCCESS",
        payload: idTask,
      });
      dispatchList({
        type: "DELETE_ONE_TASK_BY_LIST",
        payload: {
          idTask,
          idList: parseInt(idList),
        },
      });
    } catch (err) {
      dispatchTodo({
        type: "DELETE_ONE_TODO_FAILURE",
        payload: err.response.data.msg,
      });
    } finally {
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => closeModal()}>
      <DialogTitle>¿Estas seguro de eliminar la tarea?</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteTask(idTask)}
        >
          Si
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => closeModal()}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDeleteTask;
