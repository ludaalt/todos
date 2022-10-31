import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
// eslint-disable-next-line
import { ControlPanelType } from '../types/types';
// eslint-disable-next-line
import { countLeftTodos } from '../utils/countLeftTodos';

const StyledControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ControlPanel: React.FC<ControlPanelType> = ({
  todos,
  hideCompletedTodos,
  showAllTodos,
  showCompletedTodos,
}) => {
  return (
    <StyledControlPanel>
      <Typography>{countLeftTodos(todos)} items left</Typography>

      <div>
        <Typography>
          <button
            style={{ font: 'inherit' }}
            onClick={() => showAllTodos(todos)}
          >
            All
          </button>
        </Typography>

        <Typography>
          <button
            style={{ font: 'inherit' }}
            onClick={() => hideCompletedTodos(todos)}
          >
            Active
          </button>
        </Typography>

        <Typography>
          <button
            style={{ font: 'inherit' }}
            onClick={() => showCompletedTodos(todos)}
          >
            Completed
          </button>
        </Typography>
      </div>

      <Typography>
        <button
          style={{ font: 'inherit' }}
          onClick={() => hideCompletedTodos(todos)}
        >
          Clear completed
        </button>
      </Typography>
    </StyledControlPanel>
  );
};

export default ControlPanel;
