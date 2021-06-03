import React, { useState, useRef } from "react";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { makeAccount, setPassword } from "../../../../state/actions/signup";

import "./PasswordDialog.css";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: "2rem",
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    color: theme.palette.common.red1,
  },
}));

const PasswordDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const password1 = useRef("");
  const password2 = useRef("");

  const email = useSelector(
    (state) => state.signupReducer.emailId,
    shallowEqual
  );

  const [passwordIcon, setPasswordIcon] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handlePasswordIconClick = () => {
    setPasswordIcon(!passwordIcon);
  };

  const handleSubmit = () => {
    if (password1.current.value !== password2.current.value) {
      console.log("Password do not match");
      return;
    }

    dispatch(setPassword(password1.current.value));
    dispatch(makeAccount());
    localStorage.setItem("art-auth", email);
    history.push("/");
    handleClose();
  };

  return (
    <Dialog
      id="password-dialog"
      className={classes.dialog}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle className={classes.title}>Set A Password</DialogTitle>
      <DialogContent>
        <p>
          The password is simply there for security reasons. Don't worry,
          keeping a strong password won't slow you down as in most cases, your
          browser will allow you to autofill the password field when asked.
        </p>
        <TextField
          variant="outlined"
          type={passwordIcon ? "text" : "password"}
          label="Enter A Password"
          className={classes.input}
          inputRef={password1}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordIconClick}>
                  {passwordIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          type={passwordIcon ? "text" : "password"}
          label="Confirm Password"
          className={classes.input}
          inputRef={password2}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordIconClick}>
                  {passwordIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Back
        </Button>
        <Button variant="outlined" onClick={handleSubmit} color="primary">
          Finish
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PasswordDialog;
