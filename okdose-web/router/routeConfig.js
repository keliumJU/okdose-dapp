import React from 'react';
import routes from './routes.json';
import Home from '../containers/Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function RouteConfig () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouteConfig;
