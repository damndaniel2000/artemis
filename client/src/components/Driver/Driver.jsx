import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Geocode from "react-geocode";

import "./Driver.css";

import DriverCards from "./DriverCards/DriverCards";
import RecentTrips from "./RecentTrips/RecentTrips";
import Login from "./Login/Login";
import AcceptRequestDialog from "./AcceptRequestDialog/AcceptRequestDialog";

import StarIcon from "@material-ui/icons/Star";

const socket = io.connect("/");

const Driver = () => {
  const [ambulanceData, setData] = useState();
  const [userData, setUserData] = useState(null);

  const [request, showRequest] = useState(false);
  const [userId, setUserId] = useState();
  const [loginDialog, showLoginDialog] = useState(false);

  useEffect(() => {
    socket.on("msg", (data) => {
      console.log(data);
    });

    socket.on("driver_request", (data) => {
      setUserId(data.id);
      setUserData(data);
    });
    //eslint-disable-next-line
  }, [socket.json]);

  useEffect(() => {
    if (userData !== null) showRequest(true);
  }, [userData]);

  useEffect(() => {
    showLoginDialog(true);
  }, []);

  useEffect(() => {
    if (ambulanceData) {
      socket.emit(ambulanceData.type);
      socket.emit("save_ambulance_position", ambulanceData.position);
    }
  }, [ambulanceData]);

  const acceptAmbulanceRequest = () => {
    const data = ambulanceData;
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.fromLatLng(data.position.lat, data.position.lng).then((res) => {
      data.address = res.results[0].formatted_address;
      data.phoneNumber = "9923847371";
      socket.emit("driver_accept", { id: userId, data });
      showRequest(false);
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${res.results[0].formatted_address}&destination=${userData.userData.address}&travelmode=driving`
      );
    });
  };

  return (
    <>
      <div className="driver-top-container">
        <div>
          <h2 className="license-plate">
            {ambulanceData && ambulanceData.plateNumber}
          </h2>
          <span>
            {" "}
            {ambulanceData && ambulanceData.type === "als"
              ? "Advanced Life Support"
              : "Basic Life Support"}{" "}
          </span>
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
          <RecentTrips ambulanceData={ambulanceData} />
        </div>
        <Login
          open={loginDialog}
          showDialog={showLoginDialog}
          setData={setData}
        />
      </div>
      <AcceptRequestDialog
        open={request}
        setOpen={showRequest}
        acceptRequest={acceptAmbulanceRequest}
        data={userData}
      />
    </>
  );
};

export default Driver;
