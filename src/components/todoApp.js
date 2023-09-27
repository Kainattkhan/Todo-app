import React, { useState } from 'react';
import './todoApp.css'

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to edit a task
  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Add your tasks here!</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
            
          <li key={index}>
            {task}     
              <button  onClick={() => editTask(index, prompt('Edit task:', task))}>Edit</button>
              <button  onClick={() => deleteTask(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
