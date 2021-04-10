import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Grid, Paper, Typography, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

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

  const email = useRef("");
  const password = useRef("");

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });

  const transition = props.loginTrans ? forwardTransition : backwardTransition;

  const handleLogin = () => {
    Axios.post("/api/users/login", {
      emailId: email.current.value,
      password: password.current.value,
    })
      .then((res) => {
        if (res.data === "OK") {
          props.showSearch(true);
          props.showLogin(false);
          props.changeLoginTrans(false);
        }
      })
      .catch((err) => console.log(err));
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
          <form action="" onClick={handleLogin}>
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
            <Button type="submit" color="primary" variant="contained">
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
    </animated.div>
  );
};

export default Login;
