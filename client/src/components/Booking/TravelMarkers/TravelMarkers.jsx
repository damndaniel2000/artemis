import React from "react";
import { Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

import bls from "../../../assets/booking/bls.png";
const Directions = (props) => {
  //const [dirResponse, setRes] = useState();

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

  let iconMarker = new window.google.maps.MarkerImage(
    bls,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(32, 32)
  );

  return (
    <>
      <Marker
        position={props.center}
        draggable={true}
        onDragEnd={(e) => handleOriginMarker(e)}
        animation={2}
        icon={iconMarker}
      />
      <Marker
        position={props.center}
        draggable={true}
        onDragEnd={(e) => handleDesMarker(e)}
        animation={2}
      />
    </>
  );
};

export default Directions;
