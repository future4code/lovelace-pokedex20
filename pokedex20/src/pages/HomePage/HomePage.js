import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGetPokemons from '../../service/useGetPokemons';
import Card from '../../components/Card';

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
    <div>
      <h2>HomePage</h2>
      <Link to={'/PokedexPage'}>
        <button>Pokedex</button>
      </Link>
      {renderPokemons}
    </div>
  );
}

export default HomePage;
