import { Item } from "../../models/item";

export const LOAD_TRIPS = "LOAD_ITEMS";
export const loadTrips = (listName: string) => {
  return { type: LOAD_TRIPS, payload: { listName: listName } };
};
