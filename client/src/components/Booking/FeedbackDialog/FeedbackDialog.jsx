import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import feedbackImg from "../../../assets/booking/feedback.svg";

import "./FeedbackDialog.css";

const FeedbackDialog = ({ showDialog, setDialog }) => {
  return (
    <Dialog open={showDialog} className="ambulance-type-dialog">
      <DialogTitle>Your Feedback Helps Us Serve You Better</DialogTitle>
      <DialogContent>
        <div className="feedback-div">
          <img className="feedback-img" src={feedbackImg} />
          <Rating size="large" precision={0.5} />
          <TextField
            label="Any Comments?"
            style={{ marginTop: "1rem" }}
            multiline
            rows={2}
            rowsMax={4}
            variant="outlined"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => window.open("/", "_self")}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
