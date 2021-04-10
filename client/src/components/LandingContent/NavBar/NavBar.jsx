import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./NavBar.css";

const Nav = () => {
  const history = useHistory();
  return (
    <div className="nav-strip">
      <div className="logo"> Artemis </div>
      <Button
        style={{ borderRadius: "50px" }}
        variant="contained"
        color="primary"
        onClick={() => history.push("/sign-up")}
      >
        SIGN UP
      </Button>
    </div>
  );
};

export default Nav;
