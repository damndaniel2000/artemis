import { combineReducers } from "redux";

import bookingReducer from "./booking";
import signupReducer from "./signup";
import userReducer from "./user";

const rootReducer = combineReducers({
  bookingReducer,
  signupReducer,
  userReducer,
});

export default rootReducer;
