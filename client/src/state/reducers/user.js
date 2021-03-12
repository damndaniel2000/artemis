const initialState = {
  auth: null,
  userData: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: action.auth,
      };
    case "SAVE_USER_DETAILS":
      return {
        ...state,
        userData: action.userData,
      };

    default:
      return state;
  }
};

export default bookingReducer;
