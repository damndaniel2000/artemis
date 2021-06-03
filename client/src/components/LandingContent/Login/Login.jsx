import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
  Grid,
  Paper,
  Typography,
  Input,
  Button,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { Alert } from "@material-ui/lab";
import { useDispatch } from "react-redux";

import { saveUserData } from "../../../state/actions/user";

import "./Login.css";

const useStyles = makeStyles({
  input: {
    width: 300,
    marginBottom: "2rem",
    fontSize: "20px",
  },
});

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const email = useRef("");
  const password = useRef("");

  const [notification, setNotification] = React.useState({
    show: false,
  });

  const handleNotificationClose = () => setNotification({ show: false });

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });

  const transition = props.loginTrans ? forwardTransition : backwardTransition;

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("/api/users/login", {
      emailId: email.current.value,
      password: password.current.value,
    })
      .then((res) => {
        if (res.data === "OK") {
          localStorage.setItem("art-auth", email.current.value);
          Axios.post("/api/users/getUserInfo", { emailId: email.current.value })
            .then((res) => dispatch(saveUserData(res.data)))
            .catch((err) => console.log(err));
          props.showSearch(true);
          props.showLogin(false);
          props.changeLoginTrans(false);
        }
      })
      .catch((err) => {
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
            text: "Email ID Not Registered",
            severity: "error",
          });
          return;
        }
      });
  };

  return (
    <animated.div style={transition}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Paper className="login-container">
          <Typography> Login </Typography>
          <form action="" onSubmit={handleLogin}>
            <Input
              type="email"
              color="secondary"
              placeholder="Username"
              className={classes.input}
              inputRef={email}
              required
            />
            <br />
            <Input
              color="secondary"
              type="password"
              placeholder="Password"
              className={classes.input}
              inputRef={password}
              required
            />
            <br />
            <Button color="primary" type="submit" variant="contained">
              Login
            </Button>
          </form>
          <br />
          <Typography component="span">
            Don't have an account?{" "}
            <span style={{ color: "#dc0005", cursor: "pointer" }}>
              <b>
                <u onClick={() => window.open("/sign-up", "_self")}>Sign Up!</u>
              </b>
            </span>
          </Typography>
        </Paper>

        <p
          className="back-button"
          onClick={() => {
            props.showLogin(false);
            props.showButtons(true);
            props.changeLoginTrans(true);
          }}
        >
          &lt; Back
        </p>
      </Grid>

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
    </animated.div>
  );
};

export default Login;
