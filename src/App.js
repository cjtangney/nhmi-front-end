import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import CourtyardNorth from './pages/CourtyardNorth';
import CourtyardSouth from './pages/CourtyardSouth';
import EaglePond from './pages/EaglePond';
import Hummingbird from './pages/Hummingbird';
import Kearsarge from './pages/Kearsarge';
import Library from './pages/Library';
import Meadow from './pages/Meadow';
import Quilt from './pages/Quilt';
import Timber from './pages/Timber';
import Stableside from './pages/Stableside';
import Vanderbilt from './pages/Vanderbilt';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/courtyard-north" component={CourtyardNorth} />
    <Route exact path="/courtyard-south" component={CourtyardSouth} />
    <Route exact path="/eagle-pond-room" component={EaglePond} />
    <Route exact path="/hummingbird-room" component={Hummingbird} />
    <Route exact path="/kearsarge-room" component={Kearsarge} />
    <Route exact path="/library-room" component={Library} />
    <Route exact path="/meadow-room" component={Meadow} />
    <Route exact path="/quilt-room" component={Quilt} />
    <Route exact path="/timber-room" component={Timber} />
    <Route exact path="/stableside-suite" component={Stableside} />
    <Route exact path="/vanderbilt-suite" component={Vanderbilt} />
  </Switch>
);

export default App;
