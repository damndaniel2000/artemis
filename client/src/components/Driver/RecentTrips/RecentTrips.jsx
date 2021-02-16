import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import "./RecentTrips.css";

const useStyles = makeStyles({
  media: {
    height: 150,
  },
  button: {
    textTransform: "capitalize",
    marginLeft: ".5rem",
    marginTop: "-10px",
  },
  title: {
    fontWeight: 600,
    marginBottom: 20,
  },
});

const RecentTrips = () => {
  const classes = useStyles();

  const recent = [
    {
      dateTime: "18/08/20, 05:25",
      destination: "Hiranandani Hospital",
      img:
        "https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=13&scale=1&size=600x300&maptype=roadmap",
    },
    {
      dateTime: "18/08/20, 05:25",
      destination: "Hiranandani Hospital",
      img:
        "https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=13&scale=1&size=600x300&maptype=roadmap",
    },
    {
      dateTime: "18/08/20, 05:25",
      destination: "Hiranandani Hospital",
      img:
        "https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=13&scale=1&size=600x300&maptype=roadmap",
    },
  ];

  return (
    <>
      <Typography className={classes.title} variant="h4" color="primary">
        Recent Trips
      </Typography>
      {recent.map((item) => (
        <Card className="recenttrips-card">
          <CardMedia
            className={classes.media}
            image={`${item.img}&key=AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA&format=png&visual_refresh=true`}
            title="Destination"
          />
          <CardContent className="recenttrips-content">
            <p> {item.dateTime}</p>
            <p> {item.destination} </p>
            <Rating name="read-only" value={3.5} precision={0.5} readOnly />
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              color="primary"
              disableElevation
            >
              More Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default RecentTrips;
