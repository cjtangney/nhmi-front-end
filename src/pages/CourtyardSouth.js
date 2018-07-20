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

class CourtyardSouth extends React.Component {
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
          <h1>Courtyard &ndash; South</h1>
        </div>
      	<div>
      		<RoomCoverImage src={Image1}/>
      	</div>
        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image1} className='img-responsive' cardBody={
                <div>
                  <h2>Courtyard &ndash; South</h2>
                  <p className='text-large'>Tucked away on the lower level of the house, the South Courtyard room sits near our Great Room's wood-burning fireplace. This sunny, quiet room is perfect for a holiday weekend.</p>
                  <h3>Amenities</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>Queen-sized bed</td>
                      </tr>
                      <tr>
                        <td>Private bathroom</td>
                      </tr>
                      <tr>
                        <td>Item</td>
                      </tr>
                      <tr>
                        <td>Item</td>
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
                        <td>$140.00</td>
                        <td>$160.00</td>
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

export default CourtyardSouth;
