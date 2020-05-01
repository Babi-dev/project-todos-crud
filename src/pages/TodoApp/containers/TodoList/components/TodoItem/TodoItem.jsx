import React, { useState, useCallback, useEffect } from "react";

import Icon from "../../../../../../components/Icon/Icon";

import {
  ListItem,
  Title,
  ContentButtons,
  ButtonIcon,
  CheckBox
} from "../../TodoList.style";

const TodoItem = ({
  id,
  title,
  completed,
  onModalOpen,
  onStatusUpdate,
  onDelete
}) => {
  const [isChecked, setIsChacked] = useState(completed);

  const handleChange = useCallback(event => {
    setIsChacked(event.target.checked);
  }, []);

  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [onStatusUpdate, id, isChecked]);

  const handleModalOpen = useCallback(() => {
    onModalOpen(id);
  }, [onModalOpen, id]);

  const hanldeDelete = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <ListItem>
      <Title Completed={completed}>{title}</Title>
      <ContentButtons>
        <ButtonIcon primary onClick={handleModalOpen}>
          <Icon name="icon-update-title" width={10} height={10} />
        </ButtonIcon>
        <CheckBox type="checkbox" checked={isChecked} onChange={handleChange} />
        <ButtonIcon onClick={hanldeDelete}>
          <Icon name="icon-delete-todo" width={10} height={10} />
        </ButtonIcon>
      </ContentButtons>
    </ListItem>
  );
};

export default TodoItem;
