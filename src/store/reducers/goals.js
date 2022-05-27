import { goalsTypes } from '../types';

function goalsReducer(state = [], action) {
  switch(action.type) {
    case goalsTypes.ADD_GOAL: 
      return state.concat([action.goal])
    case goalsTypes.REMOVE_GOAL: 
      return state.filter((goal) => goal.id !== action.id)
    default: return state;
  }
}

export default goalsReducer;
