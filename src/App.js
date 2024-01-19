import React, { useState } from 'react';
import './app.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
      <div className="todo-container">
        <h1>ToDo App</h1>
        <div className="add-task-container">
          <input
              type="text"
              placeholder="Введите новую задачу"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress}
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
  );
};

export default TodoApp;

