import { useState } from 'react';
import axios from 'axios';

const useGetDetails = () => {
  const [details, setDetails] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon';

  const getDetails = (name) => {
    axios.get(`${url}/${name}`).then((response) => {
      delete response.data.sprites.other;
      delete response.data.sprites.versions;
      setDetails({
        name: response.data.name,
        power: {
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          specialAttack: response.data.stats[3].base_stat,
          specialDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
        },
        types: response.data.types.map((index) => index.type.name),
        moves: response.data.moves.slice(0, 5).map((index) => index.move.name),
        sprites: response.data.sprites,
      });
    });
  };

  return { details, getDetails };
};

export default useGetDetails;
