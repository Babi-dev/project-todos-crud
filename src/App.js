import React from "react";

import TodosProvider from "./store/todos/Provider";
import FilterProvider from "./store/filter/Provider";

export default function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <h1>Hello Word!</h1>
      </FilterProvider>
    </TodosProvider>
  );
}
