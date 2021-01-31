import { Trip } from "../../models/trip";
import {
  LOAD_TRIPS,
  SET_ITEM_DONE,
  SET_ITEM_QUESTION,
  SET_ITEM_TODO,
} from "../actions/trips.action";

const TRIPS_INITIAL_STATE = {
  trips: [] as Trip[],
};

export const tripsReducer = (
  state = TRIPS_INITIAL_STATE,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case LOAD_TRIPS:
      return { ...state, trips: action.payload.trips };

    case SET_ITEM_DONE:
      const newStateDone = updateItemStatus(
        state,
        action.payload.tripId,
        action.payload.itemId,
        action.payload.userId,
        "done"
      );
      console.log(newStateDone.trips[0].items[0].status);
      return newStateDone;

    case SET_ITEM_TODO:
      const newStateTodo = updateItemStatus(
        state,
        action.payload.tripId,
        action.payload.itemId,
        action.payload.userId,
        "todo"
      );
      return newStateTodo;

    case SET_ITEM_QUESTION:
      const newStateQuestion = updateItemStatus(
        state,
        action.payload.tripId,
        action.payload.itemId,
        action.payload.userId,
        "question"
      );
      return newStateQuestion;

    default:
      return state;
  }
};

const updateItemStatus = (
  state: typeof TRIPS_INITIAL_STATE,
  tripId: string,
  itemId: string,
  userId: string,
  status: string
) => {
  const trip = state.trips.find((trip) => trip.id === tripId);
  if (!trip) {
    throw new Error("Can't set item done: wrong trip id");
  }
  const item = trip.items.find((item) => item.item.id === itemId);
  if (!item) {
    throw new Error("Can't set item done: wrong item id");
  }
  if (!item.status) {
    return { ...state };
  }
  const updatedUserStatus = item.status.map((st) =>
    st.user.id === userId ? { ...st, todo: status } : st
  );
  const updatedItems = trip.items.map((item) =>
    item.item.id === itemId ? { ...item, status: updatedUserStatus } : item
  );
  const updatedTrip = state.trips.map((trip) =>
    trip.id === tripId ? { ...trip, items: updatedItems } : trip
  );
  return { ...state, trips: updatedTrip };
};
