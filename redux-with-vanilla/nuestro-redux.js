/* eslint-disable default-case */
console.log('Saludos desde nuestro redux');

// let action = {
//   type: 'ADD_TODO',
//   todo: 'Terminar el store de redux'
// }

function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

function createStore(reducer) {

  // Un store debe tener cuatro partes
  // 1. El estado ✅
  // 2. Obtener el estado ✅
  // 3. Escuchar cambios al estado ✅
  // 4. Actualizar el estado ✅

  let state // Variable privada
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((lis) => lis !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// Action types
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ERRASE_TODOS = 'ERRASE_TODOS'

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// El REDUCER
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO :
      return state.concat([action.todo])
    case REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO: 
      // return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
      return state.map((todo) => todo.id !== action.id ? todo : { ...todo, complete: !todo.complete })
    case ERRASE_TODOS: 
      return []
    default: return state
  }
}

function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL: 
      return state.concat([action.goal])
    case REMOVE_GOAL: 
      return state.filter((goal) => goal.id !== action.id)
    default: return state;
  }
}

const INITIAL_STATE = {
  todos: [],
  goals: []
}

function app(state = INITIAL_STATE, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}

const store = createStore(app)

const unsubscribe1 = store.subscribe(() => {
  console.log('El nuevo estado es: ', store.getState());
})

const unsubscribe2 = store.subscribe(() => {
  console.log('El store cambió')
})


// Action creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo: {
      id: generateId(),
      complete: false,
      name: todo
    }
  }
}
