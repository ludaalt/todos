import React from 'react';
import { Typography } from '@mui/material';

// eslint-disable-next-line
import { ControlButtonType } from '../types/types';

const ControlButton: React.FC<ControlButtonType> = ({
  title,
  buttonHandler,
}) => {
  return (
    <Typography>
      <button style={{ font: 'inherit' }} onClick={buttonHandler}>
        {title}
      </button>
    </Typography>
  );
};

export default ControlButton;
