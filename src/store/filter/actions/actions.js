import * as filterTypes from "./types";

export const toggleFilter = filter => {
  return {
    type: filterTypes.SET_TOGGLE_FILTER,
    payload: {
      filter
    }
  };
};
