const initialState = {
  fname: "",
  mname: "",
  lname: "",
  DOB: "",
  age: Number,
  gender: "",
  bloodGroup: "",
  weight: Number,
  height: Number,
  emailId: "",
  aadharNo: "",

  allergies: [],
  medications: [],
  conditions: [],

  origins: [],
  destinations: [],
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERSONAL":
      return {
        ...state,
        fname: action.firstName,
        mname: action.middleName,
        lname: action.lastName,
        DOB: action.DOB,
        age: action.age,
        gender: action.gender,
        bloodGroup: action.bloodGroup,
        weight: action.weight,
        height: action.height,
        emailId: action.emailId,
        aadharNo: action.aadharNo,
      };
    case "SET_MEDICAL":
      return {
        ...state,
        allergies: action.allergies,
        medications: action.medications,
        conditions: action.conditions,
      };
    case "SET_PREFERENCES": {
      return {
        ...state,
        origins: action.origins,
        destinations: action.destinations,
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
