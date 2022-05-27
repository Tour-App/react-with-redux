import { goalsTypes } from '../types';
import generateId from '../../utils/generateId';

export function addGoalAction(goal) {
  return {
    type: goalsTypes.ADD_GOAL,
    goal: {
      id: generateId(),
      name: goal,
      complete: false
    }
  }
}