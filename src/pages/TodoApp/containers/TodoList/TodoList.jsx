import React, { useContext, useState, useCallback } from "react";

import TodosContext from "../../../../store/todos/Context";
import * as todosActions from "../../../../store/todos/actions/actions";
import FilterContext from "../../../../store/filter/Context";

import TodoItem from "./components/TodoItem/TodoItem";
import TodoModal from "./components/TodoModal/TodoModal";

import filteredList from "../../../../utils/functions";

import { Content, List } from "./TodoList.style";

function TodoList() {
  const { todos, dispatchToTodos } = useContext(TodosContext);

  const [curId, setCurId] = useState(null);

  const handleTitleUpdate = useCallback(
    (id, title) => {
      dispatchToTodos(todosActions.toggleTodoTitle(id, title));
    },
    [dispatchToTodos]
  );

  const handleDelete = useCallback(
    id => {
      dispatchToTodos(todosActions.removeTodo(id));
    },
    [dispatchToTodos]
  );

  const handleStatusUpdate = useCallback(
    (id, completed) => {
      dispatchToTodos(todosActions.toggleTodoStatus(id, completed));
    },
    [dispatchToTodos]
  );

  const handleModalOpen = useCallback(id => {
    setCurId(id);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurId(null);
  }, []);

  const getTitle = useCallback(
    id => {
      const curTodo = todos.find(todo => {
        return todo.id === id;
      });
      return curTodo.title;
    },
    [todos]
  );

  const { filter } = useContext(FilterContext);

  return (
    <Content>
      <List>
        {filteredList(todos, filter).map(todo => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onModalOpen={handleModalOpen}
              onStatusUpdate={handleStatusUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </List>
      {curId && (
        <TodoModal
          id={curId}
          onModalClose={handleModalClose}
          onTitleUpdate={handleTitleUpdate}
          findTitle={getTitle}
        />
      )}
    </Content>
  );
}

export default TodoList;
