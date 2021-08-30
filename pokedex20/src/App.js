import React from 'react';
import Routes from './router/Routes';
import styled from 'styled-components';
import GlobalState from './global/GlobalState';

const GlobalStyles = styled.div`
  font-family: Nunito Sans;
`;

function App() {
  return (
    <GlobalStyles>
      <GlobalState>
        <Routes />
      </GlobalState>
    </GlobalStyles>
  );
}

export default App;
