import { combineReducers } from "redux";

import bookingReducer from "./booking";
import signupReducer from "./signup";

const rootReducer = combineReducers({
  bookingReducer,
  signupReducer,
});

export default rootReducer;
