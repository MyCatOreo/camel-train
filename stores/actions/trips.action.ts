import { Trip } from "../../models/trip";

export const LOAD_TRIPS = "LOAD_TRIPS";
export const loadTrips = (userId: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        "https://camel-train-default-rtdb.firebaseio.com/db/trips.json" //TODO: query by userId
      );

      if (!response.ok) {
        console.log("load trips request error", response);
        throw new Error("load trips request error");
      }

      const data = await response.json();

      console.log("finish loading", data[0].items[0]);

      //we can also define another action, for example LOAD_TRIPS_SUCCESS
      dispatch({
        type: LOAD_TRIPS,
        payload: {
          trips: data, //TODO: handled data
        },
      });
    } catch (error) {
      console.log("load trips request error", error);
      throw error;
    }
  };
};

export const ADD_TRIP = "ADD_TRIPS";
export const addTrip = (trip: Partial<Trip>) => {
  return { type: LOAD_TRIPS, payload: { trip: trip } };
};
