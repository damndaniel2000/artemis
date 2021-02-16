import React, { useState, useRef } from "react";
import {
  InputBase,
  Button,
  makeStyles,
  Paper,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Typography,
  Link,
  ListItemIcon,
} from "@material-ui/core";
import { GoogleMap, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { setPreferences } from "../../../state/actions/signup";

import { mainStyle } from "../../../misc/mapStyles/mainStyle";
import "./Preferences.css";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    maxWidth: 200,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  navButtons: {
    width: 100,
  },
}));

const Preferences = ({ setStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const mapInput = useRef();

  const data = useSelector((state) => state.signupReducer, shallowEqual);

  const [isSelectOrigin, setSelect] = useState(true);
  const [origins, setOrigins] = useState(data.origins);
  const [destinations, setDestinations] = useState(data.destinations);
  const [coords, setCoords] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isInputValid, setInputValid] = useState(false);

  const clearInput = () => {
    mapInput.current.value = "";
  };

  const searchLocation = () => {
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromAddress(mapInput.current.value).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setCoords({ lat: lat, lng: lng });
      setInputValid(true);
    });
  };

  const handleDrag = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    Geocode.fromLatLng(lat, lng).then((res) => {
      const addr = res.results[0].formatted_address;
      mapInput.current.value = addr;
      setInputValid(true);
    });
  };

  const addLocation = () => {
    if (!isInputValid) {
      console.log(
        "Select a valid destination by dragging the marker or selecting from typing suggestions"
      );
      return;
    }
    if (mapInput.current.value !== "") {
      if (isSelectOrigin) setOrigins(origins.concat(mapInput.current.value));
      else setDestinations(destinations.concat(mapInput.current.value));
      clearInput();
    }
  };
  const deleteLocation = (e) => {
    if (isSelectOrigin) {
      const arr = [...origins];
      const ind = arr.indexOf(e);
      arr.splice(ind, 1);
      setOrigins(arr);
    } else {
      const arr = [...destinations];
      const ind = arr.indexOf(e);
      arr.splice(ind, 1);
      setDestinations(arr);
    }
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const submitData = () => {
    dispatch(setPreferences(origins, destinations));
  };

  const listsMenu = (item) => (
    <MenuItem className={classes.menuItem}>
      <IconButton size="small">
        <CloseIcon fontSize="small" onClick={() => deleteLocation(item)} />
      </IconButton>
      <Typography variant="inherit" noWrap>
        {item}
      </Typography>
    </MenuItem>
  );

  const handleSelectChange = () => {
    setSelect(!isSelectOrigin);
    mapInput.current.value = "";
  };

  return (
    <>
      <p className="sign-up-reason">
        <span style={{ color: "#dc0005", fontWeight: "bold" }}>
          Why do we take this data?
        </span>
        <br />
        Once saved, you can select these locations directly while booking an
        ambulance instead of typing the locations manually.
      </p>
      <div className="signup-preferences-container">
        <Paper
          component="form"
          className="signup-preferences-map-input-container"
        >
          <IconButton className={classes.iconButton} onClick={openMenu}>
            <Badge
              badgeContent={
                isSelectOrigin ? origins.length : destinations.length
              }
              color="primary"
            >
              <MenuIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            {isSelectOrigin ? (
              origins.length > 0 ? (
                origins.map((item) => listsMenu(item))
              ) : (
                <MenuItem> Add a location To View Here </MenuItem>
              )
            ) : destinations.length > 0 ? (
              destinations.map((item) => listsMenu(item))
            ) : (
              <MenuItem> Add a location To View Here </MenuItem>
            )}
          </Menu>
          <StandaloneSearchBox onPlacesChanged={searchLocation}>
            <InputBase
              className={classes.input}
              placeholder={
                isSelectOrigin
                  ? "Search A Pickup Location"
                  : "Search a Hospital"
              }
              inputRef={mapInput}
              onChange={() => setInputValid(false)}
            />
          </StandaloneSearchBox>
          <div className="signup-preferences-rightIcons">
            {isInputValid && (
              <>
                <IconButton size="small" onClick={clearInput}>
                  <CloseIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
              </>
            )}
            <IconButton size="small" onClick={addLocation}>
              <AddIcon />
            </IconButton>
          </div>
        </Paper>

        <GoogleMap
          zoom={18}
          mapContainerStyle={{ height: "50vh", width: "100%" }}
          center={coords}
          options={{ disableDefaultUI: true, styles: mainStyle }}
        >
          <Marker position={coords} onDragEnd={handleDrag} draggable />
        </GoogleMap>

        {isSelectOrigin ? (
          <Link component="button" variant="body2" onClick={handleSelectChange}>
            Select Hospitals to choose from ?
          </Link>
        ) : (
          <Link component="button" variant="body2" onClick={handleSelectChange}>
            Select pick up locations to choose from ?
          </Link>
        )}
      </div>
      <div className="signup-navButtons-container">
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => {
            setStep(1);
            submitData();
          }}
        >
          PREVIOUS
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => {
            setStep(3);
            submitData();
          }}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default Preferences;
