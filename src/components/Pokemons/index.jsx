import React, { useEffect, useState } from 'react';
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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      // console.log(entries);
      const element = entries[0];
      if(element.isIntersecting) {
        setShow(true)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    });

    observer.observe(document.getElementById('LazyPokes'))
  }, []);

  return <div id="LazyPokes">
    { show ? <Pokemons /> : null }
  </div>;


}
