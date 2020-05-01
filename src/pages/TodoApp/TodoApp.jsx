import React from "react";

import Header from "../../components/Header/Header";
import TodoCreator from "./containers/TodoCreator/TodoCreator";
import TodoList from "./containers/TodoList/TodoList";
import TodoFilter from "./containers/TodoFilter/TodoFilter";

function TodoApp() {
  return (
    <>
      <Header>
        <TodoCreator />
        <TodoFilter />
      </Header>
      <TodoList />
    </>
  );
}

export default TodoApp;
