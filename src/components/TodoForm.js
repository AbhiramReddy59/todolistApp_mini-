import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState(''); // State to keep track of user input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting in the traditional way
    addTask(userInput); // Calls addTask function passed as a prop with current user input
    setUserInput(""); // Resets the input field to an empty string after submission
  };

  return (
    // JSX Javascript XML
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} // Updates state with user input
        placeholder="Enter a task..." // Display text in the input field when empty
      />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
