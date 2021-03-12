import Axios from "axios";

export const setPersonalData = (a) => ({
  type: "SET_PERSONAL",
  firstName: a.fname,
  middleName: a.mname,
  lastName: a.lname,
  DOB: a.DOB,
  age: a.age,
  gender: a.gender,
  bloodGroup: a.bloodGroup,
  weight: a.weight,
  height: a.height,
  emailId: a.emailId,
  aadharNo: a.aadhar,
  phoneNo: a.phoneNo,
});

export const setMedicalData = (a, b, c) => ({
  type: "SET_MEDICAL",
  allergies: a,
  medications: b,
  conditions: c,
});

export const setPreferences = (a, b) => ({
  type: "SET_PREFERENCES",
  origins: a,
  destinations: b,
});

export const setPassword = (pass) => ({
  type: "SET_PASSWORD",
  password: pass,
});

export const makeAccount = () => (dispatch, getState) => {
  const data = getState().signupReducer;

  Axios.post("/api/users/signup", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
