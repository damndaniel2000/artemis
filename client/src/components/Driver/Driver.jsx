import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Geocode from "react-geocode";

import "./Driver.css";

import DriverCards from "./DriverCards/DriverCards";
// import RecentTrips from "./RecentTrips/RecentTrips";
import Login from "./Login/Login";

import StarIcon from "@material-ui/icons/Star";

const socket = io.connect("/");

const Driver = () => {
  const [ambulanceData, setData] = useState();

  const [request, showRequest] = useState(false);
  const [userId, setUserId] = useState();
  const [loginDialog, showLoginDialog] = useState(false);

  useEffect(() => {
    socket.on("msg", (data) => {
      console.log(data);
    });

    socket.on("driver_request", (data) => {
      showRequest(true);
      setUserId(data.id);
      console.log(data);
    });
    //eslint-disable-next-line
  }, [socket.json]);

  useEffect(() => {
    showLoginDialog(true);
  }, []);

  useEffect(() => {
    if (ambulanceData) {
      socket.emit(ambulanceData.type);
      console.log(ambulanceData.type);
      socket.emit("save_ambulance_position", ambulanceData.position);
    }
  }, [ambulanceData]);

  const acceptAmbulanceRequest = () => {
    const data = ambulanceData;
    Geocode.setApiKey("AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA");
    Geocode.fromLatLng(data.position.lat, data.position.lng).then((res) => {
      data.address = res.results[0].formatted_address;
      socket.emit("driver_accept", { id: userId, data });
    });
  };

  return (
    <>
      <div className="driver-top-container">
        <div>
          <h2 className="license-plate">
            {ambulanceData && ambulanceData.plateNumber}
          </h2>
          <span> Advanced Life Support </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              fontFamily: "rajdhani",
              fontWeight: 600,
            }}
          >
            4.5 &nbsp;
            <StarIcon style={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="driver-staff-container">
          <DriverCards />
        </div>
        <div className="driver-staff-container">
          {request && <button onClick={acceptAmbulanceRequest}>ACCEPT</button>}
          {/*<RecentTrips />*/}
        </div>
        <Login
          open={loginDialog}
          showDialog={showLoginDialog}
          setData={setData}
        />
      </div>
    </>
  );
};

export default Driver;
