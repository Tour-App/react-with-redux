import React from 'react';
import Todos from './Todos';
import Goals from './Goals';

function TodoList({ addTodo, todos }) {
  return (
    <div>
      <Todos addTodo={addTodo} todos={todos} />
      <Goals />
    </div>
  )
}

export default TodoList;