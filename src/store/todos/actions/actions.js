import * as todosTypes from "./types";

export const addTodo = title => {
  return {
    type: todosTypes.ADD_TODO,
    payload: {
      title
    }
  };
};

export const toggleTodoStatus = (id, completed) => {
  return {
    type: todosTypes.UPDATE_TOGGLE_TODO_STATUS,
    payload: {
      id,
      completed
    }
  };
};

export const toggleTodoTitle = (id, title) => {
  return {
    type: todosTypes.UPDATE_TOGGLE_TODO_TITLE,
    payload: {
      id,
      title
    }
  };
};

export const removeTodo = id => {
  return {
    type: todosTypes.REMOVE_TODO,
    payload: {
      id
    }
  };
};
