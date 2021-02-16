import React from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

import "./DriverCards.css";

import driver from "../../../assets/driver/driver.png";
import paraF from "../../../assets/driver/paramedicalF.svg";
import paraM from "../../../assets/driver/paramedicalM.svg";

const useStyles = makeStyles((theme) => ({
  cover: {
    width: 150,
    height: 150,
  },
  title: {
    fontWeight: 600,
    marginBottom: 20,
  },
}));

const DriverCards = () => {
  const classes = useStyles();

  const staffCards = [
    {
      avatar: driver,
      designation: "Driver",
      name: "Daniel D'souza",
      contact: "9948374622",
      experience: "2 years",
    },
    {
      avatar: paraF,
      designation: "Paramedic",
      name: "Abigail Monteiro",
      contact: "9948374631",
      experience: "4 years",
    },
    {
      avatar: paraM,
      designation: "Paramedic 2",
      name: "Ian D'souza",
      contact: "9948374342",
      experience: "1 year",
    },
  ];

  return (
    <>
      <Typography className={classes.title} variant="h4" color="primary">
        Ambulance Team
      </Typography>
      {staffCards.map((item) => (
        <div className="driver-staff-cards">
          <CardMedia
            className={classes.cover}
            image={item.avatar}
            title={item.designation}
          />
          <CardContent className="driver-staff-card-content">
            <h5 className="driver-staff-card-title"> {item.name} </h5>
            <p> {item.designation} </p>
            <p> Contact Number : {item.contact} </p>
            <p> Experience : {item.experience} </p>
          </CardContent>
        </div>
      ))}
    </>
  );
};

export default DriverCards;
