import React from 'react';

function TodoList({ tasks, removeTask }) {
  return (
    <ul>
      {tasks.map((task, index) => ( // Maps over each task in the tasks array
        
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
