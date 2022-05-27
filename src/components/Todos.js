import React, { useState } from 'react';
import { connect } from 'react-redux';
import List from './List';

import { addTodoAction } from '../store/actions/todos';

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

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodoAction(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
