import React from 'react';
import TaskItem from './TaskItem'

const Task = ({ tarea, setTarea }) => {
  const handleRemove = (item) => {
    const newTarea = tarea.filter((t) => t !== item);
    setTarea(newTarea);
  };

  return (
    <div>
      <h2>Conjunto de tareas</h2>
      {tarea.map((t) => (
        <TaskItem key={t} tarea={t} onRemove={handleRemove} />
      ))}
    </div>
  );
};


export default Task;