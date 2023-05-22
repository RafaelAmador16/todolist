import React from 'react'
import Task from './Task'

const Tasks = ({tarea}) => {
  return (
    <div>
        Conjunto de tareas
        <Task {...tarea}/>
    </div>
  )
}

export default Tasks