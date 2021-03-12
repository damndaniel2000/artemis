import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import Axios from "axios";

import "./LandingContent.css";
import backgroundImg from "./background.png";

import NavBar from "./NavBar/NavBar";
import OriginSearchBar from "./SearchBar/OriginSearchBar";
import UserButtons from "./UserButtons/UserButtons";
import Login from "./Login/Login.jsx";
import PhoneVerification from "./PhoneVerification/PhoneVerification";
import OTPVerification from "./PhoneVerification/OTPInput";

import { saveAmbulancePositions } from "../../state/actions/booking";
import { saveUserData, setAuth } from "../../state/actions/user";

const socket = io.connect("/");

const Landing = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("art-auth");

  const [showSearch, setSearch] = useState(token !== null ? true : false);
  const [showLogin, setLogin] = useState(false);
  const [showButtons, setButtons] = useState(token !== null ? false : true);
  const [showPhone, setPhone] = useState(false);
  const [showOTP, setOTP] = useState(false);

  const [firstLoad, setFirstLoad] = useState(false);
  const [endPoint, setEndpoint] = useState();

  const [logTrans, setLogTrans] = useState(true);
  const [phoneTrans, setPhoneTrans] = useState(true);
  const [otpTrans, setOTPTrans] = useState(true);

  useEffect(() => {
    socket.emit("get_ambulance_positions_request");
    socket.on("get_ambulance_positions_response", (data) => {
      dispatch(saveAmbulancePositions(data));
    });

    if (token !== null) {
      dispatch(setAuth(true));
      Axios.post("/api/users/getUserInfo", { emailId: token })
        .then((res) => dispatch(saveUserData(res.data)))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="landing-page">
      <img src={backgroundImg} className="main-map" alt="backgroundImg" />
      <div className="map-opacity"></div>
      <NavBar />
      <div className="landing-content-container">
        {showButtons && (
          <UserButtons
            showSearch={setSearch}
            showLogin={setLogin}
            showButtons={setButtons}
            showPhone={setPhone}
            handleLoad={setFirstLoad}
            firstLoad={firstLoad}
            setEndpoint={setEndpoint}
          />
        )}
        {showLogin && (
          <Login
            showLogin={setLogin}
            showButtons={setButtons}
            showSearch={setSearch}
            loginTrans={logTrans}
            changeLoginTrans={setLogTrans}
          />
        )}
        {showPhone && (
          <PhoneVerification
            showButtons={setButtons}
            showPhone={setPhone}
            showOTP={setOTP}
            phoneTrans={phoneTrans}
            changePhoneTrans={setPhoneTrans}
            changeOTPTrans={setOTPTrans}
          />
        )}
        {showOTP && (
          <OTPVerification
            showOTP={setOTP}
            showPhone={setPhone}
            showSearch={setSearch}
            otpTrans={otpTrans}
            changeOTPTrans={setOTPTrans}
          />
        )}
        {showSearch && (
          <OriginSearchBar
            showButtons={setButtons}
            showSearch={setSearch}
            showLogin={setLogin}
            showOTP={setOTP}
            changeLoginTrans={setLogTrans}
            endPoint={endPoint}
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
