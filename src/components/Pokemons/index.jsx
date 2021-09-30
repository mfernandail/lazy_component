import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

// import { Pokemons } from './PokemonsComponent';

import './Pokemons.css';

const Pokemons = React.lazy(() => import('./PokemonsComponent'));


export const LazyPokemons = () => {
  const {isNearScreen, fromRef} = useNearScreen({distance: '50px'});

  return (
    <div ref={fromRef}>
      <Suspense fallback={<div>Loading...</div>}>
        { isNearScreen ? <Pokemons /> : null }
      </Suspense>
    </div>
  )
}
