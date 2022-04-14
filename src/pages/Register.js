import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "../util/axios";
import { ContextRegister } from "../context/register/Context";

const initialForm = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

const Register = () => {
  const [form, setForm] = useState(initialForm);
  let history = useHistory();
  const { dispatch, isLoading, error } = useContext(ContextRegister);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "REGISTER_START",
    });

    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        data: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          password: form.password,
        }),
      };

      await axios("/user", options);
      dispatch({
        type: "REGISTER_SUCCESS",
      });

      setForm(initialForm);
      history.push("/login");
    } catch (err) {
      dispatch({
        type: "REGISTER_FAILURE",
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
          <Typography variant="h5" component="h3">
            Crear cuenta
          </Typography>
          {isLoading && <CircularProgress />}

          <Box
            component="form"
            sx={{ marginTop: "1rem" }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="First Name"
              size="small"
              sx={{ width: "100%" }}
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              size="small"
              sx={{ marginTop: "1rem", width: "100%" }}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
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
              color="success"
              type="submit"
              sx={{ marginTop: "1rem", width: "100%" }}
              disabled={
                !(
                  form.firstName &&
                  form.lastName &&
                  form.password &&
                  form.username
                )
                  ? true
                  : false
              }
            >
              Crea tu Cuenta
            </Button>
          </Box>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ marginTop: "1rem" }}
          >
            ¿Tienes una cuenta?
          </Typography>
          <Button
            variant="outlined"
            type="submit"
            color="success"
            sx={{ marginTop: "1rem", width: "100%" }}
            onClick={() => history.push("/login")}
          >
            Inicia Sesión
          </Button>
        </Box>
        {error && (
          <Box
            component="div"
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingX: "2rem",
              marginBottom: "2rem",
              borderRadius: "20px",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            {error.map((error) =>
              Object.values(error).map((value) => (
                <Typography key={value} variant="body2" component="p">
                  {value}
                </Typography>
              ))
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Register;
