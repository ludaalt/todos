// eslint-disable-next-line
import { TodoType } from '../types/types';

export const countLeftTodos = (arr: TodoType[]) => {
  return arr.filter((item) => !item.isComplete).length;
};
