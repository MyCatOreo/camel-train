import { Item } from "../../models/item";

export const LOAD_ITEMS = "LOAD_ITEMS";
export const loadTrips = (listName: string) => {
  return { type: LOAD_ITEMS, payload: { listName: listName } };
};
