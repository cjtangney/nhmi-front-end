import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import '../components/Rooms.css';

import Image1 from '../res/img/home-carousel-01.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
//import { CardImgTop, CardImgLeft, CardImgRight, CardHomeHero } from '../components/Cards';
import { Footer } from '../components/Footer';

class CourtyardNorth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {headerMargin: ''};
  }
  render() {
    return (
      <div>
      	<header>
      		<MobileNav />
      		<Nav />
      	</header>
        <div id='room-header'>
          ASDFASDF
        </div>
      	<div>
      		<CoverImage src={Image1}/>
      	</div>


      	<Footer />
      </div>
    );
  }
}

export default CourtyardNorth;
