import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
// eslint-disable-next-line
import { ControlPanelType } from '../types/types';

import ControlButton from './ControlButton';
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
        <ControlButton title='All' buttonHandler={() => showAllTodos(todos)} />
        <ControlButton
          title='Active'
          buttonHandler={() => hideCompletedTodos(todos)}
        />
        <ControlButton
          title='Completed'
          buttonHandler={() => showCompletedTodos(todos)}
        />
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
