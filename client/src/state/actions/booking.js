export const setOrigin = (lat, lng, place) => ({
  type: "SET_ORIGIN",
  place: place,
  lat: lat,
  lng: lng,
});
export const setDestination = (lat, lng, place) => ({
  type: "SET_DESTINATION",
  place: place,
  lat: lat,
  lng: lng,
});

export const saveAmbulancePositions = (arr) => ({
  type: "SAVE_AMBULANCE_POSITIONS",
  positionsArray: arr,
});

export const getLiveAmbulances = () => ({});
