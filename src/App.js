import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import CourtyardNorth from './pages/CourtyardNorth';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/courtyard-north" component={CourtyardNorth} />
  </Switch>
);

export default App;
