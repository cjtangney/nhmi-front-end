import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import '../components/Rooms.css';

import Image1 from '../res/img/home-carousel-02.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { RoomCoverImage } from '../components/CoverImage';
import { CardImgLeft } from '../components/Cards';
import { Footer } from '../components/Footer';

class Stableside extends React.Component {
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
          <h1>Stableside Suite</h1>
        </div>
      	<div>
      		<RoomCoverImage src={Image1}/>
      	</div>
        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image1} className='img-responsive' cardBody={
                <div>
                  <h2>Stableside Suite</h2>
                  <p className='text-large'>A two room suite located toward the back side of the house, the Stableside Suite is the perfect accomodation for a family, large group, or bridal party. Sleeping up to six guests comfortably, the Stableside Suite is also one of our pet friendly options.</p>
                  <h3>Amenities</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>Two queen-sized beds</td>
                      </tr>
                      <tr>
                        <td>Twin daybed</td>
                      </tr>
                      <tr>
                        <td>Pullout couch</td>
                      </tr>
                      <tr>
                        <td>Pet-friendly</td>
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
                        <td>$290.00</td>
                        <td>$310.00</td>
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

export default Stableside;
