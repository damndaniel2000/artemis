import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontWeight: 700,
    margin: "2rem auto",
  },
});

const OTPInput = (props) => {
  const classes = useStyles();

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });
  const transition = props.otpTrans ? forwardTransition : backwardTransition;

  useEffect(() => {
    firstInput.current.focus();
    secondInput.current.blur();
    thirdInput.current.blur();
    fourthInput.current.blur();
  }, []);

  const onChange = (e) => {
    if (firstInput.current.value.length === 1) {
      secondInput.current.focus();
    }
    if (secondInput.current.value.length === 1) {
      thirdInput.current.focus();
    }
    if (thirdInput.current.value.length === 1) {
      fourthInput.current.focus();
    }
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
        <Paper className="otp-verification-container">
          <Typography
            color="secondary"
            component="h2"
            className={classes.title}
          >
            Verify Your Phone Number
          </Typography>
          <p className="otp-verification-sent">
            A 4 digit code has been sent to
            <br /> <b>99440331928</b>. <span className="links">Change?</span>
          </p>
          <div className="otp-verification">
            <input
              maxLength="1"
              ref={firstInput}
              placeholder=" "
              onChange={(e) => onChange(e)}
            />
            <input
              maxLength="1"
              ref={secondInput}
              placeholder=" "
              onChange={(e) => onChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && secondInput.current.value === "") {
                  firstInput.current.focus();
                }
              }}
            />
            <input
              maxLength="1"
              ref={thirdInput}
              placeholder=" "
              onChange={(e) => onChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && thirdInput.current.value === "") {
                  secondInput.current.focus();
                }
              }}
            />
            <input
              maxLength="1"
              ref={fourthInput}
              placeholder=" "
              onChange={(e) => onChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && fourthInput.current.value === "") {
                  thirdInput.current.focus();
                }
              }}
            />
          </div>
          <p>
            Didn't receive any code?
            <span className="links"> Resend the code.</span>
          </p>
          <Button
            color="primary"
            variant="contained"
            className="otp-verification-button"
            onClick={() => {
              props.showSearch(true);
              props.showOTP(false);
              props.changeOTPTrans(false);
            }}
          >
            Verify
          </Button>
        </Paper>
        <p
          className="back-button"
          onClick={() => {
            props.showOTP(false);
            props.showPhone(true);
            props.changeOTPTrans(true);
          }}
        >
          &lt; Back
        </p>
      </Grid>
    </animated.div>
  );
};

export default OTPInput;
