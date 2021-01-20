const TRIPS_INITIAL_STATE = {
  trips: [],
};

export const tripsReducer = (
  state = TRIPS_INITIAL_STATE,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
