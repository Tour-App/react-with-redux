import React, { useState, useCallback } from 'react';
import './App.css';

// import ComponenteA from './components/ComponenteA';
import TodoList from './components/TodoList';

import { addTodoAction } from './store/actions/todos';

export const CuentaContext = React.createContext(0);

function App({ store }) {
  const [cuenta, setCuenta] = useState(0);
  const [, updateState] =useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  console.log({ store })
  store.subscribe(() => forceUpdate());

  const { todos, goals} = store.getState();

  const addTodo = (todo) => {
    store.dispatch(addTodoAction(todo));
  }

  return (
    <CuentaContext.Provider value={{ cuenta, setCuenta }}>
      <div className="App">
        <header className="App-header">
          {/* <ComponenteA /> */}
          <TodoList addTodo={addTodo} todos={todos} />
        </header>
      </div>
    </CuentaContext.Provider>
  );
}

export default App;
