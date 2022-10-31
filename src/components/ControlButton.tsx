import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// eslint-disable-next-line
import { ControlButtonType } from '../types/types';

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #fff;

  &:focus {
    border: 1px solid lightgray;
  }
`;

const ControlButton: React.FC<ControlButtonType> = ({
  title,
  buttonHandler,
}) => {
  return (
    <Typography>
      <StyledButton style={{ font: 'inherit' }} onClick={buttonHandler}>
        {title}
      </StyledButton>
    </Typography>
  );
};

export default ControlButton;
