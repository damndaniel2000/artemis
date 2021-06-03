import React, { useRef } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import {
  GoogleMap,
  Marker,
  StandaloneSearchBox,
  DrawingManager,
} from "@react-google-maps/api";
import Geocode from "react-geocode";

import tracking from "../../../images/delivery.svg";
import markerIcon from "../../../images/marker.png";

import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

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
  confirmButton: {
    width: 200,
  },
}));

const options = {
  fillColor: "lightblue",
  fillOpacity: 1,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const Tracking = () => {
  const classes = useStyles();

  const [center, setCenter] = React.useState({
    lat: 3.5216453,
    lng: 101.7636108,
  });

  const mapRef = useRef(null);
  const mapInput = useRef(null);

  React.useEffect(() => {
    const showPosition = (position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        function (error) {
          alert(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );
    }
  }, []);

  const onMapLoad = (map) => (mapRef.current = map);

  const searchLocation = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(mapInput.current.value).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setCenter({ lat: lat, lng: lng });
    });
  };

  const onPolygonLoad = (polygon) => {
    console.log("polygon: ", polygon);
  };

  let marker =
    window.google &&
    new window.google.maps.MarkerImage(
      markerIcon,
      null /* size is determined at runtime */,
      null /* origin is 0,0 */,
      null /* anchor is bottom center of the scaled image */,
      new window.google.maps.Size(45, 45)
    );

  return (
    <div className="tracking-dashboard-container">
      {/*<img className="tracking-img" src={tracking} alt="tracking" />
      <br />
      <br />
      <Button color="primary" size="large" variant="outlined">
        Set Up Fence
      </Button>*/}

      <div style={{ width: "100vw" }}>
        <GoogleMap
          zoom={13}
          mapContainerStyle={{ height: "60vh", width: "100%" }}
          center={center}
          onLoad={onMapLoad}
          options={{ disableDefaultUI: true }}
        >
          <DrawingManager
            drawingMode="polygon"
            onPolygonComplete={onPolygonLoad}
            options={{ drawingControl: false }}
          />
          <Marker icon={marker} position={center} />
        </GoogleMap>
        <br />
        <StandaloneSearchBox onPlacesChanged={searchLocation}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search a location"
            inputRef={mapInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoomOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </StandaloneSearchBox>
        <p className="tracking-helper-text">
          Search for a place and start drawing a fence
        </p>
        <Button
          className={classes.confirmButton}
          size="small"
          color="primary"
          variant="contained"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Tracking;
