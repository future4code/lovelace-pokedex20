import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import useGetPokemons from '../../service/useGetPokemons';
import Card from '../../components/Card';



const HomeContainer = styled.div`
  
`
const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`


function HomePage() {

  const { pokemons, getPokemons } = useGetPokemons();

  useEffect(() => {
    getPokemons();
  }, []);

  const renderPokemons = pokemons.map((pokemon) => {
    return (
      <Card name={pokemon.name} key={pokemon.name}>
        {pokemon.name}
      </Card>
    );
  });

  return (
    <HomeContainer>
      <HeaderContainer>
      

      <h2>Pokemon List</h2>
      <Link to={'/pokedex'}>
        <button>Pokedex</button>
        
      </Link>
      </HeaderContainer>
      {renderPokemons}
    </HomeContainer>
  );
}

export default HomePage;
