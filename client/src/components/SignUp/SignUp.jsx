import React, { useState } from "react";

import "./SignUp.css";

import Personal from "./Personal/Personal";
import Medical from "./Medical/Medical";
import Preferences from "./Preferences/Preferences";
import Final from "./FinalView/FinalView";

const SignUp = () => {
  const [step, setStep] = useState(0);

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
      {step === 0 && <Personal setStep={setStep} />}
      {step === 1 && <Medical setStep={setStep} />}
      {step === 2 && <Preferences setStep={setStep} />}
      {step === 3 && <Final setStep={setStep} />}
    </>
  );
};

export default SignUp;
