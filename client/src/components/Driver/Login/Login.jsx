import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Input,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";

import "./Login.css";

const useStyles = makeStyles({
  button: {
    borderRadius: 20,
    padding: "5px 30px",
  },
  input: {
    width: "80%",
    marginBottom: "1rem",
  },
});

const LoginModal = (props) => {
  const [text, setText] = useState("MH 02 TA 2011");
  const classes = useStyles();
  const history = useHistory();

  const [isApplicantLogin, setLogin] = useState(true);
  const [notification, setNotification] = React.useState({
    show: false,
  });

  const handleNotificationClose = () => setNotification({ show: false });

  const handleClose = () => props.showDialog(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/driver/login", {
        plateNumber: document.getElementById("plateNumber").value,
        password: document.getElementById("password").value,
      });
      if (response.data !== null) {
        props.setData(response.data);
        handleClose();
      }
    } catch (err) {
      const error = { err };
      if (error.err.response.status === 403) {
        setNotification({
          show: true,
          text: "Incorrect Password",
          severity: "error",
        });
        return;
      }
      if (error.err.response.status === 404) {
        setNotification({
          show: true,
          text: "Plate Number Not Found",
          severity: "error",
        });
        return;
      }
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
      fullScreen
    >
      <DialogContent>
        <div className="login-form-container">
          <form action="" autoComplete="on" onSubmit={handleSubmit}>
            <h2 className="login-form-title"> Log in </h2>

            <Input
              id="plateNumber"
              defaultValue="MH 02 TA 2011"
              className={classes.input}
              required
            />
            <br />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              className={classes.input}
              required
            />
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </div>
      </DialogContent>
      <Snackbar
        open={notification.show}
        autoHideDuration={5000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleNotificationClose}
          severity={notification.severity}
          variant="filled"
        >
          {notification.text}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default LoginModal;
