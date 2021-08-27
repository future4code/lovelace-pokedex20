import React from 'react';
import Routes from './router/Routes';
import styled from 'styled-components';

const GlobalStyles = styled.div`
  font-family: Nunito Sans;
`;

function App() {
  return (
    <GlobalStyles>
      <Routes />
    </GlobalStyles>
  );
}

export default App;
