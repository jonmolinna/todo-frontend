import React, { useContext } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useHistory } from "react-router-dom";

import axios from "../../util/axios";
import { ContextTodo } from "../../context/todo/Context";

const ModalDeleteList = ({ isOpen, closeModal, idList }) => {
  const token = window.localStorage.getItem("token-todo");
  const history = useHistory();
  const { dispatch: dispatchTodo } = useContext(ContextTodo);

  const handleDeleteList = async (idList) => {
    try {
      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          authorization: token ? `Bearer ${token}` : null,
        },
      };

      const res = await axios(`/list/${idList}`, options);
      dispatchTodo({
        type: "RESET_TODO",
      });
      history.push("/");
      console.log(res);
    } catch (err) {
      console.log(err.response);
    } finally {
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => closeModal()}>
      <DialogTitle>¿Estas seguro de eliminar la lista?</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteList(idList)}
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

export default ModalDeleteList;
