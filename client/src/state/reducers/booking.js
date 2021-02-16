const initialState = {
  ogLat: null,
  ogLng: null,
  originPlace: "",
  desLat: null,
  desLng: null,
  destinationPlace: "",
  ambulanceType: "",
  positionsArray: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORIGIN":
      return {
        ...state,
        ogLat: action.lat,
        ogLng: action.lng,
        originPlace: action.place,
      };
    case "SET_DESTINATION":
      return {
        ...state,
        desLat: action.lat,
        desLng: action.lng,
        destinationPlace: action.place,
      };
    case "SAVE_AMBULANCE_POSITIONS":
      return {
        ...state,
        positionsArray: action.positionsArray,
      };
    default:
      return state;
  }
};

export default bookingReducer;
