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
    { id: 1, title: 'Тестовое задание', isComplete: false, isShow: true },
    { id: 2, title: 'Прекрасный код', isComplete: true, isShow: true },
    { id: 3, title: 'Покрытие тестами', isComplete: false, isShow: true },
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

  const showAllTodos = (todos: TodoType[]) => {
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isShow: true,
      };
    });
    setTodos(newTodos);
  };

  const hideCompletedTodos = (todos: TodoType[]) => {
    const newTodos = todos.map((todo) => {
      if (todo.isComplete) {
        return {
          ...todo,
          isShow: false,
        };
      } else {
        return {
          ...todo,
          isShow: true,
        };
      }
    });
    setTodos(newTodos);
  };

  const showCompletedTodos = (todos: TodoType[]) => {
    showAllTodos(todos);
    const newTodos = todos.map((todo) => {
      if (todo.isComplete) {
        return {
          ...todo,
          isShow: true,
        };
      } else {
        return {
          ...todo,
          isShow: false,
        };
      }
    });
    setTodos(newTodos);
  };

  const addNewTodo = (item: string) => {
    const newTodo = {
      id: todos.length + 1,
      title: item,
      isComplete: false,
      isShow: true,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <MainContainer>
      <Typography variant='h1'>todos</Typography>
      <TodosWrapper
        todos={todos}
        toggleCompleted={toggleCompleted}
        hideCompletedTodos={hideCompletedTodos}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        addNewTodo={addNewTodo}
      />
    </MainContainer>
  );
};

export default App;
