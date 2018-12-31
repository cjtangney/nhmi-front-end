import React from 'react';

import Image1 from '../res/img/home-carousel-01.jpg';

import { AttractionTile } from '../components/Tile';
//import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';

import '../components/Attractions.css';

class Attractions extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      attractions: '',
    }
  }
  getAttractions = (event) => {
    let category = this.props.data.find(function(element){return element['_id'] === event.target.getAttribute('tag')});
    let attractions = category['attractions'];
    console.log(attractions);
    this.setState({
      attractions: attractions,
    });
  }
  render() {
    return (
      <div>
        <div className='container grid-xl'>
      		<div className='columns'>
      			<div className='column col-8 col-mx-auto text-center'>
              <div className='divider text-center' data-content='Area Attractions'></div>
              <p>There's lots to do and see around the New Hampshire Mountain Inn, 12 months a year! Whether you're visiting us during the summer months for a scenic hike along a local trail, or you're here during the winter for some skiing and riding at Ragged Mountain Resort, there's bound to be something for the whole family.</p>
              <p>If you're looking for an evening out, check out one of these terrific local restaurants, then perhaps catch a performance at one of the area's theaters. Head over to the Lebanon Opera House to pick up a concert, or if you're feeling adventurous, why not participate in a cooking class at King Arthur Bakery?</p>
              <p>If you're interested in the rich, colonial history and culture of New England, you will definitely want to visit one of the nearby museums. Why not stop by the Kearsarge Indian Museum to learn more about the local Native American tribes, or perhaps spend an afternoon at the Montshire Museum of Science? The possibilities are endless!</p>
      			</div>
          </div>
          <div className='columns' id='attractions-container'>
            <div className='column col-3 text-right'>
              <div className='panel' id='attraction-category-panel'>
                <div className='panel-header'>
                  <div className='panel-title'><h3>Category</h3></div>
                </div>
                <div className='panel-body'>
                  <ul className='nav'>
                    {this.props.data.map(tag => 
                      <li className='nav-item' key={tag['_id']}>
                        <a data-target='' tag={tag['_id']} onClick={e => this.getAttractions(e)} >{tag['Tag']}</a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className='column col-9'>
              <div className='panel' id='attraction-panel'>
                <div className='panel-body'>
                  {this.props.data.map(tag => 
                    tag.attractions.map(attraction => 
                      <AttractionTile tileTitle={attraction['Attraction Name']} tileAddress={attraction['Attraction Address']} key={attraction['_id']} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Attractions;