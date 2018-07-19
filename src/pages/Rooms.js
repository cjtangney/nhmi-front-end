import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import Image1 from '../res/img/home-carousel-01.jpg';
import Image2 from '../res/img/home-carousel-02.jpg';
import Image3 from '../res/img/home-carousel-03.jpg';
import Image4 from '../res/img/home-carousel-04.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
import { CardRooms, CardRoomsHero, CardImgLeft, CardImgRight } from '../components/Cards';
import { Footer } from '../components/Footer';

class Rooms extends React.Component {
  render() {
    return (
      <div>
      	<header>
      		<MobileNav />
      		<Nav />
      	</header>
      	<div>
      		<CoverImage src={Image2} />
      	</div>
        <div className='columns'>
          <div className='column col-8 col-mx-auto'>
            <CardRoomsHero />
          </div>
        </div>

        <div className='container grid-xl' id='room-cards-container'>
      		<div className='columns'>
      			<div className='column col-4'>
      				<CardRooms />
      			</div>
      			<div className='column col-4'>
      				<CardRooms />
      			</div>
      			<div className='column col-4'>
      				<CardRooms />
      			</div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-4'>
              <CardRooms />
            </div>
            <div className='column col-12'>
              <CardImgLeft />
            </div>
            <div className='column col-12'>
              <CardImgRight />
            </div>
      		</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Rooms;
