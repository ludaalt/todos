import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodoListType } from '../types/types';

const TodosList = styled.ul`
  margin-top: 20px;
`;
// eslint-disable-next-line

const Todos: React.FC<TodoListType> = ({ todos }) => {
  return (
    <TodosList>
      {todos?.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </TodosList>
  );
};

export default Todos;
