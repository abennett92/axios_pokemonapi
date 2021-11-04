import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ShowPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(res => {setPokemon(res.data.results)})
            
            .catch(err => {console.log(err)});
    },[]);
    
    
    return(
        <>
            <button>Fetch Pokemon</button>
            <ul>
                {pokemon.map((pokemon, i) => {
                    return <li key={i}>{pokemon.name}</li>
                })}
            </ul>
        </>
    )
}

ShowPokemon.propTypes = {};

export default ShowPokemon;