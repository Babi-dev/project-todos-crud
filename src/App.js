import React from "react";

import TodosProvider from "./store/todos/Provider";
import FilterProvider from "./store/filter/Provider";
import TodoApp from "./pages/TodoApp/TodoApp";

import GlobalStyle from "./styles/global";
import { Container } from "./styles/styles";

export default function App() {
  return (
    <Container>
      <TodosProvider>
        <FilterProvider>
          <TodoApp />
        </FilterProvider>
      </TodosProvider>
      <GlobalStyle />
    </Container>
  );
}
