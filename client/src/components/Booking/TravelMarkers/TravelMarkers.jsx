import React from "react";
import { Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useSelector, shallowEqual } from "react-redux";

import bls from "../../../assets/booking/bls.png";
import hospital from "../../../assets/booking/hospital.png";
import ambulanceMarker from "../../../assets/booking/ambulanceMarker.png";

const Directions = (props) => {
  //const [dirResponse, setRes] = useState();
  const liveAmbulances = useSelector(
    (state) => state.bookingReducer.positionsArray,
    shallowEqual
  );

  const handleOriginMarker = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromLatLng(lat, lng).then((res) => {
      const addr = res.results[0].formatted_address;
      props.setOriginRef(addr);
    });
  };

  const handleDesMarker = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromLatLng(lat, lng).then((res) => {
      const addr = res.results[0].formatted_address;
      props.setDestinationRef(addr);
    });
  };

  let origin = new window.google.maps.MarkerImage(
    bls,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(45, 45)
  );
  let destination = new window.google.maps.MarkerImage(
    hospital,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(45, 45)
  );
  let ambulance = new window.google.maps.MarkerImage(
    ambulanceMarker,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(45, 45)
  );

  return (
    <>
      {props.showOriginMarker.show && (
        <Marker
          position={props.showOriginMarker.coords}
          draggable={true}
          onDragEnd={(e) => handleOriginMarker(e)}
          animation={2}
          icon={origin}
        />
      )}
      {props.showDestinationMarker.show && (
        <Marker
          position={props.showDestinationMarker.coords}
          draggable={true}
          onDragEnd={(e) => handleDesMarker(e)}
          animation={2}
          icon={destination}
        />
      )}
      {liveAmbulances.length > 0 &&
        liveAmbulances.map((item) => (
          <Marker
            position={{ lat: item.lat, lng: item.lng }}
            icon={ambulance}
          />
        ))}
    </>
  );
};

export default Directions;
