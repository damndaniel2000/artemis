import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  title: {
    fontSize: "80px",
    fontWeight: 700,
    letterSpacing: 3,
  },
});

const Slogan = () => {
  const classes = useStyle();
  return (
    <Typography color="secondary" component="h1" className={classes.title}>
      Artemis
    </Typography>
  );
};

export default Slogan;
