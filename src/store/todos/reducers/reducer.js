import uuidv4 from "uuid/v4";

import * as todoTypes from "../actions/types";

function reducer(state, { type, payload }) {
  switch (type) {
    case todoTypes.ADD_TODO:
      return state.concat({
        id: uuidv4(),
        title: payload.title,
        completed: false
      });
    case todoTypes.UPDATE_TOGGLE_TODO_STATUS:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: payload.completed
          };
        } else {
          return todo;
        }
      });
    case todoTypes.UPDATE_TOGGLE_TODO_TITLE:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.title
          };
        } else {
          return todo;
        }
      });
    case todoTypes.REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== payload.id;
      });
    default:
      throw new Error();
  }
}

export default reducer;
