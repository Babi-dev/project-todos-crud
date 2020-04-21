import * as filterTypes from "../actions/types";

function reducer(_, { type, payload }) {
  switch (type) {
    case filterTypes.SET_TOGGLE_FILTER:
      return payload.filter;
    default:
      throw Error();
  }
}

export default reducer;
