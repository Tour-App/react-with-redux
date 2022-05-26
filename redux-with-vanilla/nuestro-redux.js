/* eslint-disable default-case */
console.log('Saludos desde nuestro redux');

// let action = {
//   type: 'ADD_TODO',
//   todo: 'Terminar el store de redux'
// }

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
// El REDUCER
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO' :
      return state.concat([action.todo])
    case 'REMOVE_TODO' :
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE_TODO': 
      // return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
      return state.map((todo) => todo.id !== action.id ? todo : { ...todo, complete: !todo.complete })
    case 'ERRASE_TODOS': 
      return []
    default: return state
  }
}

function goals(state = [], action) {
  switch(action.type) {
    case 'ADD_GOAL': 
      return state.concat([action.goal])
    case 'REMOVE_GOAL': 
      return state.filter((goal) => goal.id !== action.id)
    default: return state;
  }
}

function app(state = {}, action) {
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

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Aprender Redux',
    complete: false
  }
})

