import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        .then((response) => {
            setPokemons(response.data.results)
            console.log(response)
        })
    }, [])

    const renderPokemons = pokemons.map((pokemon) => {
        return <p key={pokemon.name}>{pokemon.name}</p>
    })
    
    return (
        <div>
            <h2>HomePage</h2>
            <Link to={"/PokedexPage"}><button>Pokedex</button></Link>
            {renderPokemons}
        </div>
    )
}

export default HomePage;