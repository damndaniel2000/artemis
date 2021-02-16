import React, { useState, useRef, useEffect } from "react";
import { Button, Input, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { setMedicalData } from "../../../state/actions/signup";

import CloseIcon from "@material-ui/icons/Close";

import "./Medical.css";

const useStyles = makeStyles({
  addButton: {
    borderRadius: 50,
  },
  formAddButton: {
    marginTop: "1rem",
    marginRight: "2rem",
    padding: 0,
  },
  navButtons: {
    width: 100,
  },
});

const Medical = ({ setStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.signupReducer, shallowEqual);

  const [allergies, setAllergies] = useState(data.allergies);
  const [allergyForm, showAllergyForm] = useState(true);
  const [allergyAddButton, showAllergyAddButton] = useState(false);
  const allergyCause = useRef();
  const allergySymptom = useRef();
  const allergyMedicine = useRef();

  const [medications, setMedications] = useState(data.medications);
  const [medicationForm, showMedicationForm] = useState(true);
  const [medicationAddButton, showMedicationAddButton] = useState(false);
  const medicationName = useRef();
  const medicationUsage = useRef();

  const [conditions, setConditions] = useState(data.conditions);
  const [conditionForm, showConditionForm] = useState(true);
  const [conditionAddButton, showConditionAddButton] = useState(false);
  const conditionName = useRef();
  const conditionSince = useRef();

  useEffect(() => {
    if (allergyMedicine.current && allergyMedicine.current !== null) {
      allergyCause.current.value = "";
      allergySymptom.current.value = "";
      allergyMedicine.current.value = "";
    }
  }, [allergies]);

  const addAllergy = () => {
    let arr = {
      cause: allergyCause.current.value,
      symptoms: allergySymptom.current.value,
      medicine: allergyMedicine.current.value,
    };
    setAllergies(allergies.concat(arr));
  };
  const removeAllergy = (index) => {
    const allergiesArray = [...allergies];
    if (index > -1) allergiesArray.splice(index, 1);
    setAllergies(allergiesArray);
  };

  useEffect(() => {
    if (medicationName.current && medicationName.current !== null) {
      medicationName.current.value = "";
      medicationUsage.current.value = "";
    }
  }, [medications]);

  const addMedications = () => {
    let arr = {
      name: medicationName.current.value,
      usage: medicationUsage.current.value,
    };
    setMedications(medications.concat(arr));
  };
  const removeMedication = (index) => {
    let arr = [...medications];
    if (index > -1) arr.splice(index, 1);
    setMedications(arr);
  };

  useEffect(() => {
    if (conditionName.current && conditionName.current !== null) {
      conditionName.current.value = "";
      conditionSince.current.value = "";
    }
  }, [conditions]);

  const addConditions = () => {
    let arr = {
      name: conditionName.current.value,
      since: conditionSince.current.value,
    };
    setConditions(conditions.concat(arr));
  };
  const removeCondition = (index) => {
    let arr = [...conditions];
    if (index > -1) arr.splice(index, 1);
    setConditions(arr);
  };

  const submitData = () => {
    dispatch(setMedicalData(allergies, medications, conditions));
  };

  return (
    <>
      <p className="sign-up-reason">
        <span style={{ color: "#dc0005", fontWeight: "bold" }}>
          Why do we take this data?
        </span>
        <br />
        This data will help doctors abundantly while treating you as knowing
        previous conditions or allergies can help diagnose the issue correctly.
      </p>

      <div className="medical">
        <div className="medical-field-name">Allergies :</div>
        <div>
          {allergies.map((item, index) => (
            <div className="medical-field-container">
              <div>
                <div className="medical-field">
                  <label>Allergy Cause</label>
                  <br />
                  <span>{item.cause}</span>
                </div>
                <div className="medical-field">
                  <label>Symptoms & Signs</label>
                  <br />
                  <span>{item.symptoms}</span>
                </div>
                <div className="medical-field">
                  <label>Medication</label>
                  <br />
                  <span>{item.medicine}</span>
                </div>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => removeAllergy(index)}
                />
              </div>
            </div>
          ))}

          {allergyForm && (
            <>
              <div className="medical-field-add-form">
                <div>
                  <label>Allergy Cause</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input inputRef={allergyCause} placeholder="Dust, Nuts" />
                  </div>
                </div>
                <div>
                  <label>Symptoms & Signs</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input
                      inputRef={allergySymptom}
                      placeholder="Sneezing,Rashes"
                    />
                  </div>
                </div>
                <div>
                  <label>Medication (if any)</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input
                      inputRef={allergyMedicine}
                      placeholder="Medicine Name"
                    />
                  </div>
                </div>
                <CloseIcon style={{ color: "white" }} />
              </div>
              <Button
                color="primary"
                variant="outlined"
                className={classes.formAddButton}
                onClick={addAllergy}
              >
                Add
              </Button>
            </>
          )}
        </div>
        <div className="medical-field-name">Medications :</div>
        <div>
          {medications.map((item, index) => (
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
                <div className="medical-field"></div>

                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => removeMedication(index)}
                />
              </div>
            </div>
          ))}

          {medicationForm && (
            <>
              <div className="medical-field-add-form">
                <div>
                  <label>Medicine Name</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input
                      inputRef={medicationName}
                      placeholder="Medicine Name"
                    />
                  </div>
                </div>
                <div>
                  <label>Using Medicine For</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input
                      inputRef={medicationUsage}
                      placeholder="Diabetes, BP"
                    />
                  </div>
                </div>
                <div>
                  <div className="medical-field-add-form-input-container"></div>
                </div>
                <CloseIcon style={{ color: "white" }} />
              </div>
              <Button
                color="primary"
                variant="outlined"
                className={classes.formAddButton}
                onClick={addMedications}
              >
                Add
              </Button>
            </>
          )}
        </div>

        <div className="medical-field-name">Medical Conditions :</div>
        <div>
          {conditions.map((item, index) => (
            <div className="medical-field-container">
              <div>
                <div className="medical-field">
                  <label>Condition Name</label>
                  <br />
                  <span>{item.name}</span>
                </div>
                <div className="medical-field">
                  <label>Condition since</label>
                  <br />
                  <span>{item.since}</span>
                </div>
                <div className="medical-field"></div>

                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => removeCondition(index)}
                />
              </div>
            </div>
          ))}

          {conditionForm && (
            <>
              <div className="medical-field-add-form">
                <div>
                  <label>Condition Name</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input
                      inputRef={conditionName}
                      placeholder="Arthritis, Vertigo"
                    />
                  </div>
                </div>
                <div>
                  <label>Condtion Since</label>
                  <br />
                  <div className="medical-field-add-form-input-container">
                    <Input inputRef={conditionSince} placeholder="3 years" />
                  </div>
                </div>
                <div>
                  <div className="medical-field-add-form-input-container"></div>
                </div>
                <CloseIcon style={{ color: "white" }} />
              </div>
              <Button
                color="primary"
                variant="outlined"
                className={classes.formAddButton}
                onClick={addConditions}
              >
                Add
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="signup-navButtons-container">
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => {
            setStep(0);
            submitData();
          }}
        >
          PREVIOUS
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.navButtons}
          onClick={() => {
            setStep(2);
            submitData();
          }}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default Medical;
