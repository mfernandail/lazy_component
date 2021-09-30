import React, { useEffect, useState } from 'react';

export const getPokemons = () =>  {
  const api = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const resp = await fetch(api);
    const {results} = await resp.json();
    setAllPokemons(results)
  }

  useEffect(() => {
    getAllPokemons()
  }, []);

  return allPokemons;
}
