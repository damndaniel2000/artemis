import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import "./UserButtons.css";

const UserButtons = (props) => {
  const transition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-30%)" },
  });

  const playTransition = props.firstLoad ? transition : null;

  return (
    <animated.div style={playTransition}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <div className="user-buttons-container">
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              props.showPhone(true);
              props.showButtons(false);
              props.handleLoad(true);
              props.setEndpoint("guest");
            }}
          >
            One Time Use
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              props.showLogin(true);
              props.showButtons(false);
              props.handleLoad(true);
              props.setEndpoint("login");
            }}
          >
            Login
          </Button>
        </div>
      </Grid>
    </animated.div>
  );
};

export default UserButtons;
