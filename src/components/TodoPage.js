import React from "react";
import { Box, Typography } from "@mui/material";
import Task from "./Task";
import { useParams } from "react-router-dom";

const TodoPage = ({ todos }) => {
  const isNoCompletedTask = todos?.filter((todo) => todo.completed === false);
  const isCompletedTask = todos?.filter((todo) => todo.completed === true);
  const { idList } = useParams();

  return (
    <>
      {idList ? (
        <>
          <Box>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ marginTop: "10px" }}
            >
              Tareas Pendientes
            </Typography>
            {isNoCompletedTask?.length > 0 &&
              isNoCompletedTask.map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle1" component="h2">
              Tareas Realizadas
            </Typography>
            {isCompletedTask?.length > 0 &&
              isCompletedTask.map((task) => <Task key={task.id} task={task} />)}
          </Box>
        </>
      ) : (
        <Box sx={{ textAlign: "center", marginTop: "15vh" }}>
          <Box
            sx={{
              heigth: "60px",
              width: "60px",
            }}
            component="img"
            src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1650900648/images/check_vw3szf.png"
          />
          <Typography variant="h5" component="h2">
            Bienvenido a To - Do Web
          </Typography>
        </Box>
      )}
    </>
  );
};

export default TodoPage;
