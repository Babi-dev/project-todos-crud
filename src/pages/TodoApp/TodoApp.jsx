import React from "react";

import Header from "../../components/Header/Header";
import TodoCreator from "./containers/TodoCreator/TodoCreator";

function TodoApp() {
  return (
    <>
      <Header>
        <TodoCreator />
        <select>
          <option>all</option>
        </select>
      </Header>
      <main>Todo List</main>
      <footer>Todo Footer</footer>
    </>
  );
}

export default TodoApp;
