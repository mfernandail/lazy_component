import React from 'react';
import { getPokemons } from '../../services/getPokemons';
// import { ListPokemons } from './ListPokemons';

// const pokemons = getPokemons();

export default function Pokemons () {
  const pokemons = getPokemons();
  return (
    <>
      {
        pokemons.map(poke => (
          <p className="projects__list-poke" key={poke.name}>{poke.name}</p>
        ))          
      }
    </>
  )
}
