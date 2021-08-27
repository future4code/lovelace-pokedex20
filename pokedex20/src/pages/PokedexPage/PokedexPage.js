import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';

const PokedexContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  /* height: 98vh; */
`

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;
const MainContainer = styled.div`
  border: 1px solid green;
  width: 916px;
  height: 500px;
`;

function PokedexPage() {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <PokedexContainer>
      <HeaderContainer>
        <h2>Pokedex</h2>
        <button onClick={goBack}>Voltar para lista</button>
      </HeaderContainer>
      <MainContainer>
        <Card></Card>
      </MainContainer>
    </PokedexContainer>
  );
}

export default PokedexPage;
