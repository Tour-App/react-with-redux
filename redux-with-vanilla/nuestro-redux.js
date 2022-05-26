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
      listeners = listeners.filter((l) => l !== listener)
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
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  if (action.type === 'ERRASE_TODOS') {
    return state = [];
  }

  return state;
}

const store = createStore(todos);

store.subscribe(() => {
  console.log('El nuevo estado es: ', store.getState());
})

const unsubscribe = store.subscribe(() => {
  console.log('El store cambió');
})

// unsubscribe();