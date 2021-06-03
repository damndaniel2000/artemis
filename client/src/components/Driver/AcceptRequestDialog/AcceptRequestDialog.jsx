import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";

import "./AcceptRequestDialog.css";

const useStyles = makeStyles({
  dialog: {
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontFamily: "rajdhani",
    fontSize: 30,
    fontWeight: 600,
    color: "red",
  },
});

const AcceptRequest = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog classes={{ paperWidthSm: classes.dialog }} open={props.open}>
        <div className={classes.title}>INCOMING REQUEST</div>

        <DialogContent>
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?markers=${
              props.data !== null && props.data.userData.address
            }&zoom=13&scale=1&size=500x300&maptype=roadmap&key=AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA&format=png&visual_refresh=true`}
          />
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Decline
          </Button>
          <Button color="primary" onClick={props.acceptRequest}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AcceptRequest;
