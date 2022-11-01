import React from 'react';

export interface TodoType {
  id: number;
  title: string;
  isComplete: boolean;
  isShow: boolean;
}

export interface TodoItemType {
  item: TodoType;
  toggleCompleted?: (item: TodoType) => void;
}

export interface TodoListType {
  todos: TodoType[];
  toggleCompleted: (item: TodoType) => void;
}

export interface TodosWrapperType {
  todos: TodoType[];
  toggleCompleted: (item: TodoType) => void;
  hideCompletedTodos: (arr: TodoType[]) => void;

  showAllTodos: (arr: TodoType[]) => void;
  showCompletedTodos: (arr: TodoType[]) => void;

  addNewTodo: (item: string) => void;
}

export interface ControlPanelType {
  todos: TodoType[];
  hideCompletedTodos: (arr: TodoType[]) => void;

  showAllTodos: (arr: TodoType[]) => void;
  showCompletedTodos: (arr: TodoType[]) => void;
}

export interface ControlButtonType {
  title: string;
  buttonHandler: React.MouseEventHandler<HTMLButtonElement>;
}
