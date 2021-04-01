import React from "react";
import { Dialog, DialogTitle, Button, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import "./AmbulanceTypes.css";

import alsImg from "../../../../assets/booking/als.svg";
import blsImg from "../../../../assets/booking/bls.png";

const Types = ({ showDialog, setDialog, setAmbulanceType }) => {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setDialog(false)}
      className="ambulance-type-dialog"
    >
      <DialogTitle>
        <IconButton
          onClick={() => setDialog(false)}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div className="ambulance-type-container">
        <div>
          <img src={alsImg} alt="als" className="ambulance-type-img" />
          <div>
            <p className="ambulance-type"> Advanced Life Support (ALS) </p>
            <h3 className="ambulance-type-highlight">
              Life Threatening Incident
            </h3>
            <p> 2 highly skilled professionals </p>
            <p> ICU on wheels </p>
            <p> Cardiac Arrests, Heart Attacks </p>
            <p> Serious Accidents, Strokes </p>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setAmbulanceType("als");
                setDialog(false);
              }}
            >
              Select
            </Button>
          </div>
        </div>
        <div>
          <img src={blsImg} alt="bls" className="ambulance-type-img" />
          <div>
            <p className="ambulance-type"> Basic Life Support (BLS) </p>
            <h3 className="ambulance-type-highlight">
              Non-Life Threatening Incident
            </h3>
            <p> 2 skilled professionals </p>
            <p> Transport to Hospital </p>
            <p> High Fevers, Bed Ridden Patients</p>
            <p> Minor Accidents (Patient is conscious) </p>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setAmbulanceType("bls");
                setDialog(false);
              }}
            >
              Select
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Types;
