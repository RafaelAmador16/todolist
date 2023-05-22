import React from 'react';

const TaskItem = ({ tarea, onRemove }) => {
  return (
    <div>
      <p>{tarea}</p>
      <button onClick={() => onRemove(tarea)}>Eliminar tarea</button>
    </div>
  );
};

export default TaskItem;