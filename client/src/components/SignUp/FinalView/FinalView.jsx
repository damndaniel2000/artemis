import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import { makeAccount } from "../../../state/actions/signup";

import "./FinalView.css";

const useStyles = makeStyles((theme) => ({
  navButtons: {
    width: 100,
  },
}));

const FinalView = ({ setStep }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const data = useSelector((state) => state.signupReducer, shallowEqual);

  const showMedicalRecords =
    data.allergies.length > 0 &&
    data.conditions.length > 0 &&
    data.medications.length > 0;

  console.log(data);

  return (
    <div className="final-view">
      <div>
        <h2>Personal Data</h2>
        <div className="signup-form">
          <div className="signup-form-row">
            <div>
              <label>First Name </label>
              <br />
              <p>{data.firstName}</p>
            </div>
            <div>
              <label>Middle Name </label>
              <br />
              <p> {data.middleName} </p>
            </div>
            <div>
              <label>Last Name </label>
              <br />
              <p> {data.lastName} </p>
            </div>
          </div>
          <div className="signup-form-row">
            <div>
              <label>Date of Birth </label>
              <br />
              <p> {data.DOB}</p>
            </div>
            <div>
              <label>Age </label>
              <br />
              <p> {data.age} </p>
            </div>
            <div>
              <label>Gender </label>
              <br />
              <p> {data.gender} </p>
            </div>
          </div>
          <div className="signup-form-row">
            <div>
              <label>Blood Group </label>
              <br />
              <p> {data.bloodGroup} </p>
            </div>
            <div>
              <label>Weight </label>
              <br />
              <p> {data.weight} </p>
            </div>
            <div>
              <label>Height </label>
              <br />
              <p> {data.height} </p>
            </div>
          </div>
          <div className="signup-form-row">
            <div>
              <label>Email Address</label>
              <br />
              <p>{data.emailId}</p>
            </div>
            <div>
              <label>Aadhar Card Number</label>
              <br />
              <p> {data.aadharNo} </p>
            </div>
          </div>
        </div>
      </div>
      {showMedicalRecords && (
        <div>
          <h2>Medical History</h2>
          {data.allergies.length > 0 && (
            <div className="medical">
              <div className="medical-field-name">Allergies :</div>
              <div>
                {data.allergies.map((item, index) => (
                  <div className="medical-field-container">
                    <div>
                      <div className="medical-field">
                        <label>Allergy Cause</label>
                        <br />
                        <span>{item.cause}</span>
                      </div>
                      <div className="medical-field">
                        <label>Symptoms</label>
                        <br />
                        <span>{item.symptoms}</span>
                      </div>
                      <div className="medical-field">
                        <label>Medication</label>
                        <br />
                        <span>{item.medicine}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.medications.length > 0 && (
            <div className="medical">
              <div className="medical-field-name">Medicines :</div>
              <div>
                {data.medications.map((item, index) => (
                  <div className="medical-field-container">
                    <div>
                      <div className="medical-field">
                        <label>Medicine Name</label>
                        <br />
                        <span>{item.name}</span>
                      </div>
                      <div className="medical-field">
                        <label>Using Medicine For</label>
                        <br />
                        <span>{item.usage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.conditions.length > 0 && (
            <div className="medical">
              <div className="medical-field-name">Conditions :</div>
              <div>
                {data.conditions.map((item, index) => (
                  <div className="medical-field-container">
                    <div>
                      <div className="medical-field">
                        <label>Condition Name</label>
                        <br />
                        <span>{item.name}</span>
                      </div>
                      <div className="medical-field">
                        <label>Condition Since</label>
                        <br />
                        <span>{item.since}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="finalView-preferences">
        <h2> Location Preferences </h2>
        <h4 style={{ textAlign: "left", color: "#ff0800", marginBottom: 10 }}>
          Pick-Up Locations
        </h4>
        <div className="finalView-preferences-imgs">
          {data.origins.map((item) => (
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?markers=${item}&zoom=17&scale=1&size=250x150&maptype=roadmap&key=AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA&format=png&visual_refresh=true`}
            />
          ))}
        </div>
        <h4 style={{ textAlign: "left", color: "#ff0800", marginBottom: 10 }}>
          Hospital Locations
        </h4>
        <div className="finalView-preferences-imgs">
          {data.destinations.map((item) => (
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${item}&zoom=17&scale=1&size=250x150&maptype=roadmap&key=AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA&format=jpg&visual_refresh=true`}
            />
          ))}
        </div>
      </div>
      <div className="signup-navButtons-container">
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => {
            setStep(2);
          }}
        >
          PREVIOUS
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => dispatch(makeAccount())}
        >
          FINISH
        </Button>
      </div>
    </div>
  );
};

export default FinalView;
