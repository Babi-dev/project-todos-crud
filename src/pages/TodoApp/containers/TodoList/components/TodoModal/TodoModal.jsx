import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  Content,
  InputContent,
  Input,
  ErrMessage,
  Button
} from "../../../TodoCreator/TodoCreate.style";

function TodoModal({ onModalClose, onTitleUpdate, id }) {
  const { getFieldProps, handleSubmit, touched, errors, isValid } = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: yup.object({
      title: yup.string().required("You need to complete with a task")
    }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "", false);
    }
  });
  return (
    <>
      <Content onSubmit={handleSubmit}>
        <InputContent>
          <Input
            type="text"
            placeholder="New Title"
            autoComplete="off"
            // ref={inputTitle}
            {...getFieldProps("title")}
          />
          {touched.title && errors.title ? (
            <ErrMessage>{errors.title}</ErrMessage>
          ) : null}
        </InputContent>
        <Button type="submit" disabled={!isValid}>
          Update Task
        </Button>
      </Content>
      <button onClick={onModalClose}>Close</button>
    </>
  );
}

export default TodoModal;
