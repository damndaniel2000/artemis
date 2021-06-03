import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./NavBar.css";

const Nav = () => {
  const history = useHistory();
  return (
    <div className="nav-strip">
      <div className="logo"> Artemis </div>
      {localStorage.getItem("art-auth") === null && (
        <Button
          style={{ borderRadius: "50px" }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/sign-up")}
        >
          SIGN UP
        </Button>
      )}
      {localStorage.getItem("art-auth") === "dsouzaian2000@gmail.com" && (
        <Button
          style={{ borderRadius: "50px" }}
          variant="contained"
          color="primary"
          onClick={() => {
            localStorage.removeItem("art-auth");
            window.open("/", "_self");
          }}
        >
          LOG OUT
        </Button>
      )}
    </div>
  );
};

export default Nav;
