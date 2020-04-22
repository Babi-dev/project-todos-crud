import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Icon from "../../../../../../components/Icon/Icon";

import {
  Content,
  InputContent,
  Input,
  ErrMessage,
  Button
} from "../../../TodoCreator/TodoCreate.style";
import { ContentModal, ButtonCloseModal, BackDrop } from "../../TodoList.style";

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
      onModalClose();
    }
  });
  return (
    <>
      <BackDrop onClick={onModalClose} />
      <ContentModal>
        <ButtonCloseModal onClick={onModalClose}>
          <Icon name="icon-delete-todo" width={16} height={16} />
        </ButtonCloseModal>
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
      </ContentModal>
    </>
  );
}

export default TodoModal;
