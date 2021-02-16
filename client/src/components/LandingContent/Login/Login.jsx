import React from "react";
import { useSpring, animated } from "react-spring";
import { Grid, Paper, Typography, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });

  const transition = props.loginTrans ? forwardTransition : backwardTransition;

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
          <Input
            color="secondary"
            placeholder="Username"
            className={classes.input}
          />
          <br />
          <Input
            color="secondary"
            type="password"
            placeholder="Password"
            className={classes.input}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              props.showSearch(true);
              props.showLogin(false);
              props.changeLoginTrans(false);
            }}
          >
            Login
          </Button>
          <br />
          <Typography component="span">
            Don't have an account?{" "}
            <span style={{ color: "#dc0005" }}>
              <b>
                <u>Sign Up!</u>
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
