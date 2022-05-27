import { todosTypes } from '../types';
import generateId from '../../utils/generateId';

export function addTodoAction(todo) {
  return {
    type: todosTypes.ADD_TODO,
    todo: {
      id: generateId(),
      name: todo,
      complete: false
    }
  }
}