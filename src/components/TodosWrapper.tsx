import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

import Todos from './Todos';
import ControlPanel from './ControlPanel';
// eslint-disable-next-line
import { TodosWrapperType } from '../types/types';

const StyledTodoWrapper = styled.div`
  background-color: #fff;
  width: 500px;
  margin-top: 20px;
  padding: 20px;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const TodosWrapper: React.FC<TodosWrapperType> = ({
  todos,
  toggleCompleted,
  hideCompletedTodos,
  showAllTodos,
  showCompletedTodos,
  addNewTodo,
}) => {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;

    setCurrentInputValue(value);
  };

  const submitValue = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (currentInputValue.length > 2) {
      addNewTodo(currentInputValue);
      setCurrentInputValue('');
      setError('');
    } else {
      setError('Пожалуйста, введите корректное название задачи');
    }
  };

  return (
    <StyledTodoWrapper>
      <form onSubmit={submitValue}>
        <TextField
          error={!!error}
          onChange={(event) => handleInputChange(event)}
          fullWidth
          autoComplete='off'
          variant='standard'
          placeholder='What needs to be done?'
          value={currentInputValue}
        />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Todos todos={todos} toggleCompleted={toggleCompleted} />
      <ControlPanel
        todos={todos}
        hideCompletedTodos={hideCompletedTodos}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
      />
    </StyledTodoWrapper>
  );
};

export default TodosWrapper;
