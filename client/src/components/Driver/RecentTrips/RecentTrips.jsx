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

const RecentTrips = ({ ambulanceData }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h4" color="primary">
        Recent Trips
      </Typography>
      {ambulanceData &&
        ambulanceData.feedback &&
        ambulanceData.feedback.map((item) => (
          <Card className="recenttrips-card">
            <CardMedia
              className={classes.media}
              image={`https://maps.googleapis.com/maps/api/staticmap?center=${item.destination}&zoom=13&scale=1&size=600x300&maptype=roadmap&key=AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA&format=png&visual_refresh=true`}
              title="Destination"
            />
            <CardContent className="recenttrips-content">
              <p> {item.date}</p>
              <p> {item.destination} </p>
              <Rating
                name="read-only"
                value={parseInt(item.rating)}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default RecentTrips;
