import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import TodosWrapper from './components/TodosWrapper';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: lightgray;
`;

function App() {
  return (
    <MainContainer>
      <Typography variant='h1'>todos</Typography>
      <TodosWrapper />
    </MainContainer>
  );
}

export default App;
