import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import Image1 from '../res/img/home-carousel-01.jpg';
import Image2 from '../res/img/home-carousel-02.jpg';
import Image3 from '../res/img/home-carousel-03.jpg';
import Image4 from '../res/img/home-carousel-04.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
import { CardRooms, CardRoomsHero, CardImgLeft, CardImgRight } from '../components/Cards';
import { Footer } from '../components/Footer';

class Rooms extends React.Component {
  render() {
    return (
      <div>
      	<header className='header-container'>
      		<MobileNav />
      		<Nav />
      	</header>
      	<div>
      		<CoverImage src={Image2} />
      	</div>

        <div className='container grid-xl' id='room-cards-container'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardRoomsHero />
            </div>
          </div>
      		<div className='columns'>
      			<div className='column col-md-12 col-lg-6 col-4 text-center'>
      				<CardRooms imgSrc={Image1} altTxt='Courtyard &ndash; North' roomName='courtyard-north' cardHeader='Courtyard &ndash; North' 
              cardBody={
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
              } cardFooter={
                <a href='/courtyard-north'><button className='btn btn-primary'>Learn More</button></a>
              }/>
      			</div>
      			<div className='column col-md-12 col-lg-6 col-4 text-center'>
      				<CardRooms imgSrc={Image2} altTxt='Courtyard &ndash; South' roomName='courtyard-south' cardHeader='Courtyard &ndash; South' 
              cardBody={
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
              } cardFooter={
                <a href='/courtyard-south'><button className='btn btn-primary'>Learn More</button></a>
              }/>
      			</div>
      			<div className='column col-md-12 col-lg-6 col-4 text-center'>
      				<CardRooms imgSrc={Image3} altTxt='Eagle Pond Room' roomName='eagle-pond' cardHeader='Eagle Pond Room' 
              cardBody={
                <table className='table text-center'>
                  <tbody>
                    <tr>
                      <td><strong>Midweek</strong></td>
                      <td><strong>Weekend</strong></td>
                    </tr>
                    <tr>
                      <td>$180.00</td>
                      <td>$200.00</td>
                    </tr>
                  </tbody>
                </table>
              } cardFooter={
                <a href='/eagle-pond-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
      			</div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image4} altTxt='Hummingbird Room' roomName='hummingbird' cardHeader='Hummingbird Room' 
              cardBody={
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
              } cardFooter={
                <a href='/hummingbird-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image1} altTxt='Kearsarge Room' roomName='kearsarge' cardHeader='Kearsarge Room' 
              cardBody={
                <table className='table text-center'>
                  <tbody>
                    <tr>
                      <td><strong>Midweek</strong></td>
                      <td><strong>Weekend</strong></td>
                    </tr>
                    <tr>
                      <td>$210.00</td>
                      <td>$230.00</td>
                    </tr>
                  </tbody>
                </table>
              } cardFooter={
                <a href='/kearsarge-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image2} altTxt='Library Room' roomName='library' cardHeader='Library Room' 
              cardBody={
                <table className='table text-center'>
                  <tbody>
                    <tr>
                      <td><strong>Midweek</strong></td>
                      <td><strong>Weekend</strong></td>
                    </tr>
                    <tr>
                      <td>$160.00</td>
                      <td>$180.00</td>
                    </tr>
                  </tbody>
                </table>
              } cardFooter={
                <a href='/library-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image3} altTxt='Meadow Room' roomName='meadow' cardHeader='Meadow Room' 
              cardBody={
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
              } cardFooter={
                <a href='/meadow-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image4} altTxt='Quilt Room' roomName='quilt' cardHeader='Quilt Room' 
              cardBody={
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
              } cardFooter={
                <a href='/quilt-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-md-12 col-lg-6 col-4 text-center'>
              <CardRooms imgSrc={Image1} altTxt='Timber Room' roomName='timber' cardHeader='Timber Room' 
              cardBody={
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
              } cardFooter={
                <a href='/timber-room'><button className='btn btn-primary'>Learn More</button></a>
              }/>
            </div>
            <div className='column col-12'>
              <CardImgLeft imgSrc={Image2} altTxt='Stableside Suite' roomName='stableside' cardBody={
                <div style={{width: '100%'}}>
                  <h5 style={{marginBottom: '1.4rem'}}>Stableside Suite</h5>
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
                  <a href='/stableside-suite'><button className='btn btn-primary'>Learn More</button></a>
                </div>
              }/>
            </div>
            <div className='column col-12'>
              <CardImgRight imgSrc={Image3} altTxt='Vanderbilt Suite' roomName='vanderbilt' cardBody={
                <div style={{width: '100%'}}>
                  <h5 style={{marginBottom: '1.4rem'}}>Vanderbilt Suite</h5>
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
                  <a href='/vanderbilt-suite'><button className='btn btn-primary'>Learn More</button></a>
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

export default Rooms;
