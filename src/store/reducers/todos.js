import { todosTypes } from '../types';

function todosReducer(state = [], action) {
  switch (action.type) {
    case todosTypes.ADD_TODO :
      return state.concat([action.todo])
    case todosTypes.REMOVE_TODO :
      return state.filter((todo) => todo.id !== action.id)
    case todosTypes.TOGGLE_TODO: 
      // return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
      return state.map((todo) => todo.id !== action.id ? todo : { ...todo, complete: !todo.complete })
    case todosTypes.ERRASE_TODOS: 
      return []
    default: return state
  }
}

export default todosReducer;
