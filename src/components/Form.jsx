import React, { useState } from "react";

export function Form({ createTask }) {

  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(taskName);
    setTaskName("");
  };

  function handleChange(e) {
    setTaskName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
     <div className="col-9">
     <input 
        value={taskName}
        onChange={handleChange}
        type="text"
        placeholder="Guarda una nueva tarea"
        className="form-control"
      />
     </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Guardar Tarea</button>
      </div>
    </form>
  );
}
