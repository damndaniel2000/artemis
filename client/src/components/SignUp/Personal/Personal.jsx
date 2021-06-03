import React, { useState } from "react";
import { Button, Input, Select, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { setPersonalData } from "../../../state/actions/signup";

import "./Personal.css";

const Personal = ({ setStep, setNotification }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.signupReducer, shallowEqual);

  const [gender, setGender] = useState(data.gender);
  const [bloodGroup, setBloodGroup] = useState(data.bloodGroup);

  const submitForm = (e) => {
    e.preventDefault();
    if (validate()) {
      const inputArr = [
        "fname",
        "mname",
        "lname",
        "DOB",
        "age",
        "weight",
        "height",
        "phoneNo",
        "emailId",
        "aadhar",
      ];
      let personalData = {};
      inputArr.forEach((item) => {
        personalData[item] = document.getElementById(item).value;
      });
      personalData["gender"] = gender;
      personalData["bloodGroup"] = bloodGroup;

      dispatch(setPersonalData(personalData));
      setStep(1);
    }
  };

  const validate = () => {
    if (document.getElementById("phoneNo").value.length !== 10) {
      setNotification({
        show: true,
        text: "Phone number should contain 10 digits",
        severity: "error",
      });
      return false;
    }
    if (document.getElementById("aadhar").value.length !== 12) {
      setNotification({
        show: true,
        text: "Aadhar Card number should be 12 digits",
        severity: "error",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <p className="sign-up-reason">
        <span style={{ color: "#dc0005", fontWeight: "bold" }}>
          Why do we take this data? (All fields required)
        </span>
        <br />
        All this data will be sent to the driver of your ambulance who will in
        turn show it to whomsoever is in charge at the hospital. This will save
        time and easen out the whole process of admitting the patient.
      </p>
      <form
        className="signup-form"
        action=""
        autoComplete="on"
        onSubmit={submitForm}
      >
        <div className="signup-form-row">
          <div>
            <label> First Name </label>
            <br />
            <Input
              defaultValue={data.firstName}
              id="fname"
              placeholder="First"
              required
            />
          </div>
          <div>
            <label> Middle Name </label>
            <br />
            <Input
              defaultValue={data.middleName}
              id="mname"
              placeholder="Middle"
              required
            />
          </div>
          <div>
            <label> Last Name </label>
            <br />
            <Input
              defaultValue={data.lastName}
              id="lname"
              placeholder="Last"
              required
            />
          </div>
        </div>
        <div className="signup-form-row">
          <div>
            <label> Date of Birth </label>
            <br />
            <Input
              onFocus={() =>
                (document.getElementById(
                  "DOB"
                ).max = new Date().toISOString().split("T")[0])
              }
              defaultValue={data.DOB}
              id="DOB"
              type="date"
              required
            />
          </div>
          <div>
            <label> Age </label>
            <br />
            <Input
              type="number"
              placeholder="18"
              defaultValue={data.age}
              id="age"
              required
            />
          </div>
          <div>
            <label> Gender </label>
            <br />
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <MenuItem value="Male"> Male </MenuItem>
              <MenuItem value="Female"> Female </MenuItem>
              <MenuItem value="Other"> Other </MenuItem>
            </Select>
          </div>
        </div>
        <div className="signup-form-row">
          <div>
            <label> Blood Group </label>
            <br />
            <Select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <MenuItem value="A-"> A - </MenuItem>
              <MenuItem value="A+"> A + </MenuItem>
              <MenuItem value="B-"> B - </MenuItem>
              <MenuItem value="B+"> B + </MenuItem>
              <MenuItem value="O-"> O - </MenuItem>
              <MenuItem value="O+"> O + </MenuItem>
              <MenuItem value="AB-"> AB -</MenuItem>
              <MenuItem value="AB+"> AB +</MenuItem>
            </Select>
          </div>
          <div>
            <label> Weight </label>
            <br />
            <Input
              type="number"
              defaultValue={data.weight}
              id="weight"
              placeholder="kgs"
              required
            />
          </div>
          <div>
            <label> Height </label>
            <br />
            <Input
              type="number"
              defaultValue={data.height}
              id="height"
              placeholder="cms"
              required
            />
          </div>
        </div>
        <div className="signup-form-row">
          <div>
            <label> Phone Number </label>
            <br />
            <Input
              type="number"
              placeholder="+91"
              defaultValue={data.aadharNo}
              id="phoneNo"
              required
            />
          </div>
          <div>
            <label> Email Address </label>
            <br />
            <Input
              type="email"
              defaultValue={data.emailId}
              id="emailId"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label> Aadhar Card Number </label>
            <br />
            <Input
              type="number"
              defaultValue={data.aadharNo}
              id="aadhar"
              required
            />
          </div>
        </div>
        <div>
          <Button color="primary" variant="contained" type="submit">
            NEXT
          </Button>
        </div>
      </form>
    </>
  );
};

export default Personal;
