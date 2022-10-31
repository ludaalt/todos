import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
// eslint-disable-next-line
import { TodoListType } from '../types/types';

const TodosList = styled.ul`
  margin: 20px 0;
  height: 30vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    height: 50px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 5px;
  }
`;

const Todos: React.FC<TodoListType> = ({ todos, toggleCompleted }) => {
  return (
    <TodosList>
      {todos?.map((item) => (
        <TodoItem key={item.id} item={item} toggleCompleted={toggleCompleted} />
      ))}
    </TodosList>
  );
};

export default Todos;
