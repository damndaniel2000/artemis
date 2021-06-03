import React from "react";
import { Button, Input, InputAdornment, makeStyles } from "@material-ui/core";

import "./AmbulanceDetails.css";

import ambulanceImg from "../../../assets/booking/ambulance.svg";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles({
  inputs: {
    width: "100%",
    marginBottom: 15,
  },
});

const AmbulanceDetails = ({
  ambulanceData,
  travelTime,
  origin,
  destination,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className="ambulance-details">
        <div className="ambulance-details-time-left-container">
          <h2 className="ambulance-details-time-left">
            {travelTime.substring(0, 2)}
          </h2>
          <h4 className="ambulance-details-time-left-text"> mins away</h4>
        </div>
        <div>
          <img
            src={ambulanceImg}
            alt="ambulance"
            className="ambulance-details-img"
          />
          <h3 className="ambulance-details-plate">
            {ambulanceData.plateNumber}
          </h3>
          <h4 className="ambulance-details-type">
            {" "}
            {ambulanceData.type === "als" ? "ALS" : "BLS"}{" "}
          </h4>
          <div className="ambulance-phoneNumber">
            <CallIcon fontSize="small" />
            &nbsp;
            <a className="links" href={`tel:${ambulanceData.phoneNumber}`}>
              {" "}
              {ambulanceData.phoneNumber}
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Input
          className={classes.inputs}
          label="Pick Up From"
          value="Lokmilan, Chandivali"
          // value={origin.current !== null ? origin.current.value : ""}
        />
        <Input
          className={classes.inputs}
          label="Destination"
          value="Hinduja Hospital, Mahim"
          // value={destination.current !== null ? destination.current.value : ""}
        />
      </div>
    </>
  );
};

export default AmbulanceDetails;
