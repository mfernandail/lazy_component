import React, { useEffect, useRef, useState } from 'react';
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
  const elementRef = useRef();

  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      // console.log(entries);
      const element = entries[0];
      console.log(element.isIntersecting)
      if(element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }

    // Dynamic import 
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer') // Add polyfill, IE11
    // IntersectionObserver || import('intersection-observer')  
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      });    
      observer.observe(elementRef.current);
    })

    return () => observer && observer.disconnect(); // Para cuando se componente se deje de utilizar se limpie y no se ejecute el setShow
  });

  return <div ref={elementRef}>
    { show ? <Pokemons /> : null }
  </div>;


}
