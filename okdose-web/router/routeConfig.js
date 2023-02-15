import React from 'react';
import routes from './routes.json';
import Home from '../containers/Home';
import Welcome from '../components/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function RouteConfig () {
  return (
    <Router>
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route exact path={routes.welcome} element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
