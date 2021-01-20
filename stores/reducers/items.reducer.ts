const ITEMS_INITIAL_STATE = {
  items: {
    camping: [],
  },
};

export const itemsReducer = (
  state = ITEMS_INITIAL_STATE,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
