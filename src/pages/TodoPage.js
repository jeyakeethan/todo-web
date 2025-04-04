import React, { useEffect, useState } from "react";
import { getTasks, addTask, markTaskAsDone } from "../services/TodoService";
import TodoBlock from "../components/TodoBlock";
import "../styles/TodoPage.css";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const handleAddTask = () => {
    if (newTask.title) {
      addTask(newTask.title, newTask.description)
        .then(() => {
          setNewTask({ title: "", description: "" });
          fetchTasks();
        })
        .catch((error) => console.error("Error adding task:", error));
    }
  };

  const handleMarkDone = (id) => {
    markTaskAsDone(id)
      .then(() => fetchTasks())
      .catch((error) => console.error("Error marking task as done:", error));
  };

  const handleKeyDown = (e) => {
    // Trigger submit on Enter key press, but only if title is non-empty
    if (e.key === 'Enter' && newTask.title.trim()) {
      handleAddTask();
    }
  };

  return (
    <div className="todo-container">
      {/* Left Column - Add Task */}
      <div className="add-task-column" onKeyDown={handleKeyDown}>
        <div className="add-task-box">
          <h2 className="add-task-title">Add a Task</h2>
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            class="text"
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Right Column - To-Do List */}
      <div className="todo-list-column">
        <div className="todo-list-container">
          {tasks.map((task) => (
            <TodoBlock key={task.id} task={task} onMarkDone={handleMarkDone} />
          ))}
        </div>
        </div>
    </div>
  );
};

export default TodoPage;
