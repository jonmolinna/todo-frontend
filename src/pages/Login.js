import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import axios from "../util/axios";
import { Context } from "../context/auth/Context";

const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  let history = useHistory();
  const { dispatch, isLoading, error } = useContext(Context);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });

    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        data: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      };

      const res = await axios("/auth", options);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      setForm(initialForm);
      history.push("/");
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data,
      });
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component="div"
          elevation={12}
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "20px",
            width: "90%",
            maxWidth: "400px",
          }}
        >
          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              Invalid credentials
            </Alert>
          )}
          <Typography variant="h5" component="h3">
            Iniciar sesión
          </Typography>
          {isLoading && <CircularProgress />}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              size="small"
              sx={{ marginTop: "1rem", width: "100%" }}
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              size="small"
              type="password"
              sx={{ marginTop: "1rem", width: "100%" }}
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              type="submit"
              color="success"
              sx={{ marginTop: "1rem", width: "100%" }}
              disabled={!(form.username && form.password) ? true : false}
            >
              Iniciar Sesión
            </Button>
          </Box>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ marginTop: "1rem" }}
          >
            ¿Aún no tienes una cuenta?
          </Typography>
          <Button
            variant="outlined"
            type="submit"
            color="success"
            sx={{ marginTop: "1rem", width: "100%" }}
            onClick={() => history.push("/register")}
          >
            Crea tu Cuenta
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
