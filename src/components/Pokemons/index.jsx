import React from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';
import { getPokemons } from '../../services/getPokemons';
import { ListPokemons } from './ListPokemons';

import './Pokemons.css'

const Pokemons = () => {
  const pokemons = getPokemons();
  return (
    <ListPokemons pokemons={pokemons}/>
  )
}

export const LazyPokemons = () => {
  const {isNearScreen, fromRef} = useNearScreen({distance: '200px'});

  return <div ref={fromRef}>
    { isNearScreen ? <Pokemons /> : null }
  </div>;

}
