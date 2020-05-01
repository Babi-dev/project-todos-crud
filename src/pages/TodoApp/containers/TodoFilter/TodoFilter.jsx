import React, { useContext, useCallback, useState, useEffect } from "react";

import TodoSelect from "./components/TodoSelect/TodoSelect";

import FilterContext from "../../../../store/filter/Context";
import * as filterActions from "../../../../store/filter/actions/actions";

function TodoFilter() {
  const { filter, dispatchToFilter } = useContext(FilterContext);

  const [select, setSelect] = useState(filter);

  const handleOptionChage = useCallback(
    event => {
      setSelect(event.target.value);
    },
    [setSelect]
  );

  const updateFilter = useCallback(
    filter => {
      dispatchToFilter(filterActions.toggleFilter(filter));
    },
    [dispatchToFilter]
  );

  useEffect(() => {
    updateFilter(select);
  }, [updateFilter, select]);

  return (
    <>
      <TodoSelect
        valueDefault={select}
        onOptionChange={handleOptionChage}
        options={[
          { value: "all", title: "All tasks" },
          { value: "active", title: "Tasks to do" },
          { value: "completed", title: "Tasks performed" }
        ]}
      />
    </>
  );
}

export default TodoFilter;
