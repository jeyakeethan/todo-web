import React from "react";
import "../styles/TodoBlock.css";

const TodoBlock = ({ task, onMarkDone }) => {
  return (
    <div className="todo-block">
      <div className="todo-content">
        <h3 className="todo-title">{task.title}</h3>
        <p className="todo-description">{task.description}</p>
        <button className="done-button" onClick={() => onMarkDone(task.id)}>
          Done
        </button>
      </div>
    </div>
  );
};

export default TodoBlock;
