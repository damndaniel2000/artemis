import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { StandaloneSearchBox } from "@react-google-maps/api";
import {
  Grid,
  Button,
  Input,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";

import { setOrigin } from "../../../state/actions/booking";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import "./SearchBar.css";

const useStyles = makeStyles({
  search: {
    marginTop: "1rem",
    border: "none",
    borderBottom: "solid 5px #dc0005",
    color: "#fff",
    fontSize: "45px",
    textAlign: "center",
    paddingRight: "50px",
  },
  button: {
    marginTop: "4rem",
    marginBottom: "3rem",
    padding: "13px 70px",
    borderRadius: "10px",
    fontSize: "25px",
  },
});

const Search = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const searchBox = useRef();
  const [loader, showLoader] = React.useState(false);

  const transition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(30%)" },
  });

  const handleSubmit = () => {
    showLoader(true);
    const origin = searchBox.current.value;
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromAddress(origin).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      dispatch(setOrigin(lat, lng, origin));
      showLoader(false);
      history.push("/booking");
    });
  };

  return (
    <animated.div style={transition}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <div className="searchbar-container">
          <div>
            <StandaloneSearchBox>
              <Input
                className={classes.search}
                placeholder="Pick-Up Location"
                inputRef={searchBox}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 50 }}
                    />
                  </InputAdornment>
                }
              />
            </StandaloneSearchBox>
          </div>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            classes={{ focused: classes.searchFocused }}
            onClick={handleSubmit}
          >
            Search{loader && <CircularProgress color="white" />}
          </Button>
        </div>
        {localStorage.getItem("art-auth") !== null ? null : (
          <p
            onClick={() => {
              props.showSearch(false);
              if (props.endPoint === "login") {
                props.showLogin(true);
              } else if (props.endPoint === "guest") {
                props.showOTP(true);
              }
            }}
            className="back-button"
          >
            &lt; Back
          </p>
        )}
      </Grid>
    </animated.div>
  );
};

export default Search;
