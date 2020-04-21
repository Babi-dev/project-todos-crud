import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import TodosContext from "../../../../store/todos/Context";
import * as todosActions from "../../../../store/todos/actions/actions";

import { Container } from "./TodoCreate.style";

function TodoCreator() {
  const { dispatchToTodos } = useContext(TodosContext);
  const { getFieldProps, handleSubmit, touched, errors, isValid } = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: yup.object({
      title: yup.string().required("You need to complete with a task")
    }),
    onSubmit: (values, formikBag) => {
      dispatchToTodos(todosActions.addTodo(values.title));
      formikBag.setFieldValue("title", "");
    }
  });

  const inputTitle = useRef(null);
  useEffect(() => {
    // inputTitle.current.focus();
  }, [inputTitle]);

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        autoComplete="off"
        ref={inputTitle}
        {...getFieldProps("title")}
      />
      {touched.title && errors.title ? <small>{errors.title}</small> : null}
      <button type="submit" disabled={!isValid}>
        Add Task
      </button>
    </Container>
  );
}

export default TodoCreator;
