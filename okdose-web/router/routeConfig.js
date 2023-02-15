import React from 'react';
import routes from './routes.json';
import Home from '../containers/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function RouteConfig () {
  return (
    <Router>
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
