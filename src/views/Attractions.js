import React from 'react';

import Image1 from '../res/img/home-carousel-01.jpg';

import { AttractionTile } from '../components/Tile';
import { NavListItem } from '../components/ListItem';
//import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';

import '../components/Attractions.css';

class Attractions extends React.Component {
  constructor(props){
    super(props)

    let categories = [];
    props.data.map((tag, index) => {
      if(index===0){
        categories.push( <NavListItem liClassName={'nav-item active'} key={tag['_id']} aTag={tag['_id']} updateAttractions={e => this.updateAttractions(e)} aText={tag['Tag']}/> );
      }else{
        categories.push( <NavListItem liClassName={'nav-item'} key={tag['_id']} aTag={tag['_id']} updateAttractions={e => this.updateAttractions(e)} aText={tag['Tag']}/> );
      }
    });

    let attractions = props.data[0].attractions;
    attractions = attractions.map(attraction => 
      <AttractionTile tileTitle={attraction['Attraction Name']} tileAddress={attraction['Attraction Address']} tileLink={attraction['Attraction Link']} key={attraction['_id']} />
    );

    this.state = {
      categories: categories,
      attractions: attractions,
    }
  }
  updateAttractions = (e) => {
    let tag = e.target.getAttribute('tag');
    let categories = this.state.categories;
    let category = this.props.data.find(function(element){return element['_id'] === tag});
    let attractions = category['attractions'];
    
    for(let i = 0; i < categories.length; i++){
      if(categories[i].key === category['_id']){
        categories[i] = (
          <NavListItem liClassName={'nav-item active'} key={categories[i]['key']} aTag={categories[i]['key']} updateAttractions={e => this.updateAttractions(e)} aText={categories[i].props['aText']}/>
        );
      }else{
        categories[i] = (
          <NavListItem liClassName={'nav-item'} key={categories[i]['key']} aTag={categories[i]['key']} updateAttractions={e => this.updateAttractions(e)} aText={categories[i].props['aText']}/>
        );
      }
    }

    attractions = attractions.map(attraction => 
      <AttractionTile tileTitle={attraction['Attraction Name']} tileAddress={attraction['Attraction Address']} tileLink={attraction['Attraction Link']} key={attraction['_id']} />
    )
    this.setState({
      categories: categories,
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
            <div className='column col-auto text-right'>
              <div className='panel' id='attraction-category-panel'>
                <div className='panel-header'>
                  <div className='panel-title'><h3>Category</h3></div>
                </div>
                <div className='panel-body category-container'>
                  <ul className='nav'>
                    {this.state.categories}
                  </ul>
                </div>
                <div className='panel-footer'>
                </div>
              </div>
            </div>
            <div className='column col col-mx-auto'>
              <div className='panel' id='attraction-panel'>
                <div className='panel-body'>
                  {this.state.attractions}
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