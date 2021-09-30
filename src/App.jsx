import React from 'react';
import './App.css';

import { Nav } from './components/Nav'
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function App() {  
  return (
    // <AppRoutes />
    <>
      <Nav />
      <Home />
      <Details />
      <Projects />
    </>
  )
}

export default App
