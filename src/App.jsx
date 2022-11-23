// import './App.css'
import { Form } from "./components/Form";
import { TableTask } from "./components/TableTask";
import React, { useState, useEffect } from "react";
import HideTable from './components/HideTable'
import Container from './components/Container'

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);

  function createTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    } else {
      alert('La tarea ya existe')
    }
  }

  // sino, parametro taskItem
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) =>
        t.name == task.name ? { name: t.name, done: !t.done } : t
      )
    );
  };

const DeleteTask= (task) => {
setTaskItems(taskItems.filter(task => task.done === false))
// como dato, la flecha de las arrow function funciona como return
setshowCompleted(false)
}

  useEffect(() => {
    let data = localStorage.getItem("Tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white p-4">
  <Container/>
      <div className="container col-md-4 offset-md-4">
      <Form createTask={createTask} />
      <TableTask tasks={taskItems} toggleTask={toggleTask} />

      <HideTable setshowCompleted={(cheked)=> setshowCompleted(cheked)}
      deleteTask={DeleteTask}
      isChecked={showCompleted}
      />

      {showCompleted === true && (
        <TableTask
          tasks={taskItems}
          toggleTask={toggleTask}
          completed={showCompleted}
        />
      )}
      </div>
  <Container/>
    </main>
  );
}

export default App;
