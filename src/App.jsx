
import './App.css'
import Nav from './components/nav/Nav'
import NewTask from './components/newTask/NewTask'
import Task from './components/task/Task'
import Footer from './components/footer/Footer'
import { useState } from "react";

const initialStateTareas = [];

function App() {
  const [tarea, setTarea] = useState(initialStateTareas);
  return (
    <div className="App">
      <Nav />
      <NewTask setTarea={setTarea} tarea={tarea} />
      <Task  tarea={tarea} setTarea={setTarea}/>
      <Footer />
    </div>
  )
}

export default App
