import React from "react";

import Header from "../../components/Header/Header";
import TodoCreator from "./containers/TodoCreator/TodoCreator";
import TodoList from "./containers/TodoList/TodoList";

function TodoApp() {
  return (
    <>
      <Header>
        <TodoCreator />
        <select>
          <option>all</option>
        </select>
      </Header>
      <TodoList />
      {/* <footer>Todo Footer</footer> */}
    </>
  );
}

export default TodoApp;
