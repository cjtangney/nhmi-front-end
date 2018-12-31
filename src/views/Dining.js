import React from 'react';

import '../components/Rooms.css';

import { CardImgLeftHero } from '../components/Cards';
import { Tile } from '../components/Tile';

class Dining extends React.Component {
  render() {
    return (
      <div>
        <div className='container grid-xl' id='cover-img-overlay'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardImgLeftHero imgSrc={'http://localhost:1337/uploads/b005800463234101bb9a4e52ec079b63.jpg'} altTxt='New Hampshire Mountain Inn dining options' cardBody={
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
      </div>
    );
  }
}

export default Dining;
