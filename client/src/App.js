import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { ThemeProvider } from "@material-ui/core";

import "./App.css";
import theme from "./UI/Theme/theme";

import Landing from "./components/LandingContent/LandingContent";
import SignUp from "./components/SignUp/SignUp";
import Booking from "./components/Booking/Booking";
import Driver from "./components/Driver/Driver";

const apiKey = "AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA";

const App = () => {
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
