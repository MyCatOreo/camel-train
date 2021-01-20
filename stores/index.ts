import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/items.reducer";
import { tripsReducer } from "./reducers/trips.reducer";

export const appReducer = combineReducers({
  items: itemsReducer,
  trips: tripsReducer,
});
