import { Trip } from "../../models/trip";

export const LOAD_TRIPS = "LOAD_TRIPS";
export const loadTrips = (userId: string) => {
  return { type: LOAD_TRIPS, payload: { userId: userId } };
};

export const ADD_TRIP = "ADD_TRIPS";
export const addTrip = (trip: Partial<Trip>) => {
  return { type: LOAD_TRIPS, payload: { trip: trip } };
};
