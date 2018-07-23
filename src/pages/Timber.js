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

class Timber extends React.Component {
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
          <h1>Timber Room</h1>
        </div>
      	<div>
      		<RoomCoverImage imgSrc={CoverImg}/>
      	</div>
        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image1} className='img-responsive' cardBody={
                <div>
                  <h2>Timber Room</h2>
                  <p className='text-large'>Located in the original section of the Farmhouse, the Timber Room, with its beautiful, timbered ceiling, exudes rustic charm. Adjacent to the Quilt Room, these two rooms form the ideal family suite when booked together.</p>
                  <h3>Amenities</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>Queen-sized bed</td>
                      </tr>
                      <tr>
                        <td>Twin daybed</td>
                      </tr>
                      <tr>
                        <td>Shared bathroom</td>
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
                        <td>$150.00</td>
                        <td>$170.00</td>
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

export default Timber;
