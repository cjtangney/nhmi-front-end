import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import '../components/Rooms.css';

import Image1 from '../res/img/home-carousel-03.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { RoomCoverImage } from '../components/CoverImage';
import { CardImgLeft } from '../components/Cards';
import { Footer } from '../components/Footer';

class Vanderbilt extends React.Component {
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
        <div className='clearfix'></div>
        <div id='room-header'>
          <h1>Vanderbilt Suite</h1>
        </div>
      	<div>
      		<RoomCoverImage src={Image1}/>
      	</div>
        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image1} className='img-responsive' cardBody={
                <div>
                  <h2>Vanderbilt Suite</h2>
                  <p className='text-large'>A luxurious and romantic three room suite, The Vanderbilt Suite has plenty of charm. With ample space, this suite is the perfect spot for a week-long getaway or just to unwind with a soak after a long day on the slopes at Ragged Mountain Resort.</p>
                  <h3>Amenities</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>King-sized bed</td>
                      </tr>
                      <tr>
                        <td>Fireplace</td>
                      </tr>
                      <tr>
                        <td>Sitting room</td>
                      </tr>
                      <tr>
                        <td>Private bathroom</td>
                      </tr>
                      <tr>
                        <td>Marble bath</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Rates</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td><strong>Midweek</strong></td>
                        <td><strong>Weekend</strong></td>
                      </tr>
                      <tr>
                        <td>$270.00</td>
                        <td>$290.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className='btn btn-primary'>Book Your Stay!</button>
                </div>
              }/>
            </div>
          </div>
        </div>
      	<Footer />
      </div>
    );
  }
}

export default Vanderbilt;
