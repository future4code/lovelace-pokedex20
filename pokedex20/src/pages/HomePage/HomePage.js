import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import useGetPokemons from '../../service/useGetPokemons';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import GlobalStateContext from '../../global/GlobalStateContext';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: 98vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
`;

function HomePage() {
  const { state } = useContext(GlobalStateContext);

  const renderPokemons = state.pokemons.map((pokemon) => {
    return (
      <Card name={pokemon.name} key={pokemon.name}>
        {pokemon.name}
      </Card>
    );
  });

  return (
    <PageContainer>
      <HeaderContainer>
        <h2>Pokemon List</h2>
        <Link to={'/pokedex'}>
          <button>Pokedex</button>
        </Link>
      </HeaderContainer>
      <Container>
        {renderPokemons}
      </Container>
      <Footer />
    </PageContainer>
  );
}

export default HomePage;
