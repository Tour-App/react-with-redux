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

export default createStore
