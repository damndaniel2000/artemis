import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import Axios from "axios";

const LoginModal = (props) => {
  const [text, setText] = useState("MH 02 TN 2011");

  const handleClose = () => props.showDialog(false);

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("/api/driver/login", {
        plateNumber: text,
      });
      props.setData(response.data);
      console.log(response.data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogContent>
        <TextField
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
