import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Nav } from '../components/Nav';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

export const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/details" component={Details} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
