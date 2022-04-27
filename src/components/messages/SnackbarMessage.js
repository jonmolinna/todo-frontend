import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SnackbarMessage = ({
  message,
  isOpenMessage,
  closeMessage,
  severity,
}) => {
  return (
    <Snackbar
      open={isOpenMessage}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      onClose={() => closeMessage()}
    >
      <Alert
        onClose={() => closeMessage()}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
