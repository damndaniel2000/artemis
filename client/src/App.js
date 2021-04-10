import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { ThemeProvider } from "@material-ui/core";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import Axios from "axios";

import "./App.css";
import theme from "./UI/Theme/theme";

import Landing from "./components/LandingContent/LandingContent";
import SignUp from "./components/SignUp/SignUp";
import Booking from "./components/Booking/Booking";
import Driver from "./components/Driver/Driver";

import { saveAmbulancePositions } from "./state/actions/booking";
import { saveUserData, setAuth } from "./state/actions/user";

const apiKey = "AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA";
const socket = io.connect("/");

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("art-auth");

  React.useEffect(() => {
    socket.emit("get_ambulance_positions_request");
    socket.on("get_ambulance_positions_response", (data) => {
      console.log(data);
      dispatch(saveAmbulancePositions(data));
    });
  }, [socket.json]);
  React.useEffect(() => {
    if (token !== null) {
      dispatch(setAuth(true));
      Axios.post("/api/users/getUserInfo", { emailId: token })
        .then((res) => dispatch(saveUserData(res.data)))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
        <Router>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/booking" component={Booking} />
              <Route exact path="/driver" component={Driver} />
            </Switch>
          </ThemeProvider>
        </Router>
      </LoadScript>
    </>
  );
};

export default App;
