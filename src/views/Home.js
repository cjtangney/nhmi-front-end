import React from 'react';

import { CoverImage } from '../components/CoverImage';
import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Image */}
      	<div>
      		<CoverImage imgSrc={'http://localhost:1337/uploads/349378c553d7433cb7d5bbc5eb5124f9.jpg'}/>
      	</div>

        {/* Main content */}
        <div className='container'>
          {/* Headline */}
      		<div className='columns homepage' id='cover-img-overlay'>
      			<div className='column col-10 col-mx-auto'>
      				<CardTextHero cardHeader={'Welcome to the New Hampshire Mountain Inn!'} />
      			</div>
      		</div>

          {/* TripAdvisor plugin */}
          <div className='column col-10 col-mx-auto trip-advisor-container' align='center'>
            <div id='TA_cdsratingsonlywide707' className='TA_cdsratingsonlywide'>
              <ul id='PV9REzmVV' className='TA_links N0yUS72'>
                <li id='aIM8WP2p' className='en0YNQ'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.tripadvisor.com/'><img src='https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png' alt='TripAdvisor'/></a>
                </li>
              </ul>
            </div>
            <script async src='https://www.jscache.com/wejs?wtype=cdsratingsonlywide&amp;uniq=707&amp;locationId=269789&amp;lang=en_US&amp;border=false&amp;display_version=2'></script>
          </div>

          {/* Full-size layout */}
          <div className='column col-10 col-mx-auto' align='center'>
        		<div className='hide-md'>
    					<CardImgLeft imgSrc={'http://localhost:1337/uploads/3b8075af5b574809936a830892ac71d4.jpg'} altTxt='Alt text' cardBody={
                <div>
                  <h3>Quaint, Mountain Charm!</h3>
                  <p>Located in scenic Wilmot, New Hampshire, the New Hampshire Mountain Inn exudes old-world charm. With a shared lounge, indoor pool, fully stocked bar, and more, we have something to keep every memeber of your family entertained on your next getaway.</p>
                  <button className='btn btn-primary'>Book Your Stay Today!</button>
                </div>
              }/>
    					<CardImgRight imgSrc={'http://localhost:1337/uploads/a8a640cafe6146268ea486da45c98e61.jpg'} altTxt='Alt text' cardBody={
                <div>
                  <h3>Discover New Hampshire</h3>
                  <p>Our location in central New Hampshire is perfect for exploring our great state! Whether your looking to get some skiing in at nearby Ragged Mountain Resort, hike along one of our beautifully maintained trail systems, or maybe spend a day on the water at Newfound Lake, the New Hampshire Mountain Inn is your first stop for adventure!</p>
                </div>
              }/>
    				</div>
          </div>

          {/* Mobile-size layout */}
  				<div className='show-md'>
        		<div className='columns'>
        			<div className='column col-12'>
        				<CardImgTop imgSrc={'http://localhost:1337/uploads/3b8075af5b574809936a830892ac71d4.jpg'} altTxt='Alt text' cardBody={
                  <div>
                    <h3>Quaint, Mountain Charm!</h3>
                    <p>Located in scenic Wilmot, New Hampshire, the New Hampshire Mountain Inn is exudes old-world charm. With a shared lounge, indoor pool, fully stocked bar, and more, we have something to keep every memeber of your family entertained on your next getaway.</p>
                    <button className='btn btn-primary'>Book Your Stay Today!</button>
                  </div>
                }/>
        			</div>
        			<div className='column col-12'>
        				<CardImgTop imgSrc={'http://localhost:1337/uploads/a8a640cafe6146268ea486da45c98e61.jpg'} altTxt='Alt text' cardBody={
                  <div>
                    <h3>Discover New Hampshire</h3>
                    <p>Our location in central New Hampshire is perfect for exploring our great state! Whether your looking to get some skiing in at nearby Ragged Mountain Resort, hike along one of our beautifully maintained trail systems, or maybe spend a day on the water at Newfound Lake, the New Hampshire Mountain Inn is your first stop for adventure!</p>
                  </div>
                }/>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Home;
