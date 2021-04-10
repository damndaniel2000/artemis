import React, { useState, useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { config } from "../../firebase";
import firebase from "firebase";

import "./LandingContent.css";
import backgroundImg from "./background.png";

import NavBar from "./NavBar/NavBar";
import OriginSearchBar from "./SearchBar/OriginSearchBar";
import UserButtons from "./UserButtons/UserButtons";
import Login from "./Login/Login.jsx";
import PhoneVerification from "./PhoneVerification/PhoneVerification";
import OTPVerification from "./PhoneVerification/OTPInput";

const app = firebase.initializeApp(config);

const Landing = () => {
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

  const phoneNumber = React.useRef(null);
  const [otp, setOtpFromInput] = useState();
  const [otpReply, setOtpReply] = useState();

  const [notification, setNotification] = useState({
    show: false,
  });

  const sendOTP = () => {
    const number = "+91" + phoneNumber.current.value;
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");

    app
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        setOtpReply(res);
        setOTP(true);
        setPhone(false);
        setPhoneTrans(false);
      })
      .catch((err) => console.log(err));
  };

  const handleNotificationClose = () => setNotification({ show: false });

  useEffect(() => {
    if (otp)
      otpReply
        .confirm(otp)
        .then((res) => {
          setSearch(true);
          setOTP(false);
          setOTPTrans(false);
        })
        .catch((err) =>
          setNotification({
            show: true,
            text: "Invalid Code",
            severity: "error",
          })
        );
  }, [otp]);

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
            phoneNumber={phoneNumber}
            sendOTP={sendOTP}
          />
        )}
        {showOTP && (
          <OTPVerification
            showOTP={setOTP}
            showPhone={setPhone}
            showSearch={setSearch}
            otpTrans={otpTrans}
            changeOTPTrans={setOTPTrans}
            setOtp={setOtpFromInput}
            phoneNumber={phoneNumber}
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
      <Snackbar
        open={notification.show}
        autoHideDuration={5000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleNotificationClose}
          severity={notification.severity}
          variant="filled"
        >
          {notification.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Landing;
