import React from "react";

const CurrentLocation = (props) => {
  const currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        props.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        props.handleCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  };
  return (
    <>
      <button onClick={currentLocation}> Current</button>
    </>
  );
};

export default CurrentLocation;
