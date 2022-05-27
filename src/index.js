import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import createStore from './store';
import rootReducer from './store/reducers/root';
import { addTodoAction } from './store/actions/todos';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('El estado de Redux cambió', store.getState());
})

store.dispatch(addTodoAction('Aprender React'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
