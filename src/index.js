import React from 'react';
import ReactDOM from 'react-dom/client';

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './store/reducers/root';
import { addTodoAction } from './store/actions/todos';

const logger = createLogger({
  collapsed: () => true,
  colors: {
    title: () => '#D500F9',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404'
  },
  diff: true
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

store.dispatch(addTodoAction('Aprender React'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
