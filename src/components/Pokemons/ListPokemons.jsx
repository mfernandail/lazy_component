import React from 'react';
import './Pokemons.css';


export const ListPokemons = ({pokemons}) => {
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
