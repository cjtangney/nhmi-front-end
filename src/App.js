import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from './views/Home';
import Rooms from './views/Rooms';
import Dining from './views/Dining';
import About from './views/About';
import Policies from './views/Policies';
import Attractions from './views/Attractions';

import './components/spectre-overrides.css';
import '../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css';

import Room from './components/Room';
import { MobileNav, Nav } from './components/Nav';
import { CoverImage } from './components/CoverImage';
import { Footer } from './components/Footer';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {
      rooms: '',
      suites: '',
      attractions: '',
      loading: true
    }
  }
  async componentDidMount() {
    let roomResponse, suiteResponse, categoryResponse, rooms, suites, categories;
    Promise.all([
      roomResponse = await fetch('http://localhost:1337/rooms'),
      suiteResponse = await fetch('http://localhost:1337/suites'),
      categoryResponse = await fetch('http://localhost:1337/categories'),
    ]).then(
      rooms = await roomResponse.json(),
      suites = await suiteResponse.json(),
      categories = await categoryResponse.json(),
      this.setState({
        rooms: rooms,
        suites: suites,
        attractions: categories,
        loading: false
      })
    );
  }
  createSlug = (toSlug) => {
    if (toSlug) return toSlug.replace(/[^A-Za-z0-9-]+/g, '-');
  }
  render(){
    if(!this.state.loading){
      return(
        <div>
          {/* Nav */}
          <header className='header-container'>
            <MobileNav roomData={[this.state.rooms, this.state.suites]} createSlug={this.createSlug} />
            <Nav roomData={[this.state.rooms, this.state.suites]} createSlug={this.createSlug} />
          </header>
          {/* Cover Image */}
          <div>
            <CoverImage imgSrc={'http://localhost:1337/uploads/349378c553d7433cb7d5bbc5eb5124f9.jpg'}/>
          </div>
          {/* Routes */}
          <Switch>
            <Route exact path="/" render={ (e) => (
              <Home {...e} />
            )} />
            <Route exact path="/rooms" render={ (e) => 
              <Rooms rooms={this.state.rooms} suites={this.state.suites} {...e} />
            } />
            <Route path="/rooms/:room" render={ (e) => (
              <Room roomData={[this.state.rooms, this.state.suites]} {...e} />
            )} />
            <Route exact path="/dining" render={ (e) => (
                <Dining {...e} />
            )} />
            <Route exact path="/about-us" render={ (e) => (
              <About {...e} />
            )} />
            <Route exact path="/policies" render={ (e) => (
              <Policies {...e} />
            )} />
            <Route exact path="/attractions" render={ (e) => (
              <Attractions data={this.state.attractions} {...e} />
            )} />
          </Switch>
          <Footer />
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default App;
