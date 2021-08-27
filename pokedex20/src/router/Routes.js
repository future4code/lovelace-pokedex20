import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route exact path={'/pokedex'}>
          <PokedexPage />
        </Route>

        <Route exact path={'/pokemon/details'}>
          <DetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
