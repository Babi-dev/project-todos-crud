import React from "react";

import { Select, Option } from "../../TodoFilter.style";

function TodoSelect({ valueDefault, onOptionChange, options }) {
  return (
    <Select value={valueDefault} onChange={onOptionChange}>
      {options.map(option => {
        return (
          <Option key={option.value} value={option.value}>
            {option.title}
          </Option>
        );
      })}
    </Select>
  );
}

export default TodoSelect;
