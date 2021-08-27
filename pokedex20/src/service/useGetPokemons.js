import { useState } from 'react';
import axios from 'axios';

const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0')
      .then((response) => {
        setPokemons(response.data.results);
      });
  };

  return { pokemons, getPokemons };
};

export default useGetPokemons;
