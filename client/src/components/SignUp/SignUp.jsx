import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import "./SignUp.css";

import Personal from "./Personal/Personal";
import Medical from "./Medical/Medical";
import Preferences from "./Preferences/Preferences";
import Final from "./FinalView/FinalView";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [notification, setNotification] = useState({
    show: false,
  });

  const handleNotificationClose = () => setNotification({ show: false });

  React.useEffect(() => window.scrollTo(0, 0), [step]);
  return (
    <>
      <div className="multisteps-form">
        <div className="multisteps-form__progress">
          <div
            className={`multisteps-form__progress-btn ${
              step >= 0 && "js-active"
            }`}
            onClick={() => setStep(0)}
          >
            Personal
          </div>
          <div
            className={`multisteps-form__progress-btn ${
              step >= 1 && "js-active"
            }`}
          >
            Medical
          </div>
          <div
            className={`multisteps-form__progress-btn ${
              step >= 2 && "js-active"
            }`}
          >
            Preferences
          </div>
          <div
            className={`multisteps-form__progress-btn ${
              step === 3 && "js-active"
            }`}
          >
            Final
          </div>
        </div>
      </div>
      {step === 0 && (
        <Personal setStep={setStep} setNotification={setNotification} />
      )}
      {step === 1 && <Medical setStep={setStep} />}
      {step === 2 && (
        <Preferences setStep={setStep} setNotification={setNotification} />
      )}
      {step === 3 && <Final setStep={setStep} />}

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
    </>
  );
};

export default SignUp;
