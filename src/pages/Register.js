import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

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
          <Box component="form" sx={{ marginTop: "1rem" }}>
            <TextField label="First Name" size="small" sx={{ width: "100%" }} />
            <TextField
              label="Last Name"
              size="small"
              sx={{ marginTop: "1rem", width: "100%" }}
            />
            <TextField
              label="Username"
              size="small"
              sx={{ marginTop: "1rem", width: "100%" }}
            />
            <TextField
              label="Password"
              size="small"
              type="password"
              sx={{ marginTop: "1rem", width: "100%" }}
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginTop: "1rem", width: "100%" }}
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
      </Box>
    </Box>
  );
};

export default Register;
