import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import TodosWrapper from './components/TodosWrapper';
// eslint-disable-next-line
import { TodoType } from './types/types';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: lightgray;
`;

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Тестовое задание', isComplete: false },
    { id: 2, title: 'Прекрасный код', isComplete: true },
    { id: 3, title: 'Покрытие тестами', isComplete: false },
  ]);

  const toggleCompleted = (item: TodoType) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <MainContainer>
      <Typography variant='h1'>todos</Typography>
      <TodosWrapper todos={todos} toggleCompleted={toggleCompleted} />
    </MainContainer>
  );
};

export default App;
