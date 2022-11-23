import React from "react";
import { RowTask } from "./RowTask";

export function TableTask({ tasks, toggleTask, completed = false }) {
  const filtro = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <RowTask key={task.name} task={task} toggleTask={toggleTask} />
      ));
  };

// if (tasks.lenght === 0){
//   <p>Lista vacia</p>
// }
// Hacer validaciones al terminar

  return (
    <table className="table table-dark table-striped table-bordered border-secondary text-white">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>

      <tbody>{filtro(completed)}</tbody>
    </table>
  );
}
