import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
// eslint-disable-next-line
import { TodoItemType } from '../types/types';

const StyledTodoItem = styled.li`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const DoneButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 50%;
`;

const TodoItem: React.FC<TodoItemType> = ({ item, toggleCompleted }) => {
  return item.isShow ? (
    <StyledTodoItem onClick={() => toggleCompleted?.(item)}>
      <DoneButton>
        {item.isComplete && (
          <DoneIcon style={{ color: 'green', margin: 'auto' }} />
        )}
      </DoneButton>
      <Typography
        ml={2}
        sx={{
          textDecoration: item.isComplete ? 'line-through' : 'none',
        }}
      >
        {item.title}
      </Typography>
    </StyledTodoItem>
  ) : null;
};

export default TodoItem;
