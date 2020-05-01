import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import TodosContext from "../../../../store/todos/Context";
import * as todosActions from "../../../../store/todos/actions/actions";

import {
  Content,
  InputContent,
  Input,
  ErrMessage,
  Button
} from "./TodoCreate.style";

function TodoCreator() {
  const { dispatchToTodos } = useContext(TodosContext);
  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: yup.object({
      title: yup.string().required("You need to complete with a task")
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      dispatchToTodos(todosActions.addTodo(values.title));
      formikBag.setFieldValue("title", "", false);
    }
  });

  const inputTitle = useRef(null);

  useEffect(() => {
    // inputTitle.current.focus();
  }, []);

  return (
    <Content onSubmit={handleSubmit}>
      <InputContent>
        <Input
          type="text"
          placeholder="New Task"
          autoComplete="off"
          ref={inputTitle}
          {...getFieldProps("title")}
        />
        {errors.title ? <ErrMessage>{errors.title}</ErrMessage> : null}
      </InputContent>
      <Button type="submit">Add Task</Button>
    </Content>
  );
}

export default TodoCreator;
