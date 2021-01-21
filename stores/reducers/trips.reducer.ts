import { LOAD_TRIPS } from "../actions/trips.action";

const TRIPS_INITIAL_STATE = {
  trips: [],
};

export const tripsReducer = (
  state = TRIPS_INITIAL_STATE,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case LOAD_TRIPS:
      console.log("reducer", action.payload.trips);
      return { ...state, trips: action.payload.trips };
    default:
      console.log("default");
      return state;
  }
};
