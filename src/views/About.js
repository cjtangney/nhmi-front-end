import React from 'react';

import Image1 from '../res/img/home-carousel-01.jpg';

import { CoverImage } from '../components/CoverImage';
//import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';
import { DirectionPane } from '../components/Directions';

class About extends React.Component {
  render() {
    return (
      <div>
      	<div>
      		<CoverImage imgSrc={Image1}/>
      	</div>
        <div className='container grid-xl'>
      		<div className='columns'>
      			<div className='column col-8 col-mx-auto'>
              <div id='about-divider' className='divider text-center' data-content='WELCOME'></div>
      			</div>
            <div className='column col-8 col-mx-auto'>
              <p>For over 200 years, the warmth of the blazing fireplace in the foyer of the New Hampshire Mountain Inn has been welcoming guests. The original farmhouse was built in the late 18th century and served as a boarding house for arriving railroad workers.</p>
            </div>
            <div className='column col-8 col-mx-auto'>
              <p>Throughout time, the property has been acquired by several owners who have added on to the original farmhouse to create the outstanding property it has become. Today, tuckered-out skiers, joyous bridal parties, and couples browsing for antiques join locals from the Lakes Region of New Hampshire in enjoying one of New England’s most venerable hospitality options.</p>
            </div>
            <div className='column col-8 col-mx-auto'>
              <p>The grounds are beautifully landscaped and include a stocked pond, bountiful flower gardens, and a vegetable garden right outside the dining room window. The Inn offers 2 outside decks to relax and soak up the afternoon sun, enjoy the view of the mountains off in the distance, of just relax and enjoy the fresh country air.</p>
            </div>
            <div className='column col-8 col-mx-auto'>
              <p>Located on a quiet town road, the New Hampshire Mountain Inn veritably exudes historic authenticity while still providing some of the nicest of modern amenities. Take a stroll from the country charm of the Farmhouse to the spectacular tavern-style Family Room, built around an open, double-sided fireplace with a hearth that is cantilevered over the pool area.</p>
            </div>
            <div className='column col-8 col-mx-auto' id='directions'>
              <DirectionPane title='Directions'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;