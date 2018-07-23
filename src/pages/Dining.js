import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import '../components/Rooms.css';

import CoverImg from '../res/img/home-carousel-01.jpg'
import Image1 from '../res/img/home-carousel-02.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
import { CardImgLeft, CardDiningHero } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Tile } from '../components/Tile';

class Dining extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<header className='header-container'>
      		<MobileNav />
      		<Nav />
      	</header>
      	<div>
      		<CoverImage imgSrc={CoverImg}/>
      	</div>
        <div className='container grid-xl' id='dining-cards-container'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardDiningHero imgSrc={Image1} altTxt='New Hampshire Mountain Inn dining options' cardBody={
                <div>
                  <h1>Dining at the New Hampshire Mountain Inn</h1>
                  <p>Served daily between <time>8:00 AM</time> and <time>9:30 AM</time>, our homemade breakfast is sure to be a delicious start to your day. See below for full list of menu items.</p>
                  <p>Dinner is also available during the weekends or mid-week by request. We reuest that prior arrangements are made with the innkeeper for mid-week dinners.</p>
                </div>
              }/>
            </div>
          </div>
          <div className='columns'>
            <div className='column col-8 col-mx-auto text-center'>
              <h2>Breakfast Menu</h2>
              <div className='divider'></div>
              <Tile tileTitle='Stuffed Banana Fosters French Toast' tileBody='Homemade French bread stuffed with a sweet cream, topped with a bananas foster sauce, whipped cream and choice of bacon or sausage.' tileXtra='' />
              <div className='divider'></div>
              <Tile tileTitle='Fresh Vegetable Omelette' tileBody='A variety of fresh vegetables and Vermont cheddar served with home fried potatoes, bacon or sausage and homemade toast.' tileXtra='' />
              <div className='divider'></div>
              <Tile tileTitle='Baked Berry Streusel Oatmeal' tileBody='Homemade oatmeal layered with mixed berries and a streusel crumb topping baked to perfection.' tileXtra='' />
              <div className='divider'></div>
              <Tile tileTitle='Inn Eggwich' tileBody='Fried eggs on an English muffin with ham, spinach and melted Havarti cheese with home fried potatoes.' tileXtra='' />
              <div className='divider'></div>
              <Tile tileTitle='Sourdough Pancakes or Waffles' tileBody='An old fashioned recipe handed down from grandma. Your choice of plain, blueberry, or chocolate chip and bacon or sausage.' tileXtra='' />
              <div className='divider'></div>
              <Tile tileTitle='Mountain Inn Breakfast Burrito' tileBody='2 eggs scrambled with your choice of bacon or sausage, assorted fresh vegetables and Vermont cheddar. Served with home fried potatoes.' tileXtra='' />
              <div className='divider'></div>
            </div>
          </div>
        </div>        
      	<Footer />
      </div>
    );
  }
}

export default Dining;
