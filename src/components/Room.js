import React from 'react';

import './Rooms.css';

import CoverImg from '../res/img/cover-image.jpg';

import { RoomCoverImage } from './CoverImage.js';
import { CardImgLeft } from './Cards.js';

class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.findRoom(),
    }
  }
  findRoom = () => {
    for(let i = 0; i < this.props.data.length; i++){
      let list = this.props.data[i];
      for(let k = 0; k < list.length; k++){
        let key = this.createSlug(list[k].Name);
        if(key === this.props.match.params.room){
          return(list[k]);
        }
      }
    }
    return('404');
  }
  createSlug = (toSlug) => {
    if (toSlug) return toSlug.replace(/[^A-Za-z0-9-]+/g, '-');
  }
  createAmenitiesList = (data) => {
    let amenities = data.split(';');
    return(
      <table className='table text-center'>
        <tbody>
          {amenities.map(amenity => 
            <tr>
              <td>{amenity}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
  render() {
    //console.log(this.props.match.params.room);
    return (
      <div className='full-height'>
        <div className='clearfix'></div>
        <div id='room-header'>
          <h1>{this.state.room['Name']}</h1>
        </div>
      	<div>
      		<RoomCoverImage imgSrc={CoverImg}/>
      	</div>
        <div className='container grid-xl' id='cover-img-overlay'>
          <div className='columns'>
            <div className='column col-12'>
              <CardImgLeft imgSrc={'http://localhost:1337' + this.state.room['Thumbnail'].url} className='img-responsive' cardBody={
                <div>
                  <h2>{this.state.room['Name']}</h2>
                  <p className='text-large'>{this.state.room['Description']}</p>
                  <h3>Amenities</h3>
                  {this.createAmenitiesList(this.state.room['Amenities'])}
                  <h3>Rates</h3>
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td><strong>Midweek</strong></td>
                        <td><strong>Weekend</strong></td>
                      </tr>
                      <tr>
                        <td>${this.state.room['Weeknight Rate']}.00</td>
                        <td>${this.state.room['Weekend Rate']}.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className='btn btn-primary'>Book Your Stay!</button>
                </div>
              }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
