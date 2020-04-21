import * as todoTypes from "./types";

export const addTodo = title => {
  return {
    type: todoTypes.ADD_TODO,
    payload: {
      title
    }
  };
};

export const toggleTodoStatus = (id, completed) => {
  return {
    type: todoTypes.UPDATE_TOGGLE_TODO_STATUS,
    payload: {
      id,
      completed
    }
  };
};

export const toggleTodoTitle = (id, title) => {
  return {
    type: todoTypes.UPDATE_TOGGLE_TODO_TITLE,
    payload: {
      id,
      title
    }
  };
};

export const removeTodo = id => {
  return {
    type: todoTypes.REMOVE_TODO,
    payload: {
      id
    }
  };
};
