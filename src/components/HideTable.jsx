import React from "react";

function HideTable({ setshowCompleted, deleteTask, isChecked }) {
  const handleClick = () => {
    if (confirm("¿Are you sure you want delete it?")) {
      deleteTask();
    }
  };

  return (
    <div className=" d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />
        <label>
          {" "}
          <b>Mostrar Tareas Hechas</b>{" "}
        </label>
      </div>

      <button className="btn btn-danger btn-sm" onClick={handleClick}>
        Limpiar
      </button>
    </div>
  );
}

export default HideTable;
