import React from "react";
import { Button, Input, InputAdornment, makeStyles } from "@material-ui/core";

import "./AmbulanceDetails.css";

import ambulanceImg from "../../../assets/booking/ambulance.svg";

const useStyles = makeStyles({
  inputs: {
    width: "100%",
    marginBottom: 15,
  },
});

const AmbulanceDetails = () => {
  const classes = useStyles();

  return (
    <>
      <div className="ambulance-details">
        <div className="ambulance-details-time-left-container">
          <h2 className="ambulance-details-time-left"> 20 </h2>
          <h4 className="ambulance-details-time-left-text"> mins away</h4>
        </div>
        <div>
          <img
            src={ambulanceImg}
            alt="ambulance"
            className="ambulance-details-img"
          />
          <h3 className="ambulance-details-plate"> MH 02 TN 2001 </h3>
          <h4 className="ambulance-details-type"> Advanced Life Support </h4>
          <br />
          <Button
            className="ambulance-details-button"
            size="small"
            color="primary"
          >
            More Details
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Input
          className={classes.inputs}
          label="Pick Up From"
          value="Lokmilan, Chandivali"
          endAdornment={
            <InputAdornment position="end">
              <span className="ambulance-details-input-adorn">Change</span>
            </InputAdornment>
          }
        />
        <Input
          className={classes.inputs}
          label="Destination"
          value="Hinduja Hospital OPD"
          endAdornment={
            <InputAdornment position="end">
              <span className="ambulance-details-input-adorn">Change</span>
            </InputAdornment>
          }
        />
      </div>
    </>
  );
};

export default AmbulanceDetails;
