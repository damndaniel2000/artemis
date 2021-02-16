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
import { Input, Button, Select, MenuItem, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import io from "socket.io-client";

import "./Booking.css";
import { mainStyle } from "../../misc/mapStyles/mainStyle";
import { setOrigin, setDestination } from "../../state/actions/booking";

import TravelMarkers from "./TravelMarkers/TravelMarkers";
// import Locate from "./CurrentLocation/CurrentLocation";
import AmbulanceTypes from "./AmbulanceTypes/AmbulanceTypes";
import AmbulanceDetails from "./AmbulanceDetails/AmbulanceDetails";
import ToDoCarousel from "./ToDoCarousel/ToDoCarousel";

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
}));

const Booking = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const places = useSelector((state) => state.bookingReducer, shallowEqual);
  const liveAmbulances = useSelector(
    (state) => state.bookingReducer.positionsArray,
    shallowEqual
  );

  const [center, setCenter] = useState({
    lat: places.ogLat,
    lng: places.ogLng,
  });
  const [origin, setOg] = useState("");
  const [destination, setDes] = useState("");
  const [dirResponse, setDirResponse] = useState(null);
  const [originCoords, setOriginCoords] = useState({
    lat: Number,
    lng: Number,
  });
  const [desCoords, setDesCoords] = useState({
    lat: Number,
    lng: Number,
  });
  const [matrix, runMatrix] = useState(false);
  //eslint-disable-next-line
  const [travelTime, setTime] = useState();
  const [type, setType] = useState();
  const [buttonText, setButtonText] = useState("Check Distance");

  const [ambulanceTypeDialog, setAmbulanceTypeDialog] = useState(false);

  const mapRef = useRef();
  const originRef = useRef();
  const destinationRef = useRef();

  const setOriginRef = (val) => (originRef.current.value = val);
  const setDestinationRef = (val) => (destinationRef.current.value = val);

  const onMapLoad = (map) => (mapRef.current = map);
  //eslint-disable-next-line
  const panTo = ({ lat, lng }) => mapRef.current.panTo({ lat: lat, lng: lng });

  useEffect(() => {
    socket.on("accept_request", (data) => console.log(data));
    //eslint-disable-next-line
  }, [socket.json]);

  const convert = () => {
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromAddress(originRef.current.value)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setOriginCoords({ lat: lat, lng: lng });
        dispatch(setOrigin(lat, lng, originRef.current.value));
      })
      .catch();

    Geocode.fromAddress(destinationRef.current.value)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setDesCoords({ lat: lat, lng: lng });
        dispatch(setDestination(lat, lng, destinationRef.current.value));
      })
      .catch();
    runMatrix(true);
  };

  const setValues = () => {
    if (originRef.current.value !== "" && destinationRef.current.value !== "") {
      setOg(originRef.current.value);
      setDes(destinationRef.current.value);
      setCenter(null);
    }
  };

  useEffect(() => {
    if (origin !== "" && destination !== "") convert();
    //eslint-disable-next-line
  }, [origin, destination]);

  const directionsCallback = (res) => {
    if (res !== null && origin !== "") setDirResponse(res);
  };
  const distanceMatrixCallback = (res) => {
    runMatrix(false);
    const totalTime = res.rows[0].elements[0].distance.text;
    if (totalTime) setTime(totalTime);
    setButtonText("Book Ambulance");
  };

  // const ambulanceMarker = (type) => {
  //   let iconPath;
  //   switch (type) {
  //     case "als":
  //       iconPath = "1";
  //     case "bls":
  //       iconPath = "2";
  //     case "Non-Emergency":
  //       iconPath = "3";
  //   }
  //   return iconPath;
  // };

  const makeDriverRequest = () => {
    const userData = {
      ogLat: originCoords.lat,
      ogLng: originCoords.lng,
      desLat: desCoords.lat,
      desLng: desCoords.lng,
    };
    socket.emit("ambulance_request", { type, id: socket.id, userData });
  };

  let iconMarker = new window.google.maps.MarkerImage(
    "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(32, 32)
  );

  return (
    <div className="booking-container">
      <div className="booking-form-container">
        <div className="booking-input-container">
          <StandaloneSearchBox>
            <Input
              className={classes.inputs}
              placeholder="Pick-Up Location"
              defaultValue={places.originPlace}
              inputRef={originRef}
              onChange={() => setButtonText("Check Distance")}
            />
          </StandaloneSearchBox>
          <p>Choose From Saved Locations </p>
        </div>
        <div className="booking-input-container">
          <StandaloneSearchBox>
            <Input
              className={classes.inputs}
              placeholder="Destination"
              defaultValue={places.destinationPlace}
              inputRef={destinationRef}
              onChange={() => setButtonText("Check Distance")}
            />
          </StandaloneSearchBox>
          <p>Choose From Saved Locations</p>
        </div>
        <div className="booking-input-container">
          <Select
            style={{ width: "100%", textAlign: "left" }}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="als">Advanced Life Support (ALS)</MenuItem>
            <MenuItem value="bls">Basic Life Support (BLS)</MenuItem>
          </Select>
          <p onClick={() => setAmbulanceTypeDialog(true)}>What do they mean?</p>
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

        {/*<AmbulanceDetails />
        <AmbulanceTypes
          showDialog={ambulanceTypeDialog}
          setDialog={setAmbulanceTypeDialog}
        />
        <ToDoCarousel />

        <Button color="primary" className={classes.cancelButton}>
          Cancel Ride
        </Button>*/}
      </div>
      <GoogleMap
        zoom={18}
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        center={center}
        onLoad={onMapLoad}
        options={{ disableDefaultUI: true, styles: mainStyle }}
      >
        <TravelMarkers
          center={center}
          setOriginRef={setOriginRef}
          setDestinationRef={setDestinationRef}
        />

        {liveAmbulances.length > 0 &&
          liveAmbulances.map((item) => (
            <Marker position={{ lat: item.lat, lng: item.lng }} />
          ))}

        <DirectionsService
          options={{
            destination: destination,
            origin: origin,
            travelMode: "DRIVING",
          }}
          callback={directionsCallback}
        />
        {dirResponse !== null && (
          <DirectionsRenderer options={{ directions: dirResponse }} />
        )}
        {matrix && (
          <DistanceMatrixService
            options={{
              destinations: [{ lat: desCoords.lat, lng: desCoords.lng }],
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
