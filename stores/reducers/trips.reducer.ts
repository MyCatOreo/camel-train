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
      return { ...state, trips: action.payload.trips };
    default:
      return state;
  }
};
