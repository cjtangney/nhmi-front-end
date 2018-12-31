import React from 'react';

import { CardRooms, CardTextHero, CardImgLeft } from '../components/Cards';

class Rooms extends React.Component {
  createSlug = (toSlug) => {
    if (toSlug) return toSlug.replace(/[^A-Za-z0-9-]+/g, '-');
  }
  render() {
    return (
      <div className='full-height'>
        <div className='container grid-xl' id='cover-img-overlay'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardTextHero cardHeader={'New Hampshire Mountain Inn Room Choices'} cardBody={
                <div>
                  <p>Whether you're looking for a quaint room for the evening or an extravagant suite for a weekend getaway, we're certain to have something suited to your tastes. Select one of the rooms below to learn more!</p>
                  <sub>All rates are based on double occupancy. A fee of $35.00 per night will be charged per additional guest.</sub>
                </div>
              } cardFooter={
                <button className='btn btn-lg'>Book your stay today!</button>
              }/>
            </div>
          </div>
      		<div className='columns'>
          {/* ADD ROOM THUMBNAILS */}
          { this.props.rooms.map(room => 
              <div className='column col-md-12 col-lg-6 col-4 text-center' key={room['Name']}>
                <CardRooms imgSrc={'http://localhost:1337' + room['Thumbnail'].url} altTxt={room['Name']} roomName={room['Name']} cardHeader={room['Name']} 
                cardBody={
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td><strong>Midweek</strong></td>
                        <td><strong>Weekend</strong></td>
                      </tr>
                      <tr>
                        <td>${room['Weeknight Rate']}.00</td>
                        <td>${room['Weekend Rate']}.00</td>
                      </tr>
                    </tbody>
                  </table>
                } cardFooter={
                  <a href={'/rooms/' + this.createSlug(room['Name'])}><button className='btn btn-primary'>Learn More</button></a>
                }/>
              </div>
            ) }
          {/* END ADD ROOM THUMBNAILS */}

          {/* ADD SUITE THUMBNAILS */}
          { this.props.suites.map(suite => 
              <div className='column col-12' key={suite['Name']}>
                <CardImgLeft imgSrc={'http://localhost:1337' + suite['Thumbnail'].url} altTxt={suite['Name']} roomName={suite['Name']} cardHeader={suite['Name']}
                cardBody={
                  <div style={{width: '100%'}}>
                    <h5 style={{marginBottom: '1.4rem'}}>{suite['Name']}</h5>
                    <table className='table text-center'>
                      <tbody>
                        <tr>
                          <td><strong>Midweek</strong></td>
                          <td><strong>Weekend</strong></td>
                        </tr>
                        <tr>
                          <td>${suite['Weeknight Rate']}.00</td>
                          <td>${suite['Weekend Rate']}.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href={'/rooms/' + this.createSlug(suite['Name'])}><button className='btn btn-primary'>Learn More</button></a>
                  </div>
                }/>
              </div>
            ) }
          {/* END SUITE ROOM THUMBNAILS */}
      		</div>
        </div>
      </div>
    );
  }
}

export default Rooms;
