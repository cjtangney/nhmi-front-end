import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import '../components/Rooms.css';

import CoverImg from '../res/img/cover-image.jpg'
import Image1 from '../res/img/home-carousel-01.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { RoomCoverImage } from '../components/CoverImage';
import { CardImgLeft } from '../components/Cards';
import { Footer } from '../components/Footer';

class CourtyardNorth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {headerMargin: ''};
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
          <h1>Courtyard &ndash; North</h1>
        </div>
      	<div>
      		<RoomCoverImage imgSrc={CoverImg}/>
      	</div>
        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image1} className='img-responsive' cardBody={
                <div>
                  <h2>Courtyard &ndash; North</h2>
                  <p className='text-large'>With beautiful views overlooking our small garden courtyard, the North Courtyard room is perfect for a weekend getaway!</p>
                  <h3>Amenities</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>King-sized bed</td>
                      </tr>
                      <tr>
                        <td>Private shower and bath</td>
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
                        <td>$170.00</td>
                        <td>$190.00</td>
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

export default CourtyardNorth;
