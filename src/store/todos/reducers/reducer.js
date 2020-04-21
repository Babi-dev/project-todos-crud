import * as todosTypes from "../actions/types";

const uuidv4 = require("uuid/v4");

function reducer(state, { type, payload }) {
  switch (type) {
    case todosTypes.ADD_TODO:
      return state.concat({
        id: uuidv4(),
        title: payload.title,
        completed: false
      });
    case todosTypes.UPDATE_TOGGLE_TODO_STATUS:
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
    case todosTypes.UPDATE_TOGGLE_TODO_TITLE:
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
    case todosTypes.REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== payload.id;
      });
    default:
      throw new Error();
  }
}

export default reducer;
