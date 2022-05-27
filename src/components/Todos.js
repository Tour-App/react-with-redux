import React, { useState } from 'react';
import List from './List';

function Todos({ addTodo, todos }) {
  const [input, setInput] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    addTodo(input);
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder="Add Todo" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Add Todo</button>
      <List elements={todos} />
    </div>
  )
}

export default Todos;
