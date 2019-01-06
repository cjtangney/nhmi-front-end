import React from 'react';

import { CardImgTop, CardImgLeftHero, CardImgRightHero, CardTextHero } from '../components/Cards';
import { WeddingGallery } from '../components/Gallery';

class Weddings extends React.Component {
  render() {
    let galleryImgs = [
      'http://localhost:1337/uploads/fc7ea4372b794ba3a2739ec6306078eb.JPG', 'http://localhost:1337/uploads/b7785392722148c5bbfa8ea9b4f78723.jpg',
      'http://localhost:1337/uploads/fcc72bc35ccc444c8162be7bc6832e5d.jpg', 'http://localhost:1337/uploads/af74f737dacd441e8b7da1041943a021.jpg',
      'http://localhost:1337/uploads/7145a06a193843bf9eefd9035dcace6b.jpg', 'http://localhost:1337/uploads/da5bddb149c7419db6d5d12d97b1c85d.jpg',
      'http://localhost:1337/uploads/22939f2f20e7419ebdc30bb1f564f632.jpg', 'http://localhost:1337/uploads/3715c59f9a1b404294778fc94211ad8d.jpg',
      'http://localhost:1337/uploads/67e9b7cb95d840b2acce6ff0e591b246.jpg', 'http://localhost:1337/uploads/6348e739150f48bbbf9ebb4926d7bb2f.jpg',
    ]
    return (
      <div className='full-height'>
        <div className='container grid-xl' id='cover-img-overlay'>
          <div className='columns'>
            <div className='column col-12 col-mx-auto'>
              <CardImgRightHero imgSrc={'http://localhost:1337/uploads/b3a9f52b105346a2aa752205bc1acb79.jpg'} altTxt={'A bride on her wedding day.'} cardBody={
                <div>
                  <h1>Weddings at the New Hampshire Mountain Inn</h1>
                  <p>Are you planning your special day? At the New Hampshire Mountain Inn, we're here to make sure that your big day is one that will be full of long-lasting memories and happy smiles!</p>
                  <p>We work with Ragged Mountain Resort's Wedding Coordinator to ensure that everything is taken care of. From floral arrangements to catering, we will work with you to make certain that you get exactly what you're looking for!</p>
                  <a href='https://raggedmountainresort.com/weddings/' target='_blank'><button className='btn btn-lg'>Learn More!</button></a>
                </div>
              } />
            </div>
          </div>
          <div className='columns'>
            <div className='column col-8 col-mx-auto text-center'>
              <div id='policies-divider' className='divider text-center' data-content='Gallery'></div>
              <p>We work with a number of talented photographers who stop at nothing to get the shot on your big day. Check out some of these photos from previous ceremonies!</p>
            </div>
          </div>
          <WeddingGallery imgs={galleryImgs} />
        </div>
      </div>
    );
  }
}

export default Weddings;