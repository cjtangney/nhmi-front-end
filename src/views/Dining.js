import React from 'react';

import '../components/Rooms.css';

import { CardImgLeftHero } from '../components/Cards';
import { Tile } from '../components/Tile';

class Dining extends React.Component {
  getBreakfast = () => {
    for(let i = 0; i < this.props.menus.length; i++){
      if(this.props.menus[i]['Menu Name'] === 'Breakfast'){ 
        return(this.props.menus[i].meals.map(meal =>
          <div key={meal.id}>
            <Tile tileTitle={meal['Dish Name']} tileBody={meal['Description']} tileXtra='' />
            <div className='divider'></div>
          </div>
        )
      )}else{
        return '';
      }
    }
  }
  render() {
    return (
      <div className='full-height'>
        <div className='container grid-xl' id='cover-img-overlay'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardImgLeftHero imgSrc={'http://localhost:1337/uploads/420ccca6c6064ab0a25fae9f67785709.jpg'} altTxt='New Hampshire Mountain Inn dining options' cardBody={
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
              {this.getBreakfast()}
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Dining;
