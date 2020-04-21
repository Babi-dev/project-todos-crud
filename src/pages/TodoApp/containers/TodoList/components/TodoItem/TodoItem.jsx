import React, { useState, useCallback, useEffect } from "react";

import { ListItem } from "../../TodoList.style";

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

  const handleTitleUpdate = useCallback(() => {
    onModalOpen(id);
  }, [onModalOpen, id]);

  const hanldeDelete = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <ListItem>
      <span>{title}</span>
      <button onClick={handleTitleUpdate}>Update</button>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <button onClick={hanldeDelete}>Delete</button>
    </ListItem>
  );
};

export default TodoItem;
