import React from 'react';
import { LazyPokemons } from '../../components/Pokemons';
import './Projects.css'

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__title">Listado de Pokemons</h1>
        <LazyPokemons />
      </div>
    </section>
  )
}
