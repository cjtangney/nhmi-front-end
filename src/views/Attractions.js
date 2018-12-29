import React from 'react';

import Image1 from '../res/img/home-carousel-01.jpg';

import { CoverImage } from '../components/CoverImage';
//import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';

class Attractions extends React.Component {
  render() {
    return (
      <div>
      	<div>
      		<CoverImage imgSrc={Image1}/>
      	</div>
        <div className='container grid-xl'>
      		<div className='columns'>
      			<div className='column col-8 col-mx-auto text-center'>
              
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Attractions;