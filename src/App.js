import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  const addTask = (userInput) => {
    if (userInput) {
      setTasks([...tasks, userInput]); // Adds a new task to the tasks array
    }
  };

  const removeTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]); // Removes a task from the tasks array
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} /> 
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
