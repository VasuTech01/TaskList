import React, { useState, useEffect } from "react";

function CompTodos({ todos, setTodos }) {
    function deleteHandler(id) {
        const comptodos = todos.filter(td => td.id !== id);
        setTodos(comptodos);
    } 
  return (
    <div className="comptodos">
        <h2 style={{textAlign:"center"}}>Completed Tasks</h2>
      {todos.map((td) => (td.completed&&
        <div className="todo">
          <p className="todo-item completed">{td.text}</p>
          <button onClick={()=> deleteHandler(td.id)} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default CompTodos;
