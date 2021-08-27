import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: 98vh;
`;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

function PokedexPage() {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <h2>Pokedex</h2>
        <button onClick={goBack}>Voltar para lista</button>
      </HeaderContainer>
      <MainContainer>

      </MainContainer>
      <Footer />
    </PageContainer>
  );
}

export default PokedexPage;
