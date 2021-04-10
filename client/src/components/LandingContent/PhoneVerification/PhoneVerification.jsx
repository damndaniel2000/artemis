import React from "react";
import { animated, useSpring } from "react-spring";
import { Grid, Input, InputAdornment, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import "./PhoneVerification.css";

const useStyles = makeStyles({
  search: {
    marginTop: "1rem",
    border: "none",
    borderBottom: "solid 5px #dc0005",
    color: "#fff",
    fontSize: "45px",
    textAlign: "center",
    paddingRight: "50px",
    fontFamily: "rajdhani",
    fontWeight: 600,
  },
  button: {
    marginTop: "4rem",
    marginBottom: "3rem",
    padding: "13px 70px",
    borderRadius: "10px",
    fontSize: "25px",
  },
});

const Verify = (props) => {
  const classes = useStyles();

  const phoneNumber = React.useRef(null);

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });

  const transition = props.phoneTrans ? forwardTransition : backwardTransition;

  return (
    <animated.div style={transition}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <div className="searchbar-container">
          <div>
            <Input
              className={classes.search}
              placeholder="Phone Number"
              inputRef={props.phoneNumber}
              startAdornment={
                <InputAdornment position="start">
                  <CallOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 50 }}
                  />
                </InputAdornment>
              }
            />
          </div>

          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={props.sendOTP}
          >
            Send OTP
          </Button>
        </div>
        <div id="recaptcha" />

        <p
          className="back-button"
          onClick={() => {
            props.showPhone(false);
            props.showButtons(true);
            props.changePhoneTrans(true);
          }}
        >
          &lt; Back
        </p>
      </Grid>
    </animated.div>
  );
};

export default Verify;
