import React, { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import {
  Input,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

import "./Booking.css";
import { mainStyle } from "../../misc/mapStyles/mainStyle";
import { setOrigin, setDestination } from "../../state/actions/booking";

import TravelMarkers from "./TravelMarkers/TravelMarkers";
// import Locate from "./CurrentLocation/CurrentLocation";
import AmbulanceTypes from "./AmbulanceDialogs/AmbulanceTypes/AmbulanceTypes";
import AmbulanceDetails from "./AmbulanceDetails/AmbulanceDetails";
import ToDoCarousel from "./ToDoCarousel/ToDoCarousel";
import FeedbackDialog from "./FeedbackDialog/FeedbackDialog";

import CPRDialog from "./AmbulanceDialogs/CPR";

import RoomIcon from "@material-ui/icons/Room";

const socket = io.connect("/");

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "100%",
  },
  cancelButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    letterSpacing: 0.5,
    fontWeight: 600,
  },
  savedLocations: {
    background: theme.palette.common.red1,
    color: "white",
    width: 500,
    height: 200,
    overflowY: "auto",
    marginBottom: "1rem",
  },
}));

const Booking = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const places = useSelector((state) => state.bookingReducer, shallowEqual);
  const currentUser = useSelector(
    (state) => state.userReducer.userData,
    shallowEqual
  );

  const [center, setCenter] = useState({
    lat: places.ogLat,
    lng: places.ogLng,
  });
  const [origin, setOg] = useState("");
  const [destination, setDes] = useState("");
  const [originCoords, setOriginCoords] = useState({
    lat: Number,
    lng: Number,
  });
  const [desCoords, setDesCoords] = useState({
    lat: Number,
    lng: Number,
  });
  const [desCoords2, setDesCoords2] = useState({
    lat: Number,
    lng: Number,
  });

  const [matrix, runMatrix] = useState(false);

  const [runDirections1, setRunDirections1] = useState(true);
  const [runDirections2, setRunDirections2] = useState(false);
  const [dirResponse1, setDirResponse1] = useState(null);
  const [dirResponse2, setDirResponse2] = useState(null);

  const [isBooking, setIsBooking] = useState(true);

  const [travelTime, setTime] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [buttonText, setButtonText] = useState("Check Distance");

  const [ambulanceTypeDialog, setAmbulanceTypeDialog] = useState(false);
  const [cprDialog, showCprDialog] = useState(false);
  const [feedback, showFeedback] = useState(false);

  const [ambulanceData, setAmbulanceData] = useState({});

  const [originMarker, setOriginMarker] = useState({
    show: true,
    coords: center,
  });
  const [destinationMarker, setDestinationMarker] = useState({
    show: false,
  });

  const [ogLoader, setOgLoader] = useState(false);
  const [desLoader, setDesLoader] = useState(false);

  const [showSavedOg, setSavedOg] = useState(false);
  const [showSavedDes, setSavedDes] = useState(false);

  const mapRef = useRef();
  const originRef = useRef();
  const destinationRef = useRef();

  const setOriginRef = (val) => (originRef.current.value = val);
  const setDestinationRef = (val) => (destinationRef.current.value = val);

  const onMapLoad = (map) => (mapRef.current = map);
  //eslint-disable-next-line
  const panTo = ({ lat, lng }) => mapRef.current.panTo({ lat: lat, lng: lng });

  useEffect(() => {
    socket.on("accept_request", (res) => {
      const response = res.data;
      setRunDirections1(false);
      setRunDirections2(true);
      setDirResponse1(null);
      setDes(response.address);
      setIsBooking(false);
      setAmbulanceData(response);
      setDesCoords2({ lat: response.position.lat, lng: response.position.lng });
      runMatrix(true);
    });
    //eslint-disable-next-line
  }, [socket.json]);

  const convert = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(originRef.current.value)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setOriginCoords({ lat: lat, lng: lng });
        if (originRef.current !== null)
          dispatch(setOrigin(lat, lng, originRef.current.value));
      })
      .catch();

    Geocode.fromAddress(destinationRef.current.value)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setDesCoords({ lat: lat, lng: lng });
        if (destinationRef.current !== null)
          dispatch(setDestination(lat, lng, destinationRef.current.value));
      })
      .catch();
  };

  const convertAutocomplete = (e, type) => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(e)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCenter({ lat, lng });

        if (type === "origin") {
          setOgLoader(false);
          setOriginMarker({
            ...originMarker,
            coords: {
              lat: lat,
              lng: lng,
            },
          });
        } else {
          setDesLoader(false);
          setDestinationMarker({
            ...destinationMarker,
            coords: {
              lat: lat,
              lng: lng,
            },
          });
        }
      })
      .catch();
  };

  const setValues = () => {
    if (originRef.current.value !== "" && destinationRef.current.value !== "") {
      setOg(originRef.current.value);
      setDes(destinationRef.current.value);
      setCenter(null);
    }
  };

  useEffect(() => {
    setRunDirections1(true);
    if (originRef.current !== null) {
      if (originRef.current.value !== "" && destinationRef.current.value !== "")
        convert();
    }
    //eslint-disable-next-line
  }, [origin, destination]);

  const directionsCallback1 = (res) => {
    if (res !== null && origin !== "") {
      setDirResponse1(res);
      setButtonText("Book Ambulance");
    }
  };
  const directionsCallback2 = (res) => {
    if (res !== null) {
      setDirResponse1(res);
    }
  };

  useEffect(() => {
    if (dirResponse1 !== null) {
      setDestinationMarker({ ...destinationMarker, show: true });
      setOriginMarker({ ...originMarker, show: true });
    }
  }, [dirResponse1]);

  useEffect(() => {
    if (dirResponse2 !== null) {
      runMatrix(true);
    }
  }, [dirResponse2]);

  const distanceMatrixCallback = (res) => {
    const totalTime = res.rows[0].elements[0].duration.text;
    if (totalTime && runDirections2) setTime(totalTime);
  };

  const makeDriverRequest = () => {
    const userData = {
      ogLat: originCoords.lat,
      ogLng: originCoords.lng,
      desLat: desCoords.lat,
      desLng: desCoords.lng,
      address: originRef.current.value,
      name: `${currentUser.fname} ${currentUser.lname}`,
    };
    setRunDirections1(false);
    socket.emit("ambulance_request", {
      ambulanceType,
      id: socket.id,
      userData,
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-form-container">
        <div className="logo-container">Artemis</div>
        {isBooking && (
          <>
            {" "}
            <div
              className="booking-input-container"
              style={{ marginTop: "2rem" }}
            >
              <StandaloneSearchBox
                onPlacesChanged={() => {
                  setOgLoader(true);
                  convertAutocomplete(originRef.current.value, "origin");
                }}
              >
                <Input
                  className={classes.inputs}
                  placeholder="Pick-Up Location"
                  defaultValue={places.originPlace}
                  inputRef={originRef}
                  onChange={() => {
                    setButtonText("Check Distance");
                    setDirResponse1(null);
                    setOg("");
                  }}
                  onFocus={() => {
                    setDestinationMarker({ ...destinationMarker, show: false });
                    setOriginMarker({ ...originMarker, show: true });
                    setCenter(originMarker.coords);
                  }}
                  endAdornment={
                    <>
                      &nbsp;&nbsp;
                      {ogLoader && <CircularProgress size="small" size={20} />}
                    </>
                  }
                />
              </StandaloneSearchBox>
              <p
                onClick={() => {
                  setSavedOg(!showSavedOg);
                  setDestinationMarker({
                    ...destinationMarker,
                    show: false,
                  });
                  setOriginMarker({ ...originMarker, show: true });
                  setCenter(originMarker.coords);
                }}
              >
                {showSavedOg ? "Hide" : "Show"} Saved Locations{" "}
              </p>
              {showSavedOg && (
                <Paper className={classes.savedLocations}>
                  <List>
                    {currentUser.origins.map((item) => (
                      <ListItem
                        onClick={() => {
                          setOgLoader(true);
                          convertAutocomplete(item, "origin");
                          originRef.current.value = item;
                        }}
                        className={classes.savedItem}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <RoomIcon />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </div>
            <div className="booking-input-container">
              <StandaloneSearchBox
                onPlacesChanged={() => {
                  setDesLoader(true);
                  convertAutocomplete(destinationRef.current.value);
                }}
              >
                <Input
                  className={classes.inputs}
                  placeholder="Destination"
                  defaultValue={places.destinationPlace}
                  inputRef={destinationRef}
                  onChange={() => {
                    setButtonText("Check Distance");
                    setDirResponse1(null);
                    setOg("");
                  }}
                  onFocus={() => {
                    setDestinationMarker({ ...destinationMarker, show: true });
                    setOriginMarker({ ...originMarker, show: false });
                    setCenter(destinationMarker.coords);
                  }}
                  endAdornment={
                    <>
                      &nbsp;&nbsp;
                      {desLoader && <CircularProgress size="small" size={20} />}
                    </>
                  }
                />
              </StandaloneSearchBox>
              <p
                onClick={() => {
                  setSavedDes(!showSavedDes);
                  setDestinationMarker({
                    ...destinationMarker,
                    show: true,
                  });
                  setOriginMarker({ ...originMarker, show: false });
                  setCenter(destinationMarker.coords);
                }}
              >
                {showSavedDes ? "Hide" : "Show"} Saved Locations
              </p>
              {showSavedDes && (
                <Paper className={classes.savedLocations}>
                  <List>
                    {currentUser.destinations.map((item) => (
                      <ListItem
                        onClick={() => {
                          setDesLoader(true);
                          convertAutocomplete(item);
                          destinationRef.current.value = item;
                        }}
                        className={classes.savedItem}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <RoomIcon />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </div>
            <div className="booking-input-container">
              <FormControl>
                <InputLabel>Ambulance Type</InputLabel>
                <Select
                  style={{ width: "100%", textAlign: "left" }}
                  onChange={(e) => setAmbulanceType(e.target.value)}
                  value={ambulanceType}
                >
                  <MenuItem value="als">Advanced Life Support (ALS)</MenuItem>
                  <MenuItem value="bls">Basic Life Support (BLS)</MenuItem>
                </Select>
              </FormControl>
              <p onClick={() => setAmbulanceTypeDialog(true)}>
                What do they mean?
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (buttonText === "Check Distance") setValues();
                else makeDriverRequest();
              }}
            >
              {buttonText}
            </Button>
            <AmbulanceTypes
              showDialog={ambulanceTypeDialog}
              setDialog={setAmbulanceTypeDialog}
              setAmbulanceType={setAmbulanceType}
            />
          </>
        )}
        {!isBooking && (
          <>
            <AmbulanceDetails
              ambulanceData={ambulanceData}
              travelTime={travelTime}
              origin={originRef}
              destination={destinationRef}
            />
            <ToDoCarousel showCprDialog={showCprDialog} />
            <div className={classes.cancelButton}>
              <Button color="primary" onClick={() => history.push("/")}>
                Cancel Ride
              </Button>
              <Button color="primary" onClick={() => showFeedback(true)}>
                End Ride
              </Button>
            </div>
            <CPRDialog showDialog={cprDialog} setDialog={showCprDialog} />
          </>
        )}
        <FeedbackDialog showDialog={feedback} setDialog={showFeedback} />
      </div>
      <GoogleMap
        zoom={15}
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        center={center}
        onLoad={onMapLoad}
        options={{ disableDefaultUI: true, styles: mainStyle }}
      >
        <TravelMarkers
          setOriginRef={setOriginRef}
          setDestinationRef={setDestinationRef}
          showOriginMarker={originMarker}
          showDestinationMarker={destinationMarker}
        />

        {runDirections1 && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback1}
          />
        )}
        {dirResponse1 !== null && (
          <DirectionsRenderer
            options={{ directions: dirResponse1, suppressMarkers: true }}
          />
        )}

        {runDirections2 && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback2}
          />
        )}
        {dirResponse2 !== null && (
          <DirectionsRenderer
            options={{ directions: dirResponse2, suppressMarkers: true }}
          />
        )}

        {matrix && (
          <DistanceMatrixService
            options={{
              destinations: [{ lat: desCoords2.lat, lng: desCoords2.lng }],
              origins: [{ lng: originCoords.lng, lat: originCoords.lat }],
              travelMode: "DRIVING",
            }}
            callback={(res) => {
              distanceMatrixCallback(res);
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Booking;
