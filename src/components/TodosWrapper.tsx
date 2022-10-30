import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

import Todos from './Todos';

const StyledTodoWrapper = styled.div`
  background-color: #fff;
  width: 500px;
  margin-top: 20px;
  padding: 20px;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const TodosWrapper = () => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    console.log(value);
  };

  return (
    <StyledTodoWrapper>
      <TextField
        onChange={(event) => handleChange(event)}
        fullWidth
        autoComplete='off'
        variant='standard'
        placeholder='What needs to be done?'
      />

      <Todos />
    </StyledTodoWrapper>
  );
};

export default TodosWrapper;