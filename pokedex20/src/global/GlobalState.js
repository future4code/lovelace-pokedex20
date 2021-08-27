import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
      .then((response) => {
        setPokemons(response.data.results);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const state = { pokemons, pokedex };
  const setters = { setPokemons, setPokedex };
  const requests = { getPokemons };

  return (
    <GlobalStateContext.Provider value={{ state, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
