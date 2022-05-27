import todosReducer from './todos';
import goalsReducer from './goals';

const INITIAL_STATE = {
  todos: [],
  goals: []
}

function rootReducer(state = INITIAL_STATE, action) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}

export default rootReducer;
